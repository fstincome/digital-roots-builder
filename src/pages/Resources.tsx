import { motion } from "framer-motion";
import {
  Archive,
  Image as ImageIcon,
  Languages,
  Bot,
  LayoutList,
  Palette,
  Code2,
  ShieldCheck,
  Share2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import SEO from "@/components/SEO";
import { resourceCategories, totalResources, type Lang } from "@/i18n/resourceItems";

const categoryIcons = [
  Archive,
  ImageIcon,
  Languages,
  Bot,
  LayoutList,
  Palette,
  Code2,
  ShieldCheck,
  Share2,
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i % 3) * 0.06, duration: 0.45 },
  }),
};

const Resources = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.split("-")[0] ?? "en") as Lang;

  const descOf = (item: (typeof resourceCategories)[number]["items"][number]) =>
    item.desc[lang] ?? item.desc.en;

  return (
    <>
      <SEO
        title={`${t("resources.title")} | SIGHT Africa`}
        description={t("resources.desc")}
      />
      <PageBreadcrumb
        title={t("resources.title")}
        subtitle={t("resources.desc")}
        items={[{ label: t("nav.resources") }]}
      />

      <section className="py-16">
        <div className="container">
          <div className="flex items-center gap-2 mb-12 text-xs uppercase tracking-widest text-primary">
            <Sparkles size={14} />
            <span>{t("resources.tag")}</span>
            <span className="text-muted-foreground normal-case tracking-normal">
              · {totalResources} sites
            </span>
          </div>

          <div className="space-y-16">
            {resourceCategories.map((cat, ci) => {
              const Icon = categoryIcons[ci % categoryIcons.length];
              return (
                <div key={cat.key}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                      {t(`resources.cat.${cat.key}`)}
                    </h2>
                    <span className="text-xs font-mono text-muted-foreground ml-1">
                      ({cat.items.length})
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cat.items.map((item, i) => (
                      <motion.a
                        key={item.url}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        custom={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="group flex flex-col p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm font-mono uppercase">
                            {item.name.charAt(0)}
                          </span>
                          <ExternalLink
                            size={16}
                            className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all"
                          />
                        </div>
                        <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-1.5">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {descOf(item)}
                        </p>
                        <span className="mt-auto pt-4 text-xs font-mono text-primary/70 truncate">
                          {item.url.replace(/^https?:\/\//, "")}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
