import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="max-w-6xl px-6 py-32 mx-auto">
      {/* Heading */}
      <div className="mb-20 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-400">
          Have a project in mind? Let’s discuss how we can help you build
          something great.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid items-start gap-16 md:grid-cols-2">
        {/* Left Info */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Get In Touch</h2>

          <p className="mb-8 leading-relaxed text-gray-300">
            Whether you need a website, web application, or a complete digital
            solution, we are here to help. Share your requirements and we’ll get
            back to you with the best possible approach.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              contact@codewebsolutions.com
            </p>
            <p>
              <span className="font-semibold text-white">Phone:</span> +91 XXXXX
              XXXXX
            </p>
            <p>
              <span className="font-semibold text-white">Location:</span> India
            </p>
          </div>
        </div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 border shadow-xl bg-white/10 backdrop-blur-xl border-white/10 rounded-2xl"
        >
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 text-white border rounded-lg outline-none bg-black/40 border-white/10 focus:border-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 text-white border rounded-lg outline-none bg-black/40 border-white/10 focus:border-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-300">Message</label>
            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 text-white border rounded-lg outline-none bg-black/40 border-white/10 focus:border-indigo-500"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="w-full py-3 font-semibold text-white transition bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
