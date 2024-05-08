import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
  const writeCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const readCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(cart);
    }
    return [];
  };
  const [cart, setCart] = useState(readCartFromLocalStorage());
  const addToCart = (item) => {
    const newCart = [...cart, item];
    writeCartToLocalStorage(newCart);
    setCart(newCart);
  };
  const removeFromCart = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    writeCartToLocalStorage(newCart);
    setCart(newCart);
  };
  const getCartTotal = (discountPercentage = 0) => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price * (1 - discountPercentage / 100);
      }, 0)
      .toFixed(2);
  };

  // const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, getCartTotal }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
export default CartContextProvider;
