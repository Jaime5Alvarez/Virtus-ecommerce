import { SetStateAction, useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ContextType } from "../domain/interface";
import { CartContext } from "../domain/context";

export const Header = ({
  setIsOpenSideBar,
}: {
  setIsOpenSideBar: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const { cart } = useContext(CartContext) as ContextType;

  return (
    <section className="bg-slate-200 relative mb-[1rem] py-2 rounded-full font-mono text-3xl font-black">
      {" "}
      VIRTUS SHOP
      <span
        onClick={() => setIsOpenSideBar((prev) => !prev)}
        className="absolute right-4 cursor-pointer hover:bg-slate-300 duration-200 ease-in-out hover:rounded-full px-2 "
      >
        <div className="relative">
          <ShoppingCartIcon />
          <span className="absolute text-sm -top-1 -right-1 bg-blue-400 rounded-full w-4 h-4 text-center flex justify-center items-center ">
            {cart.length}
          </span>
        </div>
      </span>
    </section>
  );
};
