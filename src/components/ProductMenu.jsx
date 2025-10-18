import ProductCard from "./ProductCard";

function ProductMenu({products, onAddToCart}) {
  return (
    <section className="max-w-4xl">
      <h1 className="mb-8 text-4xl font-bold text-stone-900">Desserts</h1>

      {/* ToDo: this should be a ul with li elements as each product card */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.name} 
            product={product} 
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductMenu;