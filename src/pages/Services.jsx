import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section className="px-6 py-20 text-white bg-black">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-4 text-4xl font-bold">
          Our <span className="text-yellow-400">Services</span>
        </h2>
        <p className="max-w-2xl mb-12 text-zinc-400">
          We provide end-to-end digital solutions to help businesses grow
          online.
        </p>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          <ServiceCard
            icon="🌐"
            title="Website Development"
            desc="Modern, fast and SEO-friendly websites built with React and modern tools."
          />

          <ServiceCard
            icon="📱"
            title="Web Applications"
            desc="Scalable web apps with authentication, dashboards and APIs."
          />

          <ServiceCard
            icon="🎨"
            title="UI / UX Design"
            desc="Clean, professional and conversion-focused user interface designs."
          />

          <ServiceCard
            icon="⚙️"
            title="Backend & APIs"
            desc="Secure backend systems using Node.js, Express and databases."
          />

          <ServiceCard
            icon="🚀"
            title="Performance & SEO"
            desc="Speed optimization, Core Web Vitals and search engine optimization."
          />

          <ServiceCard
            icon="🛠️"
            title="Maintenance & Support"
            desc="Ongoing support, updates and feature improvements."
          />
        </div>
      </div>
    </section>
  );
}
