import Image from "next/image";
import React from "react";
import { fetchAboutUsData } from "@/lib/apis/directus query/homepage-apis";

const DIRECTUS_FILE_API = "http://localhost:8055/assets/";

const AboutSection: React.FC = async () => {
  const aboutUsData = await fetchAboutUsData();

  if (!aboutUsData)
    return <div className="mx-auto p-4 text-mainSmall">Loading...</div>;

  return (
    <div className="w-full bg-black text-textGray">
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 p-4 py-8 md:p-6 md:py-16">
        <div className="mx-auto w-fit text-center text-sectionMainHeading font-bold uppercase">
          {aboutUsData.title}
        </div>

        <div className="mx-auto max-w-3xl text-center font-sans">
          {aboutUsData.description}
        </div>

        <Image
          src={`${DIRECTUS_FILE_API}${aboutUsData?.file}`}
          alt="About Us"
          width={800}
          height={450}
          className="mx-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AboutSection;
