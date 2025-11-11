import PropTypes from "prop-types";
import confirmedIcon from "../assets/images/icon-order-confirmed.svg";

function OrderConfirmationModal({isOpen, cartItems, orderTotal, onClose}) {
  
  if (!isOpen) return null;
  // ToDo: add smooth transitions - open/close modal
  
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="px-6 pt-10 pb-6 sm:p-10 max-w-2xl w-full grid gap-8 bg-white text-brand-rose-900 rounded-xl shadow-lg">
        <header>
          <img src={confirmedIcon} alt="" className="mb-6" />
          <h2 className="mb-2 text-[2.5rem] font-bold">
            Order Confirmed
          </h2>
          <p className="text-brand-rose-500">
            We hope you enjoy your food!
          </p>
        </header>
        <section className="p-6 bg-brand-rose-50 rounded-lg">
          <ul className="mb-6 pb-6 border-b border-brand-rose-100 divide-y divide-brand-rose-100">
            {cartItems.map((item) => (
              <li
                key={item.name}
                className="not-last:pb-4 not-first:pt-4 flex justify-between items-center">
                <img
                  src={item.image.thumbnail}
                  alt={item.name}
                  className="mr-4 size-12 rounded-sm object-cover"
                />
                <div className="">
                  <p className="mb-2 text-sm font-semibold text-brand-rose-900">
                    {item.name}
                  </p>
                  <p>
                    <span className="mr-2 text-sm font-bold text-brand-red-500">
                      {item.quantity}x
                    </span>
                    <span className="text-sm text-brand-rose-500">
                      &#64; &#36;{item.price.toFixed(2)}
                    </span>
                  </p>
                </div>
                <p className="ml-auto font-semibold">
                  &#36;{(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
          <p className="flex items-center justify-between">
            <span>Order Total</span>
            <span className="text-2xl font-semibold">
              &#36;{orderTotal.toFixed(2)}
            </span>
          </p>
        </section>
        <button
          className="w-full py-4 font-semibold text-white rounded-full bg-brand-red-500 shadow-sm cursor-pointer hover:bg-brand-red-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red-500 transition"
          onClick={onClose}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

OrderConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  cartItems: PropTypes.array.isRequired,
  orderTotal: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default OrderConfirmationModal;
