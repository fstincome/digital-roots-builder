import { motion } from "framer-motion";
import { Server, Code, Shield, GraduationCap, Globe, Zap, Wrench, Database, Cloud } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  { icon: Server, title: "Import & Distribution Hardware", desc: "Importation directe depuis nos partenaires Dell, HP et Cisco. Équipements certifiés avec garantie officielle, éliminant les intermédiaires pour des prix compétitifs.", features: ["Serveurs & postes de travail", "Équipements réseau Cisco", "Périphériques & accessoires", "Garantie constructeur"] },
  { icon: Code, title: "Développement Software", desc: "Création de solutions logicielles sur mesure, adaptées aux réalités du marché burundais. ERP, gestion scolaire, santé — des outils Made in Burundi.", features: ["Applications web & mobiles", "ERP & CRM personnalisés", "Solutions SaaS", "Intégrations API"] },
  { icon: Shield, title: "Cybersécurité & Audit", desc: "Protection complète de vos systèmes d'information. Audit de sécurité, mise en conformité et formation de vos équipes aux bonnes pratiques.", features: ["Audit de vulnérabilités", "Politique de sécurité", "Protection des données", "Formation sécurité"] },
  { icon: GraduationCap, title: "Académie SIGHT", desc: "Centre de certification technique pour les jeunes diplômés et professionnels sur les technologies de pointe.", features: ["Certifications Cloud", "Formation Réseaux", "Développement web", "Cybersécurité"] },
  { icon: Globe, title: "Conseil en Transformation Digitale", desc: "Accompagnement stratégique des entreprises et institutions dans leur parcours de digitalisation.", features: ["Diagnostic IT", "Plan de transformation", "Conduite du changement", "Suivi & reporting"] },
  { icon: Wrench, title: "Maintenance & SAV", desc: "Support technique continu avec intervention rapide. Maintenance préventive et curative pour garantir la disponibilité de vos systèmes.", features: ["Contrats de maintenance", "Support 24/7", "Maintenance préventive", "Intervention sur site"] },
  { icon: Database, title: "Infrastructure & Réseaux", desc: "Conception, déploiement et gestion de vos infrastructures réseau et data center.", features: ["Architecture réseau", "Data center", "Câblage structuré", "Monitoring"] },
  { icon: Cloud, title: "Solutions Cloud", desc: "Migration et gestion de vos applications dans le cloud pour plus de flexibilité et de résilience.", features: ["Migration cloud", "Sauvegarde cloud", "Serveurs dédiés", "Hébergement local"] },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }) };

const Services = () => (
  <>
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={servicesBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
      </div>
      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Ce que nous faisons</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">Nos Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">Une gamme complète de services IT pour accompagner votre entreprise dans sa transformation numérique.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div key={s.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
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

export default Services;
