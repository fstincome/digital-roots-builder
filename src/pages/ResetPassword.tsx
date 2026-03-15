import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check for recovery token in URL hash
    const hash = window.location.hash;
    if (!hash.includes("type=recovery")) {
      toast({ title: "Lien invalide", description: "Ce lien de réinitialisation n'est pas valide.", variant: "destructive" });
    }
  }, []);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Mot de passe mis à jour !", description: "Vous pouvez maintenant vous connecter." });
      navigate("/login");
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container max-w-md">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8 rounded-xl border border-border bg-card">
          <h1 className="text-2xl font-semibold text-foreground mb-2 text-center">Nouveau mot de passe</h1>
          <p className="text-sm text-muted-foreground text-center mb-6">Choisissez un nouveau mot de passe sécurisé.</p>
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Nouveau mot de passe</label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required minLength={6} />
            </div>
            <Button variant="hero" type="submit" disabled={loading} className="w-full">
              {loading ? "Mise à jour..." : "Mettre à jour"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ResetPassword;
