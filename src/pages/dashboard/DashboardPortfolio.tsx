import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const DashboardPortfolio = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAdmin } = useAuth();
  const { toast } = useToast();
  const { t } = useTranslation();

  const fetchItems = async () => {
    const { data } = await supabase.from("portfolios").select("*").order("created_at", { ascending: false });
    setItems(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm(t("dashboard.deletePortfolio"))) return;
    const { error } = await supabase.from("portfolios").delete().eq("id", id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: t("dashboard.portfolioDeleted") }); fetchItems(); }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-foreground">{t("dashboard.portfolio")}</h1>
        <Button variant="hero" size="sm" asChild>
          <Link to="/dashboard/portfolio/new"><Plus size={16} className="mr-1" /> {t("dashboard.newPortfolio")}</Link>
        </Button>
      </div>

      {loading ? (
        <div className="space-y-3">{[1,2].map(i => <div key={i} className="h-16 bg-card border border-border rounded-lg animate-pulse" />)}</div>
      ) : items.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground"><p>{t("dashboard.noPortfolio")}</p></div>
      ) : (
        <div className="space-y-3">
          {items.map((p) => (
            <div key={p.id} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground truncate">{p.title}</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                  <span>{new Date(p.created_at).toLocaleDateString()}</span>
                  {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary"><ExternalLink size={12} /> Link</a>}
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Button variant="ghost" size="icon" asChild><Link to={`/dashboard/portfolio/${p.id}`}><Edit size={16} /></Link></Button>
                {isAdmin && <Button variant="ghost" size="icon" onClick={() => handleDelete(p.id)} className="text-destructive hover:text-destructive"><Trash2 size={16} /></Button>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPortfolio;
