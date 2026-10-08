import React from "react";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "@/components/reactbits/ScrollReveal";
import { TextReveal3D } from "@/components/reactbits/TextReveal3D";
import { Sparkles, Layers } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/reactbits/ScrollStack";

const projects = [
  {
    id: 1,
    title: "Cinematic 3D Portfolio & WebGL",
    technologies: ["Three.js", "WebGL", "GSAP", "ScrollTrigger", "Lenis"],
    category: "Interactive 3D Experience & Motion",
    description: "Premium spatial 3D web experience with scroll-driven camera choreography, real-time GLSL lighting, terminal HUD, and Lenis inertial scrolling.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/vignesh-palanichamy/threejs-portfolio",
    size: "large" as const
  },
  {
    id: 2,
    title: "Zenith Mentor Code Platform",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Judge0"],
    category: "EdTech & Interactive Sandbox",
    description: "Real-time code execution and automated test case evaluation platform built with React, Next.js, Node.js, MongoDB, and Judge0 API.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    link: "https://coder-blush.vercel.app",
    size: "large" as const
  },
  {
    id: 3,
    title: "The Reciprocal Solutions",
    technologies: ["Next.js", "Tailwind CSS", "Figma", "Shopify"],
    category: "Commercial Digital Storefront",
    description: "Dynamic client commerce & corporate web system engineered with Next.js and Tailwind CSS, focusing on sub-second page loads and responsive aesthetics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "https://thereciprocalsolutions.com",
    size: "large" as const
  },
  {
    id: 4,
    title: "Cognoid Systems Production Architecture",
    technologies: ["Next.js", "Node.js", "MongoDB", "REST APIs"],
    category: "Enterprise Full-Stack Web App",
    description: "Engineered two high-availability production web systems with Next.js, Node.js, and MongoDB, handling secure workflows and scalable data pipelines.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "https://www.cognoidsystems.com",
    size: "large" as const
  },
  {
    id: 5,
    title: "Relationswork Editorial & Content Hub",
    technologies: ["Next.js", "CMS", "Role-based auth", "Webflow"],
    category: "Culture & Publishing Platform",
    description: "Modern content-driven storytelling website featuring a full publication engine, secure role-based login, and rich micro-interactions.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    link: "https://www.relationswork.in",
    size: "large" as const
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="w-full space-y-6">
      {/* Section Header with Scroll Reveal */}
      <ScrollReveal yOffset={30} duration={0.5}>
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <TextReveal3D
              text="Featured Work"
              as="h2"
              className="text-2xl font-bold text-foreground tracking-tight"
            />
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.03] border border-black/[0.06] text-[11px] font-mono text-gray-500 shadow-sm">
            <Sparkles className="w-3 h-3 text-cyan-600" />
            <span>Interactive Stack</span>
          </div>
        </div>
      </ScrollReveal>

      {/* Aardvark-style Storytelling Scroll Stack */}
      <ScrollStack useWindowScroll itemDistance={36} itemStackDistance={24} stackPosition="14%" scaleEndPosition="6%" baseScale={0.92} itemScale={0.025}>
        {projects.map((project, idx) => (
          <ScrollStackItem key={project.id} itemClassName="w-full">
            <ProjectCard
              index={idx + 1}
              title={project.title}
              technologies={project.technologies}
              category={project.category}
              description={project.description}
              image={project.image}
              link={project.link}
              size="large"
            />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};
