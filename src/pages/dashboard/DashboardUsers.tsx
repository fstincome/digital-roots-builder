import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Shield, UserPlus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface UserRow {
  user_id: string;
  full_name: string | null;
  roles: string[];
}

const DashboardUsers = () => {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newFullName, setNewFullName] = useState("");
  const [newRole, setNewRole] = useState<"admin" | "editor" | "user">("user");
  const [creating, setCreating] = useState(false);
  const { toast } = useToast();

  const fetchUsers = async () => {
    const { data: profiles } = await supabase.from("profiles").select("user_id, full_name");
    const { data: roles } = await supabase.from("user_roles").select("user_id, role");

    if (profiles) {
      const usersMap = profiles.map((p) => ({
        user_id: p.user_id,
        full_name: p.full_name,
        roles: (roles || []).filter((r) => r.user_id === p.user_id).map((r) => r.role),
      }));
      setUsers(usersMap);
    }
    setLoading(false);
  };

  useEffect(() => { fetchUsers(); }, []);

  const toggleRole = async (userId: string, role: "admin" | "editor" | "user", hasRole: boolean) => {
    if (hasRole) {
      await supabase.from("user_roles").delete().eq("user_id", userId).eq("role", role);
    } else {
      await supabase.from("user_roles").insert({ user_id: userId, role });
    }
    toast({ title: hasRole ? "Rôle retiré" : "Rôle ajouté" });
    fetchUsers();
  };

  const handleCreateUser = async () => {
    if (!newEmail || !newPassword || !newFullName) {
      toast({ title: "Erreur", description: "Tous les champs sont requis", variant: "destructive" });
      return;
    }
    setCreating(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const res = await supabase.functions.invoke("create-user", {
        body: { email: newEmail, password: newPassword, full_name: newFullName, role: newRole },
      });

      if (res.error || res.data?.error) {
        toast({ title: "Erreur", description: res.data?.error || res.error?.message, variant: "destructive" });
      } else {
        toast({ title: "Utilisateur créé !" });
        setDialogOpen(false);
        setNewEmail("");
        setNewPassword("");
        setNewFullName("");
        setNewRole("user");
        fetchUsers();
      }
    } catch (err: any) {
      toast({ title: "Erreur", description: err.message, variant: "destructive" });
    }
    setCreating(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Utilisateurs</h1>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button><UserPlus size={16} className="mr-2" /> Nouvel utilisateur</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Créer un utilisateur</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nom complet</label>
                <Input value={newFullName} onChange={(e) => setNewFullName(e.target.value)} placeholder="Jean Ndikumana" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="email@exemple.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Mot de passe</label>
                <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="••••••••" minLength={6} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Rôle</label>
                <Select value={newRole} onValueChange={(v) => setNewRole(v as any)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">Utilisateur</SelectItem>
                    <SelectItem value="editor">Éditeur</SelectItem>
                    <SelectItem value="admin">Administrateur</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleCreateUser} disabled={creating} className="w-full">
                {creating ? "Création..." : "Créer l'utilisateur"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="space-y-3">{[1,2,3].map(i => <div key={i} className="h-16 bg-card border border-border rounded-lg animate-pulse" />)}</div>
      ) : users.length === 0 ? (
        <p className="text-muted-foreground text-center py-12">Aucun utilisateur enregistré.</p>
      ) : (
        <div className="space-y-3">
          {users.map((u) => (
            <div key={u.user_id} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
              <div>
                <p className="font-medium text-foreground">{u.full_name || "Sans nom"}</p>
                <p className="text-xs text-muted-foreground font-mono">{u.user_id.slice(0, 8)}...</p>
              </div>
              <div className="flex items-center gap-2">
                {(["admin", "editor", "user"] as const).map((role) => {
                  const has = u.roles.includes(role);
                  return (
                    <Button key={role} variant={has ? "default" : "outline"} size="sm" onClick={() => toggleRole(u.user_id, role, has)}
                      className="text-xs">
                      {role === "admin" && <Shield size={12} className="mr-1" />}
                      {role}
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardUsers;
