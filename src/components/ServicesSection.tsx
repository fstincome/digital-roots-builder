import { motion } from "framer-motion";
import { Shield, Code, GraduationCap } from "lucide-react";

const services = [
  {
    index: "01",
    tag: "HARDWARE",
    title: "Infrastructure Critique",
    description:
      "Partenariats directs avec Dell, HP et Cisco pour éliminer la contrefaçon. Importation certifiée, garantie réelle au Burundi.",
    icon: Shield,
  },
  {
    index: "02",
    tag: "SOFTWARE",
    title: "Souveraineté Logicielle",
    description:
      "Suite de logiciels « Made in Burundi » : ERP, gestion scolaire, santé. Sécurisés et adaptés aux réalités locales.",
    icon: Code,
  },
  {
    index: "03",
    tag: "ACADÉMIE",
    title: "Capital Humain",
    description:
      "Centre de certification technique pour les jeunes diplômés. Cloud, Cybersécurité, Réseaux — le futur se forme ici.",
    icon: GraduationCap,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary mb-4 block">// NOS PILIERS</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Trois axes. Une vision.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl text-pretty">
            Nous ne vendons pas de l'informatique. Nous bâtissons l'autonomie d'une nation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-surface p-8 rounded-3xl border-glow transition-shadow duration-300 hover:border-glow-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <service.icon className="h-5 w-5 text-primary" />
                <span className="font-mono text-sm text-primary">
                  // {service.index}. {service.tag}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
