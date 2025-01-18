import { fetchOurPromiseSectionData } from "@/lib/apis/directus query/homepage-apis";
import React from "react";
import OurPromiseSectionCard from "./our-promise-section-card";

const OurPromiseSection: React.FC = async () => {
  // if (!isSuccess) return <div className="p-4 text-mainSmall">Loading...</div>;

  const data = await fetchOurPromiseSectionData();

  return (
    <div className="w-full bg-black text-textGray">
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 p-4 py-8 md:p-6 md:py-16">
        <div className="mx-auto w-fit text-center text-sectionMainHeading font-bold uppercase">
          {data.title}
        </div>

        <div className="mx-auto max-w-3xl text-center font-sans">
          {data.description}
        </div>

        <div className="grid grid-cols-1 items-center justify-center gap-x-4 gap-y-4 px-8 text-center sm:grid-cols-2 sm:px-2">
          {data.cards_details.map((data, index) => (
            <OurPromiseSectionCard {...data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPromiseSection;
