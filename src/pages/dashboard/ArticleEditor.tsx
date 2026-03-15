import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from "lucide-react";
import { Link } from "react-router-dom";

const ArticleEditor = () => {
  const { id } = useParams();
  const isNew = !id || id === "new";
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [status, setStatus] = useState("draft");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isNew) {
      supabase.from("articles").select("*").eq("id", id).single().then(({ data }) => {
        if (data) {
          setTitle(data.title);
          setSlug(data.slug);
          setExcerpt(data.excerpt || "");
          setContent(data.content || "");
          setCoverImage(data.cover_image || "");
          setStatus(data.status);
        }
      });
    }
  }, [id]);

  const generateSlug = (text: string) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (isNew) setSlug(generateSlug(val));
  };

  const handleSave = async (publishStatus?: string) => {
    if (!title || !slug) { toast({ title: "Erreur", description: "Le titre et le slug sont requis.", variant: "destructive" }); return; }
    setLoading(true);
    const finalStatus = publishStatus || status;
    const payload = {
      title, slug, excerpt, content, cover_image: coverImage || null, status: finalStatus,
      ...(finalStatus === "published" && !isNew ? {} : {}),
      published_at: finalStatus === "published" ? new Date().toISOString() : null,
    };

    let error;
    if (isNew) {
      ({ error } = await supabase.from("articles").insert({ ...payload, author_id: user!.id }));
    } else {
      ({ error } = await supabase.from("articles").update(payload).eq("id", id));
    }

    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      toast({ title: isNew ? "Article créé !" : "Article mis à jour !" });
      navigate("/dashboard/articles");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/dashboard/articles" className="text-muted-foreground hover:text-primary"><ArrowLeft size={20} /></Link>
        <h1 className="text-2xl font-semibold text-foreground">{isNew ? "Nouvel article" : "Modifier l'article"}</h1>
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Titre</label>
          <Input value={title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="Titre de l'article" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Slug (URL)</label>
          <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="titre-de-l-article" className="font-mono text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Image de couverture (URL)</label>
          <Input value={coverImage} onChange={(e) => setCoverImage(e.target.value)} placeholder="https://..." />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Extrait</label>
          <Textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Bref résumé de l'article..." rows={2} />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Contenu (HTML)</label>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="<p>Votre contenu ici...</p>" rows={15} className="font-mono text-sm" />
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="hero" onClick={() => handleSave("published")} disabled={loading}>
            <Save size={16} className="mr-1" /> {loading ? "..." : "Publier"}
          </Button>
          <Button variant="outline" onClick={() => handleSave("draft")} disabled={loading}>
            Sauvegarder comme brouillon
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleEditor;
