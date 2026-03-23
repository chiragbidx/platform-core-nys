import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <TestimonialSection />
      </main>
      <FooterSection />
    </div>
  );
}