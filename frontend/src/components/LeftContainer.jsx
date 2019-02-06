import React from 'react';
import './LeftContainer.css';

const LeftContainer = () => {
  return (
    <section className="left" id="left-to-fix">
      <ul>
        <li>
          <img className="avatar" src="avatar.jpeg" width="180" height="180" alt="Avatar"/>
          <h1>
            <span>Xuanqi Li</span>
            <i className="fa fa-mars gender-male" title="Gender：Male"></i>
          </h1>
          <p>An problem solver adept at programming</p>
          <p>
            <i className="fa fa-map-marker"></i>
            <span>San jose, CA.</span>
          </p>
        </li>
        <li>
          <h1>Contact</h1>
          <ul>
            <li>
              <i className="fa fa-phone"></i>
              <span>(408)-406-8721</span>
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              <span>lixuanqi1995@gmail.com</span>
            </li>
            <li>
              <i className="fab fa-weixin"></i>
              <span>DreamSinker</span>
            </li>
          </ul>
        </li>
        <li>
          <h1>Sites</h1>
          <ul>
            <li>
              <i className="fas fa-home"></i>
              <a href="http://lixuanqi.me/" title="My Blog">Blog</a>
            </li>
            <li>
              <i className="fab fa-github-alt"></i>
              <a href="https://github.com/LiXuanqi" title="Fork me on GitHub">Github</a>
            </li>
            <li>
              <i className="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/xuanqi-li/" title="My Linkedin">Linkedin</a>
            </li>
            <li>
              <i className="fas fa-camera-retro"></i>
              <a href="http://lixuanqi.lofter.com/" title="My Photos">Photos</a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default LeftContainer;