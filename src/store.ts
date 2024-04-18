import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CarType = {
  id: string;
  image: {
    url: string;
  };
  name: string;
  price: number | null;
  quantity?: number | 1;
  description?: string | null;
  currency?: string;
};

type CartState = {
  cart: CarType[];
  isOpen: boolean;
  toggleCart: () => void;
  addToCart: (product: CarType) => void;
  removeFromCart: (product: CarType) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      isOpen: false,
      addToCart: (item) =>
        set((state) => {
          const car = state.cart.find((c) => c.id === item.id);

          if (car) {
            const updatedCart = state.cart.map((c) => {
              if (c.id === item.id) {
                return { ...c, quantity: c.quantity ? c.quantity + 1 : 1 };
              }
              return c;
            });
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
          }
        }),
      removeFromCart: (item) =>
        set((state) => {
          const existingProduct = state.cart.find((p) => p.id === item.id);

          if (existingProduct && existingProduct.quantity! > 1) {
            const updatedCart = state.cart.map((p) => {
              if (p.id === item.id) {
                return { ...p, quantity: p.quantity! - 1 };
              }
              return p;
            });
            return { cart: updatedCart };
          } else {
            const filteredCart = state.cart.filter((p) => p.id !== item.id);
            return { cart: filteredCart };
          }
        }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    { name: 'cart-storage-02' }
  )
);
