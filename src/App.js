import React, { useState } from "react";
import { Route } from "react-router-dom";
// import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext, useProduct } from "./contexts/ProductContext";
import { ProductContextProvider } from "./contexts/ProductContext";

function App() {
  const [cart, setCart] = useState([]);
  const { apiStatus } = useProduct();

  return (
    <div className="App">
      {apiStatus.loading && <p>"Yükleniyor"</p>}
      {apiStatus.error && <p>{apiStatus.error}</p>}
      {!apiStatus.loading && !apiStatus.error}
      <Navigation cart={cart} />
      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
      </main>
    </div>
  );
}

export default App;
