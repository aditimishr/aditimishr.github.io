import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Tech = () => {
  const skills = {
    languages: {
      proficient: ["Java", "Python", "C", "C++", "C#", "SQL"],
      familiar: [
        "JavaScript",
        "Bash",
        "XML",
        "HTML",
        "Latex",
        "MATLAB",
        "Dart",
      ],
    },
    databases: {
      relational: ["IBM DB2", "Microsoft SQL Server", "MySQL", "SQLite"],
      nosql: [
        "MongoDB",
        "Firebase Realtime Database",
        "Cloud Firestore",
        "Redis",
        "Cassandra",
      ],
      bigData: ["Apache Hadoop HDFS", "Cloudera Distribution for Hadoop (CDH)"],
      cloudBased: [
        "Airtable",
        "Microsoft Azure Cosmos DB",
        "Azure Cloud SQL",
        "Google Cloud SQL",
      ],
    },
    operatingSystems: ["Windows", "Linux", "Android (4.0 to present)"],
    cloudPlatforms: ["Microsoft Azure", "Google Cloud", "Amazon AWS"],
    devOps: {
      cicd: ["GitHub Actions", "Jenkins", "GitLab"],
      infrastructureAsCode: ["Azure Resource Manager", "Pulumi"],
      microservices: ["Azure Functions"],
      containerization: ["Kubernetes"],
    },
    frameworks: {
      frontEnd: ["Angular", "React.js"],
      backEnd: ["ASP.NET Core", "ASP.NET Web API", "Spring Boot"],
      mobile: ["Android", "Flutter", "Ionic"],
      iam: ["Okta", "Ping Identity"],
    },
  };
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
    <section className="experienceContainer" id="skills">
      <h2 className="experienceTitle">Skills</h2>
      <div className="skills-section">
        <ul>
          <Carousel
            responsive={responsive}
            infinite={false}
            className="owl-carousel owl-theme skill-slider"
            // autoPlay={true}
            autoPlaySpeed={2500}
            rewind={true}
          >
            <div>
              <li className="historyItem">
                <h3>Languages</h3>
                <ul>
                  <li>
                    <strong>Proficient:</strong>
                    <ul className="horizontal-list">
                      {skills.languages.proficient.map((lang, index) => (
                        <li key={index}>{lang} &nbsp;</li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <strong>Familiar:</strong>
                    <ul className="horizontal-list">
                      {skills.languages.familiar.map((lang, index) => (
                        <li key={index}>{lang} &nbsp;</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="historyItem">
                <h3>Operating Systems</h3>
                <ul className="horizontal-list">
                  {skills.operatingSystems.map((os, index) => (
                    <li key={index}>{os} &nbsp;</li>
                  ))}
                </ul>
              </li>
              <li className="historyItem">
                <h3>Cloud Platforms</h3>
                <ul className="horizontal-list">
                  {skills.cloudPlatforms.map((platform, index) => (
                    <li key={index}>{platform} &nbsp;</li>
                  ))}
                </ul>
              </li>
            </div>
            <li className="historyItem">
              <h3>Databases</h3>
              <ul>
                <li>
                  <strong>Relational:</strong>
                  <ul className="horizontal-list">
                    {skills.databases.relational.map((db, index) => (
                      <li key={index}>{db} &nbsp;</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <strong>NoSQL:</strong>
                  <ul className="horizontal-list">
                    {skills.databases.nosql.map((db, index) => (
                      <li key={index}>{db} &nbsp;</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <strong>Big Data:</strong>
                  <ul className="horizontal-list">
                    {skills.databases.bigData.map((db, index) => (
                      <li key={index}>{db} &nbsp;</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <strong>Cloud-based:</strong>
                  <ul className="horizontal-list">
                    {skills.databases.cloudBased.map((db, index) => (
                      <li key={index}>{db} &nbsp;</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="historyItem">
              <h3>DevOps</h3>
              <ul>
                <li>
                  <strong>CI/CD:</strong>
                  <ul className="horizontal-list">
                    {skills.devOps.cicd.map((tool, index) => (
                      <li key={index}>{tool} &nbsp;</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <strong>Infrastructure as Code:</strong>
                  <ul>
                    {skills.devOps.infrastructureAsCode.map((tool, index) => (
                      <li key={index}>{tool} &nbsp;</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <strong>Microservices:</strong>
                  <ul className="horizontal-list">
                    {skills.devOps.microservices.map((tool, index) => (
                      <li key={index}>{tool} &nbsp;</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <strong>Containerization:</strong>
                  <ul className="horizontal-list">
                    {skills.devOps.containerization.map((tool, index) => (
                      <li key={index}>{tool} &nbsp;</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="historyItem">
              <h3>Frameworks</h3>
              <ul>
                <li>
                  <strong>Front-end:</strong>
                  <ul className="horizontal-list">
                    {skills.frameworks.frontEnd.map((framework, index) => (
                      <li key={index}>{framework}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <strong>Back-end:</strong>
                  <ul className="horizontal-list">
                    {skills.frameworks.backEnd.map((framework, index) => (
                      <li key={index}>{framework} &nbsp;</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <strong>Mobile:</strong>
                  <ul className="horizontal-list">
                    {skills.frameworks.mobile.map((framework, index) => (
                      <li key={index}>{framework} &nbsp;</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <strong>Identity and Access Management:</strong>
                  <ul className="horizontal-list">
                    {skills.frameworks.iam.map((framework, index) => (
                      <li key={index}>{framework} &nbsp;</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
          </Carousel>
        </ul>
      </div>
    </section>
  );
};
