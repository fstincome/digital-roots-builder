import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks/useAuth";

interface MenuItem {
  id: string;
  key: string;
  label_key: string;
  path: string;
  position: number;
  is_active: boolean;
}

const DashboardMenu = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { t } = useTranslation();
  const { isAdmin } = useAuth();

  const fetchItems = async () => {
    const { data } = await supabase.from("menu_items").select("*").order("position");
    setItems((data as MenuItem[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const persistOrder = async (list: MenuItem[]) => {
    setItems(list);
    await Promise.all(list.map((it, i) =>
      supabase.from("menu_items").update({ position: i + 1 }).eq("id", it.id)
    ));
  };

  const move = async (index: number, dir: -1 | 1) => {
    const target = index + dir;
    if (target < 0 || target >= items.length) return;
    const copy = [...items];
    [copy[index], copy[target]] = [copy[target], copy[index]];
    await persistOrder(copy);
  };

  const toggleActive = async (item: MenuItem) => {
    const { error } = await supabase.from("menu_items").update({ is_active: !item.is_active }).eq("id", item.id);
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    setItems(items.map(i => i.id === item.id ? { ...i, is_active: !i.is_active } : i));
  };

  if (!isAdmin) {
    return <div className="text-muted-foreground">{t("dashboard.adminOnly", "Admin access only")}</div>;
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">{t("dashboard.menuTitle", "Menu de navigation")}</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {t("dashboard.menuDesc", "Réorganisez ou désactivez les pages affichées dans le menu public.")}
        </p>
      </div>

      {loading ? (
        <div className="space-y-3">{[1,2,3,4].map(i => <div key={i} className="h-16 bg-card border border-border rounded-lg animate-pulse" />)}</div>
      ) : (
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={item.id} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card">
              <div className="flex flex-col gap-1">
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => move(i, -1)} disabled={i === 0}>
                  <ArrowUp size={14} />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => move(i, 1)} disabled={i === items.length - 1}>
                  <ArrowDown size={14} />
                </Button>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{t(item.label_key, item.key)}</span>
                  {!item.is_active && <Badge variant="secondary">{t("dashboard.hidden", "Caché")}</Badge>}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{item.path}</div>
              </div>
              <Switch checked={item.is_active} onCheckedChange={() => toggleActive(item)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardMenu;
