import { createContext } from "react";
import { ContextType } from "../domain/interface";
export const CartContext = createContext<ContextType | null>(null);
