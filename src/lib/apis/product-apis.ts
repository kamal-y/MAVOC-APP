import { readItems } from "@directus/sdk";
import directus from "./../directus";
import { CategoryList, ProductType } from "../types/products-types";

export const fetchAllProductsData = async (): Promise<ProductType[]> => {
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
): Promise<ProductType[]> => {
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

export const fetchCurrentProductsData = async (
  slugValue: string,
): Promise<ProductType> => {
  try {
    const currentProductData = await directus.request(
      readItems("products", {
        fields: ["*", "image.*"],
        filter: {
          slug: {
            _eq: slugValue,
          },
        },
      }),
    );

    return currentProductData[0] as ProductType;
  } catch (error) {
    console.error("Error fetching fetchCurrentProductsData function:", error);
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
