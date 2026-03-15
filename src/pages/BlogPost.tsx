import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const BlogPost = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      if (!slug) return;
      const { data } = await supabase.from("articles").select("*").eq("slug", slug).eq("status", "published").single();
      if (data) {
        setArticle(data);
        // increment views
        await supabase.from("articles").update({ views: (data.views || 0) + 1 }).eq("id", data.id);
      }
      setLoading(false);
    };
    fetch();
  }, [slug]);

  if (loading) return <div className="pt-32 pb-20 container"><div className="animate-pulse space-y-4"><div className="h-8 bg-muted rounded w-1/2" /><div className="h-64 bg-muted rounded" /></div></div>;
  if (!article) return <div className="pt-32 pb-20 container text-center"><h1 className="text-2xl text-foreground">Article non trouvé</h1><Link to="/blog" className="text-primary mt-4 inline-block">← Retour au blog</Link></div>;

  return (
    <section className="pt-32 pb-20">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft size={16} /> Retour au blog
          </Link>
          {article.cover_image && (
            <img src={article.cover_image} alt={article.title} className="w-full h-64 md:h-80 object-cover rounded-xl mb-8" />
          )}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(article.published_at || article.created_at).toLocaleDateString("fr-FR")}</span>
            <span className="flex items-center gap-1"><Eye size={14} /> {article.views} vues</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">{article.title}</h1>
          <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content || "" }} />
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPost;
