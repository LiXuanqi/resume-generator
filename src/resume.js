const PROFILE = {
  name: "Xuanqi Li",
  address: "Milpitas City, CA",
  tel: "(408) 406 - 8721",
  email: "lixuanqi1995@gmail.com",
  github: "https://github.com/LiXuanqi",
  website: "http://lixuanqi.me/"
}
const EDUCATIONS = [
  {
    university: "Northeastern University, Silicon Valley Campus",
    degree: "Master of Science",
    startTime: "09/2018",
    endTime: "Present",
    desc: "Major in Computer Software Engineering -  Information Systems"
   
  },
  {
    university: "Nanjing University of Aeronautics and Astronautics",
    degree: "Bachelor of Engineering",
    startTime: "09/2013",
    endTime: "06/2017",
    desc: "Major in Aircraft Power Engineering - Control and Simulation Track"
  }
];

const SKILLS = [
  {
    type: "Languages",
    data: "Java, JavaScript(ES6), Python, HTML, CSS, SQL, C+"
  },
  {
    type: "Frontend",
    data: "React, Redux, Angular, Rxjs, Vue, Webpack, Babel, Less, Eslint, Mocha"
  },
  {
    type: "Backend",
    data: "Spring, Spring Boot, Flask, Express(Node.js), MySQL, Redis, MongoDB, Nginx, Maven, JUnit"
  },
  {
    type: "Tools",
    data: "Git, Docker, VIM, Travis CI"
  }
];

const WORK_EXPERIENCES = [
  {
    company: "SmartGCS Technology Co., Ltd, Nanjing, China",
    job: "Software Development Engineer Intern",
    startTime: "12/2017",
    endTime: "06/2018",
    desc: [
      "Worked in the Drone Team and Developed a Ground Station which allows users to control multiple drones automatically.",
      "Developed a map component for drones using Vue, Vuex, Leaflet and Baidu Map API.",
      "Integrated the original Qt project with the new map component using Qt WebEngine and Qt WebChannel.",
      "Built Unit Test case by Mocha (JavaScript test framework) and used Eslint to keep the code consistent in style."
    ]
  },
  {
    company: "SmartGCS Technology Co., Ltd, Nanjing, China",
    job: "Software Development Engineer Intern",
    startTime: "12/2017",
    endTime: "06/2018",
    desc: [
      "Worked in the Drone Team and Developed a Ground Station which allows users to control multiple drones automatically.",
      "Developed a map component for drones using Vue, Vuex, Leaflet and Baidu Map API.",
      "Integrated the original Qt project with the new map component using Qt WebEngine and Qt WebChannel.",
      "Built Unit Test case by Mocha (JavaScript test framework) and used Eslint to keep the code consistent in style."
    ]
  }
];

const PROJECTS = [
  {
    title: "Full Stack Development",
    subtitle: "Real-time collaborative Pad",
    startTime: "07/2018",
    endTime: "09/2018",
    desc: [
      "Developed a real-time collaborative pad like google doc which allows users to practice mock interview.",
      "Designed and implemented a Single Page Web Application on AWS using Angular,  Rxjs, Bootstrap, and Ace (an embeddable code editor written in JavaScript).",
      "Integrated the original Qt project with the new map component using Qt WebEngine and Qt WebChannel.",
      "Built Unit Test case by Mocha (JavaScript test framework) and used Eslint to keep the code consistent in style."
    ]
  },
  {
    title: "Microservice Development with Spring Cloud Components",
    subtitle: "Ride-hailing System",
    startTime: "03/2018",
    endTime: "06/2018",
    desc: [
      "Developed a ride-hailing system like Uber in Microservice Architecture with Spring Boot and Spring Cloud Components.",
      "Used Spring Eureka for Service Registry & Discovery and Spring Hystrix for fault tolerance& real-time monitoring (Circuit Breaker Pattern).",
      "Implemented Asynchronous dispatch service using Spring WebClient with Client-Side Load Balancing (Netflix Ribbon).",
      "Implemented location, trip, order and account services using RabbitMQ, Spring Data JPA with MariaDB and cached data by Redis."
    ]
  }
];
export {
  PROFILE,
  EDUCATIONS,
  SKILLS,
  PROJECTS
}