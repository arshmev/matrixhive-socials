import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { MenuGrid } from "@/components/MenuGrid";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Matrixhive Innovations — Robotics & IoT" },
      { name: "description", content: "Engineering the Future of Hands-on Education & Autonomous Solutions. Digital business card for Matrixhive Innovations Pvt Ltd." },
      { property: "og:title", content: "Matrixhive Innovations Pvt Ltd" },
      { property: "og:description", content: "Robotics, IoT, and autonomous solutions startup." },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsla(185, 100%, 50%, 0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-lg mx-auto pb-16">
        <Header />
        <MenuGrid />

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-12 text-center text-xs text-muted-foreground px-6"
        >
          <div className="h-px w-16 mx-auto bg-border mb-4" />
          <p>© {new Date().getFullYear()} Matrixhive Innovations Pvt Ltd</p>
          <p className="mt-1">
            <a href="https://matrixhive.tech" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2">
              matrixhive.tech
            </a>
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
