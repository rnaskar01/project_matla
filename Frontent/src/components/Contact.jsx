const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        <div>
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <input className="w-full p-3 mb-4 rounded" placeholder="Name" />
          <input className="w-full p-3 mb-4 rounded" placeholder="Email" />
          <textarea className="w-full p-3 mb-4 rounded" placeholder="Message" />
          <button className="bg-red-600 text-white px-6 py-3 rounded">
            Send Message
          </button>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p>📧 info@matla.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Mumbai, India</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
