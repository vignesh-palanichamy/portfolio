import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { TextReveal3D } from "@/components/reactbits/TextReveal3D";

export const ContactInfoCard = () => {
  return (
    <Card className="liquid-glass rounded-3xl p-5 lg:p-8 h-full flex flex-col border-0">
      {/* Contact Info Header */}
      <div className="mb-6 flex-shrink-0">
        <div className="mb-2">
          <TextReveal3D
            text="Let's Connect & Build"
            as="h2"
            className="text-2xl font-bold text-foreground tracking-tight"
          />
        </div>
        <p className="text-xs text-muted-foreground mb-6">
          I'm open to full-time roles, internships, and freelance full-stack/3D web engineering projects.
        </p>
        
        <div className="space-y-3.5">
          <div className="flex items-center gap-3.5 liquid-glass-inner p-3 rounded-2xl border border-white/5">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-gray-700" />
            </div>
            <div>
              <span className="text-[11px] text-muted-foreground block">Location</span>
              <span className="text-foreground text-xs sm:text-sm font-medium">
                Coimbatore, Tamil Nadu, India
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 liquid-glass-inner p-3 rounded-2xl border border-white/5">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <span className="text-[11px] text-muted-foreground block">Phone / WhatsApp</span>
              <a href="tel:+916380068630" className="text-foreground text-xs sm:text-sm font-medium hover:text-primary transition-colors">
                +91 6380068630
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5 liquid-glass-inner p-3 rounded-2xl border border-white/5">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <span className="text-[11px] text-muted-foreground block">Email</span>
              <a href="mailto:Vigneshpalanichamy.in@gmail.com" className="text-foreground text-xs sm:text-sm font-medium hover:text-primary transition-colors">
                Vigneshpalanichamy.in@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Embed - Coimbatore */}
      <div className="flex-1 rounded-2xl overflow-hidden min-h-[180px] border border-white/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.51131012356!2d76.88483287019864!3d11.014126296766428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Coimbatore, Tamil Nadu Location"
          className="w-full h-full saturate-75 contrast-105"
        />
      </div>
    </Card>
  );
};