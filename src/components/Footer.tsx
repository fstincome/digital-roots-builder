import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-24 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="font-mono text-sm font-bold text-primary-foreground">S</span>
              </div>
              <span className="text-lg font-semibold text-foreground">SIGHT Africa</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              L'architecte de la souveraineté numérique du Burundi. Hardware, Software, Formation — un écosystème complet.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-sm text-primary mb-4">// NAVIGATION</h4>
            <ul className="space-y-3">
              {["Gouvernance", "Services", "Vision 2030", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-sm text-primary mb-4">// CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                Gitega, Burundi
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                contact@sight-africa.com
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                +257 XX XXX XXX
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 SIGHT Africa. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Bâtir l'autonomie d'une nation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
