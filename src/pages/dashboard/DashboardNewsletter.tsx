import { useEffect, useState } from "react";
import { Trash2, Download, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

interface Subscriber {
  id: string;
  email: string;
  language: string | null;
  is_active: boolean;
  created_at: string;
}

const DashboardNewsletter = () => {
  const { isAdmin } = useAuth();
  const { toast } = useToast();
  const [subs, setSubs] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSubs = async () => {
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      setSubs(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSubs();
  }, []);

  const deleteSub = async (id: string) => {
    if (!confirm("Supprimer cet abonné ?")) return;
    const { error } = await supabase.from("newsletter_subscribers").delete().eq("id", id);
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      setSubs((s) => s.filter((x) => x.id !== id));
      toast({ title: "Abonné supprimé" });
    }
  };

  const exportCsv = () => {
    const csv = [
      "Email,Langue,Actif,Date d'inscription",
      ...subs.map((s) =>
        [s.email, s.language || "", s.is_active ? "Oui" : "Non", new Date(s.created_at).toISOString()].join(",")
      ),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `newsletter-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold text-foreground mb-1">Newsletter</h1>
          <p className="text-muted-foreground">Liste des abonnés à votre newsletter.</p>
        </div>
        {subs.length > 0 && (
          <Button variant="outline" onClick={exportCsv}>
            <Download size={16} className="mr-2" /> Exporter CSV
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-medium">Total abonnés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{subs.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-medium">Abonnés actifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{subs.filter((s) => s.is_active).length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground font-medium">Cette semaine</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              {subs.filter((s) => new Date(s.created_at) > new Date(Date.now() - 7 * 86400000)).length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Mail size={18} /> Abonnés ({subs.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-sm text-muted-foreground">Chargement...</p>
          ) : subs.length === 0 ? (
            <p className="text-sm text-muted-foreground">Aucun abonné pour le moment.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Langue</TableHead>
                  <TableHead>Date d'inscription</TableHead>
                  {isAdmin && <TableHead className="text-right">Actions</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {subs.map((s) => (
                  <TableRow key={s.id}>
                    <TableCell className="font-medium">{s.email}</TableCell>
                    <TableCell className="uppercase text-xs">{s.language || "—"}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(s.created_at).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })}
                    </TableCell>
                    {isAdmin && (
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => deleteSub(s.id)}>
                          <Trash2 size={16} className="text-destructive" />
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardNewsletter;
