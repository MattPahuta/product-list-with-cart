import { useState } from "react";
import ProductMenu from "./components/ProductMenu";
import Cart from "./components/Cart";
import OrderConfirmationModal from "./components/OrderConfirmationModal";
import { products } from "./data/data";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  // Calculate order total
  const orderTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ** Handle adding items to cart
  function handleAddToCart(product) {
    // update cart state
    setCartItems((prevCartItems) => {
      // check for existing prescence of the item in cart
      const existingItem = prevCartItems.find(
        (item) => item.name === product.name
      );
      if (existingItem) {
        // update cartItems to increment existing item quantity and return updated item along with any other items in the cart
        return prevCartItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // if product not in cart, add it to end of array and add quantity property with initial value, spreading existing cart items within the array first
      return [...prevCartItems, { ...product, quantity: 1 }];
    });

    console.log(`${product.name} added to cart`);
    console.log(`Price: ${product.price}`);
  }

  // ** Handle removing items from cart
  function handleRemoveFromCart(product) {
    // update cart state
    setCartItems((prevCartItems) => {
      // check for existing item in cart
      const existingItem = prevCartItems.find(
        (item) => item.name === product.name
      );
      // if item has multiple instances in the cart
      // - for selected product, decrement quantity by 1
      // - for other items, leave as is
      if (existingItem && existingItem.quantity > 1) {
        return prevCartItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      // if quantity of existing item drops to zero, filter out the product
      return prevCartItems.filter(
        (item) => item.name !== product.name
      );
    });
  }

  function handleConfirmOrder() {
    setIsOrderConfirmed(true);
    console.log('Confirming order...')
  }

  function handleNewOrder() {
    setCartItems([]);
    setIsOrderConfirmed(false);
    console.log('Starting new order...');
  }

  return (
    <main className="container mx-auto max-w-7xl p-6 lg:py-10 grid gap-8 justify-center items-start lg:grid-flow-col">
      <ProductMenu
        products={products}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <Cart
        cartItems={cartItems}
        orderTotal={orderTotal}
        onRemoveFromCart={handleRemoveFromCart}
        onConfirmOrder={handleConfirmOrder}
      />
      <OrderConfirmationModal
        isOpen={isOrderConfirmed}
        cartItems={cartItems}
        orderTotal={orderTotal}
        onClose={handleNewOrder}
      />
    </main>
  );
}

export default App;
