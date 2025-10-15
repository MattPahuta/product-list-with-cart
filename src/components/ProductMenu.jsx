import ProductCard from "./ProductCard";

function ProductMenu({products}) {
  return (
    <section className="max-w-4xl">
      <h1 className="mb-8 text-4xl font-bold text-stone-900">Desserts</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((prod, i) => (
          <ProductCard key={i} product={prod} />
        ))}
      </div>
    </section>
  );
}

export default ProductMenu;