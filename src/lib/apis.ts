import directus from "./directus";
import { readSingleton } from "@directus/sdk";
import { NavbarItem, FooterItems } from "../../types/homepage-types";

const BASE_URL = "http://localhost:8055/items/";

export const fetchNavbarItems = async (
  modelName: string,
): Promise<NavbarItem> => {
  const result = await directus.request(readSingleton(modelName));

  if (!result) {
    throw new Error("Navbar section not found");
  }

  return result as NavbarItem;
};

export const fetchFooterData = async (
  modelName: string,
): Promise<FooterItems> => {
  try {
    const result = await directus.request(
      readSingleton(modelName, {
        fields: ["*", "payment_icon.*"],
      }),
    );

    // const response = await fetch(
    //   `${BASE_URL}${modelName}?fields=*,payment_icon.*`,
    // );

    return result as FooterItems;
  } catch (error) {
    console.error("Error fetching fetchFooterPaymentOptionsItems data:", error);
    throw error;
  }
};

export const fetchAboutUsData = async (modelName: string) => {
  try {
    const result = await directus.request(readSingleton(modelName));

    return result;
  } catch (error) {
    console.error("Error fetching fetchAboutUsData data:", error);
    throw error;
  }
};
