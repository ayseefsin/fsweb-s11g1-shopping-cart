import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
export default CartContextProvider;
