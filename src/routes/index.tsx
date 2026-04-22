import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin, Mail, ExternalLink, MapPin, ChevronRight } from "lucide-react";

// --- NEW IMPORTS FOR POPUP AND SLIDER ---
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mohd Arshad Mew — Co-founder, Matrixhive Innovations" },
      { name: "description", content: "Robotics, IoT & Autonomous Systems. 12+ Hackathons, 70+ Enterprise Builds, IIT & NIT workshops." },
    ],
  }),
});

// --- UPDATED METRICS WITH IMAGE ARRAYS ---
// Replace these paths with the actual names of the files you drop into the public/images/ folders.
const metrics = [
  { 
    value: "12+", 
    label: "Hackathons Won",
    images: [
      "/hackathons/1.png",
      "/hackathons/2.png",
      "/hackathons/3.png",
      "/hackathons/h1.jpg",
      "/hackathons/h2.jpg",
      "/hackathons/h3.jpg",
      "/hackathons/h4.jpg",
      "/hackathons/h5.jpg",
      "/hackathons/h6.jpg",
      "/hackathons/h7.jpg",
    ]
  },
  { 
    value: "70+", 
    label: "IoT Builds",
    images: [
      "/iot/i1.jpg",
      "/iot/i10.png",
      "/iot/i11.png",
      "/iot/i12.png",
      "/iot/i13.png",
      "/iot/i14.jpeg",
      "/iot/i15.jpeg",
      "/iot/i16.jpeg",
      "/iot/i17.jpeg",
      "/iot/i18.jpg",
      "/iot/i19.jpg",
      "/iot/i2.jpg",
      "/iot/i20.jpg",
      "/iot/i21.jpg",
      "/iot/i22.jpg",
      "/iot/i23.jpg",
      "/iot/i24.jpg",
      "/iot/i25.jpg",
      "/iot/i26.jpg",
      "/iot/i3.jpg",
      "/iot/i4.jpg",
      "/iot/i5.jpg",
      "/iot/i6.png",
      "/iot/i7.png",
      "/iot/i8.png",
      "/iot/i9.png",
    ]
  },
  { 
    value: "10+", 
    label: "Robotic Systems",
    images: [
      "/robotics/r.png",
      "/robotics/r1.jpeg",
      "/robotics/r12.jpeg",
      "/robotics/r13.jpg",
      "/robotics/r14.jpeg",
      "/robotics/r15.jpeg",
      "/robotics/r16.jpeg",
      "/robotics/r17.jpeg",
      "/robotics/r18.jpeg",
      "/robotics/r19.png",
      "/robotics/r2.jpeg",
      "/robotics/r20.png",
      "/robotics/r21.png",
      "/robotics/r22.png",
      "/robotics/r3.jpeg",
      "/robotics/r4.jpeg",
      "/robotics/r5.jpeg",
      "/robotics/r6.jpeg",
      "/robotics/r7.jpeg",
    ]
  },
  { 
    value: "4+", 
    label: "Workshops",
    images: [
      "/workshops/w1.webp",
      "/workshops/w10.jpeg",
      "/workshops/w11.jpeg",
      "/workshops/w12.jpeg",
      "/workshops/w13.jpeg",
      "/workshops/w14.jpeg",
      "/workshops/w15.jpeg",
      "/workshops/w16.jpeg",
      "/workshops/w17.png",
      "/workshops/w18.png",
      "/workshops/w19.png",
      "/workshops/w2.jpeg",
      "/workshops/w20.png",
      "/workshops/w21.jpg",
      "/workshops/w3.jpeg",
      "/workshops/w4.jpeg",
      "/workshops/w5.jpeg",
      "/workshops/w6.jpeg",
      "/workshops/w7.jpeg",
      "/workshops/w8.jpeg",
      "/workshops/w9.jpeg",
    ]
  },
];
const projects = [
  {
    title: "RICE Autonomous Robot",
    tag: "Robotics",
    desc: "Fully autonomous hospital receptionist robot with door-opening capability — built for commercial deployment.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop",
  },
  {
    title: "Govt. Elephant Detection",
    tag: "AI · Computer Vision",
    desc: "Night-vision AI system deployed by the Indian government to protect farmers from nocturnal wildlife.",
    img: "https://images.unsplash.com/photo-1531746790095-e6b1258b7e31?w=800&h=450&fit=crop",
  },
  {
    title: "Indian Defence Drone",
    tag: "Aerospace · Defence",
    desc: "Custom drone technology built and deployed for Indian Defence strategic applications.",
    img: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=800&h=450&fit=crop",
  },
  {
    title: "Universal Medical API",
    desc: "Ecosystem allowing specialized medical equipment to connect seamlessly with standard monitoring interfaces.",
    tag: "HealthTech · API",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",
  },
];

