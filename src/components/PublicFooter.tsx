import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const PublicFooter = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="font-mono text-sm font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-lg font-semibold text-foreground">SIGHT Africa</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            L'architecte de la souveraineté numérique du Burundi. Hardware certifié, Software souverain, Formation d'excellence.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Services", to: "/services" },
              { label: "Programmes", to: "/programmes" },
              { label: "Académie", to: "/academie" },
              { label: "Blog", to: "/blog" },
              { label: "À propos", to: "/a-propos" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>Hardware & Infrastructure</span>
            <span>Développement Software</span>
            <span>Cybersécurité</span>
            <span>Formation & Certification</span>
            <span>Conseil IT</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="mailto:contact@sightafrica.bi" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail size={14} /> contact@sightafrica.bi
            </a>
            <a href="tel:+25761000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone size={14} /> +257 61 000 000
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} /> Gitega, Burundi
            </span>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} SIGHT Africa. Tous droits réservés.</p>
        <div className="flex items-center gap-4">
          {["Dell", "HP", "Cisco", "Microsoft"].map((p) => (
            <span key={p} className="font-mono text-xs text-muted-foreground/50">{p}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default PublicFooter;
