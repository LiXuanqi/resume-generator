import React from "react";
// import './RightContainer.css';
import WorkExperienceCard from "./WorkExperienceCard.jsx";

const WorkExperienceContainer = ({ works }) => {
  const renderWorkExperienceList = works => {
    return (
      <ul>
        {works.map(work => {
          return <WorkExperienceCard {...work} />;
        })}
      </ul>
    );
  };
  return (
    <li class="working-experiences has-line">
      <h1>
        <i class="fa fa-calendar" />Work Experience
      </h1>
      {renderWorkExperienceList(works)}
    </li>
  );
};

export default WorkExperienceContainer;
