import { Dispatch, SetStateAction } from "react";

export interface PalaPadel {
  id: string;
  nombre: string;
}

export interface Cart {
  Products: Product[];
}
export interface Product {
  PalaPadel: {
    id: string;
    nombre: string;
    // Otros campos
  };
  Quantity: number;
}
export type ContextType = {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
};
