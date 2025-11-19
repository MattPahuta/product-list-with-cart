import { useState } from "react";
import ProductMenu from "./components/ProductMenu";
import Cart from "./components/Cart";
import OrderConfirmationModal from "./components/OrderConfirmationModal";
import { products } from "./data/data";
import useCartAnnouncements from "./hooks/useCartAnnouncements";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const { cartAnnouncementMessage, announce} = useCartAnnouncements();

  const orderTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleAddToCart(product) {

    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (item) => item.name === product.name
      );

      if (existingItem) {
        return prevCartItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCartItems, { ...product, quantity: 1 }];
    });

    announce(`${product.name} added to the cart.`);
  }

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
    announce(`One ${product.name} removed from the cart.`);
  }

  function handleRemoveAllItems(product) {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((item) => item.name !== product.name);
    });
    announce(`All ${product.name} items removed from the cart.`);
  }

  function handleConfirmOrder() {
    setIsOrderConfirmed(true);
  }

  function handleNewOrder() {
    setCartItems([]);
    setIsOrderConfirmed(false);
    announce("");
  }

  return (
    <main className="mx-auto max-w-7xl grid gap-8 justify-center items-start xl:grid-flow-col xl:auto-cols-auto">
      <ProductMenu
        products={products}
        cartItems={cartItems}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {cartAnnouncementMessage}
      </div>
      <Cart
        cartItems={cartItems}
        orderTotal={orderTotal}
        handleRemoveFromCart={handleRemoveFromCart}
        handleRemoveAllItems={handleRemoveAllItems}
        handleConfirmOrder={handleConfirmOrder}
      />
      {isOrderConfirmed && (
        <OrderConfirmationModal
          isOpen={isOrderConfirmed}
          cartItems={cartItems}
          orderTotal={orderTotal}
          handleDismiss={handleNewOrder}
        />
      )}
    </main>
  );
}

export default App;
