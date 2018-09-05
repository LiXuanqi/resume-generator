import React from 'react';
import './CVContainer.css';

const CVContainer = ({ children }) => {
  return (
    <div id="cv-container">
      { children }
    </div>
  );
}

export default CVContainer;