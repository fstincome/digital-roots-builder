import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PaymentSection from "@/components/PaymentSection";
import { useTranslation } from "react-i18next";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  full_name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = contactSchema.safeParse({
      full_name: fd.get("full_name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast({ title: "Formulaire invalide", description: "Veuillez vérifier vos informations.", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await (supabase as any).from("contact_messages").insert(parsed.data);
    setLoading(false);
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: t("contact.successTitle"), description: t("contact.successDesc") });
    form.reset();
  };

  return (
    <>
      <SEO
        title="Contact — SIGHT Africa | Devis & Support IT au Burundi"
        description="Contactez SIGHT Africa pour vos projets IT, hardware, software, hébergement ou formation. Réponse rapide, devis gratuit. Gitega, Burundi."
      />
      <PageBreadcrumb
        title={t("contact.title")}
        subtitle={t("contact.desc")}
        items={[{ label: t("nav.contact") }]}
      />
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="space-y-5 p-8 rounded-xl border border-border bg-card">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.fullName")}</label>
                  <Input name="full_name" placeholder="Jean Ndikumana" required maxLength={100} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.email")}</label>
                  <Input name="email" type="email" placeholder="jean@entreprise.bi" required maxLength={255} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.subject")}</label>
                <Input name="subject" placeholder={t("contact.subjectPlaceholder")} required maxLength={200} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.message")}</label>
                <Textarea name="message" placeholder={t("contact.messagePlaceholder")} rows={5} required maxLength={2000} />
              </div>
              <Button variant="hero" type="submit" disabled={loading} className="w-full">
                {loading ? t("contact.sending") : t("contact.send")} <Send className="ml-2" size={16} />
              </Button>
            </motion.form>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">{t("contact.coordinates")}</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, text: "business@sightnetwork.org", href: "mailto:business@sightnetwork.org" },
                    { icon: Phone, text: "+257 69 898 947", href: "tel:+25769898947" },
                    { icon: MapPin, text: "Gitega, Burundi" },
                  ].map((c) => (
                    <div key={c.text} className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <c.icon className="text-primary" size={18} />
                      </div>
                      {c.href ? (
                        <a href={c.href} className="text-muted-foreground hover:text-primary transition-colors">{c.text}</a>
                      ) : (
                        <span className="text-muted-foreground">{c.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h4 className="font-semibold text-foreground mb-2">{t("contact.hours")}</h4>
                <p className="text-sm text-muted-foreground">{t("contact.weekdays")}</p>
                <p className="text-sm text-muted-foreground">{t("contact.saturday")}</p>
              </div>

              <PaymentSection />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
