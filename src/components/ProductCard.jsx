import AddToCartButton from "./AddToCartButton";

function ProductCard({product}) {
  const { name, category, price, image } = product;

  return (
    <div className="">
      <picture>
        <source media="(min-width: 1024px)" srcSet={image.desktop} />
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        {/* <img src={product.image.mobile} alt={product.name} className="w-full rounded-lg object-cover h-[212px] lg:h-60" /> */}
        <img src={image.mobile} alt={name} className="w-full h-auto object-cover" />
      </picture>
      <AddToCartButton />
      <div className="space-y-1">
        <p className="text-brand-rose-500 text-sm">{category}</p>
        <h3 className="text-brand-rose-900">{name}</h3>
        <p className="text-brand-red-500">{price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductCard;