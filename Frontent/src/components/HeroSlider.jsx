import { useEffect, useRef, useState } from "react";
import banners from "../data/banner";

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 20000);
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
    resetAutoSlide();
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) nextSlide(); // swipe left
    if (diff < -50) prevSlide(); // swipe right
  };

  return (
    <section
      id="home"
      className="h-screen relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${banner.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="h-full bg-black/40 flex items-center">
            <div className="w-full">
              <div className="max-w-7xl mx-auto px-6 lg:px-12 text-white">
                <div className="max-w-xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    {banner.title}
                  </h1>

                  <h2 className="text-3xl text-gray-200 mb-4 font-semibold">
                    {banner.subtitle1}
                  </h2>

                  <h2 className="text-3xl text-gray-200 mb-6 font-semibold">
                    {banner.subtitle2}
                  </h2>

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

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20
        bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20
        bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        ›
      </button>
    </section>
  );
};

export default HeroSlider;
