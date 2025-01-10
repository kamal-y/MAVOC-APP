import { readCollection, readItems } from "@directus/sdk";
import directus from "./../directus";
import { ProductList } from "../types/products-types";

export const fetchAllProductsData = async () => {
  try {
    const allProductsData = await directus.request(readItems("products"));

    if (!allProductsData) {
      throw new Error("About section not found");
    }
    return allProductsData;
  } catch (error) {
    console.error("Error fetching fetchAllProductsData function:", error);
    throw error;
  }
};
