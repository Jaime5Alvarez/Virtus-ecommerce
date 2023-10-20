import { useContext } from "react";
import { ContextType, Product } from "../domain/interface";
import { AddProductToCart } from "../application/CartManager";
import { CartContext } from "../domain/context";

export const MyProduct = ({ product }: { product: Product }) => {
  const { setCart } = useContext(CartContext) as ContextType;

  const { cart } = useContext(CartContext) as ContextType;
  return (
    <div className="bg-slate-200 rounded-lg p-4 ">
      <h4 className="bg-slate-300 rounded-lg py-1 text-lg font-semibold">
        {product.PalaPadel.name}
      </h4>
      <div className="w-full text-center flex justify-center mt-[1rem]">
        <img className="w-52  rounded-xl" src={product.PalaPadel.link} />
      </div>
      <h4 className="mt-[1rem]">{product.PalaPadel.price}€</h4>
      <button
        onClick={() => AddProductToCart(product, setCart, cart)}
        className="px-5 mt-[1rem] hover:animate-pulse rounded-xl bg-slate-500 text-white  font-extrabold"
      >
        Add
      </button>
    </div>
  );
};
