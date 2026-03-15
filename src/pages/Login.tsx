import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
  const [mode, setMode] = useState<"login" | "forgot">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      navigate("/dashboard");
    }
    setLoading(false);
  };

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Email envoyé", description: "Vérifiez votre boîte de réception pour réinitialiser votre mot de passe." });
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-20 bg-background">
      <div className="container max-w-md">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl border border-border bg-card">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-mono font-bold text-primary-foreground">S</span>
              </div>
            </Link>
            <h1 className="text-2xl font-semibold text-foreground">
              {mode === "login" ? "Connexion" : "Mot de passe oublié"}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {mode === "login" ? "Accédez à votre tableau de bord" : "Entrez votre email"}
            </p>
          </div>

          <form onSubmit={mode === "login" ? handleLogin : handleForgot} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="vous@exemple.com" required />
            </div>
            {mode === "login" && (
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Mot de passe</label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required minLength={6} />
              </div>
            )}
            <Button variant="hero" type="submit" disabled={loading} className="w-full">
              {loading ? "Chargement..." : mode === "login" ? "Se connecter" : "Envoyer le lien"}
            </Button>
          </form>

          <div className="mt-6 text-center space-y-2">
            {mode === "login" ? (
              <button onClick={() => setMode("forgot")} className="text-sm text-primary hover:underline block mx-auto">Mot de passe oublié ?</button>
            ) : (
              <button onClick={() => setMode("login")} className="text-sm text-primary hover:underline block mx-auto">Retour à la connexion</button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Login;
