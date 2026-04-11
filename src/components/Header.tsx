import { motion } from "framer-motion";
import { Linkedin, Instagram, Globe } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/matrixhive", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/matrixhive", label: "Instagram" },
  { icon: Globe, href: "https://matrixhive.tech", label: "Website" },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative px-6 pt-12 pb-8 text-center"
    >
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-4"
      >
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Matrixhive
        </h1>
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-gradient-accent mt-1">
          Innovations Pvt Ltd
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="space-y-2 mb-6"
      >
        <div className="flex flex-col items-center gap-0.5 text-sm text-muted-foreground">
          <span><span className="text-foreground font-medium">Mohd Arshad Mew</span> — Co-founder & MD</span>
          <span><span className="text-foreground font-medium">Rishabh Naithani</span> — Co-founder & CTO</span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed mb-6"
      >
        Building the Hardware LeetCode Ecosystem & Autonomous Solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.4 }}
        className="flex items-center justify-center gap-3"
      >
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary/50 text-muted-foreground transition-all duration-200 hover:text-primary hover:border-glow hover:glow-accent active:scale-95"
          >
            <Icon size={18} />
          </a>
        ))}
      </motion.div>
    </motion.header>
  );
}
