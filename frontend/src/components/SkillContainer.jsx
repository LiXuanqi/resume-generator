import React from 'react';
// import './RightContainer.css';

const SkillContainer = () => {
  return (
    <li class="skill-point">
    <h1><i class="fa fa-sitemap"></i>Skills</h1>
    <ul>
        <li>
            <div>
                <span>HTML, CSS</span>
                <span class="skill-html5 p5" title="颜色来源：HTML5"></span>
                <span>熟练</span>
            </div>
            <blockquote>  
                Familiar with HTML5 semantic elements, CSS3 rules, responsive design, Sass and Less.
            </blockquote>
        </li>
        <li>
            <div>
                <span>JavaScript</span>
                <span class="skill-javascript p5" title="颜色来源：JavaScript"></span>
                <span>熟练</span>
            </div>
            <blockquote>熟练使用浏览器端 JavaScript、Canvas/SVG、jQuery、Node.js。</blockquote>
        </li>
        <li>
            <div>
                <span>Front-end</span>
                <span class="skill-fe-framework p4" title="颜色来源：Vue"></span>
                <span>掌握</span>
            </div>
            <blockquote>React, Angular, Vue, Rxjs, Webpack, Babel, Mocha</blockquote>
        </li>
        <li>
            <div>
                <span>Backend</span>
                <span class="skill-php-mariadb p4" title="颜色来源：PHP"></span>
                <span>掌握</span>
            </div>
            <blockquote>Spring, Spring Boot, Spring Cloud, Flask, Express</blockquote>
        </li>
        <li>
            <div>
                <span>Database</span>
                <span class="skill-algorithm p4" title="颜色来源：算法导论"></span>
                <span>掌握</span>
            </div>
            <blockquote>Mysql, Redis, MongoDB</blockquote>
        </li>
        <li>
            <div>
                <span>BlockChain</span>
                <span class="skill-security p3" title="颜色来源：Web Vulnerability Scanner"></span>
                <span>较好</span>
            </div>
            <blockquote>Major in Blockchain track in Northeastern University</blockquote>
        </li>
        <li>
            <div>
                <span>Tools</span>
                <span class="skill-ops p3" title="颜色来源：Docker"></span>
                <span>较好</span>
            </div>
            <blockquote>Git, Docker, Nginx, Linux shell, Travis CI</blockquote>
        </li>
        <li>
            <div>
                <span>Java</span>
                <span class="skill-other p1" title="颜色来源：Java"></span>
                <span>了解</span>
            </div>
            <blockquote>Spring MVC（了解）、Ruby on Rails（了解）</blockquote>
        </li>
    </ul>
</li>
  );
}

export default SkillContainer;