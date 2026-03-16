import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";

interface Article {
  id: string; title: string; slug: string; excerpt: string | null;
  cover_image: string | null; published_at: string | null; created_at: string; views: number;
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await supabase.from("articles").select("id, title, slug, excerpt, cover_image, published_at, created_at, views")
        .eq("status", "published").order("published_at", { ascending: false });
      setArticles(data || []);
      setLoading(false);
    };
    fetchArticles();
  }, []);

  const locale = i18n.language === "de" ? "de-DE" : i18n.language === "sw" ? "sw-KE" : i18n.language === "en" ? "en-US" : "fr-FR";

  return (
    <section className="pt-32 pb-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="font-mono text-xs text-primary tracking-widest uppercase">{t("blog.tag")}</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">{t("blog.title")}</h1>
          <p className="text-lg text-muted-foreground max-w-xl">{t("blog.desc")}</p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl border border-border bg-card animate-pulse">
                <div className="h-48 bg-muted rounded-t-xl" />
                <div className="p-6 space-y-3"><div className="h-4 bg-muted rounded w-3/4" /><div className="h-3 bg-muted rounded w-full" /></div>
              </div>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">{t("blog.noArticles")}</p>
            <p className="text-sm text-muted-foreground mt-2">{t("blog.comeback")}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {articles.map((article, i) => (
              <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/blog/${article.slug}`} className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all">
                  {article.cover_image ? (
                    <img src={article.cover_image} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <span className="font-mono text-primary/30 text-4xl">S</span>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(article.published_at || article.created_at).toLocaleDateString(locale)}</span>
                      <span>{article.views} {t("blog.views")}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                    {article.excerpt && <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{article.excerpt}</p>}
                    <span className="inline-flex items-center gap-1 text-sm text-primary mt-4 font-medium">
                      {t("blog.readMore")} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
