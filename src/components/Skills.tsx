import React from "react";
import "../styles/Skills.css";

// Define the types for the skills array if needed
const Skills: React.FC = () => {
    const skills = [
        { name: "C", logo: "./c.svg" },
        { name: "C++", logo: "./cpp.svg" },
        { name: "C##", logo: "./csp.svg" },
        { name: "Java", logo: "./java.svg" },
        { name: "Python", logo: "./python.svg" },
        { name: "Hive", logo: "./hive.svg" },
        { name: "Impala", logo: "./impala.svg" },
        { name: "MySQL", logo: "./sql.svg" },
        { name: "MongoDB", logo: "./mdb.svg" },
      { name: "HTML", logo: "./html.svg" },
      { name: "CSS", logo: "./css.svg" },
      { name: "JavaScript", logo: "./javascript.svg" },
      { name: "React", logo: "./react.svg" },
      { name: "Github", logo: "./github.svg" },
      { name: "Dundas BI", logo: "./dundas.png" },
    //   { name: "Dashboard Design", logo: "./html.svg" },
    //   { name: "Data Visualization", logo: "./html.svg" },
    //   { name: "Data Analysis", logo: "./html.svg" },
      { name: "Hadoop Distributed File System", logo: "./hdfs.svg" },
    ];
  
    return (
      <section id="skills" className="skills">
        <h1>Skills</h1>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Skills;
