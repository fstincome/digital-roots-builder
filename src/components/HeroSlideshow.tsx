import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import slide1 from "@/assets/hero/hero-1.jpg.asset.json";
import slide2 from "@/assets/hero/hero-2.jpg.asset.json";
import slide3 from "@/assets/hero/hero-3.jpg.asset.json";
import slide4 from "@/assets/hero/hero-4.jpg.asset.json";

const slideImages = [slide1.url, slide2.url, slide3.url, slide4.url];

const HeroSlideshow = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const slides = ["s1", "s2", "s3", "s4"].map((k, i) => ({
    image: slideImages[i],
    title: t(`heroSlides.${k}.title`),
    subtitle: t(`heroSlides.${k}.subtitle`),
    accent: t(`heroSlides.${k}.accent`),
  }));

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-mono text-xs md:text-sm text-primary tracking-widest uppercase block mb-3"
              >
                {slides[current].accent}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-3"
              >
                {slides[current].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto"
              >
                {slides[current].subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background/80 transition-colors"
        aria-label="Diapo précédente"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background/80 transition-colors"
        aria-label="Diapo suivante"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"
            }`}
            aria-label={`Diapo ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
