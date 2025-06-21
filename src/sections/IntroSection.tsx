// eslint-disable-next-line
import React from "react";

import profilePic from "../assets/profile.jpg";

const IntroSection = () => {
  return (
    
    <section id="about" className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center"data-aos="fade-up" data-aos-duration="1000">
      <img
        src={profilePic}
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-accent"
      />
      <h1 className="text-4xl font-bold text-primary mt-6">Hi, I'm [Your Name]</h1>
      <p className="text-secondary mt-2 max-w-xl">
        I’m a passionate software developer focused on building modern web applications. 
        I specialize in React, TypeScript, and full-stack development.
      </p>
    </section>
  );
};

export default IntroSection;
