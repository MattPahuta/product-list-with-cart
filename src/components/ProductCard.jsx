import AddToCartButton from "./AddToCartButton";

function ProductCard({product}) {
  return (
    <div className="">
      <picture>
        <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
        <source media="(min-width: 768px)" srcSet={product.image.tablet} />
        {/* <img src={product.image.mobile} alt={product.name} className="w-full rounded-lg object-cover h-[212px] lg:h-60" /> */}
        <img src={product.image.mobile} alt={product.name} className="w-full" />
      </picture>
      <AddToCartButton />
      <div className="space-y-1">
        <p className="text-stone-500 text-sm">{product.category}</p>
        <h3 className="text-stone-900">{product.name}</h3>
        <p className="text-orange-700">{product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductCard;