import directus from "./directus";
import { readItems, readSingleton } from "@directus/sdk";
import { NavbarItem } from "../../types/homepage-types";

export const fetchNavbarItems = async (
  modelName: string,
): Promise<NavbarItem> => {
  const result = await directus.request(readSingleton(modelName));

  if (!result) {
    throw new Error("Navbar section not found");
  }

  return result as NavbarItem;
};

export const fetchFooterPaymentOptionsItems = async (modelName: string) => {
  try {
    const results = await directus.request(
      readItems(modelName, {
        fields: ["img"],
      }),
    );
    return results;
  } catch (error) {
    console.error("Error fetching fetchFooterPaymentOptionsItems data:", error);
    throw error;
  }
};
