import React, { useState } from "react";
import "../styles/Experience.css";
interface Experience {
    role: string;
    company: string;
    duration: string;
    description: string[];
  }
  
  const experiences: Experience[] = [
    {
        role: "CS Outreach Lead",
        company: "The University of Texas at Dallas",
        duration: "September 2024 - February 2025",
        description: [
            "Designing and delivering an introductory course on coding contest problems focusing on data structures, dynamic programming, and greedy algorithms in Python, Java, and C++, guiding 9th-12th grade students through a progression from basic concepts to advanced problem-solving techniques.",
            "Conducting live coding sessions, providing one-on-one mentoring, and facilitating coding challenges to support students in developing strong programming and problem-solving skills within a collaborative environment."
        ]
    },
    {
        role: "Software Development Engineer",
        company: "Mastercard Inc.",
        duration: "July 2022 - June 2024",
        description: ["Generated datasets, conducted quality checks, and created feed files for clients, ensuring high data accuracy and timely delivery which resulted in generation of revenue of $147.3M, +17% from 2021.", 
          "Automated quality check report generation for IOS datasets and specific client reports using Python, Hive, and Impala, ultimately leading to a 80% reduction in manual team effort.", 
          " Streamlined the Feed Generation Process for an electronics company, increasing the team’s efficiency by 15%, and utilized Hadoop Distributed File System for efficient customer onboarding.",
          " Utilized Checkmarx to address security vulnerabilities in production code, and facilitated onboarding for new team members with detailed knowledge transfer sessions."],
      },
      {
        role: "Software Engineer Intern ",
        company: "Honeywell Inc.",
        duration: "May 2021 - July 2021",
        description: ["Worked on the project Sample Dashboard Project Export, which can be used in upcoming projects that involve the development of UNEX dashboards for displaying KPIs, ultimately leading to a 35% reduction in manual effort to design a dashboard.", "Designed data cubes, standard templates and sample dashboards including predictive analysis and inventory analysis dashboards using Dundas BI, UKPI application and MS Excel."],
      },
  ];
  
  const Experience: React.FC = () => {
    return (
      <section id="experience" className="experience">
        <h1>Experience</h1>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </div>
      </section>
    );
  };
  
  const ExperienceItem: React.FC<{ experience: Experience }> = ({ experience }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <div className="experience-item">
        <h2>{experience.role} at {experience.company}</h2>
        <p className="duration">{experience.duration}</p>
        <ul>
          {isExpanded
            ? experience.description.map((point, idx) => <li key={idx}>{point}</li>)
            : experience.description.slice(0, 1).map((point, idx) => <li key={idx}>{point}</li>)}
        </ul>
        <button
          className="toggle-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    );
  };
export default Experience;