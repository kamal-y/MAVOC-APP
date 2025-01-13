import { Category } from "@/lib/types/products-types";
import { create } from "zustand";

export type CategoryState = {
  category: Category;
};

export type CategoryActions = {
  changeCategory: (newCategory: Category) => void;
};

export type CategoryStore = CategoryState & CategoryActions;

export const defaultInitState: CategoryState = {
  category: {
    name: "all",
    id: "",
    description: "Initially we eill be having all products",
  },
};

export const useCategoryStore = create<CategoryStore>((set) => ({
  ...defaultInitState,
  changeCategory: (newCategory) => set(() => ({ category: newCategory })),
}));
