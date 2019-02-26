import React from "react";
// import './RightContainer.css';

const levelMap = {
  5: {
      text: "精通",
      width: "90%"
  },
  4: {
      text: "熟悉",
      width: "70%"
  },
  3: {
      text: "掌握",
      width: "50%"
  },
  2: {
      text: "较好",
      width: "30%"
  },
  1: {
      text: "了解",
      width: "10%"
  }
};

const SkillContainer = ({ skills }) => {
  const renderSkillCard = item => {
    return (
      <li>
        <div>
          <span>{item.title}</span>
          {/* TODO: :after */}
          {/* <span style={{background: item.color, width: levelMap[item.level]['width']}}/> */}
          <span class="skill-html5 p5"/>
          <span>{levelMap[item.level]['text']}</span>
        </div>
        <blockquote>{item.desc}</blockquote>
      </li>
    );
  };
  const renderSkillCardList = skills => {
    return (
      <ul>
        {skills.map(item => {
          return renderSkillCard(item);
        })}
      </ul>
    );
  };
  return (
    <li class="skill-point">
      <h1>
        <i class="fa fa-sitemap" />
        Skills
      </h1>
      {renderSkillCardList(skills)}
      {/* <ul>
        <li>
          <div>
            <span>HTML, CSS</span>
            <span class="skill-html5 p6" title="颜色来源：HTML5" />
            <span>熟练</span>
          </div>
          <blockquote>
            Familiar with HTML5 semantic elements, CSS3 rules, responsive
            design, Sass and Less.
          </blockquote>
        </li>
        <li>
          <div>
            <span>JavaScript</span>
            <span class="skill-javascript p5" title="颜色来源：JavaScript" />
            <span>熟练</span>
          </div>
          <blockquote>
            熟练使用浏览器端 JavaScript、Canvas/SVG、jQuery、Node.js。
          </blockquote>
        </li>
        <li>
          <div>
            <span>Front-end</span>
            <span class="skill-fe-framework p4" title="颜色来源：Vue" />
            <span>掌握</span>
          </div>
          <blockquote>
            React, Angular, Vue, Rxjs, Webpack, Babel, Mocha
          </blockquote>
        </li>
        <li>
          <div>
            <span>Backend</span>
            <span class="skill-php-mariadb p3" title="颜色来源：PHP" />
            <span>掌握</span>
          </div>
          <blockquote>
            Spring, Spring Boot, Spring Cloud, Flask, Express
          </blockquote>
        </li>
        <li>
          <div>
            <span>Database</span>
            <span class="skill-algorithm p2" title="颜色来源：算法导论" />
            <span>掌握</span>
          </div>
          <blockquote>Mysql, Redis, MongoDB</blockquote>
        </li>
        <li>
          <div>
            <span>BlockChain</span>
            <span
              class="skill-security p1"
              title="颜色来源：Web Vulnerability Scanner"
            />
            <span>较好</span>
          </div>
          <blockquote>
            Major in Blockchain track in Northeastern University
          </blockquote>
        </li>
        <li>
          <div>
            <span>Tools</span>
            <span class="skill-ops p0" title="颜色来源：Docker" />
            <span>较好</span>
          </div>
          <blockquote>Git, Docker, Nginx, Linux shell, Travis CI</blockquote>
        </li>
        <li>
          <div>
            <span>Java</span>
            <span class="skill-other p1" title="颜色来源：Java" />
            <span>了解</span>
          </div>
          <blockquote>Spring MVC（了解）、Ruby on Rails（了解）</blockquote>
        </li>
      </ul> */}
    </li>
  );
};

export default SkillContainer;
