import { useState } from "react";
import { z } from "zod";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";

const emailSchema = z.string().trim().email().max(255);

const NewsletterSignup = () => {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast({ title: t("newsletter.invalidEmail"), variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: parsed.data, language: i18n.language });
    setLoading(false);
    if (error) {
      if (error.code === "23505") {
        toast({ title: t("newsletter.alreadyTitle"), description: t("newsletter.alreadyDesc") });
      } else {
        toast({ title: t("newsletter.errorTitle"), description: error.message, variant: "destructive" });
      }
      return;
    }
    toast({ title: t("newsletter.successTitle"), description: t("newsletter.successDesc") });
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
        <Input
          type="email"
          placeholder={t("newsletter.placeholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-9"
          required
          maxLength={255}
        />
      </div>
      <Button type="submit" variant="hero" disabled={loading}>
        {loading ? "..." : t("newsletter.subscribe")}
      </Button>
    </form>
  );
};

export default NewsletterSignup;
