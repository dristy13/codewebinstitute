import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -8, borderColor: "#374151" }}
      transition={{ type: "spring", stiffness: 200 }}
      className="p-8 transition-colors border border-gray-800 group rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl hover:border-gray-700"
    >
      {/* Icon */}
      <motion.div
        className="mb-6 text-5xl"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-gray-100">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-6 leading-relaxed text-gray-400">{desc}</p>

      {/* Learn More Link */}
      <motion.div
        className="flex items-center gap-2 text-sm text-gray-300 transition-colors cursor-pointer group-hover:text-white"
        whileHover={{ x: 4 }}
      >
        <span className="font-medium">Learn More</span>
        <ArrowRight className="w-4 h-4" />
      </motion.div>
    </motion.div>
  );
}
