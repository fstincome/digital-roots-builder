import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { groupPublicNavigation, type PublicMenuEntry } from "@/lib/publicNavigation";
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
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const { user, isAdmin, isEditor } = useAuth();
  const location = useLocation();
  const { t } = useTranslation();
  const [menuEntries, setMenuEntries] = useState<PublicMenuEntry[]>(DEFAULT_ITEMS);
  const navItems = groupPublicNavigation(menuEntries);
  const isActive = (path: string) => location.pathname === path.split("#")[0];

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
    if (location.hash) {
      const timer = window.setTimeout(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "instant", block: "start" }), 100);
      return () => window.clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    supabase
      .from("menu_items")
      .select("label_key, path, is_active, position")
      .eq("is_active", true)
      .order("position")
       .then(({ data, error }) => {
        if (!error && data) setMenuEntries(data);
      });
  }, []);

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

        <div className="hidden xl:flex items-center gap-1">
          {navItems.map(item => item.children ? (
            <DropdownMenu key={item.label_key}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className={item.children.some(child => isActive(child.path)) ? "text-primary" : "text-muted-foreground"}>
                  {t(item.label_key)}<ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {item.children.map(child => <DropdownMenuItem key={child.path} asChild><Link to={child.path} aria-current={isActive(child.path) ? "page" : undefined}>{t(child.label_key)}</Link></DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button key={item.path} variant="ghost" size="sm" className={isActive(item.path) ? "text-primary" : "text-muted-foreground"} asChild><Link to={item.path} aria-current={isActive(item.path) ? "page" : undefined}>{t(item.label_key)}</Link></Button>
          ))}
        </div>


        <div className="hidden xl:flex items-center gap-2">
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

        <div className="flex items-center gap-2 xl:hidden">
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
            className="xl:hidden mx-auto mt-2 max-w-7xl overflow-y-auto max-h-[calc(100dvh-6rem)] rounded-3xl border border-border bg-card/90 shadow-lg backdrop-blur-xl"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {navItems.map(item => item.children ? (
                <div key={item.label_key}>
                  <Button variant="ghost" className="w-full justify-between px-0 text-sm" aria-expanded={openGroup === item.label_key} aria-controls={`nav-${item.label_key}`} onClick={() => setOpenGroup(openGroup === item.label_key ? null : item.label_key)}>
                    {t(item.label_key)}<ChevronDown size={16} className={openGroup === item.label_key ? "rotate-180" : ""} />
                  </Button>
                  {openGroup === item.label_key && <div id={`nav-${item.label_key}`} className="flex flex-col gap-1 border-l border-border pl-4 py-2">
                    {item.children.map(child => <Button key={child.path} variant="ghost" className="justify-start whitespace-normal h-auto min-h-10 text-left" asChild><Link to={child.path} onClick={() => setMobileOpen(false)} className={isActive(child.path) ? "text-primary" : "text-muted-foreground"}>{t(child.label_key)}</Link></Button>)}
                  </div>}
                </div>
              ) : <Button key={item.path} variant="ghost" className="justify-start px-0" asChild><Link to={item.path} onClick={() => setMobileOpen(false)} className={isActive(item.path) ? "text-primary" : "text-muted-foreground"}>{t(item.label_key)}</Link></Button>)}
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
