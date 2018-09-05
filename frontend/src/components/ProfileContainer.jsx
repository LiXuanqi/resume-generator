import React from 'react';
import './ProfileContainer.css';

const ProfileContainer = ({ profile }) => {
  return (
    <div id="profile">
      <div id="vcard">
        <h1 className="full-name">{ profile.name }</h1>
        <span>{ profile.address }</span>
        <span className="item">{ profile.tel }</span>
        <span className="item">{ profile.email }</span>
        <span className="item">{ profile.github }</span>
        <span className="item">{ profile.website }</span>
      </div>
    </div>
  );
}

export default ProfileContainer;