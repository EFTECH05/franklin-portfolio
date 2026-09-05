import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { id } = useParams();
  const location = useLocation();
  const project = location.state?.project;

  /*
    Project data is currently passed through React Router state.

    If the page is refreshed directly, the state can disappear.
    A future improvement would be to move the project data into a
    shared projects.js file and load the project using the URL id.
  */

  if (!project) {
    return (
      <div className="project-details-page">
        <div className="project-details-background">
          <div className="project-grid-background"></div>

          <div className="project-glow project-glow-one"></div>
          <div className="project-glow project-glow-two"></div>
          <div className="project-glow project-glow-three"></div>
        </div>

        <header className="project-details-header">
          <div className="project-details-header-inner">
            <Link to="/" className="project-details-logo">
              Franklin<span>.</span>
            </Link>

            <Link to="/#projects" className="project-details-back">
              <span>←</span>
              <span>Back to Projects</span>
            </Link>
          </div>
        </header>

        <main className="project-not-found-wrapper">
          <div className="project-not-found">
            <div className="project-not-found-icon">⚠️</div>

            <p className="project-details-label">PROJECT {id || ""}</p>

            <h1>Project Details Unavailable</h1>

            <p>
              This project page was opened directly or refreshed, so the project
              information is no longer available in the current navigation
              state.
            </p>

            <Link to="/#projects" className="project-link primary-project-link">
              ← Back to Projects
            </Link>
          </div>
        </main>
      </div>
    );
  }

  /*
    Section numbering changes depending on the available
    project information.
  */

  const sectionNumber = {
    overview: "01",
    team: "02",
    technologies: project.teamProject ? "03" : "02",
    features: "04",
    security: "05",
    securityTools: "06",
    testing: "07",
    cloud: "08",
    architecture: "09",
    dataStructures: "10",
    contribution: "11",
    details: "12",
    demo: "13",
    mobile: "14",
  };

  const technologyCount = project.technologies?.length || 0;
  const featureCount = project.features?.length || 0;
  const teamCount = project.teamMembers?.length || 0;

  /*
    Supports either youtubeEmbed or youtube in your project data.
  */

  const youtubeUrl = project.youtubeEmbed || project.youtube;

  return (
    <div className="project-details-page">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="project-details-background">
        <div className="project-grid-background"></div>

        <div className="project-glow project-glow-one"></div>
        <div className="project-glow project-glow-two"></div>
        <div className="project-glow project-glow-three"></div>
      </div>

      {/* =========================================================
          TOP NAVIGATION
      ========================================================= */}

      <header className="project-details-header">
        <div className="project-details-header-inner">
          <Link to="/" className="project-details-logo">
            Franklin<span>.</span>
          </Link>

          <Link to="/#projects" className="project-details-back">
            <span>←</span>
            <span>Back to Projects</span>
          </Link>

          <div className="project-details-counter">
            <span className="counter-dot"></span>
            PROJECT {project.number} / 07
          </div>
        </div>
      </header>

      {/* =========================================================
          MAIN
      ========================================================= */}

      <main className="project-details-main">
        {/* =======================================================
            HERO
        ======================================================= */}

        <section className="project-details-hero">
          <div className="project-hero-inner">
            <div className="project-hero-top">
              <div className="project-hero-number">
                <span>PROJECT</span>
                {project.number}
              </div>

              <div className="project-hero-icon">{project.icon}</div>
            </div>

            <div className="project-details-label">
              FEATURED PROJECT · {project.period}
            </div>

            <h1>{project.title}</h1>

            <p className="project-details-period">{project.period}</p>

            <div className="project-hero-description">
              {project.description}
            </div>

            {/* HERO META */}

            <div className="project-hero-meta">
              <div className="project-hero-meta-card">
                <span>MY ROLE</span>
                <strong>{project.role}</strong>
              </div>

              <div className="project-hero-meta-card">
                <span>PROJECT TYPE</span>

                <strong>
                  {project.teamProject ? "Team Project" : "Individual Project"}
                </strong>
              </div>

              <div className="project-hero-meta-card">
                <span>STATUS</span>

                <strong>{project.details?.status || "Completed"}</strong>
              </div>
            </div>

            {/* PROJECT STATS */}

            <div className="project-hero-stats">
              <div className="project-stat">
                <span className="project-stat-number">
                  {String(technologyCount).padStart(2, "0")}
                </span>

                <span className="project-stat-label">Technologies</span>
              </div>

              <div className="project-stat-divider"></div>

              <div className="project-stat">
                <span className="project-stat-number">
                  {String(featureCount).padStart(2, "0")}
                </span>

                <span className="project-stat-label">Key Features</span>
              </div>

              <div className="project-stat-divider"></div>

              <div className="project-stat">
                <span className="project-stat-number">
                  {project.teamProject
                    ? String(teamCount).padStart(2, "0")
                    : "01"}
                </span>

                <span className="project-stat-label">
                  {project.teamProject ? "Team Members" : "Developer"}
                </span>
              </div>
            </div>

            {/* HERO ACTIONS */}

            <div className="project-hero-actions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-hero-github"
                >
                  <span>View Source Code</span>
                  <strong>GitHub ↗</strong>
                </a>
              )}

              <a href="#project-overview" className="project-hero-explore">
                Explore Project
                <span>↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* =======================================================
            CONTENT
        ======================================================= */}

        <section className="project-details-content">
          {/* =====================================================
              OVERVIEW
          ===================================================== */}

          <div
            id="project-overview"
            className="project-details-section project-about"
          >
            <div className="project-section-heading">
              <span>{sectionNumber.overview}</span>

              <div>
                <p>OVERVIEW</p>
                <h2>About the Project</h2>
              </div>
            </div>

            <div className="project-overview-card">
              <div className="project-overview-icon">{project.icon}</div>

              <div className="project-overview-content">
                <p className="project-details-description">
                  {project.description}
                </p>

                <div className="project-overview-line"></div>

                <p className="project-overview-highlight">
                  This project demonstrates practical software development,
                  system design, problem-solving, teamwork and modern
                  development practices.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              TEAM
          ===================================================== */}

          {project.teamProject &&
            project.teamMembers &&
            project.teamMembers.length > 0 && (
              <div className="project-details-section">
                <div className="project-section-heading">
                  <span>{sectionNumber.team}</span>

                  <div>
                    <p>COLLABORATION</p>
                    <h2>Team Project</h2>
                  </div>
                </div>

                <p className="project-section-intro">
                  This project was developed collaboratively with other
                  developers, with responsibilities divided across the
                  development process.
                </p>

                <div className="project-team-grid">
                  {project.teamMembers.map((member) => (
                    <div className="project-team-card" key={member.name}>
                      <div className="project-team-avatar">
                        {member.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div className="project-team-info">
                        <span className="project-team-member-label">
                          TEAM MEMBER
                        </span>

                        <h3>{member.name}</h3>

                        <p>{member.role}</p>

                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            LinkedIn Profile
                            <span>↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* =====================================================
              TECHNOLOGIES
          ===================================================== */}

          {project.technologies && project.technologies.length > 0 && (
            <div className="project-details-section">
              <div className="project-section-heading">
                <span>{sectionNumber.technologies}</span>

                <div>
                  <p>TECH STACK</p>
                  <h2>Technologies</h2>
                </div>
              </div>

              <div className="project-detail-tags large-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              FEATURES
          ===================================================== */}

          {project.features && project.features.length > 0 && (
            <div className="project-details-section">
              <div className="project-section-heading">
                <span>{sectionNumber.features}</span>

                <div>
                  <p>FUNCTIONALITY</p>
                  <h2>Key Features</h2>
                </div>
              </div>

              <div className="project-feature-grid">
                {project.features.map((feature, index) => (
                  <div className="project-feature-card" key={feature}>
                    <span className="project-feature-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="project-feature-content">
                      <div className="project-feature-check">✓</div>

                      <p>{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              SECURITY
          ===================================================== */}

          {project.security && project.security.length > 0 && (
            <div className="project-details-section project-security-section">
              <div className="project-section-heading">
                <span>{sectionNumber.security}</span>

                <div>
                  <p>PROTECTION</p>
                  <h2>Security & Data Protection</h2>
                </div>
              </div>

              <p className="project-section-intro">
                Security practices and controls implemented throughout the
                system to protect users, data and application functionality.
              </p>

              <div className="project-security-grid">
                {project.security.map((item, index) => (
                  <div className="project-security-card" key={item}>
                    <div className="project-security-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="project-security-check">✓</div>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              SECURITY TOOLS
          ===================================================== */}

          {project.securityTools && project.securityTools.length > 0 && (
            <div className="project-details-section">
              <div className="project-section-heading">
                <span>{sectionNumber.securityTools}</span>

                <div>
                  <p>SECURITY ANALYSIS</p>
                  <h2>Security Testing Tools</h2>
                </div>
              </div>

              <div className="project-detail-tags large-tags">
                {project.securityTools.map((tool) => (
                  <span key={tool}>🛡️ {tool}</span>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              TESTING
          ===================================================== */}

          {project.testing && project.testing.length > 0 && (
            <div className="project-details-section">
              <div className="project-section-heading">
                <span>{sectionNumber.testing}</span>

                <div>
                  <p>QUALITY ASSURANCE</p>
                  <h2>Testing & Validation</h2>
                </div>
              </div>

              <div className="project-feature-grid">
                {project.testing.map((test, index) => (
                  <div className="project-feature-card testing-card" key={test}>
                    <span className="project-feature-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="project-feature-content">
                      <div className="project-feature-check">✓</div>

                      <p>{test}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              CLOUD
          ===================================================== */}

          {project.cloud && project.cloud.length > 0 && (
            <div className="project-details-section project-cloud-section">
              <div className="project-section-heading">
                <span>{sectionNumber.cloud}</span>

                <div>
                  <p>CLOUD ENGINEERING</p>
                  <h2>☁️ Cloud Implementation</h2>
                </div>
              </div>

              <div className="project-cloud-grid">
                {project.cloud.map((item, index) => (
                  <div className="project-cloud-card" key={item}>
                    <div className="project-cloud-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="project-cloud-icon">☁️</div>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              ARCHITECTURE
          ===================================================== */}

          {project.architecture && project.architecture.length > 0 && (
            <div className="project-details-section">
              <div className="project-section-heading">
                <span>{sectionNumber.architecture}</span>

                <div>
                  <p>SYSTEM DESIGN</p>
                  <h2>Architecture & DevOps</h2>
                </div>
              </div>

              <div className="project-architecture-grid">
                {project.architecture.map((item, index) => (
                  <div className="project-architecture-card" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <div>
                      <div className="architecture-line"></div>

                      <p>{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              DATA STRUCTURES
          ===================================================== */}

          {project.dataStructures && project.dataStructures.length > 0 && (
            <div className="project-details-section">
              <div className="project-section-heading">
                <span>{sectionNumber.dataStructures}</span>

                <div>
                  <p>COMPUTATIONAL THINKING</p>
                  <h2>Data Structures & Algorithms</h2>
                </div>
              </div>

              <div className="project-detail-tags large-tags">
                {project.dataStructures.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              CONTRIBUTION
          ===================================================== */}

          {project.contribution && project.contribution.length > 0 && (
            <div className="project-details-section project-contribution-section">
              <div className="project-section-heading">
                <span>{sectionNumber.contribution}</span>

                <div>
                  <p>MY WORK</p>
                  <h2>My Contributions</h2>
                </div>
              </div>

              <div className="project-contributions">
                {project.contribution.map((item, index) => (
                  <div className="project-contribution" key={item}>
                    <div className="contribution-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="contribution-line"></div>

                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              ACADEMIC DETAILS
          ===================================================== */}

          {project.details && (
            <div className="project-details-section">
              <div className="project-section-heading">
                <span>{sectionNumber.details}</span>

                <div>
                  <p>ACADEMIC INFORMATION</p>
                  <h2>Project Details</h2>
                </div>
              </div>

              <div className="project-academic-grid">
                {project.details.module && (
                  <div className="project-academic-card">
                    <span>Module</span>
                    <strong>{project.details.module}</strong>
                  </div>
                )}

                {project.details.project && (
                  <div className="project-academic-card">
                    <span>Project</span>
                    <strong>{project.details.project}</strong>
                  </div>
                )}

                {project.details.type && (
                  <div className="project-academic-card">
                    <span>Type</span>
                    <strong>{project.details.type}</strong>
                  </div>
                )}

                {project.details.institution && (
                  <div className="project-academic-card">
                    <span>Institution</span>
                    <strong>{project.details.institution}</strong>
                  </div>
                )}

                {project.details.status && (
                  <div className="project-academic-card">
                    <span>Status</span>
                    <strong>{project.details.status}</strong>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* =====================================================
              LARGE YOUTUBE PROJECT DEMO
          ===================================================== */}

          {youtubeUrl && (
            <section className="project-details-section project-demo-section">
              <div className="project-section-heading">
                <span>{sectionNumber.demo}</span>

                <div>
                  <p>DEMONSTRATION</p>
                  <h2>Project Demo</h2>
                </div>
              </div>

              <div className="project-demo-header">
                <div className="project-demo-header-content">
                  <span className="project-demo-label">
                    PROJECT DEMONSTRATION
                  </span>

                  <h3>
                    See <span>{project.title}</span> in action
                  </h3>

                  <p>
                    Watch the complete demonstration to explore the
                    application's features, functionality, workflow and user
                    experience.
                  </p>
                </div>

                <div className="project-demo-badge">
                  <span className="demo-pulse"></span>
                  LIVE DEMO
                </div>
              </div>

              {/* LARGE VIDEO FRAME */}

              <div className="project-video-frame">
                {/* Browser-style top bar */}

                <div className="project-video-topbar">
                  <div className="video-window-controls">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="video-window-title">{project.title}</div>

                  <div className="video-window-status">
                    <span className="video-status-dot"></span>
                    DEMO
                  </div>
                </div>

                {/* 16:9 VIDEO */}

                <div className="project-video-screen">
                  <iframe
                    src={youtubeUrl}
                    title={`${project.title} Demo`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* VIDEO INFORMATION */}

              <div className="project-demo-caption">
                <div className="demo-caption-item">
                  <span className="demo-caption-icon">▶</span>

                  <div>
                    <strong>Full Project Demo</strong>
                    <small>Complete application walkthrough</small>
                  </div>
                </div>

                <div className="demo-caption-item">
                  <span className="demo-caption-icon">⚡</span>

                  <div>
                    <strong>Core Functionality</strong>
                    <small>Features, workflows & interactions</small>
                  </div>
                </div>

                <div className="demo-caption-item">
                  <span className="demo-caption-icon">✓</span>

                  <div>
                    <strong>Working Implementation</strong>
                    <small>Real project demonstration</small>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* =====================================================
              MOBILE APPLICATION
          ===================================================== */}

          {project.mobileProject && (
            <div className="project-details-section">
              <div className="project-section-heading">
                <span>{sectionNumber.mobile}</span>

                <div>
                  <p>MOBILE DEVELOPMENT</p>
                  <h2>Mobile Application</h2>
                </div>
              </div>

              <div className="project-mobile-preview">
                <div className="project-mobile-phone">
                  <div className="phone-speaker"></div>

                  <div className="phone-screen">
                    <div className="phone-app-icon">📱</div>

                    <strong>Vibez</strong>

                    <span>Music Streaming App</span>
                  </div>
                </div>

                <div className="project-mobile-content">
                  <span className="project-mobile-label">
                    ANDROID APPLICATION
                  </span>

                  <h3>Vibez Music Streaming App</h3>

                  <p>
                    A mobile music streaming experience built for Android using
                    Kotlin.
                  </p>

                  <span className="project-mobile-tech">
                    Kotlin · Android · REST APIs
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* =====================================================
              FINAL CTA
          ===================================================== */}

          <div className="project-details-actions">
            <div className="project-final-message">
              <span>INTERESTED IN THE PROJECT?</span>

              <h2>Explore the code.</h2>

              <p>
                View the source code and explore the implementation behind this
                project.
              </p>
            </div>

            <div className="project-final-buttons">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-details-github"
                >
                  <span>View Source Code</span>
                  <strong>GitHub ↗</strong>
                </a>
              )}

              <Link to="/#projects" className="project-details-back-button">
                ← Back to All Projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="project-details-footer">
        <div className="project-footer-left">
          <span className="project-footer-number">{project.number}</span>

          <p>{project.title}</p>
        </div>

        <Link to="/#projects">
          View All Projects
          <span>→</span>
        </Link>
      </footer>
    </div>
  );
}

export default ProjectDetails;
