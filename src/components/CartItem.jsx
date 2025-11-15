function CartItem({item, handleRemoveAllItems}) {
  return (
    <li
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
  );
}

export default CartItem;