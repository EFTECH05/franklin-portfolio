import React from "react";
import "./Education.css";

// Import PDF documents from assets
import diplomaPdf from "../assets/diploma.pdf";
import transcriptPdf from "../assets/Full_Transcript_Diploma 2025 (1).pdf";

function Education() {
  const education = [
    {
      title: "Bachelor's Degree in IT Application Development",
      institution: "Rosebank International South Africa",
      level: "NQF Level 7",
      period: "Feb 2026 – Present",
      result: "Currently Studying",

      description:
        "An advanced qualification focused on application development, software engineering, cloud development and application security, combining advanced technical knowledge with real-world development practices.",

      focusAreas: [
        "Application Development Security",
        "Cloud Development — Microsoft Azure",
        "Advanced Software Engineering",
        "Git, Agile Methodologies & Teamwork",
        "Backend Development — C#, .NET & ASP.NET Core",
        "Frontend Development — React.js",
        "Databases, APIs & System Integration",
      ],

      certificateLink: null,
      transcriptLink: null,
    },

    {
      title: "National Diploma in IT Software Development",
      institution: "Rosebank International South Africa",
      level: "NQF Level 6",
      period: "Mar 2023 – Jan 2025",
      result: "76.25% — Distinction",

      description:
        "Completed a Diploma in Software Development, gaining practical experience in programming, databases, web development, mobile application development, software engineering and system analysis.",

      focusAreas: [
        "C# & Object-Oriented Programming",
        "Java & Android Development",
        "ASP.NET & Web Application Development",
        "HTML, CSS & JavaScript",
        "SQL & Database Development",
        "Software Engineering & System Analysis",
        "Data Structures & Algorithms",
        "Git & Version Control",
        "UI/UX Design & Responsive Design",
        "API Development & Integration",
        "Software Testing & Debugging",
        "Agile Development & Team Collaboration",
      ],

      // Documents from src/assets
      certificateLink: diplomaPdf,
      transcriptLink: transcriptPdf,
    },
  ];

  return (
    <section id="education" className="section education-section">
      <div className="section-heading">
        <p>My academic background</p>
        <h2>Education</h2>
      </div>

      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.title}>
            <div className="education-icon">🎓</div>

            <div className="education-content">
              {/* Qualification Level */}
              <span className="education-level">{item.level}</span>

              {/* Qualification Title */}
              <h3>{item.title}</h3>

              {/* Institution */}
              <p className="education-institution">{item.institution}</p>

              {/* Period */}
              <p className="education-period">{item.period}</p>

              {/* Result */}
              <p className="education-result">{item.result}</p>

              {/* Description */}
              <p className="education-description">{item.description}</p>

              {/* Areas of Study */}
              <div className="education-focus">
                <h4>Key Areas of Study</h4>

                <ul>
                  {item.focusAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>

              {/* Certificate and Transcript */}
              {(item.certificateLink || item.transcriptLink) && (
                <div className="education-links">
                  {/* Diploma Certificate */}
                  {item.certificateLink && (
                    <a
                      href={item.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      View My National Diploma Certificate
                      <span>→</span>
                    </a>
                  )}

                  {/* Transcript */}
                  {item.transcriptLink && (
                    <a
                      href={item.transcriptLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      View My Transcript
                      <span>→</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
