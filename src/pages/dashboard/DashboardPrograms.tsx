import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const DashboardPrograms = () => {
  const [programs, setPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAdmin } = useAuth();
  const { toast } = useToast();
  const { t } = useTranslation();

  const fetchPrograms = async () => {
    const { data } = await supabase.from("programs").select("*").order("created_at", { ascending: false });
    setPrograms(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchPrograms(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm(t("dashboard.deleteProgram"))) return;
    const { error } = await supabase.from("programs").delete().eq("id", id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: t("dashboard.programDeleted") }); fetchPrograms(); }
  };

  const statusLabel = (s: string) => s === "active" ? t("dashboard.active") : s === "completed" ? t("dashboard.completed") : s === "draft" ? t("dashboard.draft") : t("dashboard.archived");

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-foreground">{t("dashboard.programs")}</h1>
        <Button variant="hero" size="sm" asChild>
          <Link to="/dashboard/programmes/new"><Plus size={16} className="mr-1" /> {t("dashboard.newProgram")}</Link>
        </Button>
      </div>

      {loading ? (
        <div className="space-y-3">{[1,2].map(i => <div key={i} className="h-16 bg-card border border-border rounded-lg animate-pulse" />)}</div>
      ) : programs.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground"><p>{t("dashboard.noPrograms")}</p></div>
      ) : (
        <div className="space-y-3">
          {programs.map((p) => (
            <div key={p.id} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-foreground truncate">{p.title}</h3>
                  <Badge variant={p.status === "active" ? "default" : "secondary"} className="shrink-0">{statusLabel(p.status)}</Badge>
                </div>
                <span className="text-xs text-muted-foreground">{new Date(p.created_at).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Button variant="ghost" size="icon" asChild><Link to={`/dashboard/programmes/${p.id}`}><Edit size={16} /></Link></Button>
                {isAdmin && <Button variant="ghost" size="icon" onClick={() => handleDelete(p.id)} className="text-destructive hover:text-destructive"><Trash2 size={16} /></Button>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPrograms;
