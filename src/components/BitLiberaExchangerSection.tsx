import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, CircleDollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import exchangerAsset from "@/assets/bitlibera-exchanger.png.asset.json";

const EXCHANGER_URL = "https://exchanger.bitlibera.com/";
const DOCS_URL = "https://exchanger.bitlibera.com/docs";

const BitLiberaExchangerSection = () => {
  const { t } = useTranslation();

  return (
    <section id="bitlibera-exchanger" className="py-20 border-b border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary tracking-widest uppercase">
              <CircleDollarSign size={14} /> {t("exchanger.tag")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mt-5">
              {t("exchanger.title")}
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-xl">{t("exchanger.desc")}</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {["f1", "f2", "f3", "f4"].map((key) => (
                <li key={key} className="text-sm text-primary/80 font-mono">
                  → {t(`exchanger.${key}`)}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mt-8">
              <Button variant="hero" size="lg" asChild>
                <a href={EXCHANGER_URL} target="_blank" rel="noopener noreferrer">
                  <CircleDollarSign className="mr-2" size={18} /> {t("exchanger.ctaExchange")}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={DOCS_URL} target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2" size={18} /> {t("exchanger.ctaDocs")}
                </a>
              </Button>
            </div>
          </div>

          <a
            href={EXCHANGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("exchanger.ctaExchange")}
            className="group order-1 lg:order-2 relative block overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors"
          >
            <img
              src={exchangerAsset.url}
              alt={t("exchanger.imageAlt")}
              className="w-full aspect-[4/3] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-background/90 px-5 py-4 backdrop-blur-sm">
              <div>
                <p className="font-mono text-xs text-primary tracking-widest uppercase">{t("exchanger.badge")}</p>
                <p className="text-sm text-foreground mt-1">exchanger.bitlibera.com</p>
              </div>
              <ArrowUpRight className="shrink-0 text-primary" size={22} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BitLiberaExchangerSection;