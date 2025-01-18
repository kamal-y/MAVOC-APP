import { MedusaSdk } from "@/lib/medusa";
import { medusaProductType } from "@/lib/types/medusa-product-types";

export const fetchProductBySlugInMedusa = async (
  handleValue: string,
  regionId: string,
): Promise<medusaProductType> => {
  try {
    const { products } = await MedusaSdk.store.product.list({
      handle: handleValue,
      region_id: regionId, //using default region given y fetchRegions function
    });

    return products[0] as unknown as medusaProductType;
  } catch (e) {
    console.log("Error in fetching product by handle in medusa Backend", e);
    throw new Error("no data found");
  }
};

export const fetchRegions = async () => {
  try {
    const { regions } = await MedusaSdk.store.region.list();

    return regions[0];
  } catch (error) {
    console.error("Error fetching regions:", error);
    throw new Error("Failed to fetch regions.");
  }
};
