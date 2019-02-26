import React from 'react';
// import './RightContainer.css';

const ProjectCard = ({ title, desc, tip}) => {
  return (
    <li>
      <div className="project-img">
        <img data-src="parallel-rails" title="点击查看大图" alt="Parallel Rails（2017-03）" />
      </div>
      <h2>{ title }</h2>
      <p>{ desc }</p>
      <p>{ tip }</p>
    </li>
  );
}

export default ProjectCard;