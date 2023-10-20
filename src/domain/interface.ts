import { Dispatch, SetStateAction } from "react";

export interface PalaPadel {
  id: string;
  name: string;
}

export interface Cart {
  Products: Product[];
}
export interface Product {
  PalaPadel: {
    id: string;
    name: string;
    link: string;
    price: number;
  };
  Quantity: number;
}
export type ContextType = {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
};
