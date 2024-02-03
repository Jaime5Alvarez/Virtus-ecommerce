import { useState } from "react";
import "./App.css";
import { Product } from "./domain/interface";
import { Sidebar } from "./infraestructure/SideBar";
import { Header } from "./infraestructure/Header";
import { ProductsList } from "./infraestructure/ProductsList";
import { CartContext } from "./domain/context";
import { ShopingCart } from "./infraestructure/ShopingCart";

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  return (
    <>
      <main className="font-mono dark:bg-slate-800 bg-gradient-to-t from-s bg-slate-500 dark:from-slate-600 to-slate-800 h-screen ">
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
