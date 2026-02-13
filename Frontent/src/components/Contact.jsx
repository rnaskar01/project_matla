const Contact = () => {
  return (
    <section
      id="product"
      className="relative bg-cover bg-center py-70 mt-2 overflow-visible"
      style={{
        backgroundImage: "url('/Image/contact_bg.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start pt-24">
        {/* Contact Form */}
        <div className="-mt-80">
          <h2 className="text-4xl font-serif font-bold mb-6">Contact Us</h2>
          <h3 className="text-lg font-serif">
            Have questions? Reach out to us!
          </h3>
          <div className="mt-4 border border-gray-300 rounded-xl p-8 shadow-lg">
            <input
              className="w-full bg-transparent border-b border-gray-400 py-3 mb-6 
    focus:outline-none focus:border-red-600 transition-all duration-300 "
              placeholder="Name"
              required
            />

            <input
              className="w-full bg-transparent border-b border-gray-400 py-3 mb-6 
    focus:outline-none focus:border-red-600 transition-all duration-300 "
              placeholder="Email"
              required
            />
            <textarea
              className="w-full bg-transparent border-b border-gray-400 py-3 mb-6 
  focus:outline-none focus:border-red-600 transition-all duration-300 resize-none"
              placeholder="Message"
              required
            />
          </div>

          <button
            className="bg-red-600 text-white mt-4 cursor-pointer px-6 py-3 rounded-lg 
transition-all duration-300 ease-in-out 
hover:bg-red-700 hover:-translate-y-1 hover:shadow-xl"
          >
            Send Message
          </button>
        </div>

        {/* Contact Info */}
        <div className="-mt-40 ml-30">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Contact Information
          </h2>
          <div className="flex items-center gap-3 text-lg font-serif">
            <img src="/Image/icon/mail.png" alt="mail" className="w-7 h-6" />
            <span>matlafoods@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-lg font-serif">
            <img src="/Image/icon/call.png" alt="mail" className="w-5 h-4" />
            <span>+91 8617505480</span>
          </div>
          <div className="flex items-center gap-3 text-lg font-serif">
            <img
              src="/Image/icon/landmark.png"
              alt="mail"
              className="w-5 h-5 -mt-6"
            />
            <span>6 No Jalaberia, Kultali, South 24 Parganas, Sundarbans, West Bengal, India, 743338</span>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <a
              href="https://www.facebook.com/share/18F4HyhMYB/"
              className="w-12 h-12 flex items-center justify-center 
    border border-gray-400 rounded-full 
    transition-all duration-300 
    hover:bg-red-600 hover:border-red-600 hover:scale-110"
            >
              <img
                src="/Image/icon/fb.png"
                alt="facebook handle"
                className="w-8 h-8"
              />
            </a>

            <a
              href="https://www.instagram.com/matlaagro?igsh=MW5jdWxzZ3BqYTNpZA==&utm_source=ig_contact_invite"
              className="w-12 h-12 flex items-center justify-center 
    border border-gray-400 rounded-full 
    transition-all duration-300 
    hover:bg-red-600 hover:border-red-600 hover:scale-110"
            >
              <img
                src="/Image/icon/insta.png"
                alt="insta handle"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
        {/* {social media handle} */}
      </div>
    </section>
  );
};

export default Contact;
