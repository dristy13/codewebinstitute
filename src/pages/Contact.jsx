import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="max-w-6xl px-6 py-32 mx-auto">
      {/* Heading */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="mb-4 text-4xl font-bold text-white md:text-5xl"
        >
          Let's Work Together
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-lg text-gray-400"
        >
          Have an ambitious project? We'd love to hear about it. Let's discuss
          how we can elevate your digital presence.
        </motion.p>
      </motion.div>

      {/* Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid items-start gap-16 md:grid-cols-2"
      >
        {/* Left Info */}
        <motion.div variants={itemVariants}>
          <h2 className="mb-6 text-2xl font-semibold text-white">
            Get In Touch
          </h2>

          <p className="mb-10 leading-relaxed text-gray-400">
            Whether you need a sophisticated website, high-performance web
            application, or a complete digital transformation, we're here to
            bring your vision to life. Share your vision and we'll craft the
            perfect solution.
          </p>

          <div className="space-y-6 text-gray-300">
            <div className="flex items-start gap-4">
              <Mail className="flex-shrink-0 w-5 h-5 mt-1 text-white" />
              <div>
                <p className="mb-1 text-sm font-semibold text-white">Email</p>
                <a
                  href="mailto:contact@codewebsolutions.com"
                  className="transition-colors hover:text-white"
                >
                  contact@codewebsolutions.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="flex-shrink-0 w-5 h-5 mt-1 text-white" />
              <div>
                <p className="mb-1 text-sm font-semibold text-white">Phone</p>
                <a
                  href="tel:+91"
                  className="transition-colors hover:text-white"
                >
                  +91 9266982764
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="flex-shrink-0 w-5 h-5 mt-1 text-white" />
              <div>
                <p className="mb-1 text-sm font-semibold text-white">
                  Location
                </p>
                <p>Raghunathpur , Motihari , Bihar , 845401</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-8 transition-colors border border-gray-800 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl hover:border-gray-700"
        >
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 text-white transition-colors border border-gray-700 rounded-lg outline-none bg-black/40 focus:border-gray-600 focus:bg-black/60"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 text-white transition-colors border border-gray-700 rounded-lg outline-none bg-black/40 focus:border-gray-600 focus:bg-black/60"
            />
          </div>

          <div className="mb-8">
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 text-white transition-colors border border-gray-700 rounded-lg outline-none resize-none bg-black/40 focus:border-gray-600 focus:bg-black/60"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 font-semibold text-black transition-colors duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
