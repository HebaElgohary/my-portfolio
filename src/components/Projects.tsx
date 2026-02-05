import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        py-20 px-6
         text-gray-900 bg-gray-950 
        dark:bg-gray-950 dark:text-gray-100
        transition-colors duration-300
        
      "
    >
      <div className="text-center mb-14 ">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>

        <p
          className="
          mt-4 max-w-xl mx-auto
          text-gray-600
          dark:text-gray-400
        "
        >
          A selection of projects that showcase my skills in building modern,
          responsive, and user-focused web applications.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
