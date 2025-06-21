import React from "react";
import "../styles/Projects.css";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Photo Sharing App",
      description: [
        "Developed a full-stack web application with React, Node.js, Express, and MongoDB, enabling secure login, photo sharing, and customizable privacy settings; optimized RESTful APIs for <200ms response.",
        "Implemented likes, comments, and friend interactions, increasing user engagement by 60% during testing; optimized backend to support 1,000+ concurrent requests with zero downtime, ensuring scalable performance.",
      ],
      githubLink: "https://github.com/Shamitha24/PhotoSharingApp",
    },
    {
      title: "Fake News Detection using Machine Learning",
      description: [
        "Developed a fake news detection pipeline by preprocessing 10,000+ news articles using CountVectorizer and TF-IDF; trained multiple machine learning models, achieving 92% baseline accuracy before ensembling.",
        "Developed a Voting Classifier to create a hybrid model that combines several base models, improving classification accuracy to 95.9% with the TF-IDF vectorizer, resulting in more reliable and efficient predictions.",
      ],
      githubLink: "https://github.com/Shamitha24/Fake-news-detection-using-Machine-Learning",
    },
    {
      title: "Disease Prediction using Machine Learning",
      description: [
        "Developed a model for early disease prediction and smart health care using Data Science in Python.",
        "Preprocessed and Normalised the data, considered different classifier models, validated and obtained accuracy scores and best fit model from it with a pinnacle accuracy score of 93.4%.",
      ],
      githubLink: "https://github.com/Shamitha24/Disease-Prediction",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h2>{project.title}</h2>
            <ul>
              {project.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
