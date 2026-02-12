const About = () => {
  return (
    <section
      id="about"
      className="relative bg-cover bg-center py-60 mt-2 "
      style={{
        backgroundImage: "url('/Image/About.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center -mt-58">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-[#FFF8E7]">
          About Us
        </h2>

        {/* Paragraph */}
        <p className="max-w-4xl mx-auto font-semibold mb-10 text-[#f0ead8] leading-relaxed">
          At Matla, we believe the secret to great food lies in the purity of
          its ingredients. Inspired by the life-giving energy of the Matla
          River, we bring the freshness of the Sundarbans directly to your
          dining table. From our signature sun-ripened tomato ketchup to our
          vibrant fruit jams, every product is crafted from hand-picked produce
          grown in the fertile soils of the delta. No artificial gimmicks—just
          the authentic, bold flavors of nature bottled for your modern
          lifestyle.
        </p>

        {/* Icons Section */}
        <div className="flex justify-center items-center gap-20 -mt-7">

          <div className="flex flex-col items-center">
            <img
              src="/Image/icon/ico_1.png"
              alt="Farm Fresh"
              className="h-32 mb-4 -mt-10"
            />
            <p className="text-gray-900 font-semibold text-lg whitespace-nowrap -mt-15">
              Farm Fresh Tomatoes
            </p>
          </div>

          <div className="h-20 w-px bg-gray-300"></div>

          <div className="flex flex-col items-center">
            <img
              src="/Image/icon/ico_2.png"
              alt="Hygienic Production"
              className="h-32 mb-4 -mt-10"
            />
            <p className="text-gray-900 font-semibold text-lg whitespace-nowrap -mt-15">
              Hygienic Production
            </p>
          </div>

          <div className="h-20 w-px bg-gray-300"></div>

          <div className="flex flex-col items-center">
            <img
              src="/Image/icon/ico_3.png"
              alt="No Preservatives"
              className="h-32 mb-4 -mt-10"
            />
            <p className="text-gray-900 font-semibold text-lg whitespace-nowrap -mt-15">
              No Artificial Preservatives
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
