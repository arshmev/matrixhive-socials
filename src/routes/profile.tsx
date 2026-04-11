import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout } from "@/components/SubPageLayout";
import { motion } from "framer-motion";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
  head: () => ({
    meta: [
      { title: "Company Profile — Matrixhive Innovations" },
      { name: "description", content: "Matrixhive system metrics and global operations overview." },
      { property: "og:title", content: "Company Profile — Matrixhive Innovations" },
      { property: "og:description", content: "12+ Hackathons Won, 70+ IoT Enterprise Builds, and more." },
    ],
  }),
});

const metrics = [
  { value: "12+", label: "Hackathons Won" },
  { value: "70+", label: "IoT Enterprise Builds" },
  { value: "10+", label: "Major Robotic Systems" },
  { value: "5+", label: "Global Client Deployments" },
];

const operations = [
  {
    org: "OpenDroids",
    role: "Robotics Researchers (1.4+ Yrs)",
    desc: "Leading mechanical deployment of the DH116 dexterous hand.",
  },
  {
    org: "Allspark Inc",
    role: "Co-Founders",
    desc: "Driving strategic technological innovation.",
  },
  {
    org: "MatrixHive Innovations",
    role: "Founders & Lead Architects",
    desc: "Building the hardware education ecosystem and autonomous solutions.",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

function ProfilePage() {
  return (
    <SubPageLayout title="Company Profile">
      {/* SYSTEM_METRICS */}
      <div className="mb-8">
        <p className="font-display text-xs font-medium tracking-[0.25em] uppercase text-primary mb-4">
          System_Metrics
        </p>
        <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-2 gap-3">
          {metrics.map((m) => (
            <motion.div key={m.label} variants={fadeUp} className="glass-card rounded-xl p-4 text-center">
              <p className="font-display text-2xl font-bold text-gradient-neon">{m.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* GLOBAL_OPERATIONS */}
      <div>
        <p className="font-display text-xs font-medium tracking-[0.25em] uppercase text-primary mb-4">
          Global_Operations
        </p>
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-3">
          {operations.map((op) => (
            <motion.div key={op.org} variants={fadeUp} className="glass-card rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p className="text-sm font-semibold text-foreground">{op.org}</p>
              </div>
              <p className="text-xs font-medium text-primary/80 ml-3.5 mb-1">{op.role}</p>
              <p className="text-xs text-muted-foreground ml-3.5">{op.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SubPageLayout>
  );
}
