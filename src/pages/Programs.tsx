import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Programs = () => {
  const [programs, setPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("programs").select("*").in("status", ["active", "completed"]).order("created_at", { ascending: false });
      setPrograms(data || []);
      setLoading(false);
    };
    fetch();
  }, []);

  const locale = i18n.language === "de" ? "de-DE" : i18n.language === "sw" ? "sw-KE" : i18n.language === "en" ? "en-US" : "fr-FR";

  return (
    <>
      <PageBreadcrumb
        title={t("programs.title")}
        subtitle={t("programs.desc")}
        items={[{ label: t("nav.programs") }]}
      />
      <section className="py-20">
        <div className="container">
          {loading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((i) => <div key={i} className="h-64 rounded-xl bg-card border border-border animate-pulse" />)}
            </div>
          ) : programs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">{t("programs.noPrograms")}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link to={`/programmes/${p.slug}`} className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all">
                    {p.cover_image ? (
                      <img src={p.cover_image} alt={p.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-52 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                        <span className="font-mono text-primary/30 text-5xl">P</span>
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant={p.status === "active" ? "default" : "secondary"}>
                          {p.status === "active" ? t("programs.active") : t("programs.completed")}
                        </Badge>
                        {p.start_date && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar size={12} /> {new Date(p.start_date).toLocaleDateString(locale)}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                      {p.description && <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{p.description}</p>}
                      <span className="inline-flex items-center gap-1 text-sm text-primary mt-4 font-medium">
                        {t("programs.learnMore")} <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Programs;
