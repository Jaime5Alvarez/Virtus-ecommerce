import { useState, Dispatch, SetStateAction, useContext } from "react";
import "./App.css";
import { ContextType, Product } from "./domain/interface";
import { Sidebar } from "./infraestructure/SideBar";
import { Header } from "./infraestructure/Header";
import { ProductsList } from "./infraestructure/ProductsList";
import { CartContext } from "./domain/context";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  return (
    <>
      <main className="font-mono  ">
        <CartContext.Provider value={{ cart, setCart }}>
          <ShopingCart setIsOpenSideBar={setIsOpenSideBar} />

          <Sidebar
            isOpenSideBar={isOpenSideBar}
            setIsOpenSideBar={setIsOpenSideBar}
          />
          <div className="p-[2rem]">
            <Header />

            <ProductsList />
          </div>
        </CartContext.Provider>
      </main>
    </>
  );
}

export default App;

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
        className="fixed bottom-5 right-5  cursor-pointer scale-150 bg-slate-300 hover:bg-opacity-80 duration-200 ease-in-out rounded-full p-2 "
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
