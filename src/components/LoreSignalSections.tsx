import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Radio } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const LORE_URL = "https://lore.sightnetwork.org/";
const SIGNAL_URL = "https://signal.sightnetwork.org/";

const LoreSignalSections = () => {
  const { t } = useTranslation();

  return (
    <section className="border-y border-border bg-card/30 py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {/* SIGHT LORE */}
          <div id="sight-lore" className="scroll-mt-28 rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary">
              <BookOpen size={14} /> {t("lore.tag")}
            </span>
            <h2 className="mt-5 text-3xl font-heading font-semibold text-foreground">SIGHT LORE</h2>
            <p className="mt-2 text-lg font-semibold text-primary">{t("lore.headline")}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t("lore.desc")}</p>
            <ul className="mt-6 grid gap-2">
              {["f1", "f2", "f3"].map((k) => (
                <li key={k} className="font-mono text-sm text-primary/80">→ {t(`lore.${k}`)}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="hero" size="lg" asChild>
                <a href={LORE_URL} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="mr-2" size={18} /> {t("lore.cta")}
                </a>
              </Button>
            </div>
          </div>

          {/* SIGHT SIGNAL */}
          <div id="sight-signal" className="scroll-mt-28 rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary">
              <Radio size={14} /> {t("signal.tag")}
            </span>
            <h2 className="mt-5 text-3xl font-heading font-semibold text-foreground">SIGHT SIGNAL</h2>
            <p className="mt-2 text-lg font-semibold text-primary">{t("signal.headline")}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t("signal.desc")}</p>
            <ul className="mt-6 grid gap-2">
              {["f1", "f2", "f3"].map((k) => (
                <li key={k} className="font-mono text-sm text-primary/80">→ {t(`signal.${k}`)}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="hero" size="lg" asChild>
                <a href={SIGNAL_URL} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="mr-2" size={18} /> {t("signal.cta")}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoreSignalSections;
