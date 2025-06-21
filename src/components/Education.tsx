import React from "react";
import "../styles/Education.css";

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master’s of Science in Computer and Information Science",
      institution: "University of Texas at Dallas",
      graduationYear: "August 2024 - Present",
      gpa: "3.84/4",
    },
    {
      degree: "Bachelor of Technology, Computer Science and Engineering",
      institution: "National Institute of Technology, Warangal",
      graduationYear: "August 2018 - May 2022",
      gpa: "7.49/10",
    },
  ];

  return (
    <section id="education" className="education">
      <h1>Education</h1>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <h2 className="institution">{edu.institution}</h2>
            <p className="graduation-year">Year: {edu.graduationYear}</p>
            <p>GPA: {edu.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
