import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import sightLogo from "@/assets/sight-logo.png";

const DEFAULT_ITEMS = [
  { label_key: "nav.home", path: "/" },
  { label_key: "nav.services", path: "/services" },
  { label_key: "nav.hosting", path: "/hebergement" },
  { label_key: "nav.academy", path: "/academie" },
  { label_key: "nav.portfolio", path: "/portfolio" },
  { label_key: "nav.bitcoin", path: "/bitcoin" },
  { label_key: "nav.blog", path: "/blog" },
  { label_key: "nav.about", path: "/a-propos" },
  { label_key: "nav.contact", path: "/contact" },
];

const PublicNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAdmin, isEditor } = useAuth();
  const location = useLocation();
  const { t } = useTranslation();
  const [navItems, setNavItems] = useState(
    DEFAULT_ITEMS.map(i => ({ label: t(i.label_key), href: i.path }))
  );

  useEffect(() => {
    supabase
      .from("menu_items")
      .select("label_key, path, is_active, position")
      .eq("is_active", true)
      .order("position")
      .then(({ data }) => {
        if (data && data.length) {
          setNavItems(data.map((d: any) => ({ label: t(d.label_key), href: d.path })));
        }
      });
  }, [t]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center h-10 bg-white rounded-lg px-2 py-1 shadow-sm">
            <img src={sightLogo} alt="SIGHT Africa" className="h-7 w-auto" />
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

        <div className="hidden sm:flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          {user ? (
            <>
              {(isAdmin || isEditor) && (
                <Button variant="outline" size="sm" asChild>
                  <Link to="/dashboard">{t("nav.dashboard")}</Link>
                </Button>
              )}
              <Button variant="hero" size="sm" asChild>
                <Link to="/dashboard">{t("nav.myAccount")}</Link>
              </Button>
            </>
          ) : (
            <Button variant="hero" size="sm" asChild>
              <Link to="/login">{t("nav.login")}</Link>
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <LanguageSwitcher />
          <button className="text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
                    <Link to="/dashboard" onClick={() => setMobileOpen(false)}>{t("nav.dashboard")}</Link>
                  </Button>
                ) : (
                  <Button variant="hero" size="sm" className="w-full" asChild>
                    <Link to="/login" onClick={() => setMobileOpen(false)}>{t("nav.login")}</Link>
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
