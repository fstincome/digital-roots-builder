import { motion } from "framer-motion";

const kpis = [
  { value: "50+", label: "PME digitalisées d'ici 2029", suffix: "" },
  { value: "3", label: "Villes couvertes", suffix: "antennes" },
  { value: "100%", label: "Produits certifiés originaux", suffix: "" },
  { value: "15", label: "Emplois directs créés (An 3)", suffix: "+" },
];

const pillars = [
  {
    pillar: "Capital Humain",
    action: "Certifications internationales via l'Académie SIGHT",
  },
  {
    pillar: "Industrialisation",
    action: "Assemblage local de périphériques — Made in Burundi",
  },
  {
    pillar: "Digitalisation",
    action: "Logiciels pour moderniser l'agriculture et la santé locale",
  },
  {
    pillar: "Commerce",
    action: "Exportation de services IT vers la zone EAC",
  },
];

const KPIsSection = () => {
  return (
    <section id="gouvernance" className="py-32">
      <div className="container">
        {/* KPIs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <span className="font-mono text-sm text-primary mb-4 block">// INDICATEURS</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-12">
            Mesurer l'impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="bg-surface rounded-2xl p-6 border-glow text-center"
              >
                <span className="font-mono text-4xl md:text-5xl font-bold text-primary tabular-nums block mb-1">
                  {kpi.value}
                </span>
                {kpi.suffix && (
                  <span className="text-xs text-muted-foreground font-mono uppercase">{kpi.suffix}</span>
                )}
                <p className="text-sm text-muted-foreground mt-2">{kpi.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Alignment with Vision 2040 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm text-primary mb-4 block">// VISION BURUNDI 2040</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
            Alignement stratégique national
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.pillar}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex items-start gap-4 bg-surface rounded-xl p-5 border-glow"
              >
                <span className="font-mono text-primary text-sm shrink-0 mt-0.5">→</span>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{p.pillar}</h4>
                  <p className="text-sm text-muted-foreground">{p.action}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KPIsSection;
