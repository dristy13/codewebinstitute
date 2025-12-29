export default function About() {
  return (
    <section className="max-w-6xl px-6 py-32 mx-auto">
      {/* Heading */}
      <div className="mb-20 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          About Code Web Solutions
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-400">
          We are a modern digital agency focused on building reliable, scalable
          and high-quality web solutions for real businesses.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid items-center gap-16 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Who We Are</h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            Code Web Solutions is a technology-driven agency that helps
            businesses establish a strong digital presence. We specialize in
            building modern websites, web applications and digital platforms
            that are fast, secure and user-friendly.
          </p>

          <p className="leading-relaxed text-gray-300">
            Our focus is not just on design, but on delivering solutions that
            actually solve business problems and help companies grow.
          </p>
        </div>

        {/* Right Content */}
        <div className="p-8 border shadow-xl bg-white/5 backdrop-blur-xl border-white/10 rounded-2xl">
          <h3 className="mb-4 text-xl font-semibold">Why Choose Us</h3>

          <ul className="space-y-3 text-gray-300">
            <li>• Clean & modern UI/UX design</li>
            <li>• Scalable and performance-focused code</li>
            <li>• Real-world project experience</li>
            <li>• Transparent communication</li>
            <li>• Long-term technical support</li>
          </ul>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-24 text-center">
        <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
        <p className="max-w-3xl mx-auto leading-relaxed text-gray-400">
          Our mission is to empower businesses with technology by delivering
          digital products that are efficient, reliable and future-ready. We
          believe in building long-term partnerships, not just websites.
        </p>
      </div>
    </section>
  );
}
