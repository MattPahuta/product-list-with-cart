import PropTypes from "prop-types";
// import AddToCartButton from "./AddToCartButton";

function ProductCard({product, onAddToCart}) {
  const { name, category, price, image } = product;

  return (
    <div className="relative grid">
      <div className="relative overflow-hidden rounded-lg">
        <picture className="relative rounded-lg overflow-hidden">
          <source
            media="(min-width: 1024px)"
            srcSet={image.desktop}
          />
          <source media="(min-width: 768px)" srcSet={image.tablet} />
          <img
            src={image.mobile}
            alt={name}
            className="w-full h-auto object-cover"
          />
        </picture>
      </div>
      {/* product actions container */}
      <div className="relative">
        <button
          onClick={onAddToCart}
          className="h-11 w-40 font-semibold bg-white text-brand-rose-900 border border-brand-rose-400 rounded-full cursor-pointer flex items-center justify-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-brand-red-500 hover:border-2 hover:border-brand-red-500 focus-visible:outline-2 focus-visible:outline-brand-red-500 focus-visible:-outline-offset-1 focus:text-brand-red-500 transition">
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20">
            <g fill="#C73B0F" clipPath="url(#a)">
              <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
              <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M.333 0h20v20h-20z" />
              </clipPath>
            </defs>
          </svg>
          Add to Cart
        </button>
      </div>

      <div className="space-y-1 mt-12">
        <p className="text-brand-rose-500 text-sm">{category}</p>
        <h3 className="font-semibold text-brand-rose-900">{name}</h3>
        <p className="font-semibold text-brand-red-500">
          {price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

ProductCard.PropTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.object
  }),
  onAddToCart: PropTypes.func,
};

export default ProductCard;