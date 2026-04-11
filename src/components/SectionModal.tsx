import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { SectionId } from "./MenuGrid";
import { Building2, Cpu, Trophy, GraduationCap, ChevronRight } from "lucide-react";

interface Props {
  activeSection: SectionId | null;
  onClose: () => void;
}

const sections: Record<SectionId, { icon: typeof Building2; title: string; content: React.ReactNode }> = {
  profile: {
    icon: Building2,
    title: "Company Profile",
    content: (
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          <span className="text-foreground font-medium">Matrixhive Innovations</span> is a robotics and IoT venture
          building the ecosystem for hardware education and autonomous solutions across India.
        </p>
        <p>
          Our vision merges competitive hardware engineering with real-world deployment — from smart
          agriculture tools to hospital-grade autonomous robots — creating impact where software
          meets the physical world.
        </p>
        <div className="grid grid-cols-2 gap-3 pt-2">
          {[
            { label: "Founded", value: "2023" },
            { label: "Focus", value: "Robotics & IoT" },
            { label: "Team", value: "Engineers & Educators" },
            { label: "Reach", value: "Pan-India" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg bg-secondary/50 border border-border p-3">
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="text-sm font-medium text-foreground mt-0.5">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  kits: {
    icon: Cpu,
    title: "Robotics Kits",
    content: (
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          Our educational hardware kits empower students and makers to learn robotics, embedded
          systems, and IoT through hands-on building — the <span className="text-foreground font-medium">"Hardware LeetCode"</span> way.
        </p>
        <div className="space-y-2 pt-2">
          {[
            { name: "Starter Bot Kit", desc: "Arduino-based line follower and obstacle avoider" },
            { name: "IoT Sensor Lab", desc: "ESP32 platform with 10+ sensor modules" },
            { name: "Autonomous Drive Kit", desc: "ROS-compatible chassis with LiDAR integration" },
          ].map((kit) => (
            <div key={kit.name} className="flex items-start gap-3 rounded-lg bg-secondary/50 border border-border p-3">
              <ChevronRight size={16} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">{kit.name}</p>
                <p className="text-xs text-muted-foreground">{kit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  projects: {
    icon: Trophy,
    title: "Projects & Portfolio",
    content: (
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          A track record of execution — from international hackathons to production deployments
          solving real-world problems.
        </p>
        <div className="space-y-3 pt-2">
          {[
            {
              title: "12+ International Hackathon Wins",
              desc: "Consistent top finishes in robotics & AI competitions globally.",
            },
            {
              title: "AI Elephant Detection System",
              desc: "Computer vision system protecting farmland from elephant intrusions — deployed in rural regions.",
            },
            {
              title: "Autonomous Hospital Robots",
              desc: "Self-navigating delivery robots deployed in hospital corridors for contactless logistics.",
            },
          ].map((proj) => (
            <div key={proj.title} className="rounded-lg bg-secondary/50 border border-border p-4">
              <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {proj.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1 ml-3.5">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  workshops: {
    icon: GraduationCap,
    title: "Workshops",
    content: (
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          Intensive, hands-on learning programs designed to take students from zero to building
          functional robots and IoT systems.
        </p>
        <div className="rounded-lg bg-secondary/50 border border-border p-4 space-y-3">
          <div>
            <p className="text-sm font-semibold text-foreground">14-Day Robotics & IoT Bootcamp</p>
            <p className="text-xs text-muted-foreground mt-1">
              Comprehensive program covering Arduino, ESP32, sensor integration, motor control,
              basic computer vision, and a final capstone project.
            </p>
          </div>
          <div className="h-px bg-border" />
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Duration", value: "14 Days" },
              { label: "Format", value: "In-person" },
              { label: "Level", value: "Beginner+" },
              { label: "Certificate", value: "Included" },
            ].map((d) => (
              <div key={d.label}>
                <p className="text-xs text-muted-foreground">{d.label}</p>
                <p className="text-sm font-medium text-foreground">{d.value}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Custom workshops available for colleges and organizations. <a href="https://matrixhive.tech" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Get in touch →</a>
        </p>
      </div>
    ),
  },
};

export function SectionModal({ activeSection, onClose }: Props) {
  if (!activeSection) return null;
  const section = sections[activeSection];
  const Icon = section.icon;

  return (
    <Dialog open={!!activeSection} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-card border-border max-w-md mx-auto max-h-[85vh] overflow-y-auto sm:rounded-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary">
              <Icon size={18} />
            </div>
            <DialogTitle className="text-lg font-semibold text-foreground">
              {section.title}
            </DialogTitle>
          </div>
          <DialogDescription className="sr-only">
            Details about {section.title}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2">{section.content}</div>
      </DialogContent>
    </Dialog>
  );
}
