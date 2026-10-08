import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ProfileCard } from "@/components/features/ProfileCard"
import { ContactInfoCard } from "@/components/features/ContactInfoCard"
import { SocialsSection } from "@/components/features/SocialsSection"

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 space-y-6">
        <section className="w-full max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Profile Card - Left Column */}
            <div className="lg:col-span-1">
              <ProfileCard />
            </div>
            
            {/* Contact Info Card - Right Column */}
            <div className="lg:col-span-1">
              <ContactInfoCard />
            </div>
          </div>
        </section>
        <SocialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;