import React from "react";
import "./Certifications.css";
import awsCertificateImage from "../assets/aws.png";

function Certifications() {
  const certifications = [
    {
      title: "Full Stack Web Development with C# OOP, MS SQL & ASP.NET MVC",
      issuer: "Udemy",
      category: "Web Development",
      iconType: "udemy",
      link: "https://www.udemy.com/certificate/UC-ffbe7de0-aab9-48f5-9236-a43218cb6adf/",
    },
    {
      title: "The Complete Android 15 Course [Part 1] – Master Java & Kotlin",
      issuer: "Udemy",
      category: "Android Development",
      iconType: "udemy",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-2b2f7dc1-de47-4c9a-81e9-dafdf39026a2.jpg",
    },
    {
      title: "AWS Skills Centers: Introduction to the AWS Cloud",
      issuer: "Amazon Web Services (AWS)",
      category: "Cloud Computing",
      iconType: "aws",
      link: awsCertificateImage,
    },
    {
      title: "Complete Mobile Developer Course with AI Projects",
      issuer: "Udemy",
      category: "Mobile Development & AI",
      iconType: "udemy",
      link: "https://www.udemy.com/certificate/UC-7ffd4305-61ca-4e61-bda5-446067ea2f83/",
    },
  ];

  return (
    <section id="certifications" className="section certifications-section">
      <div className="section-heading">
        <span className="certifications-eyebrow">
          <span className="eyebrow-dot" />
          LEARNING &amp; DEVELOPMENT
        </span>

        <h2>
          My <span>Certifications</span>
        </h2>

        <p className="certifications-subtitle">
          Professional learning in web development, mobile applications, and
          cloud computing.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((certification) => (
          <article className="certification-card" key={certification.title}>
            <div className="certification-card-top">
              <div
                className={`certification-icon ${
                  certification.iconType === "udemy"
                    ? "udemy-icon-box"
                    : "aws-icon-box"
                }`}
                aria-hidden="true"
              >
                {certification.iconType === "udemy" ? (
                  <img
                    src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                    alt=""
                    className="udemy-icon"
                    loading="lazy"
                  />
                ) : (
                  <span className="aws-icon">☁</span>
                )}
              </div>

              <span className="certification-status">
                <span className="status-dot" />
                Completed
              </span>
            </div>

            <div className="certification-content">
              <span className="certification-category">
                {certification.category}
              </span>

              <h3>{certification.title}</h3>

              <p className="certification-issuer">{certification.issuer}</p>

              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                <span>View Certificate</span>
                <span className="certificate-link-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
