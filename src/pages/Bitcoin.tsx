import { motion } from "framer-motion";
import { Bitcoin as BtcIcon, Shield, Globe, Zap, Database, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Bitcoin = () => {
  const { t } = useTranslation();

  const solutions = [
    { icon: Shield, title: t("bitcoin.custody"), desc: t("bitcoin.custodyDesc") },
    { icon: Zap, title: t("bitcoin.lightning"), desc: t("bitcoin.lightningDesc") },
    { icon: Database, title: t("bitcoin.node"), desc: t("bitcoin.nodeDesc") },
    { icon: Lock, title: t("bitcoin.education"), desc: t("bitcoin.educationDesc") },
    { icon: Globe, title: t("bitcoin.remittance"), desc: t("bitcoin.remittanceDesc") },
    { icon: BtcIcon, title: t("bitcoin.mining"), desc: t("bitcoin.miningDesc") },
  ];

  return (
    <>
      <PageBreadcrumb
        title={`${t("bitcoin.title")} ${t("bitcoin.titleHighlight")}`}
        subtitle={t("bitcoin.desc")}
        items={[{ label: t("nav.bitcoin") }]}
      />

      <section className="py-20 border-b border-border bg-card/30">
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">{t("bitcoin.solutionsTag")}</span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mt-3">{t("bitcoin.solutionsTitle")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 gradient-mesh">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">{t("bitcoin.ctaTitle")}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t("bitcoin.ctaDesc")}</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">{t("bitcoin.ctaButton")} <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Bitcoin;
