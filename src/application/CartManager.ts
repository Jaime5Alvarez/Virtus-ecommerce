import { Dispatch, SetStateAction } from "react";
import { Product } from "../domain/interface";

export const DeleteProductFromCart = (
  product: Product,
  setCart: Dispatch<SetStateAction<Product[]>>
) => {
  setCart((prevCart) =>
    prevCart.filter(
      (cartProduct) => cartProduct.PalaPadel.id !== product.PalaPadel.id
    )
  );
};

export const RemoveProductFromCart = (
  product: Product,
  setCart: Dispatch<SetStateAction<Product[]>>
) => {
  setCart((prevCart) =>
    prevCart.map((cartProduct) => {
      if (cartProduct.PalaPadel.id === product.PalaPadel.id) {
        // Check if the quantity is greater than 1 before decrementing it.
        if (cartProduct.Quantity > 1) {
          return {
            ...cartProduct,
            Quantity: cartProduct.Quantity - 1,
          };
        } else {
          DeleteProductFromCart(product, setCart);
        }
      }
      return cartProduct;
    })
  );
};
export const calculateTotalPrice = (cart: Product[]) => {
  let totalPrice = 0;
  cart.forEach((product: Product) => {
    totalPrice += product.Quantity * product.PalaPadel.price; // Precio * Cantidad
  });
  return totalPrice;
};
export const AddProductToCart = (
  newProduct: Product,
  setCart: Dispatch<SetStateAction<Product[]>>,
  cart: Product[]
) => {
  const productExist = cart.find(
    (existingProduct) =>
      existingProduct.PalaPadel.id === newProduct.PalaPadel.id
  );

  if (!productExist) {
    // If the product doesn't exist in the cart, add it with a quantity of 1.
    setCart((prevCart) => [
      ...prevCart,
      {
        PalaPadel: {
          id: newProduct.PalaPadel.id,
          name: newProduct.PalaPadel.name,
          link: newProduct.PalaPadel.link,
          price: newProduct.PalaPadel.price,
        },
        Quantity: 1,
      },
    ]);
  } else {
    // If the product already exists in the cart, update its quantity.
    setCart((prevCart) =>
      prevCart.map((product) => {
        if (product.PalaPadel.id === newProduct.PalaPadel.id) {
          return {
            ...product,
            Quantity: product.Quantity + 1,
          };
        }
        return product;
      })
    );
  }
};
