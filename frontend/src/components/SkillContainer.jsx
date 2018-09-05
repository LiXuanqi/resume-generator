import React from 'react';

const SkillContainer = ({ skillList }) => {
  return (
    <div>
      { skillList.map((item, index) => {
        return (
          <div>
            <span>{ item.type }: </span>
            <span>{ item.data }</span>
          </div>
        )
      }) }
    </div>
  );
}

export default SkillContainer;