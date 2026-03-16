import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const DashboardArticles = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAdmin } = useAuth();
  const { toast } = useToast();
  const { t } = useTranslation();

  const fetchArticles = async () => {
    const { data } = await supabase.from("articles").select("*").order("created_at", { ascending: false });
    setArticles(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchArticles(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm(t("dashboard.deleteArticle"))) return;
    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: t("dashboard.articleDeleted") }); fetchArticles(); }
  };

  const statusLabel = (s: string) => s === "published" ? t("dashboard.published") : s === "draft" ? t("dashboard.draft") : t("dashboard.archived");

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-foreground">{t("dashboard.articles")}</h1>
        <Button variant="hero" size="sm" asChild>
          <Link to="/dashboard/articles/new"><Plus size={16} className="mr-1" /> {t("dashboard.newArticle")}</Link>
        </Button>
      </div>

      {loading ? (
        <div className="space-y-3">{[1,2,3].map(i => <div key={i} className="h-16 bg-card border border-border rounded-lg animate-pulse" />)}</div>
      ) : articles.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground"><p>{t("dashboard.noArticles")}</p></div>
      ) : (
        <div className="space-y-3">
          {articles.map((a) => (
            <div key={a.id} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-foreground truncate">{a.title}</h3>
                  <Badge variant={a.status === "published" ? "default" : "secondary"} className="shrink-0">{statusLabel(a.status)}</Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{new Date(a.created_at).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1"><Eye size={12} /> {a.views}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Button variant="ghost" size="icon" asChild><Link to={`/dashboard/articles/${a.id}`}><Edit size={16} /></Link></Button>
                {isAdmin && <Button variant="ghost" size="icon" onClick={() => handleDelete(a.id)} className="text-destructive hover:text-destructive"><Trash2 size={16} /></Button>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardArticles;
