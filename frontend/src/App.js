import React, { Component } from 'react';
import './App.css';
// components
import LeftContainer from './components/LeftContainer.jsx';
import RightContainer from './components/RightContainer.jsx';


class App extends Component {

  render() {
    return (
      <div id="main">
        <LeftContainer />
        <RightContainer />
      </div>
    );
  }
}

export default App;
