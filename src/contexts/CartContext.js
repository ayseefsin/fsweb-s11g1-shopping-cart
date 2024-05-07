import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    setCart(newCart);
  };

  // const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
export default CartContextProvider;
