import { useState, useContext, SetStateAction, createContext } from "react";
import "./App.css";
import ProductList from "./productsList.json";
import { ContextType, Product } from "./domain/interface";
import { AddProductToCart } from "./application/CartManager";
import { Sidebar } from "./infraestructure/SideBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const INITIAL_PRODUCTS = ProductList;

export const CartContext = createContext<ContextType | null>(null);
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
const Header = ({
  setIsOpenSideBar,
}: {
  setIsOpenSideBar: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const { cart } = useContext(CartContext) as ContextType;

  return (
    <section className="bg-slate-200 relative mb-[1rem] py-2 rounded-full font-mono text-lg">
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
export const ProductsList = () => {
  const [ProductList] = useState(INITIAL_PRODUCTS);
  return (
    <>
      <section className="bg-slate-400  rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {ProductList.map((product) => (
          <MyProduct key={product.PalaPadel.id} product={product} />
        ))}
      </section>
    </>
  );
};

export const MyProduct = ({ product }: { product: Product }) => {
  const { setCart } = useContext(CartContext) as ContextType;

  const { cart } = useContext(CartContext) as ContextType;
  return (
    <div className="bg-slate-200 rounded-lg p-4">
      <h4 className="bg-slate-300 rounded-lg py-1">
        {product.PalaPadel.nombre}
      </h4>
      <button
        onClick={() => AddProductToCart(product, setCart, cart)}
        className="px-5 mt-[1rem] hover:animate-pulse rounded-xl bg-slate-500 text-white  font-extrabold"
      >
        Add
      </button>
    </div>
  );
};
