import { useEffect, useState } from "react";
import { FileText, FolderOpen, Eye, Globe, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "hsl(210, 70%, 50%)",
  "hsl(150, 60%, 45%)",
  "hsl(30, 80%, 55%)",
  "hsl(0, 65%, 50%)",
];

const DashboardOverview = () => {
  const { profile } = useAuth();
  const { t } = useTranslation();
  const [stats, setStats] = useState({ articles: 0, programs: 0, totalViews: 0, visitors: 0 });
  const [articleData, setArticleData] = useState<{ name: string; views: number }[]>([]);
  const [statusData, setStatusData] = useState<{ name: string; value: number }[]>([]);
  const [countryData, setCountryData] = useState<{ country: string; count: number }[]>([]);
  const [pageData, setPageData] = useState<{ page: string; count: number }[]>([]);
  const [recentVisitors, setRecentVisitors] = useState<any[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      const [
        { count: articles },
        { count: programs },
        { data: artData },
        { data: progData },
        { count: visitorCount },
        { data: visitors },
      ] = await Promise.all([
        supabase.from("articles").select("*", { count: "exact", head: true }),
        supabase.from("programs").select("*", { count: "exact", head: true }),
        supabase.from("articles").select("title, views, status").order("views", { ascending: false }).limit(10),
        supabase.from("programs").select("views"),
        supabase.from("visitors").select("*", { count: "exact", head: true }),
        supabase.from("visitors").select("*").order("created_at", { ascending: false }).limit(50),
      ]);

      const totalViews =
        (artData || []).reduce((s, a) => s + a.views, 0) +
        (progData || []).reduce((s, p) => s + p.views, 0);

      setStats({
        articles: articles || 0,
        programs: programs || 0,
        totalViews,
        visitors: visitorCount || 0,
      });

      // Bar chart: top articles by views
      setArticleData(
        (artData || []).slice(0, 6).map((a) => ({
          name: a.title.length > 20 ? a.title.slice(0, 20) + "…" : a.title,
          views: a.views,
        }))
      );

      // Pie chart: article status distribution
      const statusMap: Record<string, number> = {};
      (artData || []).forEach((a) => {
        statusMap[a.status] = (statusMap[a.status] || 0) + 1;
      });
      setStatusData(Object.entries(statusMap).map(([name, value]) => ({ name, value })));

      // Country stats from visitors
      const countryMap: Record<string, number> = {};
      (visitors || []).forEach((v: any) => {
        const c = v.country || "Unknown";
        countryMap[c] = (countryMap[c] || 0) + 1;
      });
      setCountryData(
        Object.entries(countryMap)
          .map(([country, count]) => ({ country, count }))
          .sort((a, b) => b.count - a.count)
      );

      // Pages stats from visitors
      const pageMap: Record<string, number> = {};
      (visitors || []).forEach((v: any) => {
        const p = v.page || "/";
        pageMap[p] = (pageMap[p] || 0) + 1;
      });
      setPageData(
        Object.entries(pageMap)
          .map(([page, count]) => ({ page, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 8)
      );

      setRecentVisitors((visitors || []).slice(0, 20));
    };
    fetchAll();
  }, []);

  const summaryCards = [
    { title: t("dashboard.articles"), value: stats.articles, icon: FileText },
    { title: t("dashboard.programs"), value: stats.programs, icon: FolderOpen },
    { title: t("dashboard.totalViews"), value: stats.totalViews, icon: Eye },
    { title: "Visiteurs", value: stats.visitors, icon: Users },
  ];

  const barChartConfig = {
    views: { label: "Vues", color: "hsl(var(--primary))" },
  };

  const pieChartConfig = {
    published: { label: "Publié", color: "hsl(var(--primary))" },
    draft: { label: "Brouillon", color: "hsl(var(--muted-foreground))" },
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-1">
          {t("dashboard.hello")}
          {profile?.full_name ? `, ${profile.full_name}` : ""} 👋
        </h1>
        <p className="text-muted-foreground">{t("dashboard.contentOverview")}</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((c) => (
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

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart - Top Articles */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Top Articles par vues</CardTitle>
          </CardHeader>
          <CardContent>
            {articleData.length > 0 ? (
              <ChartContainer config={barChartConfig} className="h-[300px] w-full">
                <BarChart data={articleData} margin={{ top: 5, right: 10, left: 0, bottom: 60 }}>
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                    angle={-35}
                    textAnchor="end"
                    interval={0}
                  />
                  <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="views" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            ) : (
              <p className="text-muted-foreground text-sm">Aucune donnée disponible</p>
            )}
          </CardContent>
        </Card>

        {/* Pie Chart - Article Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Statut des articles</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            {statusData.length > 0 ? (
              <ChartContainer config={pieChartConfig} className="h-[300px] w-full">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                    nameKey="name"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {statusData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            ) : (
              <p className="text-muted-foreground text-sm">Aucune donnée disponible</p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Visitors by Country */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Globe size={18} /> Visiteurs par pays
            </CardTitle>
          </CardHeader>
          <CardContent>
            {countryData.length > 0 ? (
              <div className="space-y-3">
                {countryData.slice(0, 10).map((c) => (
                  <div key={c.country} className="flex items-center justify-between">
                    <span className="text-sm text-foreground">{c.country}</span>
                    <div className="flex items-center gap-2">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{
                          width: `${Math.max(20, (c.count / (countryData[0]?.count || 1)) * 120)}px`,
                        }}
                      />
                      <span className="text-sm font-medium text-muted-foreground w-8 text-right">
                        {c.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">Aucun visiteur enregistré</p>
            )}
          </CardContent>
        </Card>

        {/* Recent Visitors Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Users size={18} /> Visiteurs récents
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentVisitors.length > 0 ? (
              <div className="max-h-[350px] overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs">IP</TableHead>
                      <TableHead className="text-xs">Pays</TableHead>
                      <TableHead className="text-xs">Ville</TableHead>
                      <TableHead className="text-xs">Page</TableHead>
                      <TableHead className="text-xs">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentVisitors.map((v: any) => (
                      <TableRow key={v.id}>
                        <TableCell className="text-xs font-mono">{v.ip_address}</TableCell>
                        <TableCell className="text-xs">{v.country}</TableCell>
                        <TableCell className="text-xs">{v.city}</TableCell>
                        <TableCell className="text-xs">{v.page}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">
                          {new Date(v.created_at).toLocaleDateString("fr-FR", {
                            day: "2-digit",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">Aucun visiteur enregistré</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
