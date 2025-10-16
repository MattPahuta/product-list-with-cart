import AddToCartButton from "./AddToCartButton";

function ProductCard({product}) {
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
        <AddToCartButton />
      </div>

      <div className="space-y-1 mt-12">
        <p className="text-brand-rose-500 text-sm">{category}</p>
        <h3 className="text-brand-rose-900">{name}</h3>
        <p className="text-brand-red-500">{price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;