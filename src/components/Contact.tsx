import React from "react";
import "../styles/Contact.css";

import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Icons from react-icons

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <div className="contact-items">
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/shamitha-mamidi-1556a0233/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/Shamitha24" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:sxm230333@utdallas.edu">
            E-Mail
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+1 2148996546">
          Mobile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
