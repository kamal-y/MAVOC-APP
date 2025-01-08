import HeroSection from "../components/header/herosection";
import mainBackground from "@/../public/main.svg";

export default async function Home() {
  return (
    <div className="w-full">
      <div
        className="relative w-full items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${mainBackground.src})` }}
      >
        <HeroSection />
      </div>
    </div>
  );
}
