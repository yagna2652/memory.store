import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  HeroSection,
  FeaturesSection,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header variant="default" />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
