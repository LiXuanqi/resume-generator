import React from "react";
import "./RightContainer.css";
import SkillContainer from "./SkillContainer.jsx";
import ProjectContainer from "./ProjectContainer.jsx";
import WorkExperienceContainer from "./WorkExperienceContainer.jsx";

import { SKILLS, PROJECTS, WORKS } from "../me";

const colors = [
  "e55126",
  "e5a228",
  "41b883",
  "8892bf",
  "060606",
  "e10915",
  "73abff",
  "ff1e1e"
];


const RightContainer = () => {
  return (
    <section className="right">
      <ul>
        <SkillContainer skills={SKILLS} />
        <ProjectContainer projects={PROJECTS} />
        <WorkExperienceContainer works={WORKS}/>
        <li>
          <h1>
            <i class="fa fa-user" />Introduction
          </h1>
          <p>
            我是一个靠谱的、偏前端的全栈开发者。毕业于南京航空航天大学计算机系，曾担任纸飞机南航青年网络社区管理委员会主任。工作起来认真负责，平时与人和谐相处，闲暇时间经常自己捣鼓一些技术上的小玩意儿。
          </p>
        </li>
        <li>
          <h1>
            <i class="fa fa-music" />Hobbies
          </h1>
          <p>Soccer, travel, photography</p>
        </li>
      </ul>
    </section>
  );
};

export default RightContainer;
