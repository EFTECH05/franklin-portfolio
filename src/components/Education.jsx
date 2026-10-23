import { useState } from "react";
import "./Education.css";

import diplomaPdf from "../assets/diploma.pdf";
import transcriptPdf from "../assets/Full_Transcript_Diploma 2025 (1).pdf";
import firstSemesterTranscriptPdf from "../assets/advance1.pdf";

const educationData = [
  {
    id: 1,
    title: "Advanced Diploma in IT Application Development",
    institution: "Rosebank International — The IIE",
    level: "NQF Level 7",
    period: "2026 – Present",
    result: "Currently Studying",
    description:
      "Developing advanced skills in application development, cloud computing, software engineering, and application security.",
    subjects: [
      "Advanced Application Development",
      "Application Development Security",
      "Cloud Development",
      "Software Engineering",
      "Enterprise Application Development",
      "ICT Research",
    ],
    careers: [
      "Junior Software Developer",
      "Graduate Software Engineer",
      "Cloud Application Developer",
      "Junior Azure Developer",
      "Full-Stack Developer",
      "Application Security Analyst",
      "Junior Software Tester",
      "Junior Systems Analyst",
    ],
    transcript: firstSemesterTranscriptPdf,
    transcriptLabel: "View First Semester Transcript",
  },
  {
    id: 2,
    title: "National Diploma in IT Software Development ",
    institution: "Rosebank College — The IIE",
    level: "NQF Level 6",
    period: "2023 – 2025",
    result: "76.25% Overall Average",
    description:
      "Built a strong foundation in programming, databases, web development, mobile applications, and software design.",
    subjects: [
      "Software Development",
      "Object-Oriented Programming",
      "Web Development",
      "Database Development",
      "Mobile Application Development",
      "Software Testing",
    ],
    careers: [
      "Junior Software Developer",
      "Graduate Developer",
      "Junior Web Developer",
      "Frontend Developer",
      "Junior Android Developer",
      "Junior SQL Developer",
      "Software Tester",
      "Application Support Analyst",
    ],
    certificate: diplomaPdf,
    transcript: transcriptPdf,
    transcriptLabel: "View Academic Transcript",
  },
];

function Education() {
  const [openBook, setOpenBook] = useState(null);

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="education-heading">
          <span>MY JOURNEY</span>
          <h2>
            Education <span>& Qualifications</span>
          </h2>
          <p>Explore my qualifications, knowledge, and career opportunities.</p>
        </div>

        <div className="education-grid">
          {educationData.map((item) => {
            const isOpen = openBook === item.id;

            return (
              <article
                className={`education-card ${isOpen ? "book-open" : ""}`}
                key={item.id}
              >
                <div className="education-card-top">
                  <div className="education-icon">▤</div>
                  <span className="education-level">{item.level}</span>
                </div>

                <h3>{item.title}</h3>
                <p className="education-institution">{item.institution}</p>

                <div className="education-summary">
                  <span>{item.period}</span>
                  <span>{item.result}</span>
                </div>

                <button
                  className="education-open-button"
                  onClick={() => setOpenBook(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`education-details-${item.id}`}
                >
                  {isOpen ? "Close details" : "Explore qualification"}
                  <span className="book-arrow">{isOpen ? "−" : "↗"}</span>
                </button>

                <div
                  className={`education-details ${isOpen ? "details-visible" : ""}`}
                  id={`education-details-${item.id}`}
                  aria-hidden={!isOpen}
                >
                  <div className="education-page">
                    <h4>About this qualification</h4>
                    <p>{item.description}</p>

                    <h4>Areas of Study</h4>
                    <div className="education-tags">
                      {item.subjects.map((subject) => (
                        <span key={subject}>{subject}</span>
                      ))}
                    </div>

                    <h4>Potential Career Areas</h4>
                    <ul className="career-list">
                      {item.careers.map((career) => (
                        <li key={career}>{career}</li>
                      ))}
                    </ul>

                    <div className="education-documents">
                      {item.certificate && (
                        <a
                          href={item.certificate}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Certificate ↗
                        </a>
                      )}

                      <a
                        href={item.transcript}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.transcriptLabel} ↗
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
