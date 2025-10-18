import { useState } from "react";
import ProductMenu from "./components/ProductMenu";
import Cart from "./components/Cart";

import { products } from "./data/data";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product) {
    console.log(`${product.name} added to cart`);
    console.log(`Price: ${product.price}`)
  }

  return (
    <main className="container mx-auto max-w-7xl p-6 lg:py-10 grid gap-8 justify-center items-start lg:grid-flow-col">
      <ProductMenu products={products} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </main>
  )
}

export default App;
