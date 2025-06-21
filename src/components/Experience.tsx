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
        role: "Application Development Intern",
        company: "Coherent Corp. ",
        duration: "June 2025 – July 2025",
        description: [
            "Developing a desktop application using C#, WPF to automate data management workflows related to wafer fabrication, enabling engineers to efficiently collect, analyze, and utilize process data across multiple fabrication tools optimizing RESTful APIs to deliver response times under 150ms, boosting responsiveness by 40%.",
            "Leveraged automation techniques including VBA-based reporting and Excel data processing to streamline manual workflows and collaborated with cross-functional engineering teams to integrate real-time and historical data into internal systems, resulting in a 30% enhancement in engineering insight accuracy, 25% improvement in data accuracy, and faster, more precise data retrieval through maintained and upgraded automation databases."
        ]
    },
    {
        role: "CS Outreach Lead",
        company: "The University of Texas at Dallas",
        duration: "September 2024 - February 2025",
        description: [
            "Orchestrated a cutting-edge coding bootcamp at UT Dallas, mentoring 9th-12th graders in advanced data structures, dynamic programming, and greedy algorithms using Python, Java, and C++, delivering interactive coding sessions and personalized coaching to enhance algorithmic problem-solving skills by 45%."
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
        description: ["Worked on the Sample Dashboard Project Export, extensively used in upcoming projects involving development of dynamic UNEX dashboards for displaying KPIs, leading to a 35% reduction in manual effort.", 
          "Designed 5+ data cubes, standardized templates, and sample dashboards including predictive analysis and inventory analysis dashboards using Dundas BI, UKPI application, and MS Excel, improving data insights."],
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

    const hasMultiplePoints = experience.description.length > 1;

    return (
      <div className="experience-item">
        <h2>{experience.role} at {experience.company}</h2>
        <p className="duration">{experience.duration}</p>
        <ul>
          {isExpanded
            ? experience.description.map((point, idx) => <li key={idx}>{point}</li>)
            : experience.description.slice(0, 1).map((point, idx) => <li key={idx}>{point}</li>)}
        </ul>
        {hasMultiplePoints && (
          <button
            className="toggle-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    );
  };
export default Experience;