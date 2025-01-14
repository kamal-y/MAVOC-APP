import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

type navItemsProps = {
  target: string;
  item: string;
};

const MobileNavbar: React.FC<{ nav_items: navItemsProps[] }> = ({
  nav_items,
}) => {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <RxHamburgerMenu className="text-2xl items-center justify-center" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-4 pt-8">
          {nav_items?.map((data, id) => {
            return (
              <SheetTitle asChild key={id}>
                <Link href={`${data.target}`}>{data.item}</Link>
              </SheetTitle>
            );
          })}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
