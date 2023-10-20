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
