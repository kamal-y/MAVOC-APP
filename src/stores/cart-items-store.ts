import { ProductType } from "@/lib/types/products-types";
import { create } from "zustand";

export type Product = ProductType;

export type TotalQuantity = {
  quantity: number;
};

export type CartItem = Product & TotalQuantity;

interface CartState {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeCartItem: (id: string) => void;
  updateQuantity: (id: string, quantity?: number) => void;
  totalQuantity: () => number; // Derived state
  totalPrice: () => number; // Derived state
}

const useCartStore = create<CartState>((set) => ({
  cartItems: [],

  addToCart: (product, quantity = 1) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id,
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...product, quantity }],
        };
      }
    }),

  removeCartItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, quantity = 1) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    })),
  totalQuantity: (): number => {
    const { cartItems } = useCartStore.getState();
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  },

  totalPrice: (): number => {
    const state = useCartStore.getState();
    return state.cartItems.reduce(
      (total, item) => total + 1 * item.quantity,
      0,
    );
  },
}));

export default useCartStore;
