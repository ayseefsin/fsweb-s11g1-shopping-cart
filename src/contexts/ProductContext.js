import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { data } from "../data";
import { useCart } from "./CartContext";

export const ProductContext = createContext();

export function ProductContextProvider(props) {
  const { cart, setCart, addToCart } = useCart();
  const [products, setProducts] = useState(data);
  const [apiStatus, setApiStatus] = useState({
    loading: true,
    error: false,
  });
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      // .post("https://reqres.in/api/products", data)
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
    addToCart(item);
    console.log("add item ", item);
  };
  return (
    <ProductContext.Provider value={{ products, addItem, apiStatus }}>
      {apiStatus.loading && <p>"Yükleniyor"</p>}
      {apiStatus.error && <p>{apiStatus.error}</p>}
      {!apiStatus.loading && !apiStatus.error && props.children}
    </ProductContext.Provider>
  );
}
export const useProduct = () => useContext(ProductContext);
export default ProductContextProvider;
