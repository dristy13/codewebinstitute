import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="max-w-6xl px-6 py-32 mx-auto">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mb-20 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="mb-4 text-4xl font-bold text-white md:text-5xl"
        >
          About Code Web Solutions
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-lg text-gray-400"
        >
          A premium digital agency dedicated to transforming ambitious visions
          into exceptional digital experiences through innovative technology and
          strategic design.
        </motion.p>
      </motion.div>

      {/* Content Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid items-center gap-16 md:grid-cols-2"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants}>
          <h2 className="mb-6 text-3xl font-semibold text-white">Who We Are</h2>
          <p className="mb-6 leading-relaxed text-gray-400">
            Code Web Solutions is a forward-thinking digital agency that
            empowers businesses to establish commanding digital presence. We
            specialize in architecting modern websites, sophisticated web
            applications, and scalable digital platforms that combine stunning
            design with robust functionality.
          </p>

          <p className="leading-relaxed text-gray-400">
            Our philosophy extends beyond aesthetics. We engineer solutions that
            address real business challenges, drive meaningful engagement, and
            accelerate sustainable growth for forward-thinking organizations.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={itemVariants}
          className="p-8 transition-colors border border-gray-800 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl hover:border-gray-700"
        >
          <h3 className="mb-6 text-xl font-semibold text-white">
            Why Choose Us
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
              <span>Refined & modern UI/UX design excellence</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
              <span>Scalable, performance-optimized architecture</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
              <span>Proven track record across industries</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
              <span>Transparent, collaborative partnerships</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
              <span>Dedicated long-term technical support</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mt-24 text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-6 text-3xl font-semibold text-white"
        >
          Our Mission
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto leading-relaxed text-gray-400"
        >
          We empower visionary businesses with cutting-edge technology and
          strategic digital solutions. Our commitment is to deliver
          sophisticated products that are efficient, reliable, and future-proof.
          We build enduring partnerships rooted in trust, transparency, and
          shared success.
        </motion.p>
      </motion.div>
    </section>
  );
}
