import { useState } from "react";
import "./App.css";
import { Product } from "./domain/interface";
import { Sidebar } from "./infraestructure/SideBar";
import { Header } from "./infraestructure/Header";
import { ProductsList } from "./infraestructure/ProductsList";
import { CartContext } from "./domain/context";

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  return (
    <>
      <main className="font-mono  ">
        <CartContext.Provider value={{ cart, setCart }}>
          <Sidebar
            isOpenSideBar={isOpenSideBar}
            setIsOpenSideBar={setIsOpenSideBar}
          />
          <div className="p-[2rem]">
            <Header setIsOpenSideBar={setIsOpenSideBar} />

            <ProductsList />
          </div>
        </CartContext.Provider>
      </main>
    </>
  );
}

export default App;
