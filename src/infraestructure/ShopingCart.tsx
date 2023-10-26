import { Dispatch, useContext, SetStateAction } from "react";
import { ContextType } from "../domain/interface";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../domain/context";

export const ShopingCart = ({
  setIsOpenSideBar,
}: {
  setIsOpenSideBar: Dispatch<SetStateAction<boolean>>;
}) => {
  const { cart } = useContext(CartContext) as ContextType;

  return (
    <>
      <span
        onClick={() => setIsOpenSideBar((prev) => !prev)}
        className="fixed bottom-5 right-5  cursor-pointer scale-150 dark:bg-slate-600 bg-slate-300 hover:bg-opacity-80 duration-200 ease-in-out rounded-full p-2 "
      >
        <div className="relative ">
          <ShoppingCartIcon />
          <span className="absolute text-sm -top-1 -right-1 bg-blue-400 rounded-full w-4 h-4 text-center flex justify-center items-center ">
            {cart.length}
          </span>
        </div>
      </span>
    </>
  );
};
