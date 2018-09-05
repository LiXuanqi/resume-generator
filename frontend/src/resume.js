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
    desc: {
      __html: "Major in Computer Software Engineering -  Information Systems"
    }
   
  },
  {
    university: "Nanjing University of Aeronautics and Astronautics",
    degree: "Bachelor of Engineering",
    startTime: "09/2013",
    endTime: "06/2017",
    desc: {
      __html: "Major in Aircraft Power Engineering - Control and Simulation Track"
    }
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
    desc: {
      __html: 
        `
          <ul>
            <li>Worked in the Drone Team and Developed a Ground Station which allows users to control multiple drones automatically.</li>
            <li>Developed a map component for drones using Vue, Vuex, Leaflet and Baidu Map API.</li>
            <li>Integrated the original Qt project with the new map component using Qt WebEngine and Qt WebChannel.</li>
            <li>Built Unit Test case by Mocha (JavaScript test framework) and used Eslint to keep the code consistent in style.</li>
          </ul>
        `
    }
  },
  {
    company: "NUAA IT Innovation and Entrepreneurship Lab, Nanjing, China",
    job: "Full Stack Team member",
    startTime: "09/2015",
    endTime: "06/2017",
    desc: {
      __html: 
        `
          <strong>NUAA OVERSEA</strong>
          <ul>
            <li>Developed a web application which allows students to report their CVs and share graduate school offers they got.</li>
            <li>Designed and implemented the Front-end using React, Redux, React Router.</li>
            <li>Implemented complex asynchronous logic with Redux-Saga</li>
            <li>Extracted 10000 student admissions using Python Web Crawler with Requests and Beautiful Soup.</li>
            <li>Designed APIs in compliance with RESTful API style and implemented backend server using Flask, MariaDB.</li>
            <li>Deployed on AWS with Nginx, Docker.</li>
          </ul>
          <strong>Shop Management System</strong>
          <ul>
            <li>Developed a shop management System like Yelp which allows students to comment, merchants and school officers to manage shops.</li>
            <li>Developed a native mobile app using Wechat Mini Program development framework.</li>
            <li>Designed and Implemented an admin dashboard Web Application using Vue, Vuex, Less.</li>
            <li>Simulated APIs with Mock.js and configured Webpack to allow code to work in both the production and development environment.</li>
          </ul>
        `
    }
  }
];

const PROJECTS = [
  {
    title: "Full Stack Development",
    subtitle: "Real-time collaborative Pad",
    startTime: "07/2018",
    endTime: "09/2018",
    desc: {
      __html: 
        `
        <ul>
          <li>Developed a real-time collaborative pad like google doc which allows users to practice mock interview.</li>
          <li>Designed and implemented a Single Page Web Application on AWS using <strong>Angular</strong>,  <strong>Rxjs</strong>, <strong>Bootstrap</strong>, and <strong>Ace</strong> (an embeddable code editor written in JavaScript).</li>
          <li>Implemented backend server using Express (Node.js), WebSocket with socket.io, Mongoose with MongoDB and cached data by Redis.</li>
          <li>Implemented executor server which can build and run code using  Flask, Docker.</li>
        </ul>
        `
    }
  },
  {
    title: "Microservice Development with Spring Cloud Components",
    subtitle: "Ride-hailing System",
    startTime: "03/2018",
    endTime: "06/2018",
    desc: {
      __html: 
        `
        <ul>
          <li>Developed a ride-hailing system like Uber in Microservice Architecture with Spring Boot and Spring Cloud Components.</li>
          <li>Used Spring Eureka for Service Registry & Discovery and Spring Hystrix for fault tolerance& real-time monitoring (Circuit Breaker Pattern).</li>
          <li>Implemented Asynchronous dispatch service using Spring WebClient with Client-Side Load Balancing (Netflix Ribbon).</li>
          <li>Implemented location, trip, order and account services using RabbitMQ, Spring Data JPA with MariaDB and cached data by Redis.</li>
        </ul>
        `
    }
  }
];
export {
  PROFILE,
  EDUCATIONS,
  SKILLS,
  WORK_EXPERIENCES,
  PROJECTS
}