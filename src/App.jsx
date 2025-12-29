import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="text-white bg-black">
      <Navbar />

      <section id="home">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
