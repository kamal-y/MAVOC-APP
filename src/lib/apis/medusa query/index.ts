import { MedusaSdk } from "@/lib/medusa";

export const fetchProducts = async () => {
  try {
    const { products } = await MedusaSdk.store.product.list();

    return products;
  } catch (error) {
    throw new Error("no data found");
    console.log(error);
  }
};
