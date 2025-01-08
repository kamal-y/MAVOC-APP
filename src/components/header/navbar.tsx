"use client";
import Image from "next/image";
import React from "react";
import MavocLogo from "@/../public/Group.svg";
import { IoSearch } from "react-icons/io5";
import { TbUserCircle } from "react-icons/tb";
import { BsCart } from "react-icons/bs";
import MobileNavbar from "./mobile-navbar-items";
import { useNavbarItems } from "@/lib/QueryHooks";
import Link from "next/link";

const Navbar = () => {
  const { data } = useNavbarItems("navbar_items");

  console.log(data);
  return (
    <nav className="relative w-full bg-black bg-transparent p-4 py-6">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
        <div className="flex items-center justify-between gap-16">
          <div>
            <Image src={MavocLogo} alt="logo-image" priority />
          </div>

          <ul className="hidden items-center justify-center gap-8 md:flex">
            {data?.map((item, id) => {
              return (
                <Link href={`/${item.url}`} key={id}>
                  <li>{item.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center justify-center gap-5">
          <IoSearch className="h-6 w-6" aria-label="Search" />
          <TbUserCircle className="h-6 w-6" aria-label="user profile" />
          <BsCart className="h-6 w-6 font-bold" aria-label="Cart" />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
