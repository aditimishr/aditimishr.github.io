import React from "react";
import IMG1 from "../assets/project/img1.PNG";
import github from "../assets/profile/github.jpg";
import paperIcon from "../assets/project/paper_icon.png";
import IMG2 from "../assets/project/img2.png";
import IMG3 from "../assets/project/img3.PNG";
import IMG4 from "../assets/project/img4.PNG";
import IMG5 from "../assets/project/img5.png";
import IMG6 from "../assets/project/img6.png";
import IMG7 from "../assets/project/img7.PNG";

export const Projects = () => {
  return (
    <section className="experienceContainer" id="projects">
      <h2 className="experienceTitle">Projects</h2>
      <div className="project_container">
        <article className="project__item">
          <div className="project_item_image">
            <img className="item_image" src={IMG7} alt="" />
          </div>
          <h3>Arrive Safely Today</h3>
          <h4>
            This is a crowdsourcing application to track road incidents like
            accidents, burglary, robbery, or vehicle theft within 15 days. Users
            can also report the incidents to help others who are passing by the
            location. This application does not store any of the user data but
            stores the location and type of incidents.
          </h4>
          <h4>
            Google Cloud Platform | Google Maps Api | Google Cloud Firestore
            database | Android | Java
          </h4>
          <div className="project__item_cta">
            <a
              href="https://play.google.com/store/apps/details?id=com.ast.arrivesafelytoday&hl=en_US&pli=1"
              target="_blank"
            >
              <img
                className="linkedin"
                src={IMG6}
                alt="Research Paper"
                title="Research Paper"
              />
            </a>
          </div>
        </article>
        <article className="project__item">
          <div className="project_item_image">
            <img className="item_image" src={IMG1} alt="" />
          </div>
          <h3>Public Crime Safety Application</h3>
          <h4>
            This research tells how AI is used in the product development. This
            whole research is based on Google PAIR. The main objective of this
            research is to see how AI can benefit the normal being or society.
            This also tells how people are actually interacting with Machine
            Learning without knowing what it is doing in background. Making such
            People centered application in our society can really be beneficial.
            One of the main research questions of conducting this research is to
            know whether AI can be applied to such applications or not. I used
            an Android application and Google Cloud to explain PAIR research.
            The final output is a people centered application which can be used
            to reduce the crime in society.
          </h4>
          <h4>
            Google Cloud Platform | AutoML Natural Language | Android | Java
          </h4>
          <div className="project__item_cta">
            <a
              href="https://github.com/aditimishr/Public-Crime-Safety-Application"
              target="_blank"
            >
              <img
                className="linkedin"
                src={github}
                alt="github"
                title="GitHub"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1D-2P6Jb9QcqBriWT6IS_IhlTl5tSAMWj/view?usp=sharing"
              target="_blank"
            >
              <img
                className="linkedin"
                src={paperIcon}
                alt="Research Paper"
                title="Research Paper"
              />
            </a>
          </div>
        </article>
        <article className="project__item">
          <div className="project_item_image">
            <img className="item_image" src={IMG2} alt="" />
          </div>
          <h3>Women Protection</h3>
          <h4>
            As the statistics provided by WHO (World Health Organization) in
            year 2010 that 35% of women population are suffering from crime and
            this figure is increasing every year. So, it is our small effort in
            decreasing that figure by this Application. – This is an Android
            Mobile Application. The purpose of this application is to reduce the
            crimes against Women. And our main goal to develop this application
            is to integrate one of the major social problem with the technology.
            The scope is directed in the direction of solving social problems
            with the help of technology.
          </h4>
          <h4>
            Google Cloud Platform | Google Maps API | Firebase Realtime Database
            | Android | Java
          </h4>
          <div className="project__item_cta">
            <a
              href="https://github.com/aditimishr/Women_Protection"
              target="_blank"
            >
              <img
                className="linkedin"
                src={github}
                alt="github"
                title="GitHub"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/15umQDe04xdPu6up_2IBxpBXulNaRwuu3/view?usp=sharing"
              target="_blank"
            >
              <img
                className="linkedin"
                src={paperIcon}
                alt="Software Specification Document"
                title="Software Specification Document"
              />
            </a>
          </div>
        </article>
        <article className="project__item">
          <div className="project_item_image">
            <img className="item_image" src={IMG3} alt="" />
          </div>
          <h3>Global Convergence in Large Sensor Networks in Hybrid Faults</h3>
          <h4>
            Wireless sensor networks (WSN) are often deployed to monitor the
            physical and environmental conditions. Some areas where WSNs are
            used include Environmental applications, Military applications, and
            Health applications. A major concern in large WSNs is the overall
            reliability in the presence of faulty sensors (also referred to as
            nodes). For higher reliability, some applications take advantage of
            fault tolerance techniques. The thesis has addressed the performance
            of approximate agreement (AA) in partially connected sensor networks
            under synchronous and asynchronous communication systems. The
            performance analysis is done under simulation by generating random
            networks, injecting faults, and running the agreement process. The
            performance analyses are done by collecting data for various
            parameters such as total number of rounds to reach GC, network
            diameter, convergence rate, etc.
          </h4>
          <h4>
            Simulator | Python | Approximate agreement protocols | Random
            distribution, Distributed systems
          </h4>
          <div className="project__item_cta">
            <a
              href="https://github.com/aditimishr/Fault_Tolerant_Algorithms_Simulator"
              target="_blank"
            >
              <img
                className="linkedin"
                src={github}
                alt="github"
                title="GitHub"
              />
            </a>
            <a
              href="https://www.proquest.com/openview/a3564ad28b10f4fa07f39f6bf4975d22/1?pq-origsite=gscholar&cbl=18750&diss=y"
              target="_blank"
            >
              <img
                className="linkedin"
                src={paperIcon}
                alt="Thesis"
                title="Thesis"
              />
            </a>
          </div>
        </article>
        <article className="project__item">
          <div className="project_item_image">
            <img className="item_image" src={IMG5} alt="" />
          </div>
          <h3>Uniprocessor Project</h3>
          <h4>
            This project implements a memory 3-level memory hierarchy comprised
            of interacting L1 and L2 cache controllers and a memory. I designed
            the individual components of the subsystem based on the L1
            controller hand out. Also, there are some suitable assumptions about
            the processor interface and the DRAM to simplify your
            implementation. For example, this project implements processor as a
            stub that issues a sequence of loads and stores and implement the
            DRAM simply as an array.
          </h4>
          <h4>C | Uniprocessor Scheduling | Computer Architecture</h4>
          <div className="project__item_cta">
            <a
              href="https://github.com/aditimishr/Uniprocessor_project"
              target="_blank"
            >
              <img
                className="linkedin"
                src={github}
                alt="github"
                title="GitHub"
              />
            </a>
          </div>
        </article>
        <article className="project__item">
          <div className="project_item_image">
            <img className="item_image" src={IMG4} alt="" />
          </div>
          <h3>My Portfolio</h3>
          <h4>ReactJs</h4>
          <div className="project__item_cta">
            <a href="https://aditimishr.github.io/" target="_blank">
              <img
                className="linkedin"
                src={github}
                alt="github"
                title="GitHub"
              />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
