import React from "react";
import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      title: "Full Stack Web Development with C# OOP, MS SQL & ASP.NET MVC",
      issuer: "Udemy",
      year: "2026",
      expiry: "Mar 2030",
      credentialId: "UC-ffbe7de0-aab9-48f5-9236-a43218cb6adf",
      link: "https://www.udemy.com/certificate/UC-ffbe7de0-aab9-48f5-9236-a43218cb6adf/",
    },
    {
      title: "The Complete Android 15 Course [Part 1] – Master Java & Kotlin",
      issuer: "Udemy",
      year: "2026",
      credentialId: "UC-2b2f7dc1-de47-4c9a-81e9-dafdf39026a2",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-2b2f7dc1-de47-4c9a-81e9-dafdf39026a2.jpg",
    },
    {
      title: "AWS Skills Centers: Introduction to the AWS Cloud",
      issuer: "Amazon Web Services (AWS)",
      year: "2025",
    },
  ];

  return (
    <section id="certifications" className="section certifications-section">
      <div className="section-heading">
        <p>My professional development</p>
        <h2>Certifications</h2>
      </div>

      <div className="certifications-grid">
        {certifications.map((certification) => (
          <article className="certification-card" key={certification.title}>
            <div className="certification-icon">✓</div>

            <div className="certification-content">
              <span className="certification-status">Certified</span>

              <h3>{certification.title}</h3>

              <p className="certification-issuer">{certification.issuer}</p>

              <p className="certification-year">
                Issued {certification.year}
                {certification.expiry && ` · Expires ${certification.expiry}`}
              </p>

              {certification.credentialId && (
                <p className="certification-credential">
                  Credential ID: {certification.credentialId}
                </p>
              )}

              {certification.link && (
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate <span>→</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
