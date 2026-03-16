import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.includes("type=recovery")) {
      toast({ title: t("resetPassword.invalidLink"), description: t("resetPassword.invalidLinkDesc"), variant: "destructive" });
    }
  }, []);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: t("resetPassword.success"), description: t("resetPassword.successDesc") });
      navigate("/login");
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container max-w-md">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8 rounded-xl border border-border bg-card">
          <h1 className="text-2xl font-semibold text-foreground mb-2 text-center">{t("resetPassword.title")}</h1>
          <p className="text-sm text-muted-foreground text-center mb-6">{t("resetPassword.desc")}</p>
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t("resetPassword.label")}</label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required minLength={6} />
            </div>
            <Button variant="hero" type="submit" disabled={loading} className="w-full">
              {loading ? t("resetPassword.loading") : t("resetPassword.submit")}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ResetPassword;
