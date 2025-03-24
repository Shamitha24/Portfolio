import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";

// Again, no props here
const About: React.FC = () => {
    return (
      <section id="about" className="about">
        <motion.div
        className="photo-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
        <div className="photo-container">
          <img src='./about.JPG' alt="Your Photo" className="profile-photo" />
        </div>
        <div className="about-text">
        <h1>
            <img src="./pencil.svg" width="54"
    height="54"
    style={{ verticalAlign: "middle", margin: "0 5px" }} />Shamitha Mamidi
</h1>

          <p>Aspiring Software Development Engineer</p>
          <p>Based in Texas, USA</p>
        </div>
      </section>
    );
  };

export default About;
