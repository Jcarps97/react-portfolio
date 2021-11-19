import React from 'react';
import profilepic from '../../images/picture.jpg'
import '../../App.css'


export default function About() {
  return (
    <div id="aboutme">
       <div>
          <img src={profilepic} id="profilepic" alt="profile pic"></img>
       </div>
      <div>
        <h1>About Me</h1>
        <p>
        Hello! My name is Jack and I'm studying to become a web developer! I grew up in Edina, MN and went to college at U of Missouri-Colubmia for a bachelor's degree in Anthropology. After graduating I realized I would need more skills to get a good career so I took up a bootcamp to become a webdeveloper. Please enjoy my work and I would appreciate your future consideration!
        </p>
      </div>
    </div>
  );
}
