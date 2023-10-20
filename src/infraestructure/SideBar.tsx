import * as React from "react";

import { ContextType, Product } from "../domain/interface";
import CloseIcon from "@mui/icons-material/Close";
import {
  AddProductToCart,
  DeleteProductFromCart,
  RemoveProductFromCart,
  calculateTotalPrice,
} from "../application/CartManager";
import { Divider } from "@mui/material";
import { CartContext } from "../domain/context";
export const Sidebar = ({
  isOpenSideBar,
  setIsOpenSideBar,
}: {
  isOpenSideBar: boolean;
  setIsOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {isOpenSideBar && (
        <div
          className="fixed w-full h-full bg-black opacity-50 z-10"
          onClick={() => setIsOpenSideBar((prev) => !prev)}
        ></div>
      )}
      <section
        className={` fixed  z-20 overflow-y-auto max-h-screen  bg-slate-200 drop-shadow-lg duration-200 ease-in-out w-72 min-h-screen ${
          !isOpenSideBar && "-translate-x-full"
        } `}
      >
        <div className="relative">
          <CartSideBar />
        </div>
        <button
          onClick={() => {
            setIsOpenSideBar((prev) => !prev);
          }}
          className="fixed hover:animate-pulse right-4 top-4 px-1 text-white text-lg  bg-slate-500 rounded-full"
        >
          <CloseIcon />
        </button>
      </section>
    </>
  );
};
export const CartSideBar = () => {
  const { cart, setCart } = React.useContext(CartContext) as ContextType;
  const totalPrice = calculateTotalPrice(cart);
  return (
    <>
      <section className="my-10 mx-2">
        <h1 className="font-bold text-3xl mb-4 text-center text-slate-500">
          Cart
        </h1>
        <ul>
          {cart.map((product: Product) => (
            <li
              className="flex flex-col my-5 bg-slate-300 rounded-lg"
              key={product.PalaPadel.id}
            >
              <h4 className="font-bold text-lg">{product.PalaPadel.name}</h4>
              <span className="mb-2">Quantity: {product.Quantity} </span>
              <span className="mb-2">Price: {product.PalaPadel.price} </span>
              <div className="flex justify-center gap-6">
                <button
                  className="px-2 rounded-xl hover:animate-pulse bg-slate-500 text-white  font-extrabold"
                  onClick={() => AddProductToCart(product, setCart, cart)}
                >
                  +
                </button>
                <button
                  className="px-2 rounded-xl hover:animate-pulse bg-slate-500 text-white  font-extrabold"
                  onClick={() => {
                    RemoveProductFromCart(product, setCart);
                  }}
                >
                  -
                </button>
              </div>
              <button
                className="px-2 my-[1rem] mx-[1rem] hover:animate-pulse rounded-xl bg-slate-500 text-white  font-extrabold"
                onClick={() => DeleteProductFromCart(product, setCart)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <Divider />
        {cart.length > 0 ? (
          <button
            onClick={() => setCart([])}
            className="px-2 mt-[1rem] w-full rounded-xl bg-slate-600 text-white  font-extrabold"
          >
            Check out {totalPrice}€
          </button>
        ) : (
          <h3 className="my-[1rem] bg-slate-500 rounded-lg py-2 text-white">
            You have to add at least one product
          </h3>
        )}
      </section>
    </>
  );
};
