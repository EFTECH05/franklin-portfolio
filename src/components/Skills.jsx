import React from "react";
import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      title: "Programming & Development",
      skills: [
        "C#",
        "ASP.NET Core",
        "PHP",
        "Java",
        "Kotlin",
        "Object-Oriented Programming (OOP)",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript (ES6)",
        "jQuery",
        "React.js",
        "React Native",
        "RESTful APIs",
      ],
    },

    {
      title: "Databases & Cloud",
      skills: [
        "MySQL",
        "Microsoft SQL Server",
        "Firebase",
        "Microsoft Azure",
        "Azure SQL",
        "Azure Storage",
        "Entity Framework Core",
      ],
    },

    {
      title: "Design & Tools",
      skills: ["Figma", "Visual Studio", "VS Code", "NetBeans", "Bash"],
    },

    {
      title: "Development Practices",
      skills: [
        "Agile / Scrum",
        "Git",
        "GitHub",
        "CRUD Application Development",
        "Responsive Web Design",
        "Debugging",
        "Software Testing",
      ],
    },

    {
      title: "Professional Skills",
      skills: [
        "Logical Thinking",
        "Analytical Problem-Solving",
        "Teamwork & Collaboration",
        "Oral & Written Communication",
        "Attention to Detail",
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <p>What I work with</p>
        <h2>Technical & Soft Skills</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

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
    </section>
  );
}

export default Skills;
