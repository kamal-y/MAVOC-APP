import { readItems } from "@directus/sdk";
import directus from "./../directus";
import { CategoryList, ProductsList } from "../types/products-types";

export const fetchAllProductsData = async (): Promise<ProductsList[]> => {
  try {
    const allProductsData = await directus.request(
      readItems("products", {
        fields: ["*", "image.*"],
      }),
    );

    if (!allProductsData) {
      throw new Error("About section not found");
    }
    return allProductsData;
  } catch (error) {
    console.error("Error fetching fetchAllProductsData function:", error);
    throw error;
  }
};

export const fetchAllProductsByCategory = async (
  categoryId: string,
): Promise<ProductsList[]> => {
  try {
    const allProductsData = await directus.request(
      readItems("products", {
        fields: ["*", "image.*"],
        filter: {
          category: {
            _eq: categoryId,
          },
        },
      }),
    );

    if (!allProductsData) {
      throw new Error("About section not found");
    }
    return allProductsData;
  } catch (error) {
    console.error("Error fetching fetchAllProductsData function:", error);
    throw error;
  }
};

export const fetchAllCategoriesData = async (): Promise<CategoryList> => {
  try {
    const allCategories = await directus.request(readItems("categories"));

    if (!allCategories) {
      throw new Error("allCategories not found");
    }
    return allCategories;
  } catch (error) {
    console.error("Error fetching fetchAllProductsData function:", error);
    throw error;
  }
};
