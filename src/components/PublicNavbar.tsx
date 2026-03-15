import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Programmes", href: "/programmes" },
  { label: "Académie", href: "/academie" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

const PublicNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAdmin, isEditor } = useAuth();
  const location = useLocation();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="font-mono text-sm font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-lg font-semibold text-foreground tracking-tight">
            SIGHT<span className="text-muted-foreground font-normal ml-1 text-sm">Africa</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm transition-colors duration-200 ${
                location.pathname === item.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-3">
          {user ? (
            <>
              {(isAdmin || isEditor) && (
                <Button variant="outline" size="sm" asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              )}
              <Button variant="hero" size="sm" asChild>
                <Link to="/dashboard">Mon compte</Link>
              </Button>
            </>
          ) : (
            <Button variant="hero" size="sm" asChild>
              <Link to="/login">Se connecter</Link>
            </Button>
          )}
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm py-2 ${
                    location.pathname === item.href ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border">
                {user ? (
                  <Button variant="hero" size="sm" className="w-full" asChild>
                    <Link to="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</Link>
                  </Button>
                ) : (
                  <Button variant="hero" size="sm" className="w-full" asChild>
                    <Link to="/login" onClick={() => setMobileOpen(false)}>Se connecter</Link>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default PublicNavbar;
