import { useEffect, useState } from "react";
import { Plus, Edit, Trash2, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DashboardCategories = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("article");
  const { toast } = useToast();
  const { t } = useTranslation();

  const generateSlug = (text: string) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const fetchCategories = async () => {
    const { data } = await supabase.from("categories").select("*").order("type").order("name");
    setCategories(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchCategories(); }, []);

  const handleCreate = async () => {
    if (!name.trim()) return;
    const { error } = await supabase.from("categories").insert({ name: name.trim(), slug: generateSlug(name), type });
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: t("dashboard.categoryCreated") }); setName(""); setShowNew(false); fetchCategories(); }
  };

  const handleUpdate = async (id: string) => {
    if (!name.trim()) return;
    const { error } = await supabase.from("categories").update({ name: name.trim(), slug: generateSlug(name), type }).eq("id", id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: t("dashboard.categoryUpdated") }); setEditingId(null); setName(""); fetchCategories(); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t("dashboard.deleteCategory"))) return;
    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: t("dashboard.categoryDeleted") }); fetchCategories(); }
  };

  const startEdit = (cat: any) => {
    setEditingId(cat.id);
    setName(cat.name);
    setType(cat.type);
    setShowNew(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-foreground">{t("dashboard.categories")}</h1>
        <Button variant="hero" size="sm" onClick={() => { setShowNew(true); setEditingId(null); setName(""); setType("article"); }}>
          <Plus size={16} className="mr-1" /> {t("dashboard.newCategory")}
        </Button>
      </div>

      {showNew && (
        <div className="flex items-end gap-3 mb-6 p-4 rounded-lg border border-primary/30 bg-card">
          <div className="flex-1">
            <label className="text-sm font-medium text-foreground mb-1.5 block">{t("dashboard.categoryName")}</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom..." />
          </div>
          <div className="w-40">
            <label className="text-sm font-medium text-foreground mb-1.5 block">Type</label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="article">Article</SelectItem>
                <SelectItem value="program">Programme</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="hero" size="icon" onClick={handleCreate}><Save size={16} /></Button>
          <Button variant="ghost" size="icon" onClick={() => setShowNew(false)}><X size={16} /></Button>
        </div>
      )}

      {loading ? (
        <div className="space-y-3">{[1,2,3].map(i => <div key={i} className="h-12 bg-card border border-border rounded-lg animate-pulse" />)}</div>
      ) : categories.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground"><p>{t("dashboard.noCategories")}</p></div>
      ) : (
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
              {editingId === cat.id ? (
                <div className="flex items-center gap-3 flex-1">
                  <Input value={name} onChange={(e) => setName(e.target.value)} className="flex-1" />
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="article">Article</SelectItem>
                      <SelectItem value="program">Programme</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="hero" size="icon" onClick={() => handleUpdate(cat.id)}><Save size={16} /></Button>
                  <Button variant="ghost" size="icon" onClick={() => setEditingId(null)}><X size={16} /></Button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-foreground">{cat.name}</span>
                    <Badge variant="secondary" className="text-xs">{cat.type}</Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" onClick={() => startEdit(cat)}><Edit size={16} /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(cat.id)} className="text-destructive hover:text-destructive"><Trash2 size={16} /></Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardCategories;
