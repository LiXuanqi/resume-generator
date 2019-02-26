import React from 'react';
import './LeftContainer.css';

const LeftContainer = ({name, desc, address, tel, email, wechat, blogUrl, githubUrl, linkedinUrl, lofterUrl}) => {
  return (
    <section className="left" id="left-to-fix">
      <ul>
        <li>
          <img className="avatar" src="avatar.jpeg" width="180" height="180" alt="Avatar"/>
          <h1>
            <span>{ name }</span>
            <i className="fa fa-mars gender-male" title="Gender：Male"></i>
          </h1>
          <p>{ desc }</p>
          <p>
            <i className="fa fa-map-marker"></i>
            <span>{ address }</span>
          </p>
        </li>
        <li>
          <h1>Contact</h1>
          <ul>
            <li>
              <i className="fa fa-phone"></i>
              <span>{ tel }</span>
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              <span>{ email }</span>
            </li>
            <li>
              <i className="fab fa-weixin"></i>
              <span>{ wechat }</span>
            </li>
          </ul>
        </li>
        <li>
          <h1>Sites</h1>
          <ul>
            <li>
              <i className="fas fa-home"></i>
              <a href={ blogUrl } title="My Blog">Blog</a>
            </li>
            <li>
              <i className="fab fa-github-alt"></i>
              <a href={ githubUrl } title="Fork me on GitHub">Github</a>
            </li>
            <li>
              <i className="fab fa-linkedin"></i>
              <a href={ linkedinUrl } title="My Linkedin">Linkedin</a>
            </li>
            <li>
              <i className="fas fa-camera-retro"></i>
              <a href={ lofterUrl } title="My Photos">Photos</a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default LeftContainer;