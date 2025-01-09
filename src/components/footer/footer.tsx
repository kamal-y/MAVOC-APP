"use client";
import React from "react";
import Image from "next/image";
import { useFooterData } from "@/lib/QueryHooks";
import Link from "next/link";
import Newsletter from "./newsletter";

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_FILE_API;

const Footer = () => {
  const { data: footerData } = useFooterData("footer");

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

            <div className="flex gap-2">
              {footerData?.payment_icon?.length ? (
                footerData.payment_icon.map((data, index) => {
                  const iconURL = `${DIRECTUS_URL}${data?.directus_files_id}`;
                  console.log("Icon URL:", iconURL); // Debug the generated URL
                  return (
                    <Image
                      key={index}
                      src={iconURL}
                      alt={`Payment Icon ${index + 1}`}
                      width={20}
                      height={20}
                    />
                  );
                })
              ) : (
                <div>No payment methods available</div>
              )}
            </div>
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
