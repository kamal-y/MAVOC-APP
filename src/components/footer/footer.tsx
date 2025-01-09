"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { useFooterData } from "@/lib/QueryHooks";

const DIRECTUS_URL = "http://localhost:8055/assets/";

const Footer = () => {
  const { data: footerData } = useFooterData("footer");

  console.log(footerData);

  return (
    <div className="w-full bg-white text-textGray">
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 p-4 md:p-6 md:py-16">
        <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="grid w-full grow grid-cols-2 justify-stretch gap-2 sm:grid-cols-4">
            <div className="flex flex-col gap-2">
              <div>list</div>
              <div>list</div>
              <div>list</div>
            </div>
            <div className="flex flex-col gap-2">
              <div>list</div>
              <div>list</div>
              <div>list</div>
            </div>
            <div className="flex flex-col gap-2">
              <div>list</div>
              <div>list</div>
              <div>list</div>
            </div>
            <div className="flex flex-col gap-2">
              <div>list</div>
              <div>list</div>
              <div>list</div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-2 md:w-1/4">
            <div className="text-mainSmall font-semibold uppercase text-black">
              newsletter
            </div>
            <Input
              type="email"
              placeholder="Email"
              className="rounded-md border-gray-500"
            />
            <Button
              variant={"customButton"}
              className="text-xs w-full py-2 font-semibold uppercase text-white"
            >
              sign up
            </Button>
          </div>
        </div>

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

          <div className="flex gap-2">
            {/* <Image src={""} alt="icon" className="rounded-md border-gray-500" /> */}
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="">2024 MAVOK. All right reserved</div>

          <div className="text-mainSmall font-semibold uppercase text-black">
            English/Australia
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
