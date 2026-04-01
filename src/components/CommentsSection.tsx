import { useEffect, useState } from "react";
import { MessageSquare, Trash2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

interface Props {
  articleId?: string;
  programId?: string;
}

const CommentsSection = ({ articleId, programId }: Props) => {
  const [comments, setComments] = useState<any[]>([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, isAdmin } = useAuth();
  const { toast } = useToast();
  const { t } = useTranslation();

  const fetchComments = async () => {
    let query = supabase.from("comments").select("*, profiles(full_name, avatar_url)").order("created_at", { ascending: true });
    if (articleId) query = query.eq("article_id", articleId);
    if (programId) query = query.eq("program_id", programId);
    const { data } = await query;
    setComments(data || []);
  };

  useEffect(() => { fetchComments(); }, [articleId, programId]);

  const handleSubmit = async () => {
    if (!content.trim()) return;
    setLoading(true);
    const payload: any = { content: content.trim() };
    if (user) payload.user_id = user.id;
    if (articleId) payload.article_id = articleId;
    if (programId) payload.program_id = programId;
    const { error } = await supabase.from("comments").insert(payload);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { setContent(""); fetchComments(); }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    await supabase.from("comments").delete().eq("id", id);
    fetchComments();
  };

  return (
    <div className="mt-12 border-t border-border pt-8">
      <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <MessageSquare size={20} className="text-primary" />
        {t("social.comments")} ({comments.length})
      </h3>

      <div className="flex gap-3 mb-8">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={t("social.writeComment")}
          rows={2}
          className="flex-1"
        />
        <Button variant="hero" size="icon" onClick={handleSubmit} disabled={loading || !content.trim()}>
          <Send size={16} />
        </Button>
      </div>

      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c.id} className="p-4 rounded-lg border border-border bg-card">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                  {(c.profiles?.full_name || "A")[0].toUpperCase()}
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground">{c.profiles?.full_name || "Anonyme"}</span>
                  <span className="text-xs text-muted-foreground ml-2">{new Date(c.created_at).toLocaleDateString()}</span>
                </div>
              </div>
              {(user?.id === c.user_id || isAdmin) && (
                <Button variant="ghost" size="icon" onClick={() => handleDelete(c.id)} className="h-7 w-7 text-destructive">
                  <Trash2 size={14} />
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{c.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
