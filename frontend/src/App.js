import React, { Component } from 'react';
import './App.css';
// components
import LeftContainer from './components/LeftContainer.jsx';
import RightContainer from './components/RightContainer.jsx';

const introduction = {
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

class App extends Component {
  render() {
    return (
      <div className="">
        <div id="main">
          <LeftContainer {...introduction}/>
          <RightContainer />
        </div>
        <footer>Powered by <a href="https://www.rexskz.info/">skywalker_z</a></footer>
        <div>谢谢你关注了我的简历，不过我目前是在职状态，暂未考虑其它工作机会，不好意思啦……</div>
      </div>
    );
  }
}

export default App;
