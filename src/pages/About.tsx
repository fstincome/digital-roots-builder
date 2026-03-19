import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const timeline = [
  { year: "2026", titleKey: "Fondation", desc: "Installation du siège à Gitega, premiers partenariats fournisseurs." },
  { year: "2027", titleKey: "Croissance", desc: "Lancement de l'Académie SIGHT, premiers contrats gouvernementaux." },
  { year: "2028", titleKey: "Expansion", desc: "Ouverture du bureau de Bujumbura et Ngozi." },
  { year: "2029", titleKey: "Consolidation", desc: "50 PME digitalisées, leader sur les marchés publics IT." },
  { year: "2030", titleKey: "Rayonnement", desc: "Exportation vers la zone EAC, hub d'innovation certifié." },
];

const About = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Heart, title: t("about.integrity"), desc: t("about.integrityDesc") },
    { icon: Target, title: t("about.innovation"), desc: t("about.innovationDesc") },
    { icon: Award, title: t("about.sovereignty"), desc: t("about.sovereigntyDesc") },
    { icon: Eye, title: t("about.excellence"), desc: t("about.excellenceDesc") },
  ];

  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">{t("about.tag")}</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-6">{t("about.title")}</h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Eye className="text-primary" size={24} /> {t("about.visionTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t("about.visionDesc")}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="text-primary" size={24} /> {t("about.missionTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t("about.missionDesc")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-border bg-card/30">
        <div className="container">
          <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">{t("about.valuesTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-border bg-background text-center">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
