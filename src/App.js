import React, { Component } from 'react';
import './App.css';
import CVContainer from './components/CVContainer';
import CardWithTime from './components/CardWithTime';
// components

class App extends Component {
  render() {
    return (
      <div className="App">
        <CVContainer>
          <div id="profile">
            <div id="vcard">
              <h1 className="full-name">Xuanqi Li</h1>
            </div>
          </div>
          <div className="header-container">
            <h3 className="header-text">Education</h3>
          </div>
          <CardWithTime />
          <div className="header-container">
            <h3 className="header-text">Skills</h3>
          </div>
          <div className="header-container">
            <h3 className="header-text">Work experience</h3>
          </div>
          <div className="header-container">
            <h3 className="header-text">Projects</h3>
          </div>
        </CVContainer>
      </div>
    );
  }
}

export default App;
