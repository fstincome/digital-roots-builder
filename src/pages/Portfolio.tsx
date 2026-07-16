import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { getPortfolioTranslation } from "@/i18n/portfolioItems";

const Portfolio = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    supabase.from("portfolios").select("*").order("created_at", { ascending: false })
      .then(({ data }) => { setItems(data || []); setLoading(false); });
  }, []);

  return (
    <>
      <PageBreadcrumb
        title={t("portfolio.title")}
        subtitle={t("portfolio.desc")}
        items={[{ label: t("nav.portfolio") }]}
      />
      <section className="py-20">
        <div className="container">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3].map(i => <div key={i} className="h-72 rounded-xl bg-card border border-border animate-pulse" />)}
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-20"><p className="text-muted-foreground">{t("portfolio.noItems")}</p></div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, i) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-52 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <span className="font-mono text-primary/30 text-5xl">⚡</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                    {item.description && <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{item.description}</p>}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary mt-4 font-medium hover:underline">
                        {t("portfolio.viewProject")} <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
