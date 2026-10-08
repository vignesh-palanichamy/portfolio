import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, GraduationCap } from "lucide-react";
import profileImage from "@/assets/profile-image.png";
import signatureImg from "@/assets/signature.png";

const experienceData = [
  {
    period: "Feb 2025 - Present",
    title: "SOFTWARE DEVELOPER INTERN",
    company: "Fusion Space",
    details: "Developing 3D web technologies with Three.js and WebGL. Automating workflows with AI tools and architecting backend APIs with Node.js, Express & MongoDB."
  },
  {
    period: "Dec 2023 - Jan 2025 (1 yr 2 mos)", 
    title: "FULL STACK WEB DEVELOPER INTERN",
    company: "NextOneSolution",
    details: "Built clean, responsive UIs and deployed full-stack web applications using React.js, Next.js, Node.js, and MongoDB with focus on speed and maintainability."
  },
  {
    period: "Sep 2023 - Dec 2023 (4 mos)",
    title: "SOFTWARE ENGINEER INTERN", 
    company: "The Reciprocal Solutions",
    details: "Engineered responsive, user-friendly client interfaces using React.js and modern CSS, participating in agile sprints and collaborative code reviews."
  }
];

const educationData = [
  {
    period: "2023 - 2027 (Expected Graduation)",
    degree: "B.Tech. in Industrial Biotechnology",
    institution: "Government College of Technology, Coimbatore"
  },
  {
    period: "2023",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "MCTRM Higher Secondary School"
  }
];

export const AboutHeroCard = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-4">
      <Card className="liquid-glass rounded-3xl p-5 lg:p-8 border-0">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Profile Image & Education Column */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="w-full aspect-square max-w-[280px] mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-white/15 bg-white/5 p-1 shadow-2xl">
              <img 
                src={profileImage} 
                alt="Vignesh Palanichamy Profile"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

            {/* Education Box */}
            <div className="liquid-glass-inner rounded-2xl p-4 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-gray-700" />
                <span>Education History</span>
              </div>
              <div className="space-y-3 pt-1">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="text-xs space-y-0.5">
                    <span className="text-muted-foreground text-[11px] block">{edu.period}</span>
                    <h5 className="font-semibold text-foreground/90">{edu.degree}</h5>
                    <p className="text-muted-foreground/80 text-[11px]">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio & Experience Column */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-8">
            {/* Introduction */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary/70 mb-1 block">
                Full Stack Developer • 3D & WebGL
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight">
                Vignesh Palanichamy
              </h2>
              <p className="text-foreground/75 text-sm sm:text-base leading-relaxed">
                Hello, I'm Vignesh Palanichamy, a Full Stack Developer passionate about building fast, scalable, and user-friendly web applications. I primarily work with React.js, Next.js, Node.js, and MongoDB to develop modern full-stack solutions with clean UI and efficient backend systems. I also enjoy exploring interactive web experiences using Three.js and WebGL. I'm a quick learner who enjoys solving real-world problems and turning ideas into practical digital products.
              </p>
            </div>

            {/* Experience Section */}
            <div className="space-y-5">
              <h3 className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider font-mono">
                WORK EXPERIENCE
              </h3>
              
              <div className="space-y-4">
                {experienceData.map((exp, index) => (
                  <div key={index} className="liquid-glass-inner rounded-2xl p-4 border border-white/5 space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h4 className="text-foreground/95 text-sm sm:text-base font-semibold">
                        {exp.title}
                      </h4>
                      <span className="text-primary/70 font-mono text-[11px]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-700 text-xs font-medium">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed pt-1">
                      {exp.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature Block */}
            <div className="liquid-glass-inner rounded-2xl p-4 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">
                  Author Signature
                </span>
                <span className="text-xs font-semibold text-foreground/90">
                  Vignesh Palanichamy
                </span>
              </div>
              <img 
                src={signatureImg}
                alt="Vignesh Palanichamy Signature"
                className="h-10 w-auto object-contain opacity-60"
                style={{ filter: "brightness(0)" }}
              />
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <Button 
                asChild
                variant="outline" 
                className="w-full bg-foreground/10 border-foreground/20 text-foreground hover:bg-foreground/20 uppercase text-xs font-medium tracking-wide py-3"
              >
                <a href="tel:+916380068630">
                  <Phone className="w-3.5 h-3.5 mr-2" />
                  Call: +91 6380068630
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="w-full bg-foreground/5 border-foreground/15 text-foreground hover:bg-foreground/15 uppercase text-xs font-medium tracking-wide py-3"
              >
                <a href="mailto:Vigneshpalanichamy.in@gmail.com">
                  <Mail className="w-3.5 h-3.5 mr-2" />
                  Email Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};