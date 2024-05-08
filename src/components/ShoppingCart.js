import React from "react";
import { ScCartCheckout } from "./scParts";

// Components
import Item from "./ShoppingCartItem";
import { useCart } from "../contexts/CartContext";

const ShoppingCart = (props) => {
  const { cart, getCartTotal } = useCart();

  return (
    <div>
      {cart.map((item, orderInCart) => (
        <Item key={item.id} orderInCart={orderInCart} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
