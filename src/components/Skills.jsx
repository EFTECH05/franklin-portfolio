import React from "react";
import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    icon: "</>",
    title: "Application Development",
    description: "Building web applications and practical software solutions.",
    skills: [
      "C#",
      "ASP.NET Core MVC",
      "ASP.NET Core Web API",
      ".NET",
      "Python",
      "FastAPI",
      "JavaScript (ES6+)",
      "React.js",
      "PHP",
      "Java",
      "Object-Oriented Programming",
    ],
  },
  {
    number: "02",
    icon: "▤",
    title: "Databases & Data",
    description:
      "Working with relational databases, secure queries and data access.",
    skills: [
      "Microsoft SQL Server",
      "MySQL",
      "MariaDB",
      "Azure SQL",
      "Entity Framework Core",
      "SQL Queries",
      "Parameterized Queries",
      "SQL Injection Prevention",
      "Database Design",
      "CRUD Operations",
    ],
  },
  {
    number: "03",
    icon: "☁",
    title: "Cloud & DevOps",
    description: "Developing, deploying and managing cloud-based applications.",
    skills: [
      "Microsoft Azure",
      "Azure App Service",
      "Azure Functions",
      "Azure Storage",
      "Docker",
      "Docker Compose",
      "CI/CD Fundamentals",
      "Git",
      "GitHub",
    ],
  },
  {
    number: "04",
    icon: "⌘",
    title: "Mobile Development",
    description:
      "Developing mobile applications and integrating backend services.",
    skills: [
      "React Native",
      "Expo",
      "Kotlin",
      "RESTful APIs",
      "API Integration",
      "Firebase",
      "Mobile UI Development",
      "Authentication",
    ],
  },
  {
    number: "05",
    icon: "◇",
    title: "Security & Testing",
    description:
      "Applying security principles and testing application functionality.",
    skills: [
      "Application Security",
      "Authentication",
      "Email OTP Verification",
      "Unit Testing",
      "xUnit",
      "Debugging",
      "Error Handling",
      "Secure Development",
    ],
  },
  {
    number: "06",
    icon: "✳",
    title: "Tools & UI/UX Design",
    description:
      "Designing user interfaces and supporting collaborative development.",
    skills: [
      "Figma",
      "Visual Studio",
      "Visual Studio Code",
      "NetBeans",
      "Bash",
      "Responsive Web Design",
      "Agile / Scrum",
      "Technical Documentation",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="skills-container">
        <header className="skills-heading">
          <span className="skills-eyebrow">
            <span className="skills-eyebrow-dot" />
            MY TECHNICAL TOOLKIT
          </span>

          <h2>
            Skills &amp; <span>Technologies</span>
          </h2>

          <p>
            The technologies, tools and development practices I use to turn
            ideas into practical software solutions.
          </p>
        </header>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number}>
              <div className="skill-card-top">
                <div className="skill-icon" aria-hidden="true">
                  {group.icon}
                </div>

                <span className="skill-number">{group.number}</span>
              </div>

              <h3>{group.title}</h3>

              <p className="skill-description">{group.description}</p>

              <div className="skill-divider" />

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-footer">
          <span className="skills-footer-line" />

          <p>Always learning. Always building. Always improving.</p>

          <span className="skills-footer-line" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
