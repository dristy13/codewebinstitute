import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="block overflow-hidden transition-colors border border-gray-800 group rounded-xl hover:border-gray-700 bg-black/30"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <motion.img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Container */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-gray-100">
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-gray-400 transition-colors duration-300 transform group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>

        <p className="mb-4 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-xs text-gray-300 rounded-full bg-gray-800/40 border border-gray-700/50 group-hover:border-gray-600 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
