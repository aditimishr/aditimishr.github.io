import { React, useState, useEffect } from "react";
import profilepicture from "../assets/profile/profile.jpg";
import linkedin from "../assets/profile/linkedin.png";
import github from "../assets/profile/github.jpg";
import email from "../assets/profile/email.png";

export const Profile = () => {
  // const [text, setText] = useState("");
  // const [loopNum, setLoopNum] = useState(0);
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const toRotate = ["Full Stack Software Engineer"];
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [index, setIndex] = useState(1);
  // const period = 2000;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => {
  //     clearInterval(ticker);
  //   };
  // }, [text]);

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting
  //     ? fullText.substring(0, text.length - 1)
  //     : fullText.substring(0, text.length + 1);

  //   setText(updatedText);

  //   if (isDeleting) {
  //     setDelta((prevDelta) => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex((prevIndex) => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === "") {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(300);
  //   } else {
  //     setIndex((prevIndex) => prevIndex + 1);
  //   }
  // };

  return (
    <section className="profileContainer" id="about">
      <div className="content">
        <h1 className="profileTitle">
          {`Hi! I'm Aditi `}
          {/* <span
            className="txt-rotate"
            dataPeriod="1000"
            data-rotate='[ "Web Developer" ]'
          >
            <span className="wrap">{text}</span>
          </span> */}
        </h1>
        <h2 className="subTitle">Full Stack Software Engineer</h2>
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
        <div className="contact_div">
          <div>
            <a className="contactBtn">
              Let's Connect <span>&rarr;</span>
            </a>
          </div>
          <div class="selected-lines">
            <a href="https://www.linkedin.com/in/aditimi/" target="_blank">
              <img
                className="linkedin"
                src={linkedin}
                alt="linkedin"
                title="Linkedin"
              />
            </a>
            <a href="https://github.com/aditimishr" target="_blank">
              <img
                className="linkedin"
                src={github}
                alt="github"
                title="GitHub"
              />
            </a>
            <a href="mailto:mishraad96@gmail.com">
              <img className="linkedin" src={email} alt="email" title="Email" />
            </a>
          </div>
        </div>
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
