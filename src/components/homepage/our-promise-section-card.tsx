import React from "react";

interface OurPromiseSectionCardType {
  img: string;
  heading: string;
  subheading: string;
}

const OurPromiseSectionCard: React.FC<OurPromiseSectionCardType> = (
  card_details,
) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-bgDarkModeGray px-4 py-6">
      <div
        dangerouslySetInnerHTML={{ __html: card_details.img }}
        className="flex items-center justify-center"
      />

      <div className="text-mainSmall font-bold text-white">
        {card_details.heading}
      </div>
      <div className="font-sans">{card_details.subheading}</div>
    </div>
  );
};

export default OurPromiseSectionCard;
