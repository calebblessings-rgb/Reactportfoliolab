import ProjectCard from "./projectcard";

function ProjectList({ projects }) {
  return (
    <section>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
    </section>
  );
}

export default ProjectList;