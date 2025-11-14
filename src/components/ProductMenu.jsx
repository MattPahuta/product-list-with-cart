import PropTypes from "prop-types";
// import { products } from "../data/data";
import ProductCard from "./ProductCard";

function ProductMenu({products, cartItems, handleAddToCart, handleRemoveFromCart}) {
  return (
    <section className="max-w-4xl">
      <h1 className="mb-8 text-[2.5rem] font-bold text-stone-900">Desserts</h1>

      {/* ToDo: this should be a ul with li elements as each product card */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
}

ProductMenu.propTypes = {
  products: PropTypes.array.isRequired,
  cartItems: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

// *** make this component pure? 
// - Test with console logs to see when re-renders occur
// export default React.memo(ProductMenu);
export default ProductMenu;