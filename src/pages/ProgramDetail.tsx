import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";

const ProgramDetail = () => {
  const { slug } = useParams();
  const [program, setProgram] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      if (!slug) return;
      const { data } = await supabase.from("programs").select("*").eq("slug", slug).single();
      if (data) setProgram(data);
      setLoading(false);
    };
    fetch();
  }, [slug]);

  if (loading) return <div className="pt-32 pb-20 container"><div className="animate-pulse space-y-4"><div className="h-8 bg-muted rounded w-1/2" /></div></div>;
  if (!program) return <div className="pt-32 pb-20 container text-center"><h1 className="text-2xl text-foreground">Programme non trouvé</h1><Link to="/programmes" className="text-primary mt-4 inline-block">← Retour</Link></div>;

  return (
    <section className="pt-32 pb-20">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/programmes" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft size={16} /> Retour aux programmes
          </Link>
          {program.cover_image && <img src={program.cover_image} alt={program.title} className="w-full h-64 md:h-80 object-cover rounded-xl mb-8" />}
          <div className="flex items-center gap-3 mb-4">
            <Badge variant={program.status === "active" ? "default" : "secondary"}>{program.status === "active" ? "En cours" : "Terminé"}</Badge>
            {program.start_date && <span className="flex items-center gap-1 text-sm text-muted-foreground"><Calendar size={14} /> {new Date(program.start_date).toLocaleDateString("fr-FR")}</span>}
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">{program.title}</h1>
          {program.description && <p className="text-lg text-muted-foreground mb-8">{program.description}</p>}
          <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: program.content || "" }} />
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramDetail;
