import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const ptImComponents = projects.map( (project, index) => {
    return <ProjectItem key={`proj${project.id}`} name={project.name}
      about={project.about} technologies={project.technologies} />
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}</div>
      <div id="project-list">{ptImComponents}</div>
    </div>
  );
}
export default ProjectList;