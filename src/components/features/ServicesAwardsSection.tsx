import { Card } from "@/components/ui/card";
import { Code, Globe, Database, Cpu, Layers, Sparkles, Award, CheckCircle } from "lucide-react";
import { TextReveal3D } from "@/components/reactbits/TextReveal3D";

const services = [
  { name: "Full Stack Development", desc: "React, Next.js, Node.js & MongoDB", icon: Code },
  { name: "3D & WebGL Experiences", desc: "Three.js, Blender, interactive scenes", icon: Globe },
  { name: "API & Backend Systems", desc: "Express.js, RESTful microservices", icon: Cpu },
  { name: "Database Architecture", desc: "MongoDB, Firebase & secure data", icon: Database },
  { name: "Responsive UI Systems", desc: "Tailwind CSS & modern UX standards", icon: Layers },
  { name: "AI Tooling & Automations", desc: "AI workflows & smart chatbots", icon: Sparkles }
];

const achievements = [
  {
    title: "AI-Powered Student Assistance Chatbot",
    subtitle: "SIH 2024 — Selected at College Level",
    period: "2024",
    icon: Sparkles
  },
  {
    title: "Node.js Certified Developer", 
    subtitle: "Comprehensive Backend & REST APIs",
    period: "Udemy • 2023",
    icon: Award
  },
  {
    title: "B.Tech Industrial Biotechnology",
    subtitle: "Government College of Technology",
    period: "2023 - 2027", 
    icon: CheckCircle
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    subtitle: "MCTRM Higher Secondary School",
    period: "2023",
    icon: CheckCircle
  }
];

export const ServicesAwardsSection = () => {
  return (
    <section id="services" className="w-full max-w-7xl mx-auto px-4 py-4">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Services Card */}
        <Card className="liquid-glass rounded-3xl p-5 lg:p-8 border-0">
          <div className="flex items-center justify-between mb-8">
            <TextReveal3D
              text="Services & Capabilities"
              as="h2"
              className="text-2xl font-semibold text-foreground tracking-tight"
            />
            <span className="text-xs font-mono text-muted-foreground">What I Deliver</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="liquid-glass-inner rounded-2xl p-4 flex flex-col space-y-2 transition-all duration-300 group border-0 hover:scale-[1.02]"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-sm">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {service.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Card>

        {/* Achievements Card */}
        <Card className="liquid-glass rounded-3xl p-5 lg:p-8 border-0">
          <div className="flex items-center justify-between mb-8">
            <TextReveal3D
              text="Achievements & Certifications"
              as="h2"
              className="text-2xl font-semibold text-foreground tracking-tight"
            />
            <span className="text-xs font-mono text-muted-foreground">Verified</span>
          </div>
          
          <div className="h-[380px] overflow-hidden relative">
            <div className="animate-marquee-up space-y-3.5">
              {achievements.map((item, index) => {
                const AwardIcon = item.icon;
                return (
                  <Card 
                    key={index}
                    className="liquid-glass-inner rounded-2xl p-4 transition-all duration-300 group flex-shrink-0 border-0 hover:scale-[1.02]"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl shrink-0">
                        <AwardIcon className="w-5 h-5 text-purple-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-foreground font-semibold text-sm sm:text-base truncate">
                          {item.title}
                        </h3>
                        <p className="text-foreground/60 text-xs truncate">
                          {item.subtitle}
                        </p>
                        <span className="text-primary/70 text-[11px] font-mono">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </Card>
                );
              })}
              
              {/* Duplicate set for infinite smooth marquee */}
              {achievements.map((item, index) => {
                const AwardIcon = item.icon;
                return (
                  <Card 
                    key={`duplicate-${index}`}
                    className="liquid-glass-inner rounded-2xl p-4 transition-all duration-300 group flex-shrink-0 border-0 hover:scale-[1.02]"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl shrink-0">
                        <AwardIcon className="w-5 h-5 text-purple-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-foreground font-semibold text-sm sm:text-base truncate">
                          {item.title}
                        </h3>
                        <p className="text-foreground/60 text-xs truncate">
                          {item.subtitle}
                        </p>
                        <span className="text-primary/70 text-[11px] font-mono">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};