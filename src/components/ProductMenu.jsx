import ProductCard from "./ProductCard";

function ProductMenu({products}) {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((prod, i) => (
        <ProductCard key={i} product={prod} />
      ))}
    </section>
  )
}

export default ProductMenu;