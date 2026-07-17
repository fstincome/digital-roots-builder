import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Code, Shield, GraduationCap, Globe, Zap, Calendar, ExternalLink, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import heroImg from "@/assets/hero/hero-5.jpg.asset.json";
import HeroSlideshow from "@/components/HeroSlideshow";
import SEO from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Index = () => {
  const { t, i18n } = useTranslation();
  const [latestArticles, setLatestArticles] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [latestPortfolio, setLatestPortfolio] = useState<any[]>([]);

  useEffect(() => {
    supabase.from("articles").select("id, title, slug, excerpt, cover_image, published_at, created_at")
      .eq("status", "published").order("published_at", { ascending: false }).limit(3)
      .then(({ data }) => setLatestArticles(data || []));
    supabase.from("portfolios").select("*").order("created_at", { ascending: false }).limit(3)
      .then(({ data }) => setLatestPortfolio(data || []));
    supabase.from("categories").select("id, name, slug").eq("type", "article").limit(8)
      .then(({ data }) => setCategories(data || []));
  }, []);

  const locale = i18n.language === "de" ? "de-DE" : i18n.language === "sw" ? "sw-KE" : i18n.language === "en" ? "en-US" : "fr-FR";

  const stats = [
    { value: "50+", label: t("stats.companies") },
    { value: "100+", label: t("stats.technicians") },
    { value: "3", label: t("stats.cities") },
    { value: "15+", label: t("stats.partners") },
  ];

  const services = [
    { icon: Server, title: t("indexServices.hardware"), desc: t("indexServices.hardwareDesc") },
    { icon: Code, title: t("indexServices.software"), desc: t("indexServices.softwareDesc") },
    { icon: Shield, title: t("indexServices.security"), desc: t("indexServices.securityDesc") },
    { icon: GraduationCap, title: t("indexServices.academy"), desc: t("indexServices.academyDesc") },
    { icon: Globe, title: t("indexServices.consulting"), desc: t("indexServices.consultingDesc") },
    { icon: Zap, title: t("indexServices.maintenance"), desc: t("indexServices.maintenanceDesc") },
  ];

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SIGHT Africa",
    url: "https://sightafrica.bi",
    logo: "https://sightafrica.bi/sight-logo.png",
    description: "SIGHT Africa : Hardware certifié, Software souverain, Hébergement et Formation d'excellence au Burundi.",
    address: { "@type": "PostalAddress", addressLocality: "Gitega", addressCountry: "BI" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+25769898947",
      contactType: "customer service",
      email: "sightafrica26@gmail.com",
    },
  };

  return (
    <>
      <SEO
        title="SIGHT Africa — Solutions IT & Transformation Digitale au Burundi"
        description="Hardware certifié, Software souverain, Hébergement web et Formation d'excellence. Votre partenaire technologique de confiance au Burundi."
        jsonLd={orgJsonLd}
      />
      {/* Slideshow */}
      <HeroSlideshow />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={heroImg.url} alt="Digital Africa" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="font-mono text-sm text-primary mb-4 block tracking-wider">{t("hero.tag")}</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-foreground mb-6 leading-[1.05]">
                {t("hero.title")} <span className="text-primary">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">{t("hero.desc")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/services">{t("hero.cta")} <ArrowRight className="ml-2" size={18} /></Link>
                </Button>
                <Button variant="heroGhost" size="lg" asChild>
                  <Link to="/contact">{t("hero.ctaContact")}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Services */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">{t("indexServices.tag")}</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-3">{t("indexServices.title")}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:glow-primary">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/services">{t("indexServices.viewAll")} <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {latestArticles.length > 0 && (
        <section className="py-24 border-t border-border">
          <div className="container">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="font-mono text-xs text-primary tracking-widest uppercase">{t("home.articlesTag")}</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-3">{t("home.articlesTitle")}</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestArticles.map((a, i) => (
                <motion.div key={a.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Link to={`/blog/${a.slug}`} className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all">
                    {a.cover_image ? (
                      <img src={a.cover_image} alt={a.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                        <span className="font-mono text-primary/30 text-4xl">S</span>
                      </div>
                    )}
                    <div className="p-6">
                      <span className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                        <Calendar size={12} /> {new Date(a.published_at || a.created_at).toLocaleDateString(locale)}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{a.title}</h3>
                      {a.excerpt && <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{a.excerpt}</p>}
                      <span className="inline-flex items-center gap-1 text-sm text-primary mt-4 font-medium">
                        {t("blog.readMore")} <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link to="/blog">{t("home.allArticles")} <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Blog Categories */}
      {categories.length > 0 && (
        <section className="py-16 border-t border-border bg-card/30">
          <div className="container">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10">
              <span className="font-mono text-xs text-primary tracking-widest uppercase">{t("homeCategories.tag")}</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-3">{t("homeCategories.title")}</h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((c, i) => (
                <motion.div key={c.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Link
                    to={`/blog?category=${c.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:border-primary/50 hover:text-primary transition-all text-sm"
                  >
                    <Tag size={14} /> {c.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Portfolio */}
      {latestPortfolio.length > 0 && (
        <section className="py-24 border-t border-border">
          <div className="container">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="font-mono text-xs text-primary tracking-widest uppercase">{t("home.portfolioTag")}</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mt-3">{t("home.portfolioTitle")}</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPortfolio.map((item, i) => (
                <motion.div key={item.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <span className="font-mono text-primary/30 text-5xl">⚡</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                    {item.description && <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{item.description}</p>}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary mt-4 font-medium hover:underline">
                        {t("portfolio.viewProject")} <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link to="/portfolio">{t("home.allPortfolio")} <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 gradient-mesh">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">{t("cta.title")}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t("cta.desc")}</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">{t("cta.button")} <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
