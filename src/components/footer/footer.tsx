"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { useFooterPaymentOptionsItems } from "@/lib/QueryHooks";

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;

const Footer = () => {
  const { data } = useFooterPaymentOptionsItems("footer_payments_methods");

  const paymentImageList = data;

  return (
    <div className="w-full bg-white text-textGray">
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 p-4 md:p-0 md:py-16">
        <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="grid w-full grow grid-flow-col justify-stretch gap-2">
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

          <div className="flex w-1/4 flex-col gap-2">
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
              suscribe
            </Button>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-semibold text-black">
              PAYMENT METHODS WE ACCEPT
            </div>

            <div className="flex gap-2">
              {paymentImageList?.map((data, index) => {
                return (
                  <Image
                    key={index}
                    src={`${DIRECTUS_URL}/assets/${data?.img}`}
                    alt="icon"
                    width={"20"}
                    height={"20"}
                  />
                );
              })}
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
