import React from 'react';
import "./CardWithTime.css"

const renderDescriptionList = (descList) => {
  return (
    <ul>
      { descList.map((item, index) => {
        return (
          <li key={index}>
            { item }
          </li>
        );
      })}
    </ul>
  );
}

const CardWithTime = ({ title, subtitle, startTime, endTime, desc, id}) => {

  return (
    <div className={ 'card-container'+ (id !== 0 ? 'card-container top-line' : '')}>
      <div className="card-title">
        <span>{ title }</span>
        <span>{ startTime } - { endTime }</span>
      </div>
      <div className="card-subtitle">{ subtitle }</div>
      <p className="card-desc">
        { typeof desc === "string" ? desc : renderDescriptionList(desc) }
      </p>
    </div>
  );
}

export default CardWithTime;