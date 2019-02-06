import React from 'react';
// import './RightContainer.css';
import WorkExperienceCard from './WorkExperienceCard.jsx';

const WorkExperienceContainer = () => {
  return (
    <li class="working-experiences has-line">
      <h1><i class="fa fa-calendar"></i>Work Experience</h1>
      <ul>
        <WorkExperienceCard />
        <WorkExperienceCard />
        <WorkExperienceCard />
        <WorkExperienceCard />
        <WorkExperienceCard />
      </ul>
    </li>
  );
}

export default WorkExperienceContainer;