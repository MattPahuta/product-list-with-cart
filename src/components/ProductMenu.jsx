import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

function ProductMenu({products, cartItems, handleAddToCart, handleRemoveFromCart}) {
  return (
    <section className="max-w-4xl">
      <h1 className="mb-8 text-[2.5rem] font-bold text-stone-900">Desserts</h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-y-8">
        {products.map((product) => {
          const cartItem = cartItems.find((item) => item.name === product.name);
          // check for menu item in cart
          return (
            <ProductCard 
              key={product.name} 
              product={product} 
              quantity={cartItem ? cartItem.quantity : 0}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          );
        })}
      </ul>
    </section>
  );
}

ProductMenu.propTypes = {
  products: PropTypes.array.isRequired,
  cartItems: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default ProductMenu;