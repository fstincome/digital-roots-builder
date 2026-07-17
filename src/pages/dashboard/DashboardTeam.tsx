import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";

type Member = {
  id: string;
  full_name: string;
  role: string;
  bio: string | null;
  photo_url: string | null;
  linkedin_url: string | null;
  email: string | null;
  display_order: number;
  is_active: boolean;
  skills: string[] | null;
  journey: string | null;
};

const empty: Partial<Member> = {
  full_name: "", role: "", bio: "", photo_url: "", linkedin_url: "", email: "",
  display_order: 0, is_active: true, skills: [], journey: "",
};

const DashboardTeam = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [editing, setEditing] = useState<Partial<Member> | null>(null);
  const [uploading, setUploading] = useState(false);

  const load = async () => {
    const { data } = await supabase.from("team_members").select("*").order("display_order");
    setMembers((data as Member[]) || []);
  };
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!editing?.full_name || !editing?.role) {
      toast.error("Nom et rôle requis");
      return;
    }
    const payload = { ...editing };
    const { error } = editing.id
      ? await supabase.from("team_members").update(payload).eq("id", editing.id)
      : await supabase.from("team_members").insert(payload as any);
    if (error) return toast.error(error.message);
    toast.success("Enregistré");
    setEditing(null);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Supprimer ce membre ?")) return;
    const { error } = await supabase.from("team_members").delete().eq("id", id);
    if (error) return toast.error(error.message);
    load();
  };

  const toggleActive = async (m: Member) => {
    await supabase.from("team_members").update({ is_active: !m.is_active }).eq("id", m.id);
    load();
  };

  const move = async (m: Member, dir: -1 | 1) => {
    const idx = members.findIndex(x => x.id === m.id);
    const swap = members[idx + dir];
    if (!swap) return;
    await Promise.all([
      supabase.from("team_members").update({ display_order: swap.display_order }).eq("id", m.id),
      supabase.from("team_members").update({ display_order: m.display_order }).eq("id", swap.id),
    ]);
    load();
  };

  const uploadPhoto = async (file: File) => {
    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `team/${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage.from("uploads").upload(path, file);
    if (error) { toast.error(error.message); setUploading(false); return; }
    const { data } = supabase.storage.from("uploads").getPublicUrl(path);
    setEditing(e => ({ ...e, photo_url: data.publicUrl }));
    setUploading(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Équipe</h1>
          <p className="text-sm text-muted-foreground">Gérer les membres affichés sur le site.</p>
        </div>
        <Button onClick={() => setEditing({ ...empty, display_order: (members.at(-1)?.display_order ?? 0) + 1 })}>
          <Plus size={16} className="mr-2" /> Ajouter
        </Button>
      </div>

      <div className="rounded-xl border border-border bg-card divide-y divide-border">
        {members.length === 0 && (
          <div className="p-8 text-center text-sm text-muted-foreground">Aucun membre.</div>
        )}
        {members.map((m, i) => (
          <div key={m.id} className="flex items-center gap-4 p-4">
            <div className="flex flex-col gap-1">
              <button onClick={() => move(m, -1)} disabled={i === 0} className="disabled:opacity-30">
                <ArrowUp size={14} />
              </button>
              <button onClick={() => move(m, 1)} disabled={i === members.length - 1} className="disabled:opacity-30">
                <ArrowDown size={14} />
              </button>
            </div>
            <div className="h-12 w-12 rounded-full overflow-hidden bg-muted shrink-0">
              {m.photo_url && <img src={m.photo_url} alt="" className="w-full h-full object-cover" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{m.full_name}</div>
              <div className="text-sm text-muted-foreground truncate">{m.role}</div>
            </div>
            <Switch checked={m.is_active} onCheckedChange={() => toggleActive(m)} />
            <Button variant="ghost" size="icon" onClick={() => setEditing(m)}><Pencil size={16} /></Button>
            <Button variant="ghost" size="icon" onClick={() => remove(m.id)}><Trash2 size={16} /></Button>
          </div>
        ))}
      </div>

      <Dialog open={!!editing} onOpenChange={(o) => !o && setEditing(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing?.id ? "Modifier le membre" : "Nouveau membre"}</DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="space-y-4">
              <div>
                <Label>Nom complet *</Label>
                <Input value={editing.full_name || ""} onChange={e => setEditing({ ...editing, full_name: e.target.value })} />
              </div>
              <div>
                <Label>Rôle *</Label>
                <Input value={editing.role || ""} onChange={e => setEditing({ ...editing, role: e.target.value })} />
              </div>
              <div>
                <Label>Bio</Label>
                <Textarea rows={5} value={editing.bio || ""} onChange={e => setEditing({ ...editing, bio: e.target.value })} />
              </div>
              <div>
                <Label>Photo</Label>
                <div className="flex items-center gap-3">
                  {editing.photo_url && <img src={editing.photo_url} alt="" className="h-16 w-16 rounded object-cover" />}
                  <Input type="file" accept="image/*" onChange={e => e.target.files?.[0] && uploadPhoto(e.target.files[0])} disabled={uploading} />
                </div>
              </div>
              <div>
                <Label>LinkedIn</Label>
                <Input placeholder="https://linkedin.com/in/..." value={editing.linkedin_url || ""} onChange={e => setEditing({ ...editing, linkedin_url: e.target.value })} />
              </div>
              <div>
                <Label>Email (interne)</Label>
                <Input type="email" value={editing.email || ""} onChange={e => setEditing({ ...editing, email: e.target.value })} />
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={editing.is_active ?? true} onCheckedChange={v => setEditing({ ...editing, is_active: v })} />
                <Label>Actif (visible sur le site)</Label>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditing(null)}>Annuler</Button>
            <Button onClick={save} disabled={uploading}>Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DashboardTeam;
