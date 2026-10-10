import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Building2, Check, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import corePreview from "@/assets/sight-core-preview.jpg.asset.json";

const CORE_URL = "https://www.core.sightnetwork.org/";

const CoreProductSection = () => {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();
  return (
    <section id="sight-core" className="scroll-mt-28 border-y border-border bg-card/30 py-20">
      <div className="container">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase text-primary"><Building2 size={16} />{t("core.tag")}</span>
            <h2 className="mt-5 text-3xl font-heading font-semibold text-foreground md:text-4xl">SIGHT CORE</h2>
            <p className="mt-3 text-xl font-semibold text-primary">{t("core.headline")}</p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{t("core.desc")}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["sales", "inventory", "finance", "people"].map(key => <li key={key} className="flex items-start gap-2 text-sm text-foreground"><Check size={16} className="mt-0.5 shrink-0 text-primary" />{t(`core.${key}`)}</li>)}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild><a href={CORE_URL} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={18} className="mr-2" />{t("core.cta")}</a></Button>
              <Button variant="outline" size="lg" asChild><a href={`${CORE_URL}en/contact`} target="_blank" rel="noopener noreferrer"><Play size={16} className="mr-2" />{t("core.demo")}</a></Button>
            </div>
          </div>
          <a href={CORE_URL} target="_blank" rel="noopener noreferrer" aria-label={t("core.cta")} className="group block overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/50">
            <img src={corePreview.url} alt={t("core.imageAlt")} loading="lazy" className="aspect-video w-full object-cover" />
            <div className="flex items-center justify-between gap-4 p-5"><div><p className="font-semibold text-foreground">SIGHT CORE</p><p className="mt-1 text-xs text-muted-foreground">{t("core.preview")}</p></div><ArrowUpRight size={22} className="shrink-0 text-primary" /></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export default CoreProductSection;