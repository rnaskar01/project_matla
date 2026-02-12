import React from "react";

const OurProduct = () => {
  return (
    <section
      id="product"
      className="w-full min-h-10 flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/Image/product_sec_back.png')", // beige texture background
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 items-center gap-12 w-full">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-5xl lg:text-6xl -mt-50 font-semibold text-red-600">
            Our Product
          </h2>

          <p className="text-gray-600 text-xl leading-relaxed max-w-md">
            At Matla, excellence begins at the source. Our tomato ketchup is made from hand-selected, vine-ripened tomatoes, thoughtfully blended to achieve a perfect balance of depth, sweetness, and freshness. Pure, uncompromised, and crafted with care—it is a taste designed for those who appreciate quality without compromise.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/Image/product.png"  // your bottle image
            alt="Matla Tomato Ketchup"
            className="w-[220px] lg:w-[280px] object-contain drop-shadow-xl mt-25"
          />
        </div>

      </div>
    </section>
  );
};

export default OurProduct;
