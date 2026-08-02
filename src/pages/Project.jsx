import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Project = () => {
  return (
    <section id="project" name="project" className="scroll-mt-24 pt-16 lg:pt-24">
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary-light">
        Projects
      </h2>

      <div className="flex flex-col gap-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
