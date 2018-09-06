import React from 'react';
import './CVContainer.css';

const CVContainer = ({ children }) => {
  return (
    // <div id="cv-container">
    //   { children }
    // </div>
    <div class="book">
      <div class="page">
        {/* <div class="subpage"> */}
          {children}
        {/* </div> */}
      </div>
    </div>
  );
}

export default CVContainer;