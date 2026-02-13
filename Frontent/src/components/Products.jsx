import React from "react";

const OurProduct = () => {
  return (
    <section
      id="product"
      className="relative bg-cover bg-center py-70 mt-2"
      style={{
        backgroundImage: "url('/Image/product_sec_back.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="absolute inset-0 bg-black/20"></div>

        
        {/* Left Content */}
        <div className="space-y-6 max-w-xl -mt-60">
          <h2 className="text-5xl lg:text-6xl tracking-wide font-serif text-[#7A1F1F]">
            Our Product
          </h2>

          <p className="text-gray-800 max-w-xl text-lg leading-relaxed">
            At Matla, excellence begins at the source. Our tomato ketchup is made from hand-selected, vine-ripened tomatoes, thoughtfully blended to achieve a perfect balance of depth, sweetness, and freshness. Pure, uncompromised, and crafted with care—it is a taste designed for those who appreciate quality without compromise. Rooted in the richness of the Sundarbans and inspired by the timeless flow of the Matla River, every bottle captures the essence of nature’s finest harvest. More than just a condiment, it is a refined expression of authenticity, freshness, and enduring flavor.
          </p>
        </div>
      </div>

      {/* Product Image Bottom Right */}
      <img
        src="/Image/product-1.png"
        alt="Matla Tomato Ketchup"
        className="absolute -bottom-70 right-50 
                   w-[420px] lg:w-[520px] 
                   object-contain drop-shadow-2xl scale-110"
      />
    </section>
  );
};

export default OurProduct;
