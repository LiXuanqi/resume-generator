import React from 'react';
// import './RightContainer.css';
import SkillContainer from './SkillContainer.jsx';
import ProjectContainer from './ProjectContainer.jsx';
import WorkExperienceContainer from './WorkExperienceContainer.jsx';

const RightContainer = () => {
  return (
    <section className="right">
      <ul>
        <SkillContainer />
        <ProjectContainer />
        <WorkExperienceContainer />
        <li>
          <h1><i class="fa fa-user"></i>Introduction</h1>
          <p>我是一个靠谱的、偏前端的全栈开发者。毕业于南京航空航天大学计算机系，曾担任纸飞机南航青年网络社区管理委员会主任。工作起来认真负责，平时与人和谐相处，闲暇时间经常自己捣鼓一些技术上的小玩意儿。</p>
        </li>
        <li>
          <h1><i class="fa fa-music"></i>Hobbies</h1>
          <p>Soccer, travel, photography</p>
        </li>
      </ul>
    </section>
  );
}

export default RightContainer;