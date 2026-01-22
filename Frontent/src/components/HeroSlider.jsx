import { useEffect, useState } from "react";
import banners from "../data/banner";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="h-screen relative">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${banner.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="h-full bg-black/40 flex items-center">
            {/* Content Wrapper */}
            <div className="w-full">
              <div className="max-w-7xl mx-auto px-6 lg:px-12 text-white text-left">
                
                <div className="max-w-xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {banner.title}
                  </h1>

                  <p className="text-base md:text-lg mb-6">
                    {banner.subtitle}
                  </p>

                  <a
                    href="#contact"
                    className="inline-block bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                  >
                    Contact Us
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSlider;
