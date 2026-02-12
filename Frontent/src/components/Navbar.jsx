import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow-sm translate-y-2">
      <div className="max-w-7xl mx-auto h-20 flex justify-between items-center px-6">

        {/* Logo */}
        <div className="h-full flex items-center">
          <a href="#Home">
          <img
            src="/Image/logo.png"
            alt="Matla logo"
            className="h-30 w-auto scale-125 translate-y-6 origin-left"
          />
          </a>
        </div>

        {/* Desktop Menu */}
       <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
  <li>
    <a
      href="#home"
      className="relative px-4 py-2 text-gray-600 transition hover:text-red-600
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-red-600
      after:transition-all after:duration-300
      hover:after:w-full"
    >
      Home
    </a>
  </li>

  <li>
    <a
      href="#about"
      className="relative px-4 py-2 transition hover:text-red-600
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-red-600
      after:transition-all after:duration-300
      hover:after:w-full"
    >
      About
    </a>
  </li>

  <li>
    <a
      href="#products"
      className="relative px-4 py-2 transition hover:text-red-600
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-red-600
      after:transition-all after:duration-300
      hover:after:w-full"
    >
      Product
    </a>
  </li>

  <li>
    <a
      href="#contact"
      className="relative px-4 py-2 transition hover:text-red-600
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-red-600
      after:transition-all after:duration-300
      hover:after:w-full"
    >
      Contact
    </a>
  </li>
</ul>


        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#products" onClick={() => setOpen(false)}>Product</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
