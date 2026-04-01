import { useEffect, useState } from "react";
import { Heart, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

interface Props {
  articleId?: string;
  programId?: string;
  title: string;
}

const LikesShareBar = ({ articleId, programId, title }: Props) => {
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const { t } = useTranslation();

  const getAnonKey = () => {
    const key = articleId ? `like_article_${articleId}` : `like_program_${programId}`;
    return localStorage.getItem(key);
  };

  const setAnonKey = (id: string) => {
    const key = articleId ? `like_article_${articleId}` : `like_program_${programId}`;
    localStorage.setItem(key, id);
  };

  const removeAnonKey = () => {
    const key = articleId ? `like_article_${articleId}` : `like_program_${programId}`;
    localStorage.removeItem(key);
  };

  const fetchLikes = async () => {
    let query = supabase.from("likes").select("*", { count: "exact" });
    if (articleId) query = query.eq("article_id", articleId);
    if (programId) query = query.eq("program_id", programId);
    const { count } = await query;
    setLikesCount(count || 0);

    if (user) {
      let userQuery = supabase.from("likes").select("id").eq("user_id", user.id);
      if (articleId) userQuery = userQuery.eq("article_id", articleId);
      if (programId) userQuery = userQuery.eq("program_id", programId);
      const { data } = await userQuery;
      setLiked((data?.length || 0) > 0);
    } else {
      setLiked(!!getAnonKey());
    }
  };

  useEffect(() => { fetchLikes(); }, [articleId, programId, user]);

  const toggleLike = async () => {
    if (liked) {
      if (user) {
        let query = supabase.from("likes").delete().eq("user_id", user.id);
        if (articleId) query = query.eq("article_id", articleId);
        if (programId) query = query.eq("program_id", programId);
        await query;
      } else {
        const anonId = getAnonKey();
        if (anonId) await supabase.from("likes").delete().eq("id", anonId);
        removeAnonKey();
      }
    } else {
      const payload: any = {};
      if (user) payload.user_id = user.id;
      if (articleId) payload.article_id = articleId;
      if (programId) payload.program_id = programId;
      const { data } = await supabase.from("likes").insert(payload).select("id").single();
      if (data && !user) setAnonKey(data.id);
    }
    fetchLikes();
  };

  const url = typeof window !== "undefined" ? window.location.href : "";
  const shareLinks = [
    { icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, label: "Facebook" },
    { icon: Twitter, href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, label: "X" },
    { icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, label: "LinkedIn" },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    toast({ title: t("social.linkCopied") });
    setShowShare(false);
  };

  return (
    <div className="flex items-center gap-4 py-4">
      <Button
        variant={liked ? "default" : "outline"}
        size="sm"
        onClick={toggleLike}
        className="gap-2"
      >
        <Heart size={16} className={liked ? "fill-current" : ""} />
        {likesCount}
      </Button>

      <div className="relative">
        <Button variant="outline" size="sm" onClick={() => setShowShare(!showShare)} className="gap-2">
          <Share2 size={16} /> {t("social.share")}
        </Button>
        {showShare && (
          <div className="absolute bottom-full mb-2 left-0 bg-card border border-border rounded-lg p-2 flex gap-1 shadow-lg z-50">
            {shareLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-primary">
                <s.icon size={18} />
              </a>
            ))}
            <button onClick={copyLink}
              className="h-9 w-9 flex items-center justify-center rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-primary">
              <LinkIcon size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LikesShareBar;
