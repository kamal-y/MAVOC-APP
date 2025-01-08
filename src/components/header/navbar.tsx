"use client";
import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { TbUserCircle } from "react-icons/tb";
import { BsCart } from "react-icons/bs";
import MobileNavbar from "./mobile-navbar-items";
import { useNavbarItems } from "@/lib/QueryHooks";
import MAVOC from "@/../public/Group.svg";
import Link from "next/link";

const Navbar = () => {
  const { data } = useNavbarItems("navbar");

  const nav_items = data?.nav_items;

  return (
    <nav className="relative w-full bg-black bg-transparent p-4 py-6">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
        <div className="flex items-center justify-between gap-16">
          <Image src={MAVOC} alt="logo-image" width={"100"} height={"45"} />

          <ul className="hidden items-center justify-center gap-8 md:flex">
            {nav_items?.map((data, id) => {
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
          <BsCart className="h-6 w-6 font-bold" aria-label="Cart" />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
