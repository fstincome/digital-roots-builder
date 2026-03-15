import { motion } from "framer-motion";

const navItems = [
  { label: "Gouvernance", href: "#gouvernance" },
  { label: "Services", href: "#services" },
  { label: "Vision 2030", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="font-mono text-sm font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-lg font-semibold text-foreground tracking-tight">
            SIGHT<span className="text-muted-foreground font-normal ml-1 text-sm">Africa</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden sm:inline-flex h-9 px-4 items-center rounded-md bg-primary text-primary-foreground text-sm font-medium hover:brightness-90 active:scale-[0.98] transition-all duration-200"
        >
          Nous contacter
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
