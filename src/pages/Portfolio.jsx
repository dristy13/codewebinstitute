import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { fadeUpOnScroll } from "../animations/gsap";

export default function Portfolio() {
  useEffect(() => {
    fadeUpOnScroll(".portfolio-section");
  }, []);

  return (
    <section className="px-6 py-32 mx-auto portfolio-section max-w-7xl">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Projects</h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          Real-world projects built for clients across different industries.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
