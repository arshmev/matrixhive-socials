import { motion } from "framer-motion";
import { Building2, Cpu, Trophy, GraduationCap } from "lucide-react";
import { useState } from "react";
import { SectionModal } from "./SectionModal";

export type SectionId = "profile" | "kits" | "projects" | "workshops";

const menuItems: { id: SectionId; icon: typeof Building2; title: string; subtitle: string }[] = [
  { id: "profile", icon: Building2, title: "Company Profile", subtitle: "Vision & mission" },
  { id: "kits", icon: Cpu, title: "Robotics Kits", subtitle: "Hardware platforms" },
  { id: "projects", icon: Trophy, title: "Projects & Portfolio", subtitle: "Achievements" },
  { id: "workshops", icon: GraduationCap, title: "Workshops", subtitle: "Learning programs" },
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
  const [active, setActive] = useState<SectionId | null>(null);

  return (
    <>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 gap-3 px-6 sm:max-w-md sm:mx-auto"
      >
        {menuItems.map(({ id, icon: Icon, title, subtitle }) => (
          <motion.button
            key={id}
            variants={cardVariant}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActive(id)}
            className="group relative flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-5 text-left transition-all duration-200 hover:border-glow hover:glow-accent active:bg-secondary/80"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary/10">
              <Icon size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <SectionModal activeSection={active} onClose={() => setActive(null)} />
    </>
  );
}
