import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Bitcoin, DollarSign, Euro, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const WALLET = "sight@blink.sv";

const currencies = [
  { code: "BIF", icon: Banknote, color: "text-emerald-400" },
  { code: "USD", icon: DollarSign, color: "text-green-400" },
  { code: "EUR", icon: Euro, color: "text-blue-400" },
  { code: "BTC", icon: Bitcoin, color: "text-amber-400" },
];

const PaymentSection = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(WALLET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="p-6 rounded-xl border border-border bg-card"
    >
      <h3 className="font-semibold text-foreground mb-4">{t("payment.title")}</h3>
      <p className="text-sm text-muted-foreground mb-5">{t("payment.desc")}</p>

      {/* Accepted currencies */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {currencies.map((c) => (
          <div key={c.code} className="flex items-center gap-2 p-3 rounded-lg border border-border bg-background/50">
            <c.icon size={18} className={c.color} />
            <span className="text-sm font-medium text-foreground">{c.code}</span>
          </div>
        ))}
      </div>

      {/* Bitcoin wallet */}
      <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
        <div className="flex items-center gap-2 mb-2">
          <Bitcoin size={16} className="text-primary" />
          <span className="text-xs font-mono text-primary uppercase tracking-wider">{t("payment.btcWallet")}</span>
        </div>
        <div className="flex items-center gap-2">
          <code className="flex-1 text-sm text-foreground font-mono bg-background/50 px-3 py-2 rounded border border-border truncate">
            {WALLET}
          </code>
          <Button variant="outline" size="icon" className="shrink-0 h-9 w-9" onClick={copy}>
            {copied ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentSection;
