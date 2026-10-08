import { ProfileCard } from "./ProfileCard";
import { CardEffects } from "@/components/reactbits/CardEffects";
import { ExpertArea } from "./ExpertArea";
import { DescriptionCard } from "./DescriptionCard";

export const HeroSection = () => {
  return (
    <section className="w-full space-y-6 relative z-10">
      {/* Profile Card */}
      <div className="w-full">
        <CardEffects tilt><ProfileCard /></CardEffects>
      </div>
      
      {/* Description Card */}
      <div className="w-full"><CardEffects><ExpertArea /></CardEffects></div>
      <div className="w-full">
        <CardEffects><DescriptionCard /></CardEffects>
      </div>
    </section>
  );
};
