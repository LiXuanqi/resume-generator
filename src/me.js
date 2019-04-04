const isFindingJob = true // set false makes resume invisible.

const BASIC_INFO = {
  name: "Xuanqi Li",
  desc: "An problem solver adept at programming",
  address: "San jose, CA.",
  tel: "(408)-406-8721",
  email: "lixuanqi1995@gmail.com",
  wechat: "DreamSinker",
  blogUrl: "http://lixuanqi.me/",
  githubUrl: "https://github.com/LiXuanqi",
  linkedinUrl: "https://www.linkedin.com/in/xuanqi-li/",
  lofterUrl: "http://lixuanqi.lofter.com/"
}

const SKILLS = [
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

const PROJECTS = [
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

const WORKS = [
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
  },
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

export {
  BASIC_INFO,
  SKILLS,
  PROJECTS,
  WORKS,
  isFindingJob
}