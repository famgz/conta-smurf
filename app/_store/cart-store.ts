import { Product } from '@prisma/client';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface CartProduct extends Product {
  quantity: number;
}

interface CartStore {
  cart: CartProduct[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  cartTotalItems: () => number;
  cartTotalPrice: () => number;
}

function isProductOnCart(cart: CartProduct[], product: Product) {
  return cart.some((x) => x.id === product?.id);
}

function increaseProductQuantity(
  cart: CartProduct[],
  productId: string
): CartProduct[] {
  if (!productId) return cart;
  return cart.map((product) => {
    if (product.id !== productId) return product;
    if (product.quantity >= product.availableQuantity) return product;
    return { ...product, quantity: product.quantity + 1 };
  });
}

function decreaseProductQuantity(
  cart: CartProduct[],
  productId: string
): CartProduct[] {
  if (!productId) return cart;
  return cart
    .map((product) => {
      if (product.id !== productId) return product;
      return { ...product, quantity: product.quantity - 1 };
    })
    .filter((product) => product.quantity > 0);
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => ({
          cart: isProductOnCart(state.cart, product)
            ? increaseProductQuantity(state.cart, product?.id)
            : [...state.cart, { ...product, quantity: 1 }],
        })),
      removeFromCart: (product) =>
        set((state) => ({
          cart: decreaseProductQuantity(state.cart, product?.id),
        })),
      cartTotalItems: () =>
        get().cart.reduce((acc, product) => acc + product.quantity, 0),
      cartTotalPrice: () =>
        get().cart.reduce(
          (acc, product) => acc + product.quantity * Number(product.price),
          0
        ),
    }),
    {
      name: 'conta-smurf-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
