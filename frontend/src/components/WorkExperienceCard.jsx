import React from "react";
// import './RightContainer.css';

const WorkExperienceCard = ({
  company,
  jobTitle,
  startTime,
  endTime,
  desc
}) => {
  return (
    <li>
      <h2>
        {company}, {jobTitle}（{startTime} ~ {endTime}）
      </h2>
      <p>{desc}</p>
    </li>
  );
};

export default WorkExperienceCard;
