import { useTranslation } from "react-i18next";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import SEO from "@/components/SEO";
import TeamGrid from "@/components/TeamGrid";

const Team = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={`${t("team.title", "Notre équipe")} — SIGHT Africa`}
        description={t("team.desc", "Découvrez les personnes qui font vivre SIGHT Africa.")}
      />
      <PageBreadcrumb title={t("team.title", "Notre équipe")} items={[{ label: t("team.title", "Notre équipe") }]} />
      <section className="py-16">
        <div className="container">
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            {t("team.intro", "Une équipe passionnée au service de la transformation digitale en Afrique.")}
          </p>
          <TeamGrid />
        </div>
      </section>
    </>
  );
};

export default Team;
