import { TestimonialsSection } from "./TestimonialsSection";
import { CardEffects } from "@/components/reactbits/CardEffects";
import { WorkTogetherCard } from "./WorkTogetherCard";

export const TestimonialsWorkSection = () => {
  return (
    <section className="w-full space-y-6">
      {/* Testimonials Section */}
      <div className="w-full">
        <CardEffects><TestimonialsSection /></CardEffects>
      </div>
      
      {/* Work Together Card */}
      <div className="w-full">
        <CardEffects tilt><WorkTogetherCard /></CardEffects>
      </div>
    </section>
  );
};
