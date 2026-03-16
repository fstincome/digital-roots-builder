import { motion } from "framer-motion";
import { Server, Code, Shield, GraduationCap, Globe, Zap, Wrench, Database, Cloud } from "lucide-react";
import { useTranslation } from "react-i18next";
import servicesBg from "@/assets/services-bg.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }) };

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Server, title: t("services.s1"), desc: t("services.s1d"), features: ["Serveurs & postes", "Cisco", "Périphériques", "Garantie"] },
    { icon: Code, title: t("services.s2"), desc: t("services.s2d"), features: ["Web & Mobile", "ERP & CRM", "SaaS", "API"] },
    { icon: Shield, title: t("services.s3"), desc: t("services.s3d"), features: ["Audit", "Politique", "Protection", "Formation"] },
    { icon: GraduationCap, title: t("services.s4"), desc: t("services.s4d"), features: ["Cloud", "Réseaux", "Dev web", "Cyber"] },
    { icon: Globe, title: t("services.s5"), desc: t("services.s5d"), features: ["Diagnostic", "Plan", "Changement", "Reporting"] },
    { icon: Wrench, title: t("services.s6"), desc: t("services.s6d"), features: ["Contrats", "24/7", "Préventive", "Sur site"] },
    { icon: Database, title: t("services.s7"), desc: t("services.s7d"), features: ["Architecture", "Data center", "Câblage", "Monitoring"] },
    { icon: Cloud, title: t("services.s8"), desc: t("services.s8d"), features: ["Migration", "Sauvegarde", "Dédiés", "Hébergement"] },
  ];

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">{t("services.tag")}</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">{t("services.title")}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{t("services.desc")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {s.features.map((f) => (
                        <span key={f} className="text-xs text-primary/80 font-mono">→ {f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
