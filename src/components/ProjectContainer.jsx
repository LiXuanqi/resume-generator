import React from "react";
// import './RightContainer.css';
import ProjectCard from "./ProjectCard.jsx";

const ProjectContainer = ({ projects }) => {
  const renderProjectList = projects => {
    return (
      <ul>
        {projects.map(project => {
          return <ProjectCard {...project} />;
        })}
      </ul>
    );
  };
  return (
    <li className="personal-projects has-line">
      <h1>
        <i className="fa fa-code" />Projects
      </h1>
      {renderProjectList(projects)}
    </li>
  );
};

export default ProjectContainer;
