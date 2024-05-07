import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { data } from "../data";

export const ProductContext = createContext();

export function ProductContextProvider(props) {
  const [products, setProducts] = useState(data);
  const [apiStatus, setApiStatus] = useState({
    loading: true,
    error: false,
  });
  useEffect(() => {
    axios
      .post("https://reqres.in/api/products", data)
      .then((res) => {
        setProducts(res.data);
        setApiStatus({
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        setApiStatus({
          loading: false,
          error: err.message || "Bir hata oluştu.",
        });
      });
  }, []);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    console.log("add item ", item);
  };
  return (
    <ProductContext.Provider value={{ products, addItem, apiStatus }}>
      {props.children}
    </ProductContext.Provider>
  );
}
export const useProduct = () => useContext(ProductContext);
export default ProductContextProvider;
