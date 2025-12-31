import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-full h-20 px-10 py-4 border-b bg-black/60 backdrop-blur border-gray-800/50">
      {/* LOGO */}
      <img
        src={logo}
        alt="Code Web Solutions"
        className="h-14 w-auto object-contain scale-[2.9] origin-left"
      />

      {/* NAV LINKS */}
      <div className="flex gap-8 text-sm text-gray-300">
        <a
          href="#home"
          className="transition-colors duration-300 hover:text-white"
        >
          Home
        </a>
        <a
          href="#services"
          className="transition-colors duration-300 hover:text-white"
        >
          Services
        </a>
        <a
          href="#portfolio"
          className="transition-colors duration-300 hover:text-white"
        >
          Portfolio
        </a>
        <a
          href="#about"
          className="transition-colors duration-300 hover:text-white"
        >
          About
        </a>
        <a
          href="#contact"
          className="transition-colors duration-300 hover:text-white"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
