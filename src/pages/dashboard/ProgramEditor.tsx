import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from "lucide-react";

const ProgramEditor = () => {
  const { id } = useParams();
  const isNew = !id || id === "new";
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [status, setStatus] = useState("draft");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.from("categories").select("*").eq("type", "program").order("name").then(({ data }) => setCategories(data || []));
    if (!isNew) {
      supabase.from("programs").select("*").eq("id", id).single().then(({ data }) => {
        if (data) {
          setTitle(data.title); setSlug(data.slug); setDescription(data.description || "");
          setContent(data.content || ""); setCoverImage(data.cover_image || "");
          setStatus(data.status); setStartDate(data.start_date || ""); setEndDate(data.end_date || "");
          setCategoryId(data.category_id || "");
        }
      });
    }
  }, [id]);

  const generateSlug = (text: string) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleSave = async (newStatus?: string) => {
    if (!title || !slug) { toast({ title: "Erreur", description: "Titre et slug requis.", variant: "destructive" }); return; }
    setLoading(true);
    const finalStatus = newStatus || status;
    const payload = {
      title, slug, description, content, cover_image: coverImage || null, status: finalStatus,
      start_date: startDate || null, end_date: endDate || null,
      category_id: categoryId || null,
    };

    let error;
    if (isNew) {
      ({ error } = await supabase.from("programs").insert({ ...payload, created_by: user!.id }));
    } else {
      ({ error } = await supabase.from("programs").update(payload).eq("id", id));
    }

    if (error) toast({ title: "Erreur", description: error.message, variant: "destructive" });
    else { toast({ title: isNew ? "Programme créé !" : "Programme mis à jour !" }); navigate("/dashboard/programmes"); }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/dashboard/programmes" className="text-muted-foreground hover:text-primary"><ArrowLeft size={20} /></Link>
        <h1 className="text-2xl font-semibold text-foreground">{isNew ? "Nouveau programme" : "Modifier le programme"}</h1>
      </div>
      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Titre</label>
          <Input value={title} onChange={(e) => { setTitle(e.target.value); if (isNew) setSlug(generateSlug(e.target.value)); }} placeholder="Nom du programme" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Slug (URL)</label>
          <Input value={slug} onChange={(e) => setSlug(e.target.value)} className="font-mono text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Catégorie</label>
          <Select value={categoryId} onValueChange={setCategoryId}>
            <SelectTrigger><SelectValue placeholder="Choisir une catégorie..." /></SelectTrigger>
            <SelectContent>
              <SelectItem value="">Aucune</SelectItem>
              {categories.map(c => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Image de couverture (URL)</label>
          <Input value={coverImage} onChange={(e) => setCoverImage(e.target.value)} placeholder="https://..." />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Date de début</label>
            <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Date de fin</label>
            <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Description courte</label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Contenu détaillé (HTML)</label>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} rows={12} className="font-mono text-sm" />
        </div>
        <div className="flex gap-3 pt-4">
          <Button variant="hero" onClick={() => handleSave("active")} disabled={loading}>
            <Save size={16} className="mr-1" /> {loading ? "..." : "Publier (Actif)"}
          </Button>
          <Button variant="outline" onClick={() => handleSave("draft")} disabled={loading}>Brouillon</Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramEditor;
