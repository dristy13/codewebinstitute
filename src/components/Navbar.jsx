export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex justify-between w-full px-10 py-4 bg-black/80 backdrop-blur">
      <h1 className="text-xl font-bold text-yellow-400">Code Web Solutions</h1>

      <div className="flex gap-6 text-sm text-white">
        <a href="#home" className="hover:text-yellow-400">
          Home
        </a>
        <a href="#services" className="hover:text-yellow-400">
          Services
        </a>
        <a href="#portfolio" className="hover:text-yellow-400">
          Portfolio
        </a>
        <a href="#about" className="hover:text-yellow-400">
          About
        </a>
        <a href="#contact" className="hover:text-yellow-400">
          Contact
        </a>
      </div>
    </nav>
  );
}
