import React from "react";
import "./RightContainer.css";
import SkillContainer from "./SkillContainer.jsx";
import ProjectContainer from "./ProjectContainer.jsx";
import WorkExperienceContainer from "./WorkExperienceContainer.jsx";

const skills = [
  {
    title: "HTML, CSS",
    desc:
      "Familiar with HTML5 semantic elements, CSS3 rules, responsive design, Sass and Less.",
    level: 5,
    color: "#e55126"
  },
  {
    title: "JavaScript",
    desc: "熟练使用浏览器端 JavaScript、Canvas/SVG、jQuery、Node.js。",
    level: 4,
    color: "#e5a228"
  },
  {
    title: "Front-end",
    desc: "React, Angular, Vue, Rxjs, Webpack, Babel, Mocha",
    level: 3,
    color: "#41b883"
  }
];

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

const projects = [
  {
    title: "Parallel Rails（2017-03）",
    desc:
      "使用 PIXI.js 实现的音乐游戏。开发语言为 JavaScript（ES6），使用了 Webpack 打包，部分架构参考了 RPG Maker VX 中 RGSS 2 的实现。",
    tip: "负责全部代码的编写。"
  },
  {
    title: "Parallel Rails（2017-03）",
    desc:
      "使用 PIXI.js 实现的音乐游戏。开发语言为 JavaScript（ES6），使用了 Webpack 打包，部分架构参考了 RPG Maker VX 中 RGSS 2 的实现。",
    tip: "负责全部代码的编写。"
  },
  {
    title: "Parallel Rails（2017-03）",
    desc:
      "使用 PIXI.js 实现的音乐游戏。开发语言为 JavaScript（ES6），使用了 Webpack 打包，部分架构参考了 RPG Maker VX 中 RGSS 2 的实现。",
    tip: "负责全部代码的编写。"
  }
];
// TODO: handle <br>
const works = [
  {
    company: "CTRS Technology Co., Ltd",
    jobTitle: "Software Development Engineer Intern",
    startTime: "2017-12",
    endTime: "2018-06",
    desc: [
      "Worked in the Drone Team and Developed a Ground Station which allows users to control multiple drones automatically.",
      "Developed a map component for drones with Vue, Vuex, Leaflet, Baidu Map API and integrated with original Qt (C++ framework) project.",
      "Designed and Implemented an algorithm to automatically plan the flight route for spraying pesticides and build Unit Test cases by Mocha."
    ]
  }
];
const RightContainer = () => {
  return (
    <section className="right">
      <ul>
        <SkillContainer skills={skills} />
        <ProjectContainer projects={projects} />
        <WorkExperienceContainer works={works}/>
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
