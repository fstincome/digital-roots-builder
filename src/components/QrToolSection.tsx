import { motion } from "framer-motion";
import { QrCode, ScanLine, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const QR_URL = "https://qrcodes.sightnetwork.org/";
const QR_SCAN_URL = "https://qrcodes.sightnetwork.org/scan";


const QrToolSection = () => {
  const { t } = useTranslation();

  return (
    <section id="qr-codes" className="py-20 border-y border-border bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary tracking-widest uppercase">
              <QrCode size={14} /> {t("qr.tag")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mt-5">
              {t("qr.title")}
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-xl">{t("qr.desc")}</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {["f1", "f2", "f3", "f4"].map((k) => (
                <li key={k} className="text-sm text-primary/80 font-mono">
                  → {t(`qr.${k}`)}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mt-8">
              <Button variant="hero" size="lg" asChild>
                <a href={QR_URL} target="_blank" rel="noopener noreferrer">
                  <QrCode className="mr-2" size={18} /> {t("qr.ctaGenerate")}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={QR_SCAN_URL} target="_blank" rel="noopener noreferrer">
                  <ScanLine className="mr-2" size={18} /> {t("qr.ctaScan")}
                </a>
              </Button>
            </div>
          </div>

          <a
            href={QR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <QrCode className="text-primary" size={28} />
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={22} />
            </div>
            <p className="font-mono text-xs text-primary mt-6 tracking-widest uppercase">
              {t("qr.freeBadge")}
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-2">qrcodes.sightnetwork.org</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t("qr.cardDesc")}</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default QrToolSection;
