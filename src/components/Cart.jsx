import PropTypes from "prop-types";
import emptyCartImg from "../assets/images/illustration-empty-cart.svg";
import carbonNeutralIcon from "../assets/images/icon-carbon-neutral.svg"; 

// ToDo: create CartItem component

function Cart({ cartItems, orderTotal, handleRemoveAllItems, handleConfirmOrder }) {

  return (
    <aside className="p-6 rounded-xl bg-white sm:min-w-sm" aria-labelledby="cartHeading">
      <h2 id="cartHeading" className="mb-6 font-bold text-2xl text-brand-red-500">
        Your Cart ({cartItems.length})
      </h2>
      {/* Empty cart state */}
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
              <li
                key={item.name}
                className="not-last:pb-4 not-first:pt-4 flex justify-between items-center">
                <div>
                  <h3 className="mb-2 font-semibold text-brand-rose-900">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-brand-red-500">
                      {item.quantity}x
                    </span>
                    <span className="text-brand-rose-500">
                      &#64;{item.price.toFixed(2)}
                    </span>
                    <span className="font-semibold text-brand-rose-500">
                      &#36;{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label={`Remove all ${item.name} from cart`}
                  onClick={() => handleRemoveAllItems(item)}
                  className="group inline-flex items-center justify-center rounded-full size-7 border border-brand-rose-400 cursor-pointer hover:border-2 hover:border-brand-rose-900 focus-visible:border-brand-rose-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-rose-900 transition">
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10">
                    <path
                      className="group-hover:fill-brand-rose-900 group-focus-visible:fill-brand-rose-900 transition"
                      fill="#CAAFA7"
                      d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                    />
                  </svg>
                </button>
              </li>
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