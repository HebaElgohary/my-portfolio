import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        container mx-auto
        px-6 py-20
        bg-bg
        text-text
        transition-colors duration-300
      "
    >
      {/* Heading */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          My Work
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Projects
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-text-muted">
          A selection of projects that showcase my skills in building modern,
          responsive, and user-focused web applications.
        </p>
      </div>

      {/* Projects */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
            img={project.Img}
          />
        ))}
      </div>
    </section>
  );
}