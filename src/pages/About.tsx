import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";

const values = [
  { icon: Heart, title: "Intégrité", desc: "Lutte contre la contrefaçon, produits certifiés et garantis." },
  { icon: Target, title: "Innovation", desc: "Solutions technologiques de pointe adaptées au contexte local." },
  { icon: Award, title: "Souveraineté", desc: "Développement de solutions locales pour réduire la dépendance technologique." },
  { icon: Eye, title: "Excellence", desc: "Standards internationaux dans chaque service que nous offrons." },
];

const timeline = [
  { year: "2026", title: "Fondation", desc: "Installation du siège à Gitega, premiers partenariats fournisseurs, lancement des services." },
  { year: "2027", title: "Croissance", desc: "Lancement de l'Académie SIGHT, premiers contrats gouvernementaux." },
  { year: "2028", title: "Expansion", desc: "Ouverture du bureau de Bujumbura et Ngozi." },
  { year: "2029", title: "Consolidation", desc: "50 PME digitalisées, leader sur les marchés publics IT." },
  { year: "2030", title: "Rayonnement", desc: "Exportation de services IT vers la zone EAC, hub d'innovation certifié." },
];

const About = () => (
  <>
    <section className="pt-32 pb-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Qui sommes-nous</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-6">À propos de SIGHT Africa</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Eye className="text-primary" size={24} /> Notre Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Devenir le leader de l'intégration technologique au Burundi d'ici 2030, en favorisant l'autonomie numérique nationale et en contribuant activement à la Vision Burundi 2040-2060.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Target className="text-primary" size={24} /> Notre Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Fournir des équipements de pointe, développer des solutions logicielles sécurisées et renforcer les capacités locales pour accélérer la transformation digitale du Burundi et de l'Afrique de l'Est.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Valeurs */}
    <section className="py-20 border-y border-border bg-card/30">
      <div className="container">
        <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Nos Valeurs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-background text-center">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Feuille de Route 2026–2030</h2>
        <div className="space-y-8">
          {timeline.map((t, i) => (
            <motion.div key={t.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-mono text-xs font-bold shrink-0">
                  {t.year.slice(2)}
                </div>
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-primary text-sm">{t.year}</span>
                  <h3 className="font-semibold text-foreground">{t.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
