import { useState } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";
import "./App.css";

/**
 * creates the complete product page.
 * isPreview is used to distinguish between
 * products shown in the cart product view
 * and the actual webpage.
 */
function App() {
  return (
    <>
      <Navbar />
      <Product isPreview={false} />
    </>
  );
}

export default App;
