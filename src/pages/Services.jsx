import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="px-6 py-32 text-white bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-4 text-4xl font-bold md:text-5xl"
          >
            Our <span className="text-white">Services</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-2xl text-gray-400">
            Comprehensive digital solutions designed to elevate your brand,
            engage your audience, and drive measurable business growth.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-3"
        >
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon="🌐"
              title="Website Development"
              desc="Modern, high-performance websites built with React, optimized for speed, SEO, and conversions."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ServiceCard
              icon="📱"
              title="Web Applications"
              desc="Sophisticated web applications featuring secure authentication, intuitive dashboards, and robust APIs."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ServiceCard
              icon="🎨"
              title="UI / UX Design"
              desc="Refined user experiences with elegant interfaces designed for maximum engagement and conversions."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ServiceCard
              icon="⚙️"
              title="Backend & APIs"
              desc="Secure, scalable backend systems built with Node.js, Express, and modern database solutions."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ServiceCard
              icon="🚀"
              title="Performance & SEO"
              desc="Speed optimization, Core Web Vitals mastery, and comprehensive search engine optimization strategies."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ServiceCard
              icon="🛠️"
              title="Maintenance & Support"
              desc="Dedicated ongoing support, regular updates, and continuous feature enhancements for your platform."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
