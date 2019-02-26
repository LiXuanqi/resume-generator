import React from "react";
// import './RightContainer.css';

const WorkExperienceCard = ({
  company,
  jobTitle,
  startTime,
  endTime,
  desc
}) => {
  const renderDescriptions = (list) => {
    return (
      list.map((item) => {
        return (<p>{item}</p>);
      })
    );

  }
  console.log(desc);
  return (
    <li>
      <h2>
        {company}, {jobTitle}（{startTime} ~ {endTime}）
      </h2>
      {renderDescriptions(desc)}
    </li>
  );
};

export default WorkExperienceCard;
