import React from "react";
import "../styles/Projects.css";
// Define a type for your project list
const Projects: React.FC = () => {
    const projects = [
      {
        title: "Photo Sharing App",
        description: "Developed a full-stack web application enabling users to create accounts, log in, and share photos with customizable privacy settings, incorporating features such as liking, commenting, and interacting with friends’ photos. Developed a responsive frontend using React and a scalable backend with Node.js and MongoDB, ensuring efficient database management and fast API performance.",
        githubLink: "https://github.com/Shamitha24/PhotoSharingApp",
      },
      {
        title: "Fake News Detection using Machine Learning",
        description: "Automated the detection of fake news. Built and trained a suitable machine learning model using feature extraction techniques like Count vectorizer and TF-IDF vectorizer from NLP to clean and extract the features for prediction. Applied Voting Classifier to create a hybrid model that trains on collection of several individual base models and predicts the output label based on the combined majority of voting for each output class and obtained an accuracy of 95.9% with TF-IDF vectorizer.",
        githubLink: "https://github.com/Shamitha24/Fake-news-detection-using-Machine-Learning",
      },
      {
        title: "Disease Prediction using Machine Learning",
        description: "Developed a model for early disease prediction and smart health care using Data Science in Python. Preprocessed and Normalised the data, considered different classifier models, validated and obtained accuracy scores and best fit model from it with a pinnacle accuracy score of 93.4%.",
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
              <p>{project.description}</p>
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
