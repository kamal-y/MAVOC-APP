import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import mainBackground from "@/../public/main.svg";

const features = [
  { title: "10A/15A", description: "Dual Input" },
  { title: "Single & Double", description: "Pulse MIG" },
  { title: "AC/DC", description: "High Frequency TIG" },
  { title: "Pilot Arc", description: "Plasma Cutting" },
  { title: '7" LCD', description: "Touch Screen" },
];

const HeroSection = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${mainBackground.src})` }}
    >
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between">
        {/* Hero Section Content */}
        <div className="flex max-w-2xl flex-col items-start gap-6 p-4 pt-80 sm:py-24 md:py-44">
          <div className="text-main font-bold text-mainGreen">MAVOK 230MP</div>

          <div className="text-mobileMainHeading font-bold uppercase sm:text-mainHeading">
            A new era of welding innovation and performance starts now.
          </div>

          <Button
            variant={"customButton"}
            asChild
            className="w-full py-2 sm:w-fit"
          >
            <Link href="/category" className="text-mainSmall uppercase">
              shop now
              <FaArrowRight />
            </Link>
          </Button>
        </div>

        {/* Features Section */}
        <div className="mx-auto hidden w-full items-center justify-evenly py-4 mdCustom:flex">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg text-subHeading font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-mainSmall font-semibold uppercase">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
