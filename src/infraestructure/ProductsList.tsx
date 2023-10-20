import { useState } from "react";
import ProductList from "../domain/productsList.json";
import { MyProduct } from "./Product";

const INITIAL_PRODUCTS = ProductList;

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
