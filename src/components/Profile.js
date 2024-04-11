import React from "react";
import profilepicture from "../assets/profile/profile.jpg";

export const Profile = () => {
  return (
    <section className="profileContainer">
      <div className="content">
        <h1 className="profileTitle">Hi, I am Aditi</h1>
        <p className="description">
          I am Result-oriented, adaptive, and customer-centric Software Engineer
          with 5+ years of experience, adept at overseeing full-cycle operations
          in crafting, implementing, launching, and supporting resilient,
          expandable software solutions; Skilled in interpreting client
          requirements to deliver inventive solutions that fulfill technical
          specifications, elevate user interactions, and tactically advance
          organizational goals; Eager to leverage emerging technologies to
          deliver innovative solutions
        </p>
        <a href="mailto:mishraad96@gmail.com" className="contactBtn">
          Contact Me
        </a>
        <a
          href="https://www.linkedin.com/in/aditimi/"
          target="_blank"
          className="contactBtn"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/aditimishr"
          target="_blank"
          className="contactBtn"
        >
          GitHub
        </a>
      </div>
      <img
        className="circular-img"
        src={profilepicture}
        alt="Profile of Aditi"
      />
      <div className="topBlur"></div>
      <div className="bottomBlur"></div>
    </section>
  );
};
