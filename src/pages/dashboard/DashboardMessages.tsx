import { useEffect, useState } from "react";
import { Mail, MailOpen, Trash2, Reply } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

interface Message {
  id: string;
  full_name: string;
  email: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

const DashboardMessages = () => {
  const { isAdmin } = useAuth();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [selected, setSelected] = useState<Message | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      setMessages(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const toggleRead = async (msg: Message) => {
    const { error } = await supabase
      .from("contact_messages")
      .update({ is_read: !msg.is_read })
      .eq("id", msg.id);
    if (!error) {
      setMessages((m) => m.map((x) => (x.id === msg.id ? { ...x, is_read: !x.is_read } : x)));
      if (selected?.id === msg.id) setSelected({ ...msg, is_read: !msg.is_read });
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm("Supprimer ce message ?")) return;
    const { error } = await supabase.from("contact_messages").delete().eq("id", id);
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      setMessages((m) => m.filter((x) => x.id !== id));
      if (selected?.id === id) setSelected(null);
      toast({ title: "Message supprimé" });
    }
  };

  const unreadCount = messages.filter((m) => !m.is_read).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-1">
          Messages de contact
          {unreadCount > 0 && (
            <Badge variant="destructive" className="ml-3">{unreadCount} non lu{unreadCount > 1 ? "s" : ""}</Badge>
          )}
        </h1>
        <p className="text-muted-foreground">Messages envoyés via le formulaire de contact.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-base">Boîte de réception ({messages.length})</CardTitle>
          </CardHeader>
          <CardContent className="p-0 max-h-[600px] overflow-auto">
            {loading ? (
              <p className="p-4 text-sm text-muted-foreground">Chargement...</p>
            ) : messages.length === 0 ? (
              <p className="p-4 text-sm text-muted-foreground">Aucun message.</p>
            ) : (
              <div className="divide-y divide-border">
                {messages.map((msg) => (
                  <button
                    key={msg.id}
                    onClick={() => {
                      setSelected(msg);
                      if (!msg.is_read) toggleRead(msg);
                    }}
                    className={`w-full text-left p-4 hover:bg-muted/50 transition-colors ${
                      selected?.id === msg.id ? "bg-muted" : ""
                    } ${!msg.is_read ? "border-l-2 border-primary" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className={`text-sm ${!msg.is_read ? "font-semibold" : "font-medium"} text-foreground truncate`}>
                        {msg.full_name}
                      </span>
                      {!msg.is_read && <Mail size={14} className="text-primary shrink-0 mt-0.5" />}
                    </div>
                    <p className="text-xs text-muted-foreground truncate mb-1">{msg.subject}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(msg.created_at).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Detail */}
        <Card className="lg:col-span-2">
          {selected ? (
            <>
              <CardHeader className="border-b border-border">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-lg break-words">{selected.subject}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium text-foreground">{selected.full_name}</span> &lt;{selected.email}&gt;
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(selected.created_at).toLocaleString("fr-FR")}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Button variant="outline" size="icon" onClick={() => toggleRead(selected)} title={selected.is_read ? "Marquer non lu" : "Marquer lu"}>
                      {selected.is_read ? <Mail size={16} /> : <MailOpen size={16} />}
                    </Button>
                    <Button variant="outline" size="icon" asChild title="Répondre">
                      <a href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject)}`}>
                        <Reply size={16} />
                      </a>
                    </Button>
                    {isAdmin && (
                      <Button variant="outline" size="icon" onClick={() => deleteMessage(selected.id)} title="Supprimer">
                        <Trash2 size={16} className="text-destructive" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">{selected.message}</p>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex items-center justify-center h-[400px]">
              <p className="text-sm text-muted-foreground">Sélectionnez un message pour le lire.</p>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default DashboardMessages;
