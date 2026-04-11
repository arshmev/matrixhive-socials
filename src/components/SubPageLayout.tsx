import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface SubPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function SubPageLayout({ title, children }: SubPageLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsla(185, 100%, 50%, 0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-lg mx-auto pb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="sticky top-0 z-20 px-4 pt-4 pb-3 bg-background/80 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center justify-center w-9 h-9 rounded-full glass-card text-muted-foreground hover:text-primary hover:border-glow transition-all"
            >
              <ArrowLeft size={18} />
            </Link>
            <h1 className="font-display text-lg font-semibold tracking-wide uppercase text-foreground">
              {title}
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="px-6 pt-4"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
