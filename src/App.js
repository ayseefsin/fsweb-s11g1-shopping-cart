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
  return (
    <div className="App">
      <Navigation />
      {/* Routelar */}
      <main className="content">
        <>
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </>
      </main>
    </div>
  );
}

export default App;
