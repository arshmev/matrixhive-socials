import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout } from "@/components/SubPageLayout";
import { motion } from "framer-motion";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects & Portfolio — Matrixhive Innovations" },
      { name: "description", content: "Autonomous robots, AI detection systems, defence drones, and medical APIs." },
      { property: "og:title", content: "Projects & Portfolio — Matrixhive" },
      { property: "og:description", content: "From hospital robots to Indian Defence drone tech." },
    ],
  }),
});

const projects = [
  {
    title: "RICE Autonomous Robot",
    desc: "Engineered a fully functional, autonomous receptionist and hospital robot designed for commercial deployment, featuring autonomous door-opening capabilities.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop",
  },
  {
    title: "Govt. Elephant Detection System",
    desc: "Developed a critical night-vision AI detection system utilized by the Indian government to protect agricultural fields and farmers from nocturnal wildlife incursions.",
    img: "https://images.unsplash.com/photo-1531746790095-e6b1258b7e31?w=800&h=450&fit=crop",
  },
  {
    title: "Indian Defence Drone Tech",
    desc: "Designed, built, and deployed highly specialized, custom drone technology for strategic Indian Defence applications.",
    img: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=800&h=450&fit=crop",
  },
  {
    title: "Universal Medical API",
    desc: "Architected a complex API and library ecosystem allowing specialized medical equipment to connect seamlessly with standard monitoring interfaces.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function ProjectsPage() {
  return (
    <SubPageLayout title="Projects & Portfolio">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-5">
        {projects.map((proj, i) => (
          <motion.div key={proj.title} variants={fadeUp} className="glass-card rounded-xl overflow-hidden">
            <div className="relative aspect-video bg-secondary overflow-hidden">
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-full object-cover opacity-80"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
            </div>
            <div className="p-4">
              <p className="font-display text-sm font-semibold text-foreground uppercase tracking-wide">{proj.title}</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{proj.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SubPageLayout>
  );
}
