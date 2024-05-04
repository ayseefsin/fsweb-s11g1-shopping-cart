import { createContext, useContext, useState } from "react";
import { data } from "../data";
export const ProductContext = createContext();

export default function ProductContextProvider(props) {
  const [products, setProducts] = useState(data);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    console.log("add item ", item);
  };
  return (
    <ProductContext.Provider value={{ products, addItem }}>
      {props.children}
    </ProductContext.Provider>
  );
}
export const useProduct = () => useContext(ProductContext);
