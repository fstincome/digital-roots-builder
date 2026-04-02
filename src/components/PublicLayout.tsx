import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";
import ScrollProgress from "./ScrollProgress";
import { supabase } from "@/integrations/supabase/client";

const PublicLayout = () => {
  const location = useLocation();

  useEffect(() => {
    supabase.functions.invoke("track-visit", {
      body: { page: location.pathname },
    }).catch(() => {});
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollProgress />
      <PublicNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;
