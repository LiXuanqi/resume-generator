import React from 'react';
// import './RightContainer.css';

const ProjectCard = () => {
  return (
    <li>
      <div className="project-img">
        <img data-src="parallel-rails" title="点击查看大图" alt="Parallel Rails（2017-03）" />
      </div>
      <h2>Parallel Rails（2017-03）</h2>
      <p>使用 PIXI.js 实现的音乐游戏。开发语言为 JavaScript（ES6），使用了 Webpack 打包，部分架构参考了 RPG Maker VX 中 RGSS 2 的实现。</p>
      <p>负责全部代码的编写。</p>
    </li>
  );
}

export default ProjectCard;