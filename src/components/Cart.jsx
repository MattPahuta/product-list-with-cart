import PropTypes from "prop-types";
import emptyCartImg from "../assets/images/illustration-empty-cart.svg";
import carbonNeutralIcon from "../assets/images/icon-carbon-neutral.svg"; 
import CartItem from "./CartItem";

function Cart({ cartItems, orderTotal, handleRemoveAllItems, handleConfirmOrder }) {
  return (
    <aside className="p-6 rounded-xl bg-white sm:min-w-sm" aria-labelledby="cartHeading">
      <h2 id="cartHeading" className="mb-6 font-bold text-2xl text-brand-red-500">
        Your Cart ({cartItems.length})
      </h2>
      {cartItems.length === 0 ? (
        <div className="my-6">
          <img
            src={emptyCartImg}
            alt=""
            className="mx-auto my-4 h-32 w-32"
            aria-hidden="true"
            focusable="false"
          />
          <p className="text-brand-rose-500 font-semibold text-center">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-brand-rose-100 mb-6">
            {cartItems.map((item) => (
              <CartItem key={item.name} item={item} handleRemoveAllItems={handleRemoveAllItems} />
            ))}
          </ul>
          <div className="pt-6 flex justify-between items-center text-brand-rose-900 border-t border-brand-rose-100">
            <p className="">Order Total</p>
            <p className="text-xl font-bold">
              ${orderTotal.toFixed(2)}
            </p>
          </div>
          <div className="w-full my-6 p-4 flex gap-3.5 items-center justify-center rounded-lg text-brand-rose-900 bg-brand-rose-50">
            <img src={carbonNeutralIcon} alt="" className="size-5" />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>
          <button
            type="button"
            className="w-full py-4 font-semibold text-white rounded-full bg-brand-red-500 shadow-sm cursor-pointer hover:bg-brand-red-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red-500 transition"
            onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </>
      )}
    </aside>
  );
}

Cart.PropTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
  handleConfirmOrder: PropTypes.func.isRequired,
};

export default Cart;