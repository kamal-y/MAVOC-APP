import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Items = ["220 MP", "ACCESSORIES", "CONSUMABLES", "COMPANY"];

const MobileNavbar = () => {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <RxHamburgerMenu className="items-center justify-center text-2xl" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-4 pt-8">
          {Items.map((data, id) => {
            return (
              <SheetTitle asChild key={id}>
                <Link href={""}>{data}</Link>
              </SheetTitle>
            );
          })}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
