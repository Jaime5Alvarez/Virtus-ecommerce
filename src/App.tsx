import {
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  createContext,
} from "react";
import "./App.css";
import ProductList from "./productsList.json";
import { Product } from "./interface";
import {
  AddProductToCart,
  DeleteProductFromCart,
  RemoveProductFromCart,
} from "./application/CartManager";
const INITIAL_PRODUCTS = ProductList;

export const CartContext = createContext<Product[]>([]);
function App() {
  const [cart, setCart] = useState<Product[]>([]);
  return (
    <>
      {JSON.stringify(cart)}
      <CartContext.Provider value={cart}>
        <ProductsList setCart={setCart} />
        <CartSideBar setCart={setCart} />
      </CartContext.Provider>
    </>
  );
}

export default App;

export const ProductsList = ({
  setCart,
}: {
  setCart: Dispatch<SetStateAction<Product[]>>;
}) => {
  const [ProductList] = useState(INITIAL_PRODUCTS);
  return (
    <>
      <section className="bg-slate-100 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {ProductList.map((product) => (
          <MyProduct
            key={product.PalaPadel.id}
            product={product}
            setCart={setCart}
          />
        ))}
      </section>
    </>
  );
};

export const CartSideBar = ({
  setCart,
}: {
  setCart: Dispatch<SetStateAction<Product[]>>;
}) => {
  const cart = useContext(CartContext);

  return (
    <>
      <section>
        <h1>Cart</h1>
        <ul>
          {cart.map((product) => (
            <li key={product.PalaPadel.id}>
              <h4>{product.PalaPadel.nombre}</h4>
              <span>{product.Quantity} </span>
              <button onClick={() => AddProductToCart(product, setCart, cart)}>
                +
              </button>
              <button
                onClick={() => {
                  RemoveProductFromCart(product, setCart);
                }}
              >
                -
              </button>
              <button onClick={() => DeleteProductFromCart(product, setCart)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export const MyProduct = ({
  product,
  setCart,
}: {
  product: Product;
  setCart: Dispatch<SetStateAction<Product[]>>;
}) => {
  const cart = useContext(CartContext);
  return (
    <div className="bg-slate-200 rounded-lg p-4">
      <h4 className="bg-slate-300 rounded-lg py-1">
        {product.PalaPadel.nombre}
      </h4>
      <img></img>
      <button
        onClick={() => AddProductToCart(product, setCart, cart)}
        className="bg-slate-400 rounded-xl px-2 py-1"
      >
        Add to the cart
      </button>
    </div>
  );
};