const workshops = [
  { partner: "IIT Delhi", duration: "2 Days", topic: "Advanced Robotics & Deep Tech" },
  { partner: "NIT Jalandhar", duration: "3 Days", topic: "IoT Enterprise & Autonomous Systems" },
  { partner: "CGC University", duration: "5 Days", topic: "Core Robotics Architecture" },
  { partner: "Tricity Schools", duration: "14 Days", topic: "Robotics & IoT Fundamentals Bootcamp" },
];

const WHATSAPP_NUMBER = "918278696121";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohd-arshad-mew-4120a1209/";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

function Index() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">

      {/* Background effects */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsla(185, 100%, 50%, 0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-5 pb-16">

        {/* ─── HERO ─── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pt-12 pb-8"
        >
          {/* Top line accent */}
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mb-8 mx-auto" />

          {/* Company + founders */}
          <div className="text-center mb-6 flex justify-center">
            <a 
              href="https://matrixhive.tech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground uppercase transition-colors group-hover:text-primary">
                Matrixhive
              </h1>
              <p className="font-display text-xs font-medium tracking-[0.35em] uppercase text-gradient-neon mt-1">
                Innovations Pvt Ltd
              </p>
            </a>
          </div>

          {/* Founders */}
          <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground mb-4">
            <span>
              <span className="text-foreground font-semibold">Mohd Arshad Mew</span>
              <span className="text-primary mx-1.5">·</span>Co-founder & MD
            </span>
            <span>
              <span className="text-foreground font-semibold">Rishabh Naithani</span>
              <span className="text-primary mx-1.5">·</span>Co-founder & CTO
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-5">
            <MapPin size={12} className="text-primary" />
            <span>India · Chandigarh Tricity</span>
          </div>

          {/* Tagline */}
          <p className="text-center text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed mb-8">
            Engineering the Future of <span className="text-foreground">Hands-on Education</span> &{" "}
            <span className="text-foreground">Autonomous Solutions</span>.
          </p>

          {/* ── PRIMARY CTAs ── */}
          <div className="flex gap-3 justify-center mb-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Arshad%2C%20I%20came%20across%20your%20profile%20and%20would%20love%20to%20connect!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 active:scale-95 hover:brightness-110"
              style={{ background: "#25D366" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 active:scale-95 hover:brightness-110"
              style={{ background: "#0A66C2" }}
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          {/* Secondary: email + website */}
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <a href="mailto:contact@matrixhive.tech" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail size={12} />
              contact@matrixhive.tech
            </a>
            <span className="w-px h-3 bg-border" />
            <a href="https://matrixhive.tech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <ExternalLink size={12} />
              matrixhive.tech
            </a>
          </div>
        </motion.div>

        {/* ─── POPUP METRICS GRID ─── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-4 gap-2 mb-10"
        >
          {metrics.map((m) => (
            <Dialog key={m.label}>
              <DialogTrigger asChild>
                <motion.div
                  variants={fadeUp}
                  className="glass-card rounded-xl py-3 px-2 text-center cursor-pointer transition-all hover:border-primary/50 hover:bg-white/5 active:scale-95"
                >
                  <p className="font-display text-xl font-bold text-gradient-neon">{m.value}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{m.label}</p>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-xl bg-background/95 backdrop-blur-xl border-border p-2 sm:p-6 overflow-hidden">
                <DialogTitle className="sr-only">{m.label} Portfolio</DialogTitle>
                
                {m.images && m.images.length > 0 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {m.images.map((imgSrc, index) => (
                        <CarouselItem key={index} className="flex items-center justify-center">
                          <img 
                            src={imgSrc} 
                            alt={`${m.label} preview ${index + 1}`} 
                            className="w-full max-h-[60vh] object-contain rounded-lg"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-md border-border" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-md border-border" />
                  </Carousel>
                ) : (
                  <div className="flex items-center justify-center h-48">
                    <p className="text-sm text-muted-foreground">Images coming soon...</p>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>

        {/* ─── PROJECTS ─── */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <p className="font-display text-xs font-semibold tracking-[0.25em] uppercase text-primary">
              Projects & Portfolio
            </p>
            <Link to="/projects" className="flex items-center gap-0.5 text-xs text-muted-foreground hover:text-primary transition-colors">
              All <ChevronRight size={12} />
            </Link>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="space-y-3"
          >
            {projects.map((proj, i) => (
              <motion.div key={proj.title} variants={fadeUp} className="glass-card rounded-xl overflow-hidden flex gap-0">
                {/* Image */}
                <div className="relative w-28 sm:w-36 shrink-0 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover opacity-80"
                    loading={i === 0 ? "eager" : "lazy"}
                    style={{ minHeight: "90px" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30" />
                </div>
                {/* Content */}
                <div className="p-3.5 flex flex-col justify-center">
                  <span className="inline-block text-[10px] font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5 mb-1.5 self-start">
                    {proj.tag}
                  </span>
                  <p className="font-display text-sm font-semibold text-foreground leading-tight">{proj.title}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">{proj.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ─── WORKSHOPS ─── */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <p className="font-display text-xs font-semibold tracking-[0.25em] uppercase text-primary">
              Workshops Conducted
            </p>
            <Link to="/workshops" className="flex items-center gap-0.5 text-xs text-muted-foreground hover:text-primary transition-colors">
              Details <ChevronRight size={12} />
            </Link>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 gap-2.5"
          >
            {workshops.map((w) => (
              <motion.div key={w.partner} variants={fadeUp} className="glass-card rounded-xl p-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-display text-sm font-semibold text-foreground">{w.partner}</p>
                  <span className="shrink-0 text-[10px] font-medium text-primary/80 bg-primary/10 rounded-full px-1.5 py-0.5">{w.duration}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{w.topic}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Video placeholder — ready when you have clips */}
          <div className="mt-3 glass-card rounded-xl p-4 border-dashed text-center">
            <p className="text-xs text-muted-foreground">Workshop clips coming soon</p>
            <p className="text-[10px] text-muted-foreground/60 mt-0.5">Add your YouTube links to show session highlights</p>
          </div>
        </section>

        {/* ─── WHAT WE DO ─── */}
        <section className="mb-10">
          <p className="font-display text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">
            What We Do
          </p>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="space-y-2.5"
          >
            {[
              { org: "Matrixhive Innovations", desc: "Building robotics hardware kits, IoT enterprise solutions & autonomous systems." },
              { org: "OpenDroids", desc: "Leading mechanical deployment of the DH116 dexterous robotic hand." },
              { org: "Allspark Inc", desc: "Strategic co-founder driving deep tech innovation." },
            ].map((item) => (
              <motion.div key={item.org} variants={fadeUp} className="glass-card rounded-xl p-4 flex gap-3 items-start">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.org}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ─── BOTTOM CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 mb-10"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Arshad%2C%20I%20visited%20your%20profile%20and%20would%20like%20to%20discuss%20a%20collaboration.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-display font-semibold text-sm uppercase tracking-wider text-white transition-all active:scale-[0.98] hover:brightness-110"
            style={{ background: "#25D366" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Connect on WhatsApp
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-display font-semibold text-sm uppercase tracking-wider text-white transition-all active:scale-[0.98] hover:brightness-110"
            style={{ background: "#0A66C2" }}
          >
            <Linkedin size={18} />
            View LinkedIn Profile
          </a>
        </motion.div>

        {/* ─── FOOTER ─── */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs text-muted-foreground"
        >
          <div className="h-px w-16 mx-auto bg-border mb-4" />
          <p>© {new Date().getFullYear()} Matrixhive Innovations Pvt Ltd</p>
          <a href="https://matrixhive.tech" target="_blank" rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 text-primary hover:underline underline-offset-2">
            matrixhive.tech <ExternalLink size={10} />
          </a>
        </motion.footer>

      </div>
    </div>
  );
}
