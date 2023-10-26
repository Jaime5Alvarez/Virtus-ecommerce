import { useContext } from "react";
import { ContextType, Product } from "../domain/interface";
import { AddProductToCart } from "../application/CartManager";
import { CartContext } from "../domain/context";

export const MyProduct = ({ product }: { product: Product }) => {
  const { setCart } = useContext(CartContext) as ContextType;

  const { cart } = useContext(CartContext) as ContextType;
  return (
    <div className="bg-slate-200 dark:bg-slate-500 rounded-lg p-4  ">
      <h4 className="bg-slate-300 h-10 flex justify-center items-center px-2  dark:bg-slate-700 dark:text-white rounded-lg py-1 text-lg font-semibold">
        <span className="truncate">{product.PalaPadel.name}</span>
      </h4>
      <div className="w-full text-center flex justify-center mt-[1rem]">
        <img className="w-52  rounded-xl" src={product.PalaPadel.link} />
      </div>
      <h4 className="mt-[1rem] font-semibold dark:text-white ">
        {product.PalaPadel.price}€
      </h4>
      <button
        onClick={() => AddProductToCart(product, setCart, cart)}
        className="px-5 mt-[1rem] hover:animate-pulse rounded-xl bg-slate-500 dark:bg-slate-800 text-white  font-extrabold"
      >
        Add
      </button>
    </div>
  );
};
