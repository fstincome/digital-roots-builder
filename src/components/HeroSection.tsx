import { motion } from "framer-motion";
import heroImg from "@/assets/hero-mesh.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Maillage topographique numérique du Burundi"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      <div className="container relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="font-mono text-sm text-primary mb-6 block animate-pulse-glow">
            // SIGHT AFRICA 2030
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 max-w-5xl mx-auto leading-[1.05]">
            L'architecte de la souveraineté numérique du Burundi
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
            Hardware certifié. Software souverain. Formation d'excellence.
            <br />
            SIGHT bâtit l'infrastructure critique du futur digital burundais.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#vision">Découvrir la Vision 2030</a>
            </Button>
            <Button variant="heroGhost" size="lg" asChild>
              <a href="#services">Nos Services</a>
            </Button>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
        >
          {["Dell", "HP", "Cisco", "Microsoft"].map((partner) => (
            <span key={partner} className="font-mono text-sm tracking-wider opacity-50">
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
