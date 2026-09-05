import "./Experience.css";

const experiences = [
  {
    company: "Rosebank International South Africa",
    role: "Junior Full-Stack Developer",
    type: "Work Integrated Learning",
    employment: "Internship",
    date: "Oct 2023 – Nov 2025",
    location: "Cape Town, Western Cape, South Africa · Hybrid",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEdtmXDCN3DUg/company-logo_100_100/B4DZ4pmfvOJUAI-/0/1778814418114/rosebank_international_sa_logo?e=1790208000&v=beta&t=r8hBFkJ-m7wSrUNKqLRFI-qEJ13UJyxVK4zIiqCRohk",
    description:
      "Completed Work Integrated Learning (WIL) and Portfolio of Evidence (POE) at Rosebank College, gaining practical experience in a Junior Full-Stack Developer capacity.",
    responsibilities: [
      "Collaborated within an Agile Scrum team alongside developers, a Project Manager, and a Business Analyst.",
      "Participated in sprint planning, task allocation, progress reviews, testing, debugging, and iterative software development.",
      "Designed user interfaces and application prototypes using Figma, focusing on usability and user-centered design.",
      "Developed and maintained frontend and backend functionality throughout the Software Development Life Cycle (SDLC).",
      "Integrated RESTful APIs and web technologies to implement application functionality.",
      "Worked with relational databases to develop and maintain data-driven application features.",
      "Applied software development practices including Git-based version control, testing, debugging, and clean coding principles.",
      "Collaborated with team members to identify and resolve technical issues and deliver features within sprint deadlines.",
    ],
    skills: [
      "C#",
      "Kotlin",
      "PHP",
      "MySQL",
      "Figma",
      "REST APIs",
      "Git",
      "GitHub",
      "Geolocation API",
    ],
    projects: [
      {
        name: "TDH Management Portal",
        url: "https://www.youtube.com/watch?v=tBOZHj6ZsEM&t=26s",
      },
    ],
  },
  {
    company: "Protea Hotels by Marriott®",
    role: "Waiter",
    type: "Hospitality",
    employment: "Full-time",
    date: "Dec 2022 – Jan 2023",
    location: "Cape Town, Western Cape, South Africa · On-site",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEqO4MUuXDSKg/company-logo_100_100/company-logo_100_100/0/1722491215629/protea_hotels_logo?e=1790208000&v=beta&t=j9nN2VWTRLsH83oFOMc6L3ppjdrUA4grhK4G913AJlU",
    description:
      "Provided professional customer service and supported daily restaurant operations in a fast-paced hospitality environment.",
    responsibilities: [
      "Provided excellent customer service by responding quickly to guest requests and concerns.",
      "Checked with customers to ensure satisfaction and addressed concerns professionally.",
      "Maintained cleanliness and presentation standards throughout the dining area.",
      "Worked efficiently as part of a team while managing multiple customer needs.",
      "Replenished beverages and ensured meals were served correctly and professionally.",
      "Handled customer feedback and complaints tactfully and professionally.",
    ],
    skills: [
      "Customer Service",
      "Communication",
      "Teamwork",
      "Problem Solving",
    ],
  },
];

function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">
      <div className="experience-card-header">
        <div className="experience-company-logo">
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="experience-heading">
          <h3>{experience.role}</h3>

          <p className="experience-company">{experience.company}</p>

          <div className="experience-meta">
            <span>{experience.employment}</span>
            <span className="experience-dot">•</span>
            <span>{experience.date}</span>
          </div>

          <p className="experience-location">{experience.location}</p>
        </div>
      </div>

      <div className="experience-content">
        <p className="experience-description">{experience.description}</p>

        <h4>Key Responsibilities</h4>

        <ul className="experience-responsibilities">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>

        <div className="experience-skills">
          <h4>Skills & Technologies</h4>

          <div className="experience-skill-list">
            {experience.skills.map((skill) => (
              <span className="experience-skill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {experience.projects && experience.projects.length > 0 && (
          <div className="experience-projects">
            <h4>Project</h4>

            <div className="experience-project-list">
              {experience.projects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-project-link"
                >
                  <span>{project.name}</span>
                  <span className="experience-project-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-section-heading">
          <span className="experience-label">MY CAREER</span>

          <h2>Experience</h2>

          <p>
            Practical experience gained through software development,
            collaborative projects, and professional environments.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div className="experience-timeline-item" key={experience.role}>
              <div className="experience-timeline-marker">
                <span>{index + 1}</span>
              </div>

              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
