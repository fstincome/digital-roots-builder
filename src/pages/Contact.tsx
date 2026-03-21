import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PaymentSection from "@/components/PaymentSection";
import { useTranslation } from "react-i18next";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: t("contact.successTitle"), description: t("contact.successDesc") });
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
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
                  <Input placeholder="Jean Ndikumana" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.email")}</label>
                  <Input type="email" placeholder="jean@entreprise.bi" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.subject")}</label>
                <Input placeholder={t("contact.subjectPlaceholder")} required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.message")}</label>
                <Textarea placeholder={t("contact.messagePlaceholder")} rows={5} required />
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
                    { icon: Mail, text: "contact@sightafrica.bi", href: "mailto:contact@sightafrica.bi" },
                    { icon: Phone, text: "+257 61 000 000", href: "tel:+25761000000" },
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
