import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from "lucide-react";

const PortfolioEditor = () => {
  const { id } = useParams();
  const isNew = !id || id === "new";
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isNew) {
      supabase.from("portfolios").select("*").eq("id", id).single().then(({ data }) => {
        if (data) { setTitle(data.title); setDescription(data.description || ""); setImage(data.image || ""); setLink(data.link || ""); }
      });
    }
  }, [id]);

  const handleSave = async () => {
    if (!title) { toast({ title: "Erreur", description: "Le titre est requis.", variant: "destructive" }); return; }
    setLoading(true);
    const payload = { title, description, image: image || null, link: link || null };

    let error;
    if (isNew) {
      ({ error } = await supabase.from("portfolios").insert({ ...payload, created_by: user!.id }));
    } else {
      ({ error } = await supabase.from("portfolios").update(payload).eq("id", id));
    }

    if (error) toast({ title: "Erreur", description: error.message, variant: "destructive" });
    else { toast({ title: isNew ? "Projet créé !" : "Projet mis à jour !" }); navigate("/dashboard/portfolio"); }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/dashboard/portfolio" className="text-muted-foreground hover:text-primary"><ArrowLeft size={20} /></Link>
        <h1 className="text-2xl font-semibold text-foreground">{isNew ? "Nouveau projet" : "Modifier le projet"}</h1>
      </div>
      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Titre</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nom du projet" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Image (URL)</label>
          <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://..." />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Lien (optionnel)</label>
          <Input value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://..." />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Description</label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={5} />
        </div>
        <div className="flex gap-3 pt-4">
          <Button variant="hero" onClick={handleSave} disabled={loading}>
            <Save size={16} className="mr-1" /> {loading ? "..." : "Enregistrer"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioEditor;
