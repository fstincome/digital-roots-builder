import { motion } from "framer-motion";
import { GraduationCap, Cloud, Shield, Globe, Code, Network, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Academy = () => {
  const { t } = useTranslation();

  const formations = [
    { icon: Cloud, title: t("academy.cloud"), desc: t("academy.cloudDesc"), duration: "3 mois", level: "Intermédiaire" },
    { icon: Shield, title: t("academy.cyber"), desc: t("academy.cyberDesc"), duration: "4 mois", level: "Avancé" },
    { icon: Network, title: t("academy.network"), desc: t("academy.networkDesc"), duration: "3 mois", level: "Débutant" },
    { icon: Code, title: t("academy.webdev"), desc: t("academy.webdevDesc"), duration: "6 mois", level: "Débutant" },
    { icon: Globe, title: t("academy.digital"), desc: t("academy.digitalDesc"), duration: "2 mois", level: "Tous niveaux" },
    { icon: GraduationCap, title: t("academy.cert"), desc: t("academy.certDesc"), duration: "Variable", level: "Tous niveaux" },
  ];

  return (
    <>
      <section className="pt-32 pb-20 gradient-mesh">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">{t("academy.tag")}</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">{t("academy.title")}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{t("academy.desc")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formations.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all group">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{f.desc}</p>
                <div className="flex gap-3 text-xs">
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary font-mono">{f.duration}</span>
                  <span className="px-2 py-1 rounded bg-secondary text-secondary-foreground font-mono">{f.level}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">{t("academy.enroll")} <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Academy;
