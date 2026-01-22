const About = () => {
  return (
    <section id="about" className="py-20 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12">
          MATLA is a food startup dedicated to producing farm-fresh tomato
          ketchup using hygienic methods and traditional recipes.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow">
            🍅 <h3 className="font-semibold mt-3">Farm Fresh Tomatoes</h3>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            🏭 <h3 className="font-semibold mt-3">Hygienic Production</h3>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            ❤️ <h3 className="font-semibold mt-3">No Preservatives</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
