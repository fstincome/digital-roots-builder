import { motion } from "framer-motion";

const milestones = [
  {
    year: "2026",
    phase: "Fondation",
    objectives: [
      "Installation du siège à Gitega",
      "Recrutement du noyau dur technique",
      "Premières importations certifiées",
    ],
  },
  {
    year: "2027",
    phase: "Croissance",
    objectives: [
      "Lancement MVP logiciel de gestion",
      "3 partenariats fournisseurs actifs",
      "Formation de 20 techniciens",
    ],
  },
  {
    year: "2028",
    phase: "Expansion",
    objectives: [
      "Ouverture du bureau de Ngozi",
      "Unité de formation certifiante",
      "Premier audit cybersécurité pour tiers",
    ],
  },
  {
    year: "2029",
    phase: "Consolidation",
    objectives: [
      "50 PME digitalisées via solutions SIGHT",
      "Leader sur les marchés publics IT",
      "Création de 15 emplois directs",
    ],
  },
  {
    year: "2030",
    phase: "Rayonnement",
    objectives: [
      "Exportation vers la zone EAC",
      "Hub d'innovation certifié",
      "Référence Vision Burundi 2040",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const VisionSection = () => {
  return (
    <section id="vision" className="py-32 gradient-mesh">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary mb-4 block">// FEUILLE DE ROUTE</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Vision 2026 — 2030
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl text-pretty">
            Une trajectoire claire vers la souveraineté numérique, alignée sur la Vision Burundi 2040.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              variants={itemVariants}
              className="relative bg-surface rounded-2xl p-6 border-glow group hover:border-glow-hover transition-shadow duration-300"
            >
              {i < milestones.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-primary/30" />
              )}
              <span className="font-mono text-3xl font-bold text-primary tabular-nums block mb-1">
                {m.year}
              </span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider block mb-4">
                {m.phase}
              </span>
              <ul className="space-y-2">
                {m.objectives.map((obj) => (
                  <li key={obj} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
