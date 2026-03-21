import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import breadcrumbBg from "@/assets/breadcrumb-bg.jpg";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  title: string;
  subtitle?: string;
  items: BreadcrumbItem[];
}

const PageBreadcrumb = ({ title, subtitle, items }: PageBreadcrumbProps) => (
  <section className="relative pt-24 pb-16 overflow-hidden">
    <div className="absolute inset-0">
      <img src={breadcrumbBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
    </div>
    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-4">
          <Link to="/" className="hover:text-primary transition-colors">
            <Home size={16} />
          </Link>
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <ChevronRight size={14} className="text-white/40" />
              {item.href ? (
                <Link to={item.href} className="hover:text-primary transition-colors">{item.label}</Link>
              ) : (
                <span className="text-primary font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">{title}</h1>
        {subtitle && <p className="text-white/70 mt-2 max-w-2xl">{subtitle}</p>}
      </motion.div>
    </div>
  </section>
);

export default PageBreadcrumb;
