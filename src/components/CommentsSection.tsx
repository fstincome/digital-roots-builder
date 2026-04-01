import { useEffect, useState } from "react";
import { MessageSquare, Trash2, Send, Reply, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

interface Props {
  articleId?: string;
  programId?: string;
}

interface Comment {
  id: string;
  content: string;
  author_name: string | null;
  user_id: string | null;
  parent_id: string | null;
  created_at: string;
  profiles?: { full_name: string | null; avatar_url: string | null } | null;
  replies?: Comment[];
}

const CommentsSection = ({ articleId, programId }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [replyingTo, setReplyingTo] = useState<Comment | null>(null);
  const [loading, setLoading] = useState(false);
  const { user, isAdmin } = useAuth();
  const { toast } = useToast();
  const { t } = useTranslation();

  const fetchComments = async () => {
    let query = supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: true });
    if (articleId) query = query.eq("article_id", articleId);
    if (programId) query = query.eq("program_id", programId);
    const { data } = await query;

    // Build threaded structure
    const all = (data || []) as unknown as Comment[];
    const topLevel: Comment[] = [];
    const childMap: Record<string, Comment[]> = {};

    all.forEach((c) => {
      if (c.parent_id) {
        if (!childMap[c.parent_id]) childMap[c.parent_id] = [];
        childMap[c.parent_id].push(c);
      } else {
        topLevel.push(c);
      }
    });

    topLevel.forEach((c) => {
      c.replies = childMap[c.id] || [];
    });

    setComments(topLevel);
  };

  useEffect(() => {
    fetchComments();
  }, [articleId, programId]);

  const handleSubmit = async () => {
    if (!content.trim() || !authorName.trim()) {
      toast({ title: "Erreur", description: "Veuillez remplir votre nom et votre commentaire.", variant: "destructive" });
      return;
    }
    setLoading(true);
    const payload: Record<string, unknown> = {
      content: content.trim(),
      author_name: authorName.trim(),
    };
    if (user) payload.user_id = user.id;
    if (articleId) payload.article_id = articleId;
    if (programId) payload.program_id = programId;
    if (replyingTo) payload.parent_id = replyingTo.id;

    const { error } = await supabase.from("comments").insert(payload as any);
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      setContent("");
      setReplyingTo(null);
      fetchComments();
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    await supabase.from("comments").delete().eq("id", id);
    fetchComments();
  };

  const getDisplayName = (c: Comment) => {
    if (c.author_name && c.author_name !== "Anonyme") return c.author_name;
    return "Anonyme";
  };

  const CommentCard = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
    <div className={`p-4 rounded-lg border border-border bg-card ${isReply ? "ml-8 mt-2" : ""}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
            {getDisplayName(comment)[0].toUpperCase()}
          </div>
          <div>
            <span className="text-sm font-medium text-foreground">{getDisplayName(comment)}</span>
            <span className="text-xs text-muted-foreground ml-2">
              {new Date(comment.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {!isReply && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setReplyingTo(comment);
                setContent("");
              }}
              className="h-7 w-7 text-muted-foreground hover:text-primary"
            >
              <Reply size={14} />
            </Button>
          )}
          {(user?.id === comment.user_id || isAdmin) && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleDelete(comment.id)}
              className="h-7 w-7 text-destructive"
            >
              <Trash2 size={14} />
            </Button>
          )}
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{comment.content}</p>
    </div>
  );

  return (
    <div className="mt-12 border-t border-border pt-8">
      <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <MessageSquare size={20} className="text-primary" />
        {t("social.comments")} ({comments.reduce((acc, c) => acc + 1 + (c.replies?.length || 0), 0)})
      </h3>

      {/* Reply indicator */}
      {replyingTo && (
        <div className="flex items-center gap-2 mb-2 text-sm text-primary bg-primary/5 rounded-lg px-3 py-2">
          <Reply size={14} />
          <span>
            Réponse à <strong>{getDisplayName(replyingTo)}</strong>
          </span>
          <Button variant="ghost" size="icon" className="h-5 w-5 ml-auto" onClick={() => setReplyingTo(null)}>
            <X size={12} />
          </Button>
        </div>
      )}

      {/* Comment form */}
      <div className="space-y-3 mb-8">
        <Input
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Votre nom *"
          className="max-w-xs"
          maxLength={50}
        />
        <div className="flex gap-3">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={replyingTo ? "Votre réponse..." : (t("social.writeComment") || "Votre commentaire...")}
            rows={2}
            className="flex-1"
            maxLength={1000}
          />
          <Button
            variant="hero"
            size="icon"
            onClick={handleSubmit}
            disabled={loading || !content.trim() || !authorName.trim()}
          >
            <Send size={16} />
          </Button>
        </div>
      </div>

      {/* Comments list */}
      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c.id}>
            <CommentCard comment={c} />
            {c.replies?.map((r) => (
              <CommentCard key={r.id} comment={r} isReply />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
