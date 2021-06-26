import * as React from "react";
import { profile } from './profile.module.css';

const Profile = ({children}) => {
  return (
    <section id="profile" className={profile}>
      <h2>Profile</h2>
      <p>I'm an optimistic, energetic and curious person who likes to keep learning, 
        continue challenging myself, and do interesting things that matter.</p>

        <p>After working in a variety of different jobs, I found myself more 
          and more interested in tech and often using bits and pieces of software 
          to make my day to day life easier. That's when I realized that software 
          development would be a perfect fit for me, and decided to pursue it as a career. </p>


      <p>My enthusiasm also fuels me in the pursuit of many interests, 
        hobbies, areas of study and artistic endeavors. I’m a fast 
        learner, able to pick up new skills and adap quickly.</p>
        {children}
    </section>
  );
}


export default Profile;