import { useState } from "react";
import ProductMenu from "./components/ProductMenu";

import data from "./data/data.json";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <main className="container max-w-7xl p-6 grid justify-center">
      <h1 className="text-4xl font-bold text-stone-900">Desserts</h1>
      <ProductMenu products={data} />
    </main>
  )
}

export default App
