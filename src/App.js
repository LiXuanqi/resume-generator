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
          <CardWithTime
            id={0}
            title="Northeastern University, Silicon Valley Campus"
            subtitle="Master of Science"
            startTime="09/2018"
            endTime="Present"
            desc="Major in Computer Software Engineering -  Information Systems"
          />
          <CardWithTime
            id={1}
            title="Northeastern University, Silicon Valley Campus"
            subtitle="Master of Science"
            startTime="09/2018"
            endTime="Present"
            desc="Major in Computer Software Engineering -  Information Systems"
          />
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
