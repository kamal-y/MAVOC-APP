import { createDirectus, rest } from "@directus/sdk";
import { ProductType, CategoryList } from "./types/products-types";
import { aboutUsType, FooterItems, NavbarItem } from "./types/homepage-types";

interface Schema {
  products: ProductType[];
  navbar: NavbarItem;
  footer: FooterItems;
  about_us: aboutUsType;
  categories: CategoryList;
}

const directus = createDirectus<Schema>(
  process.env.NEXT_PUBLIC_DIRECTUS_URL as string,
).with(rest());

export default directus;
