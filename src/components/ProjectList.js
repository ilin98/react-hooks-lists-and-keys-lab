import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectList = projects.map(projectItem => {
    return <ProjectItem key={projectItem.id} name={projectItem.name} about={projectItem.about} technologies={projectItem.technologies}/>
  })
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectList}</div>
    </div>
  );
}

export default ProjectList;
