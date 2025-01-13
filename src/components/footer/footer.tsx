import React from "react";
import Link from "next/link";
import Newsletter from "./newsletter";
import { fetchFooterData } from "@/lib/apis/homepage-api";
import PaymetMehtodsIcons from "./payment-methods-icons";

const Footer = async () => {
  const footerData = await fetchFooterData();

  return (
    <div className="w-full bg-white text-textGray">
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 p-4 md:p-6 md:py-16">
        <div className="flex w-full flex-col items-start justify-between gap-2 sm:flex-row">
          <div className="grid w-full grow grid-cols-2 justify-stretch gap-2 sm:grid-cols-4">
            {/* footer heading and subheading part  */}
            {footerData?.footer_items.map((categoryData, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="font-bold uppercase text-black">
                  {categoryData.heading}
                </div>
                {categoryData.subCategories.map((item, subIndex) => (
                  <Link href={`${item.target}`} key={subIndex}>
                    {item.title}{" "}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* newletter part  */}
          <div className="flex w-full flex-col gap-2 md:w-2/6">
            <Newsletter />
          </div>
        </div>

        {/* payment mode part  */}
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-black">
              PAYMENT METHODS WE ACCEPT
            </div>

            <PaymetMehtodsIcons {...footerData?.payment_icon} />
          </div>

          {/* icons and logo part  */}
          <div className="flex gap-2">
            {footerData?.social_icon?.map((data, index) => {
              return (
                <Link href={`/${data.target}`} key={index}>
                  <div dangerouslySetInnerHTML={{ __html: data.icon }} />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="">
            {new Date().getFullYear()} MAVOK. All right reserved
          </div>

          <div className="text-mainSmall font-semibold uppercase text-black">
            English/Australia
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
