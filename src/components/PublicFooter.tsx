import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import sightLogo from "@/assets/sight-logo.png";

const WHATSAPP_NUMBER = "25769898947";
const WHATSAPP_MESSAGE = encodeURIComponent("Bonjour SIGHT Africa, je vous contacte depuis votre site web. J'aimerais avoir plus d'informations sur vos services.");

const PublicFooter = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
        aria-label="Contacter via WhatsApp"
      >
        <MessageCircle size={22} className="fill-white" />
        <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
      </a>

      <footer className="border-t border-border bg-card/50">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={sightLogo} alt="SIGHT Africa" className="h-8 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("footer.tagline")}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">{t("footer.navigation")}</h4>
              <div className="flex flex-col gap-2">
                {[
                  { label: t("nav.services"), to: "/services" },
                  { label: t("nav.programs"), to: "/programmes" },
                  { label: t("nav.academy"), to: "/academie" },
                  { label: t("nav.blog"), to: "/blog" },
                  { label: t("nav.about"), to: "/a-propos" },
                ].map((link) => (
                  <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">{t("footer.servicesTitle")}</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <span>{t("footer.hardwareSvc")}</span>
                <span>{t("footer.softwareSvc")}</span>
                <span>{t("footer.cybSvc")}</span>
                <span>{t("footer.trainSvc")}</span>
                <span>{t("footer.consultSvc")}</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">{t("footer.contactTitle")}</h4>
              <div className="flex flex-col gap-3">
                <a href="mailto:business@sightnetwork.org" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={14} /> business@sightnetwork.org
                </a>
                <a href="tel:+25769898947" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={14} /> +257 69 898 947
                </a>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} /> Gitega, Burundi
                </span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} SIGHT Africa. {t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </>
  );
});

PublicFooter.displayName = "PublicFooter";

export default PublicFooter;
