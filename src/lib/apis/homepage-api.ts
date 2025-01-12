import directus from "./../directus";
import { readSingleton } from "@directus/sdk";
import {
  NavbarItem,
  FooterItems,
  aboutUsType,
} from "@/lib/types/homepage-types";

export const fetchNavbarItems = async (): Promise<NavbarItem> => {
  const result = await directus.request(readSingleton("navbar"));

  if (!result) {
    throw new Error("Navbar section not found");
  }

  return result as NavbarItem;
};

export const fetchFooterData = async (): Promise<FooterItems> => {
  const result = await directus.request(
    readSingleton("footer", {
      fields: ["*", "payment_icon.*"],
    }),
  );

  if (!result) {
    throw new Error("Footer links not found");
  }

  return result;
};

export const fetchAboutUsData = async (): Promise<aboutUsType> => {
  try {
    const result = await directus.request(readSingleton("about_us"));

    return result;
  } catch (error) {
    console.error("Error fetching fetchAboutUsData data:", error);
    throw error;
  }
};
