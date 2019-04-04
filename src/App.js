import React, { Component } from 'react';
import './App.css';
// components
import LeftContainer from './components/LeftContainer.jsx';
import RightContainer from './components/RightContainer.jsx';
import { BASIC_INFO, isFindingJob } from "./me";


class App extends Component {
  render() {
    return (
      <div className={isFindingJob ? "" : "sorry"}>
        <div id="main">
          <LeftContainer {...BASIC_INFO}/>
          <RightContainer />
        </div>
        <footer>Powered by <a href="https://www.rexskz.info/">skywalker_z</a></footer>
        <div>谢谢你关注了我的简历，不过我目前是在职状态，暂未考虑其它工作机会，不好意思啦……</div>
      </div>
    );
  }
}

export default App;
