import React, { useState } from "react";
import work from "../assets/data/professional.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import resume from "../assets/data/AditiMishra_resume.pdf";

export const Experience = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="experienceContainer" id="experience">
      <h2 className="experienceTitle">Experience</h2>
      <div className="experienceContent">
        <ul>
          <Carousel
            responsive={responsive}
            infinite={false}
            className="owl-carousel owl-theme skill-slider"
            autoPlay={true}
            autoPlaySpeed={2500}
            rewind={true}
          >
            {work.map((workItem, id) => {
              return (
                <li className="historyItem">
                  <div className="historyItemDetails">
                    <h3>{`${workItem.position}, ${workItem.company}`}</h3>
                    <p>{`${workItem.startDate} - ${workItem.endDate}`}</p>
                    <ul>
                      {workItem.responsibilities.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                    {/* <div className="stack">
                      {workItem.techStack ? (
                        <h3>Tech Stack - {workItem.techStack}</h3>
                      ) : (
                        <h3>Skill Stack - {workItem.skillStack}</h3>
                      )}
                    </div> */}
                  </div>
                </li>
              );
            })}
            <div className="resume">
              <h2>Interested in learning more?</h2>
              <a
                href={resume}
                without
                rel="noreferrer"
                target="_blank"
                title="Aditi Resume"
                className="download"
              >
                Download Resume
              </a>
            </div>
          </Carousel>
        </ul>
      </div>
    </section>
  );
};
