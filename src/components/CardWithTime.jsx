import React from 'react';
import "./CardWithTime.css"

const CardWithTime = ({ title, subtitle, startTime, endTime, desc, id}) => {

  return (
    <div className={ 'card-container'+ (id !== 0 ? 'card-container top-line' : '')}>
      <div className="card-title">
        <span>{ title }</span>
        <span>{ startTime } - { endTime }</span>
      </div>
      <div className="card-subtitle">{ subtitle }</div>
      <p className="card-desc" dangerouslySetInnerHTML={desc}>
      </p>
    </div>
  );
}

export default CardWithTime;