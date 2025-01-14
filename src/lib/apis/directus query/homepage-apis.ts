import directus from "@/lib/directus";
import { readSingleton } from "@directus/sdk";
import {
  NavbarItem,
  FooterItems,
  aboutUsType,
} from "@/lib/types/homepage-types";

export const fetchNavbarItems = async (): Promise<NavbarItem> => {
  try {
    const response = await directus.request(readSingleton("navbar"));

    return response;
  } catch (error) {
    console.error("Error fetching fetchNavbarItems data:", error);
    throw error;
  }
};

export const fetchFooterData = async (): Promise<FooterItems> => {
  try {
    const response = await directus.request(
      readSingleton("footer", {
        fields: ["*", "payment_icon.*"],
      }),
    );

    return response;
  } catch (error) {
    console.error("Error fetching fetchFooterData data:", error);
    throw error;
  }
};

export const fetchAboutUsData = async (): Promise<aboutUsType> => {
  try {
    const response = await directus.request(readSingleton("about_us"));

    return response;
  } catch (error) {
    console.error("Error fetching fetchAboutUsData data:", error);
    throw error;
  }
};
