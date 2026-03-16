import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Code, Shield, GraduationCap, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/hero-africa-tech.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Index = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "50+", label: t("stats.companies") },
    { value: "100+", label: t("stats.technicians") },
    { value: "3", label: t("stats.cities") },
    { value: "15+", label: t("stats.partners") },
  ];

  const services = [
    { icon: Server, title: t("indexServices.hardware"), desc: t("indexServices.hardwareDesc") },
    { icon: Code, title: t("indexServices.software"), desc: t("indexServices.softwareDesc") },
    { icon: Shield, title: t("indexServices.security"), desc: t("indexServices.securityDesc") },
    { icon: GraduationCap, title: t("indexServices.academy"), desc: t("indexServices.academyDesc") },
    { icon: Globe, title: t("indexServices.consulting"), desc: t("indexServices.consultingDesc") },
    { icon: Zap, title: t("indexServices.maintenance"), desc: t("indexServices.maintenanceDesc") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Digital Africa" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="font-mono text-sm text-primary mb-4 block tracking-wider">
                {t("hero.tag")}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-foreground mb-6 leading-[1.05]">
                {t("hero.title")}{" "}
                <span className="text-primary">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
                {t("hero.desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services">
                    {t("hero.cta")} <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button variant="heroGhost" size="lg" asChild>
                  <Link to="/contact">{t("hero.ctaContact")}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-card/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary tabular-nums">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">{t("indexServices.tag")}</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-3">{t("indexServices.title")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:glow-primary">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/services">{t("indexServices.viewAll")} <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-mesh">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">{t("cta.title")}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t("cta.desc")}</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">{t("cta.button")} <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
