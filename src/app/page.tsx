import OurPromiseSection from "@/components/homepage/our-promise-section";
import HeroSection from "../components/homepage/herosection";
import AboutSection from "@/components/homepage/about-section";

export default async function Home() {
  return (
    <div className="w-full">
      <div className="relative w-full items-center bg-cover bg-center">
        <HeroSection />
        <AboutSection />
        <OurPromiseSection />
      </div>
    </div>
  );
}
