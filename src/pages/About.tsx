import { Navbar } from "@/components/layout/Navbar"
import { AboutHeroCard } from "@/components/features/AboutHeroCard"
import { ServicesAwardsSection } from "@/components/features/ServicesAwardsSection"
import { WorkTogetherSection } from "@/components/features/WorkTogetherSection"

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 space-y-6">
        <AboutHeroCard />
        <ServicesAwardsSection />
        <WorkTogetherSection />
      </main>
    </div>
  );
};

export default About;