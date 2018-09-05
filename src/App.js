import React, { Component } from 'react';
import './App.css';
import { PROFILE, EDUCATIONS, SKILLS, WORK_EXPERIENCES, PROJECTS } from './resume';
// components
import CVContainer from './components/CVContainer';
import CardWithTime from './components/CardWithTime';
import SkillContainer from './components/SkillContainer';
class App extends Component {

  renderEducationCards(educationList) {
    return educationList.map((item, index) => {
      return (<CardWithTime
        id={index}
        title={item.university}
        subtitle={item.degree}
        startTime={item.startTime}
        endTime={item.endTime}
        desc={item.desc}
      />);
    })
  }

  renderWorkExperienceCards(wordExperienceList) {
    return wordExperienceList.map((item, index) => {
      return (<CardWithTime
        id={index}
        title={item.company}
        subtitle={item.job}
        startTime={item.startTime}
        endTime={item.endTime}
        desc={item.desc}
      />);
    })
  }

  renderProjectCards(projectList) {
    return projectList.map((item, index) => {
      return (<CardWithTime
        id={index}
        title={item.title}
        subtitle={item.subtitle}
        startTime={item.startTime}
        endTime={item.endTime}
        desc={item.desc}
      />);
    })
  }

  render() {
    return (
      <div className="App">
        <CVContainer>
          <div id="profile">
            <div id="vcard">
              <h1 className="full-name">{ PROFILE.name }</h1>
            </div>
          </div>

          <div className="header-container">
            <h3 className="header-text">Education</h3>
          </div>
          { this.renderEducationCards(EDUCATIONS) }

          <div className="header-container">
            <h3 className="header-text">Skills</h3>
          </div>
          <SkillContainer
            skillList={SKILLS}
          />

          <div className="header-container">
            <h3 className="header-text">Work experience</h3>
          </div>
          { this.renderWorkExperienceCards(WORK_EXPERIENCES) }

          <div className="header-container">
            <h3 className="header-text">Projects</h3>
          </div>
          { this.renderProjectCards(PROJECTS) }
        </CVContainer>
      </div>
    );
  }
}

export default App;
