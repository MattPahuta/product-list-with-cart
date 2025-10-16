import { useState } from "react";
import ProductMenu from "./components/ProductMenu";
import Cart from "./components/Cart";

// import data from "./data/data.json";
import { products } from "./data/data";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <main className="container mx-auto max-w-7xl p-6 lg:py-10 grid gap-8 justify-center items-start lg:grid-flow-col">
      <ProductMenu products={products} />
      <Cart />
    </main>
  )
}

export default App;
