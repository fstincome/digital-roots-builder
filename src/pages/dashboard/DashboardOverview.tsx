import { useEffect, useState } from "react";
import { FileText, FolderOpen, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";

const DashboardOverview = () => {
  const { profile } = useAuth();
  const { t } = useTranslation();
  const [stats, setStats] = useState({ articles: 0, programs: 0, totalViews: 0 });

  useEffect(() => {
    const fetch = async () => {
      const [{ count: articles }, { count: programs }, { data: artViews }, { data: progViews }] = await Promise.all([
        supabase.from("articles").select("*", { count: "exact", head: true }),
        supabase.from("programs").select("*", { count: "exact", head: true }),
        supabase.from("articles").select("views"),
        supabase.from("programs").select("views"),
      ]);
      const totalViews = (artViews || []).reduce((s, a) => s + a.views, 0) + (progViews || []).reduce((s, p) => s + p.views, 0);
      setStats({ articles: articles || 0, programs: programs || 0, totalViews });
    };
    fetch();
  }, []);

  const cards = [
    { title: t("dashboard.articles"), value: stats.articles, icon: FileText },
    { title: t("dashboard.programs"), value: stats.programs, icon: FolderOpen },
    { title: t("dashboard.totalViews"), value: stats.totalViews, icon: Eye },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground mb-1">
        {t("dashboard.hello")}{profile?.full_name ? `, ${profile.full_name}` : ""} 👋
      </h1>
      <p className="text-muted-foreground mb-8">{t("dashboard.contentOverview")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cards.map((c) => (
          <Card key={c.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{c.title}</CardTitle>
              <c.icon className="text-primary" size={20} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground tabular-nums">{c.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
