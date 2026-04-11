import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout } from "@/components/SubPageLayout";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/workshops")({
  component: WorkshopsPage,
  head: () => ({
    meta: [
      { title: "Workshops — Matrixhive Innovations" },
      { name: "description", content: "Hands-on Robotics & IoT workshops with IIT Delhi, NIT Jalandhar, CGC, and schools." },
      { property: "og:title", content: "Workshops — Matrixhive Innovations" },
      { property: "og:description", content: "14-day bootcamps and institutional R&D partnerships." },
    ],
  }),
});

const workshops = [
  {
    partner: "Chandigarh-Tricity Area Schools",
    location: "Mohali, Panchkula, Chandigarh",
    topic: "Hands-on Robotics & IoT Fundamentals",
    duration: "14 Days",
    desc: "Intensive technical bootcamps designed to transition students from theory to physical hardware.",
    workshopImg: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=340&fit=crop",
    logoImg: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=120&h=120&fit=crop",
  },
  {
    partner: "IIT Delhi",
    topic: "Advanced Robotics & Deep Tech Integration",
    duration: "2 Days",
    desc: "Elite technical workshop and hardware partnership for engineering students.",
    workshopImg: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&h=340&fit=crop",
    logoImg: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=120&h=120&fit=crop",
  },
  {
    partner: "NIT Jalandhar",
    topic: "IoT Enterprise Builds & Autonomous Systems",
    duration: "3 Days",
    desc: "Practical deployment and system architecture training.",
    workshopImg: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&h=340&fit=crop",
    logoImg: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=120&h=120&fit=crop",
  },
  {
    partner: "CGC University",
    topic: "Core Robotics Architecture",
    duration: "5 Days",
    desc: "Hands-on hardware ecosystem training and R&D collaboration.",
    workshopImg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=340&fit=crop",
    logoImg: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=120&fit=crop",
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

function WorkshopsPage() {
  return (
    <SubPageLayout title="Workshops">
      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-5">
        {workshops.map((w) => (
          <motion.div key={w.partner} variants={fadeUp} className="glass-card rounded-xl overflow-hidden">
            {/* Image area with overlapping logo */}
            <div className="relative aspect-video bg-secondary overflow-hidden">
              <img
                src={w.workshopImg}
                alt={`${w.partner} workshop`}
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
              {/* Institution logo overlay */}
              <div className="absolute bottom-3 right-3 w-12 h-12 rounded-lg overflow-hidden border-2 border-border shadow-lg">
                <img src={w.logoImg} alt={`${w.partner} logo`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>

            <div className="p-4 space-y-2">
              <p className="font-display text-sm font-semibold text-foreground uppercase tracking-wide">{w.partner}</p>
              {"location" in w && w.location && (
                <p className="text-xs text-muted-foreground">{w.location}</p>
              )}
              <p className="text-xs text-primary font-medium">{w.topic}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock size={12} /> {w.duration}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">{w.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8 mb-4"
      >
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider glow-neon-strong hover:brightness-110 transition-all active:scale-[0.98]"
        >
          Schedule a Call With Us
        </a>
      </motion.div>
    </SubPageLayout>
  );
}
