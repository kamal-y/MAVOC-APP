import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { TbUserCircle } from "react-icons/tb";
import MobileNavbar from "./mobile-navbar-items";
import MAVOC from "@/../public/Group.svg";
import Link from "next/link";
import { fetchNavbarItems } from "@/lib/apis/directus query/homepage-apis";
import CartIcon from "./Cart-Icon";

const Navbar: React.FC = async () => {
  const navbarData = await fetchNavbarItems();

  return (
    <nav className="relative w-full bg-black bg-transparent p-4 py-6">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
        <div className="flex items-center justify-between gap-16">
          <Image src={MAVOC} alt="logo-image" width={"100"} height={"45"} />

          <ul className="hidden items-center justify-center gap-8 md:flex">
            {navbarData?.nav_items?.map((data, id) => {
              return (
                <Link href={`/${data.target}`} key={id}>
                  <li>{data.item}</li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center justify-center gap-5">
          <IoSearch className="h-6 w-6" aria-label="Search" />
          <TbUserCircle className="h-6 w-6" aria-label="user profile" />
          <CartIcon />
          <MobileNavbar nav_items={navbarData.nav_items} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
