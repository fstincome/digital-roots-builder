import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageBreadcrumb from "@/components/PageBreadcrumb";

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
      <PageBreadcrumb
        title={t("about.title")}
        items={[{ label: t("nav.about") }]}
      />

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                <Eye className="text-primary" size={24} /> {t("about.visionTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t("about.visionDesc")}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="text-primary" size={24} /> {t("about.missionTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t("about.missionDesc")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-border bg-card/30">
        <div className="container">
          <h2 className="text-3xl font-heading font-semibold text-foreground mb-12 text-center">{t("about.valuesTitle")}</h2>
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
