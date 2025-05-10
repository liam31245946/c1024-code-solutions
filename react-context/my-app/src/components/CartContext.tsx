import { createContext } from 'react';

export type Product = {
  productId: number;
  name: string;
  price: number;
};

export type CartValue = {
  cart: Product[];
  addToCart: (products: Product) => void;
};

const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};

export const CartContext = createContext<CartValue>(defaultCartValue);
