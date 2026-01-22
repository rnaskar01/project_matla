const Products = () => {
  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Products</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Classic Ketchup", "No Preservatives", "Kids Ketchup"].map(
            (item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <img
                  src={`/images/product${i + 1}.png`}
                  alt={item}
                  className="mx-auto h-48 object-contain"
                />
                <h3 className="mt-4 font-semibold">{item}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
