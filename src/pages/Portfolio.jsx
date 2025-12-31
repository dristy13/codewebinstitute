import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Portfolio() {
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
    <section className="px-6 py-32 mx-auto max-w-7xl">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mb-20 text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-4 text-4xl font-bold text-white md:text-5xl"
        >
          Featured Work
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-gray-400"
        >
          Exceptional digital experiences crafted for visionary brands and
          ambitious businesses across diverse industries.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
