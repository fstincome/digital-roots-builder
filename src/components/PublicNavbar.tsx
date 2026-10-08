import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, BookOpen, Compass } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
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
  { label_key: "nav.techNews", path: "/actualites-tech" },
  { label_key: "nav.resources", path: "/ressources" },
  { label_key: "nav.about", path: "/a-propos" },
  { label_key: "nav.contact", path: "/contact" },
];

const PublicNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
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
      className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
    >
      <div className="mx-auto max-w-7xl rounded-[28px] border border-border bg-card/70 px-4 sm:px-6 shadow-lg backdrop-blur-xl flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center h-10 bg-white rounded-lg px-2 py-1 shadow-sm">
            <img src={sightLogo} alt="SIGHT Africa" className="h-7 w-auto" />
          </span>
        </Link>

        <div className="hidden 2xl:flex items-center gap-1">
          {navItems.map((item) => (
            item.href === "/ressources" ? (
              <DropdownMenu key={item.href}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className={location.pathname === "/ressources" || location.pathname === "/explorer" ? "text-primary" : "text-muted-foreground"}>
                    {item.label}<ChevronDown size={14} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem asChild><Link to="/ressources"><BookOpen size={16} className="mr-2" />{t("resources.title")}</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link to="/explorer"><Compass size={16} className="mr-2" />{t("explore.title")}</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) :
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors duration-200 ${
                location.pathname === item.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-secondary hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>


        <div className="hidden 2xl:flex items-center gap-2">
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

        <div className="flex items-center gap-2 2xl:hidden">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" aria-label="Menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="2xl:hidden mx-auto mt-2 max-w-7xl overflow-y-auto max-h-[calc(100dvh-6rem)] rounded-3xl border border-border bg-card/90 shadow-lg backdrop-blur-xl"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                item.href === "/ressources" ? (
                  <div key={item.href}>
                    <Button variant="ghost" className="w-full justify-between px-0 text-sm" aria-expanded={resourcesOpen} onClick={() => setResourcesOpen(!resourcesOpen)}>
                      {item.label}<ChevronDown size={16} className={resourcesOpen ? "rotate-180" : ""} />
                    </Button>
                    {resourcesOpen && <div className="flex flex-col gap-3 border-l border-border pl-4 py-2">
                      <Link to="/ressources" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>{t("resources.title")}</Link>
                      <Link to="/explorer" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>{t("explore.title")}</Link>
                    </div>}
                  </div>
                ) :
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
