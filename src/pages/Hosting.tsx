import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Server, Globe, Mail, Database, Shield, Zap, HardDrive, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

type Plan = {
  name: string;
  price: string;
  currency: string;
  period: string;
  popular?: boolean;
  features: string[];
};

const hostingPlans: Plan[] = [
  {
    name: "Starter",
    price: "130 000",
    currency: "BIF",
    period: "/an",
    features: [
      "1 GB stockage SSD",
      "1 site hébergeable",
      "1 base de données MySQL",
      "5 adresses e-mail",
      "Backups journaliers",
      "SSL gratuit",
    ],
  },
  {
    name: "Essentiel",
    price: "300 000",
    currency: "BIF",
    period: "/an",
    features: [
      "5 GB stockage SSD",
      "1 site hébergeable",
      "5 bases de données MySQL",
      "15 adresses e-mail",
      "Backups journaliers",
      "SSL gratuit",
      "Support prioritaire",
    ],
  },
  {
    name: "Business",
    price: "610 000",
    currency: "BIF",
    period: "/an",
    popular: true,
    features: [
      "30 GB stockage NVMe",
      "5 sites hébergeables",
      "MySQL illimité",
      "E-mails illimités",
      "Backups journaliers",
      "SSL gratuit",
      "Support prioritaire",
      "Migration gratuite",
    ],
  },
  {
    name: "Corporate",
    price: "870 000",
    currency: "BIF",
    period: "/an",
    features: [
      "Stockage illimité",
      "5 sites hébergeables",
      "MySQL illimité",
      "E-mails illimités",
      "Backups journaliers",
      "SSL Wildcard",
      "Support dédié",
      "Migration gratuite",
      "CDN inclus",
    ],
  },
];

const vpsPlans: Plan[] = [
  {
    name: "VPS Nano",
    price: "250 000",
    currency: "BIF",
    period: "/an",
    features: ["1 vCPU", "1 GB RAM", "10 GB NVMe", "Trafic illimité entrant"],
  },
  {
    name: "VPS S",
    price: "350 000",
    currency: "BIF",
    period: "/an",
    features: ["2 vCPU", "2 GB RAM", "80 GB NVMe", "Trafic illimité entrant"],
  },
  {
    name: "VPS 1",
    price: "650 000",
    currency: "BIF",
    period: "/an",
    popular: true,
    features: ["4 vCPU", "6 GB RAM", "100 GB NVMe", "32 TB trafic", "1 Snapshot"],
  },
  {
    name: "VPS 2",
    price: "850 000",
    currency: "BIF",
    period: "/an",
    features: ["6 vCPU", "16 GB RAM", "200 GB NVMe", "32 TB trafic", "2 Snapshots"],
  },
  {
    name: "VPS 3",
    price: "1 200 000",
    currency: "BIF",
    period: "/an",
    features: ["8 vCPU", "24 GB RAM", "300 GB NVMe", "32 TB trafic", "2 Snapshots"],
  },
  {
    name: "VPS 4",
    price: "1 800 000",
    currency: "BIF",
    period: "/an",
    features: ["12 vCPU", "48 GB RAM", "400 GB NVMe", "32 TB trafic", "3 Snapshots"],
  },
];

const features = [
  { icon: Shield, title: "SSL gratuit", desc: "Certificat SSL Let's Encrypt sur tous les plans." },
  { icon: Zap, title: "Réseau ultra-rapide", desc: "Infrastructure optimisée avec SSD NVMe." },
  { icon: Database, title: "Backups journaliers", desc: "Sauvegardes automatiques de vos données." },
  { icon: Globe, title: "cPanel intuitif", desc: "Gérez vos sites facilement via cPanel." },
  { icon: Mail, title: "E-mails professionnels", desc: "Créez des adresses e-mail à votre domaine." },
  { icon: HardDrive, title: "Migration gratuite", desc: "Nous migrons votre site sans interruption." },
];

const PlanCard = ({ plan, index }: { plan: Plan; index: number }) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className={`relative rounded-xl border bg-card p-6 flex flex-col transition-all duration-300 hover:glow-primary ${
      plan.popular ? "border-primary ring-1 ring-primary/30" : "border-border hover:border-primary/50"
    }`}
  >
    {plan.popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
        Populaire
      </span>
    )}
    <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
    <div className="mt-3 mb-5">
      <span className="text-3xl font-bold text-foreground">{plan.price}</span>
      <span className="text-sm text-muted-foreground ml-1">{plan.currency} {plan.period}</span>
    </div>
    <ul className="space-y-2.5 flex-1">
      {plan.features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
          <Check size={16} className="text-primary shrink-0 mt-0.5" />
          {f}
        </li>
      ))}
    </ul>
    <Button variant={plan.popular ? "hero" : "outline"} className="mt-6 w-full" asChild>
      <Link to="/contact">Commander</Link>
    </Button>
  </motion.div>
);

const Hosting = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<"hosting" | "vps">("hosting");

  return (
    <>
      <PageBreadcrumb
        title={`${t("hosting.title")} ${t("hosting.titleHighlight")}`}
        subtitle={t("hosting.desc")}
        items={[{ label: t("nav.hosting") }]}
      />

      {/* Tabs */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-center gap-2 mb-12">
            <button
              onClick={() => setTab("hosting")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                tab === "hosting"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <Server size={16} className="inline mr-2" />
              {t("hosting.webHosting")}
            </button>
            <button
              onClick={() => setTab("vps")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                tab === "vps"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <HardDrive size={16} className="inline mr-2" />
              {t("hosting.vps")}
            </button>
          </div>

          {tab === "hosting" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hostingPlans.map((p, i) => (
                <PlanCard key={p.name} plan={p} index={i} />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vpsPlans.map((p, i) => (
                <PlanCard key={p.name} plan={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">{t("hosting.whyTag")}</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-3">{t("hosting.whyTitle")}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-mesh">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">{t("hosting.ctaTitle")}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t("hosting.ctaDesc")}</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">{t("hosting.ctaButton")} <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hosting;
