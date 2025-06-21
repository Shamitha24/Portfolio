import React from "react";
import "../styles/Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaLinkedin className="contact-icon" />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/shamitha-mamidi-1556a0233/",
    sub: "Connect professionally",
  },
  {
    icon: <FaGithub className="contact-icon" />,
    label: "GitHub",
    link: "https://github.com/Shamitha24",
    sub: "Explore my code",
  },
  {
    icon: <FaEnvelope className="contact-icon" />,
    label: "E-Mail",
    link: "mailto:sxm230333@utdallas.edu",
    sub: "sxm230333@utdallas.edu",
  },
  {
    icon: <FaPhoneAlt className="contact-icon" />,
    label: "Mobile",
    link: "tel:+12148996546",
    sub: "+1 (214) 899-6546",
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <div className="contact-cards">
        {contactDetails.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="contact-card"
            target={item.label !== "Mobile" ? "_blank" : undefined}
            rel={item.label !== "Mobile" ? "noopener noreferrer" : undefined}
          >
            <div className="icon-wrapper">{item.icon}</div>
            <div className="contact-info">
              <span className="contact-label">{item.label}</span>
              <span className="contact-sub">{item.sub}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
