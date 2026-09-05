import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-heading">
        <p>Get to know me</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <h3>
            An ambitious software development graduate focused on continuous
            growth.
          </h3>
        </div>

        <div className="about-description">
          <p>
            I am a Software Development graduate with Distinction and a strong
            passion for technology. I am an ambitious and curious developer who
            is committed to continuously improving my skills and growing within
            the software development industry.
          </p>

          <p>
            I enjoy learning new technologies, building software solutions and
            turning ideas into practical applications. My interests include
            software development, mobile development, UI/UX design, cloud
            computing and machine learning.
          </p>

          <p>
            As I continue my professional journey, my goal is to develop my
            technical skills, gain real-world experience and become a
            well-rounded software professional who can contribute to meaningful
            and innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
