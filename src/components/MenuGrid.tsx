import { motion } from "framer-motion";
import { Building2, Cpu, Trophy, GraduationCap, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";

const menuItems = [
  { id: "profile", icon: Building2, title: "Company Profile", subtitle: "Vision & metrics", to: "/profile" as const },
  { id: "kits", icon: Cpu, title: "Robotics Kits", subtitle: "Hardware platforms", href: "https://matrixhive.tech/learning" },
  { id: "projects", icon: Trophy, title: "Projects & Portfolio", subtitle: "Achievements", to: "/projects" as const },
  { id: "workshops", icon: GraduationCap, title: "Workshops", subtitle: "Learning programs", to: "/workshops" as const },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export function MenuGrid() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 gap-3 px-6 sm:max-w-md sm:mx-auto"
    >
      {menuItems.map((item) => {
        const Icon = item.icon;
        const inner = (
          <>
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary/10">
              <Icon size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                {item.title}
                {"href" in item && <ExternalLink size={12} className="text-muted-foreground" />}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{item.subtitle}</p>
            </div>
          </>
        );

        const className = "group relative flex flex-col items-start gap-3 rounded-xl glass-card p-5 text-left transition-all duration-200 hover:border-glow hover:glow-neon active:scale-[0.97]";

        if ("href" in item) {
          return (
            <motion.a
              key={item.id}
              variants={cardVariant}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {inner}
            </motion.a>
          );
        }

        return (
          <motion.div key={item.id} variants={cardVariant}>
            <Link to={item.to} className={className}>
              {inner}
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
