import React from 'react';
import "./CardWithTime.css"

const CardWithTime = () => {
  return (
    <div className="card-container">
      <div className="card-title">
        <span>Northeastern University, Silicon Valley Campus</span>
        <span>09/2018 - Present</span>
      </div>
      <div className="card-subtitle">Master of Science</div>
      <p className="card-intro">Major in Computer Software Engineering -  Information Systems</p>
    </div>
  );
}

export default CardWithTime;