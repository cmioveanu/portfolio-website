import * as React from "react";
import { profile } from './profile.module.css';

const Profile = ({children}) => {
  return (
    <section id={profile}>
      <h2>Profile</h2>
      <p>I don’t like to define myself by the work I’ve done. 
        I define myself by the work I want to do. 
        Skills can be taught, personality is inherent. 
        I prefer to keep learning, continue challenging myself, 
        and do interesting things that matter.</p>

      <p>Fueled by high energy levels and boundless enthusiasm, 
        I’m easily inspired and more then willing to follow my 
        fascinations wherever they take me. I’m passionate, expressive, 
        multi-talented spirit with a natural ability to entertain 
        and inspire. I’m never satisfied to just come up with ideas. 
        Instead I have an almost impulsive need to act on them.</p>

      <p>My abundant energy fuels me in the pursuit of many interests, 
        hobbies, areas of study and artistic endeavors. I’m a fast 
        learner, able to pick up new skills and juggle different 
        projects and r</p>
        {children}
    </section>
  );
}


export default Profile;