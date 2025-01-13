import Image from "next/image";
import React from "react";
import { FooterItems } from "@/lib/types/homepage-types";

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_FILE_API;

const PaymetMehtodsIcons: React.FC<FooterItems["payment_icon"]> = async (
  payment_icon,
) => {
  const paymentIconsArray = Object.values(payment_icon || {});

  return (
    <div className="flex h-full gap-2">
      {paymentIconsArray?.length ? (
        paymentIconsArray.map((data, index) => {
          const iconURL = `${DIRECTUS_URL}${data?.directus_files_id}`;
          console.log(iconURL);
          return (
            <Image
              key={index}
              src={iconURL}
              alt={`Payment Icon ${index + 1}`}
              width={40}
              height={20}
            />
          );
        })
      ) : (
        <div>No payment methods available</div>
      )}
    </div>
  );
};

export default PaymetMehtodsIcons;
