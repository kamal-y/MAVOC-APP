import React from "react";

const OurPromiseSection: React.FC = () => {
  // if (!isSuccess) return <div className="p-4 text-mainSmall">Loading...</div>;

  return (
    <div className="w-full bg-black text-textGray">
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 p-4 py-8 md:p-6 md:py-16">
        <div className="mx-auto w-fit text-center text-sectionMainHeading font-bold uppercase">
          Our Promise
        </div>

        <div className="mx-auto max-w-3xl text-center font-sans">
          Equipped with innovative quick-switch technology, the MAVOK 220MP
          seamlessly transitions between welding and cutting processes,
          providing you unmatched versatility and performance.
        </div>

        <div className="grid grid-cols-2 items-center justify-center gap-x-4 gap-y-4 text-center">
          <div className="flex flex-col gap-4 rounded-xl bg-bgDarkModeGray px-4 py-6">
            <div></div>

            <div className="text-mainSmall font-bold text-white">
              FAST DELIVERY
            </div>
            <div className="font-sans">
              We know speed matters. That why we offer fast shipping solutions
              to get your order to you as quickly as possible.
            </div>
          </div>

          <div className="flex flex-col">
            <div></div>

            <div className="text-mainSmall text-white">FAST DELIVERY</div>
            <div className="font-sans">
              We know speed matters. That why we offer fast shipping solutions
              to get your order to you as quickly as possible.
            </div>
          </div>

          <div className="flex flex-col">
            <div></div>

            <div className="text-mainSmall text-white">FAST DELIVERY</div>
            <div className="font-sans">
              We know speed matters. That why we offer fast shipping solutions
              to get your order to you as quickly as possible.
            </div>
          </div>

          <div className="flex flex-col">
            <div></div>

            <div className="text-mainSmall text-white">FAST DELIVERY</div>
            <div className="font-sans">
              We know speed matters. That why we offer fast shipping solutions
              to get your order to you as quickly as possible.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPromiseSection;
