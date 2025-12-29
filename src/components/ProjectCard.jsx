import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="block p-6 border shadow-xl rounded-2xl bg-white/10 backdrop-blur-xl border-white/10"
    >
      <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>

      <p className="mb-4 text-sm text-gray-300">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs text-indigo-300 rounded-full bg-indigo-600/20"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
