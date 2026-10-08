import { Linkedin, Github, Mail, Phone, ExternalLink } from "lucide-react";
import { SocialCard } from "./SocialCard";

const socialLinks = [
  {
    name: "GitHub",
    badge: "@vignesh-palanichamy • Open Source",
    icon: Github,
    href: "https://github.com/vignesh-palanichamy",
    accentColor: "#1d1d1f"
  },
  {
    name: "LinkedIn",
    badge: "Professional Profile & Endorsements",
    icon: Linkedin,
    href: "https://linkedin.com/in/vigneshpalanichamy",
    accentColor: "#0077b5"
  },
  {
    name: "Email Directly",
    badge: "Vigneshpalanichamy.in@gmail.com",
    icon: Mail,
    href: "mailto:Vigneshpalanichamy.in@gmail.com",
    accentColor: "#ff9d00"
  },
  {
    name: "Phone / WhatsApp",
    badge: "+91 6380068630 • Coimbatore, IN",
    icon: Phone,
    href: "tel:+916380068630",
    accentColor: "#00e500"
  },
  {
    name: "Zenith Mentor Platform",
    badge: "Interactive Code Execution Sandbox",
    icon: ExternalLink,
    href: "https://coder-blush.vercel.app",
    accentColor: "#00ecef"
  }
];

export const SocialsSection = () => {
  return (
    <section className="w-full flex flex-col gap-2.5">
      <div className="flex items-center justify-between px-1 mb-1">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 font-mono">
          Connect & Channels
        </h3>
        <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
          ● Fast response
        </span>
      </div>
      {socialLinks.map((social) => (
        <SocialCard
          key={social.name}
          name={social.name}
          badge={social.badge}
          icon={social.icon}
          href={social.href}
          accentColor={social.accentColor}
        />
      ))}
    </section>
  );
};