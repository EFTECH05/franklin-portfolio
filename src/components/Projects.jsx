import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "GlobalTrust Banking Management System",
      period: "Mar 2026 – Jun 2026",
      icon: "🏦",
      description:
        "A secure international banking and payments system developed as a team-based school software engineering project. The application simulates a real-world fintech environment where users can securely log in, manage accounts, and initiate international payments through an approval-based workflow.",
      role: "Team Development Leader",
      teamProject: true,
      teamMembers: [
        {
          name: "Ishka Sewshanker",
          role: "Software Developer · FNB South Africa",
          linkedin: "https://www.linkedin.com/in/ishka-sewshanker-11a296246/",
        },
        {
          name: "David Ayowa",
          role: "Software Developer Intern · Payment24",
          linkedin: "https://www.linkedin.com/in/david-ayowa-a27110287/",
        },
      ],
      technologies: [
        "ASP.NET Core MVC",
        "C#",
        "Razor Views",
        "HTML",
        "CSS",
        "JavaScript",
        "Microsoft SQL Server",
        "RBAC",
        "Cybersecurity",
      ],
      security: [
        "Hashed & salted passwords",
        "Role-Based Access Control",
        "RegEx input validation",
        "HTTPS communication",
        "SQL Injection protection",
        "XSS protection",
        "Clickjacking protection",
        "Session hijacking mitigation",
        "MITM attack mitigation",
        "DDoS mitigation",
      ],
      securityTools: ["MobSF", "ScoutSuite"],
      github: "https://github.com/EFTECH05/APPLICATION_TASK123",
      youtubeEmbed: "https://www.youtube-nocookie.com/embed/0w5iqUrRZCw",
    },
    {
      number: "02",
      title: "Logistica – Global Logistics Management System",
      period: "Mar 2026 – May 2026",
      icon: "🚚",
      description:
        "An enterprise-level Global Logistics Management System developed as part of my Advanced Diploma in Application Development. The system simulates a scalable logistics platform for managing contracts, service requests, operational workflows, and external service integrations.",
      role: "Full-Stack Developer",
      teamProject: false,
      technologies: [
        "ASP.NET Core MVC",
        "ASP.NET Core Web API",
        "C#",
        "Entity Framework Core",
        "Microsoft SQL Server",
        "Docker",
        "Docker Compose",
        "xUnit",
        "LINQ",
        "RESTful APIs",
        "Git & GitHub",
      ],
      features: [
        "Role-Based Access Control",
        "Secure Authentication",
        "OTP Verification",
        "Contract Management",
        "Service Request Management",
        "Currency Conversion API",
        "PDF Contract Uploads",
        "Advanced Filtering",
        "LINQ Queries",
      ],
      security: [
        "OTP-based authentication",
        "Parameterized queries",
        "Secure Entity Framework practices",
        "PDF-only file validation",
        "Role-Based Access Control",
      ],
      testing: [
        "Currency conversion calculations",
        "PDF file upload validation",
        "Service request business rules",
      ],
      architecture: [
        "MVC frontend layer",
        "Web API business layer",
        "SQL Server data layer",
        "Service-Oriented Architecture",
        "Docker containerization",
      ],
      github:
        "https://github.com/EFTECH05/Logistics-Management-System-School-Project-ASP.net.core-Part2",
      youtubeEmbed: "https://www.youtube-nocookie.com/embed/tO32RKTxETs",
    },
    {
      number: "03",
      title: "TDH Management System",
      period: "Feb 2025 – Oct 2025",
      icon: "🍽️",
      description:
        "A full-stack mobile and web management system developed for Turkish Doner House (TDH) to address operational challenges including manual order processing, paper-based record keeping, and WhatsApp-based communication. I initiated and proposed the project after identifying these challenges and volunteered to develop a digital solution to streamline restaurant operations at no cost.",
      role: "Lead Developer & UI/UX Designer",
      teamProject: true,
      teamMembers: [
        {
          name: "David Ayowa",
          role: "Software Developer Intern · Payment24",
          linkedin: "https://www.linkedin.com/in/david-ayowa-a27110287/",
        },
        {
          name: "Ditshwanelo Tumane",
          role: "Full-Stack Developer Intern · Lesaka Technologies Inc.",
          linkedin:
            "https://www.linkedin.com/in/ditshwanelo-tumane-viewmypage/",
        },
      ],
      technologies: [
        "Kotlin",
        "PHP",
        "MySQL",
        "Web APIs",
        "Geolocation API",
        "Figma",
        "HTML",
        "CSS",
        "JavaScript",
        "SDLC",
      ],
      features: [
        "Employee Management",
        "Admin Module",
        "Manager Module",
        "Employee Sign-In & Sign-Out",
        "Geolocation Tracking",
        "Web API Integration",
        "Operational Reporting",
        "Digital Record Management",
        "Workflow Automation",
      ],
      security: [
        "Geolocation-based verification",
        "Role-Based Access Control",
        "Input validation",
        "Secure API communication",
        "Controlled employee access",
      ],
      architecture: [
        "Mobile Application",
        "Web Application",
        "PHP Backend",
        "MySQL Database",
        "Web API Integration",
        "Geolocation Services",
      ],
      contribution: [
        "Initiated and proposed the project",
        "Led the development team",
        "Designed the UI/UX prototypes in Figma",
        "Developed mobile and web functionality",
        "Implemented geolocation-based employee sign-in and sign-out",
        "Contributed to API development and integration",
        "Developed employee, admin, and management modules",
        "Supported reporting and operational automation",
      ],
      github: "https://github.com/EFTECH05/TDHSystem",
      youtubeEmbed: "https://www.youtube-nocookie.com/embed/tBOZHj6ZsEM",
    },
    {
      number: "04",
      title: "Vibez – Music Streaming Mobile App",
      period: "Mar 2025 – Jun 2025",
      icon: "📱",
      description:
        "A music streaming Android application developed as a team-based project during my studies at IIE Rosebank College. Vibez enables users to discover and browse music through the Jamendo API, with Firebase providing user authentication and cloud-based data storage.",
      role: "Mobile Developer & UI/UX Designer",
      teamProject: true,
      teamMembers: [
        {
          name: "Kamvalethu Mdanjelwa",
          role: "Graduate Trainee – Quality Assurance · BETSoftware",
          linkedin:
            "https://www.linkedin.com/in/kamvalethu-mdanjelwa-573765281/",
        },
        {
          name: "David Ayowa",
          role: "Software Developer Intern · Payment24",
          linkedin: "https://www.linkedin.com/in/david-ayowa-a27110287/",
        },
      ],
      technologies: [
        "Kotlin",
        "Android",
        "Firebase Authentication",
        "Firebase Database",
        "Jamendo API",
        "REST APIs",
        "Figma",
      ],
      features: [
        "User Authentication",
        "Music Discovery",
        "Music Browsing",
        "Jamendo API Integration",
        "Cloud Database Integration",
        "Onboarding Experience",
        "Swipe-Based Interaction",
        "Responsive UI Components",
        "Smooth Navigation",
      ],
      security: [
        "Firebase Authentication",
        "Authenticated User Access",
        "Cloud-Based Data Storage",
        "API-Based Data Retrieval",
      ],
      architecture: [
        "Android Mobile Application",
        "Kotlin Frontend",
        "Firebase Authentication",
        "Firebase Database",
        "Jamendo REST API",
      ],
      contribution: [
        "Designed the UI/UX prototype in Figma",
        "Developed the Android mobile frontend using Kotlin",
        "Integrated the Jamendo REST API",
        "Implemented responsive UI components",
        "Developed smooth navigation flows",
        "Contributed to the onboarding experience",
      ],
      github: "https://github.com/KL-Mdanjelwa/VibezApp1",
      mobileProject: true,
    },
    {
      number: "05",
      title: "EventEase – Cloud-Based Venue Booking System",
      period: "Feb 2026 – Jun 2026",
      icon: "☁️",
      description:
        "A full cloud-based venue booking system developed as part of my Advanced Diploma in Cloud Development. The system manages venues, events, and bookings while applying validation rules to prevent scheduling conflicts such as double bookings.",
      role: "Cloud & Backend Developer",
      teamProject: false,
      technologies: [
        "ASP.NET Core MVC",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "Azure SQL Database",
        "Azure App Service",
        "Azure Blob Storage",
        "HTML",
        "CSS",
        "Bootstrap",
        "Git",
        "GitHub",
      ],
      features: [
        "Create, View, Update & Delete Venues",
        "Venue Details & Image Management",
        "Create & Manage Events",
        "Assign Events to Venues",
        "Booking Management",
        "Double-Booking Prevention",
        "Booking Validation Rules",
        "Search & Filtering",
        "Cloud Database Integration",
        "Image Management with Azure Blob Storage",
        "Cloud Deployment",
      ],
      cloud: [
        "Azure App Service – Web Hosting",
        "Azure SQL Database – Cloud Data Storage",
        "Azure Blob Storage – Image Storage",
        "Git & GitHub – Version Control",
      ],
      architecture: [
        "ASP.NET Core MVC Architecture",
        "Entity Framework Core",
        "Azure SQL Database",
        "Azure Blob Storage",
        "Azure App Service",
        "Cloud-Based Architecture",
      ],
      contribution: [
        "Developed the venue management functionality",
        "Implemented event management functionality",
        "Implemented booking management",
        "Developed double-booking prevention logic",
        "Implemented booking validation rules",
        "Integrated Azure SQL Database",
        "Integrated Azure Blob Storage for images",
        "Deployed the application to Azure App Service",
        "Used Git and GitHub for version control",
      ],
      details: {
        module: "CLDV7111 – Cloud Development A",
        project: "EventEase Venue Booking System",
        type: "Portfolio of Evidence (POE)",
        institution: "IIE Rosebank College",
      },
      github: "https://github.com/EFTECH05/Part1Cloud",
    },
    {
      number: "06",
      title: "Cloud-Based Retail Management System",
      period: "06 Aug 2026 – 23 Oct 2026",
      icon: "🛒",
      description:
        "A full-stack Retail Management System developed as part of the Cloud Development B (CLDV7112) module. The project integrates Microsoft Azure cloud services with ASP.NET Core and React, demonstrating practical skills in cloud application development, data management, and the integration of cloud-based storage and services.",
      role: "Cloud & Full-Stack Developer",
      teamProject: false,
      technologies: [
        "C#",
        "ASP.NET Core",
        "React.js",
        "JavaScript",
        "Microsoft Azure",
        "Azure Table Storage",
        "Azure Blob Storage",
        "Azure Queue Storage",
        "Azure File Storage",
        "Azure App Service",
        "REST APIs",
        "Git & GitHub",
      ],
      features: [
        "Product Management",
        "Inventory Management",
        "Customer Management",
        "Order Management",
        "RESTful API Development",
        "React Frontend",
        "Cloud-Based Data Storage",
        "Product Image Management",
        "Order & Inventory Processing",
        "Application Logging",
        "Azure Cloud Deployment",
        "Frontend & Backend Integration",
      ],
      cloud: [
        "Azure Table Storage – Product & Customer Data",
        "Azure Blob Storage – Product Images",
        "Azure Queue Storage – Order & Inventory Processing",
        "Azure File Storage – Application Logging",
        "Azure App Service – Application Deployment",
        "Microsoft Azure – Cloud Infrastructure",
      ],
      architecture: [
        "React Frontend",
        "ASP.NET Core Backend",
        "RESTful API Architecture",
        "Azure Table Storage",
        "Azure Blob Storage",
        "Azure Queue Storage",
        "Azure File Storage",
        "Azure App Service",
        "Cloud-Based Architecture",
      ],
      contribution: [
        "Developed RESTful APIs using C# and ASP.NET Core",
        "Built the React.js frontend",
        "Implemented product management functionality",
        "Implemented inventory management functionality",
        "Implemented customer management functionality",
        "Implemented order management functionality",
        "Integrated Azure Table Storage",
        "Integrated Azure Blob Storage for product images",
        "Integrated Azure Queue Storage for processing",
        "Integrated Azure File Storage for application logging",
        "Connected the React frontend with the ASP.NET Core backend",
        "Deployed and tested the application using Azure App Service",
      ],
      details: {
        module: "CLDV7112 – Cloud Development B",
        project: "Cloud-Based Retail Management System",
        type: "Academic Cloud Development Project",
        institution: "IIE Rosebank College",
        status: "✅ Completed — October 2026",
      },
      youtubeEmbed: "https://www.youtube-nocookie.com/embed/OVbIeN8GSlM",
      github: "https://github.com/EFTECH05/Project-1-Azure-Storage-Solution-",
    },
    {
      number: "07",
      title: "Municipal Services Application – Parts 1 & 2",
      period: "Aug 2026 – Present",
      icon: "🏛️",
      description:
        "An evolving municipal services desktop application developed in C# Windows Forms as part of my Advanced Application Development (AAPD7112) Portfolio of Evidence at IIE Rosebank College. Part 1 implements municipal issue reporting, including location and category selection, detailed descriptions, optional file attachments, progress indicators, and SQL Server persistence. Part 2 extends the application with Local Events and Announcements, event search and date filtering, recent search history, category-based recommendations, administrator event management, and configurable email notifications.",
      role: "Software Developer",
      teamProject: false,
      technologies: [
        "C#",
        ".NET Framework 4.7.2",
        "Windows Forms",
        "Microsoft SQL Server",
        "SQL Server Express",
        "ADO.NET",
        "System.Data.SqlClient",
        "Visual Studio",
        "Data Structures & Algorithms",
        "Gmail SMTP",
        "Git & GitHub",
      ],
      features: [
        "Citizen Account Management",
        "User Authentication",
        "Role-Based Access Control",
        "Municipal Issue Reporting",
        "Location and Category Validation",
        "Detailed Issue Descriptions",
        "Image & Document Attachments",
        "Progress Indicators and Feedback Messages",
        "Issue Submission and Confirmation",
        "Persistent Issue Storage",
        "Local Events & Announcements",
        "Event Category Search",
        "Date-Range Filtering",
        "Event Details",
        "Recent Search History",
        "Event Recommendations",
        "Administrator Event Creation",
        "Event Editing and Deletion",
        "SQL Server Database Integration",
        "Configurable Email Notifications",
        "Service Request Status — Planned for Part 3",
      ],
      security: [
        "User Authentication",
        "Role-Based Access Control",
        "Citizen and Administrator Access",
        "Super Administrator Account Management",
        "Database Access Through ADO.NET",
        "Environment-Based SMTP Credentials",
      ],
      architecture: [
        "Windows Forms Desktop Application",
        "C# Application Layer",
        "Object-Oriented Programming",
        "ADO.NET Data Access",
        "Microsoft SQL Server Database",
        "AccountStore and IssueStore",
        "EventManager",
        "Separation of Interface and Data Management",
      ],
      dataStructures: [
        "List<Issue> for In-Memory Issue Management",
        "Stack for Recent Searches",
        "Queue for Search Processing",
        "Dictionary<int, Event> for Event Lookup",
        "SortedDictionary<DateTime, Queue> for Date-Based Event Processing",
        "SortedDictionary<DateTime, List<Event>> for Date-Organised Events",
        "HashSet for Unique Event Categories",
        "Dictionary<string, int> for Category Search Activity",
      ],
      contribution: [
        "Developed the Report Issues functionality in Part 1",
        "Implemented location, category, and description validation",
        "Implemented image and document selection using OpenFileDialog",
        "Added progress indicators and encouraging feedback messages",
        "Integrated issue storage with Microsoft SQL Server",
        "Implemented Local Events and Announcements in Part 2",
        "Developed event search and date-range filtering",
        "Implemented recent search history",
        "Developed event recommendations based on search activity",
        "Applied collections and data structures to event management",
        "Implemented administrator event creation, editing, and deletion",
        "Configured Gmail SMTP email notifications for new events",
        "Prepared the application for future project extensions",
      ],
      details: {
        module: "AAPD7112 – Advanced Application Development",
        project: "Municipal Services Application for South Africa",
        type: "Portfolio of Evidence (POE)",
        institution: "IIE Rosebank College",
        status: "🚧 Currently in Development — Parts 1 & 2",
        nextStage: "Part 3 — Service Request Status",
        database: "MunicipalServicesDB",
        framework: ".NET Framework 4.7.2",
      },
      github: "https://github.com/EFTECH05/MunicipalServicesApp",
      youtubeEmbed: "https://www.youtube-nocookie.com/embed/grHwhgtqSAE",
    },
    {
      number: "08",
      title: "Siya-Fund – Stokvel Savings & Loan Management Platform",
      period: "Aug 2026 – Present",
      icon: "💰",
      description:
        "A mobile and web-based financial management application developed as part of a five-month Work Integrated Learning (WIL) project. Siya-Fund aims to digitise the management of South African stokvel savings groups by helping members create and join groups, manage savings contributions, view transactions, submit loan requests, and manage membership through a simple, user-friendly platform.",
      role: "UI/UX Designer · Lead Developer · Project Manager & QA (Final Sprint)",
      teamProject: true,
      teamMembers: [
        {
          name: "David Ayowa",
          role: "Lead Developer / Developer",
          linkedin: "https://www.linkedin.com/in/david-ayowa-a27110287/",
        },
        {
          name: "Ishka Sewshanker",
          role: "Business Analyst / Developer",
          linkedin: "https://www.linkedin.com/in/ishka-sewshanker-11a296246/",
        },
      ],
      technologies: [
        "React Native",
        "Expo",
        "Expo Router",
        "TypeScript",
        "Firebase Authentication",
        "Cloud Firestore",
        "Node.js",
        "Express.js",
        "Firebase Admin SDK",
      ],
      features: [
        "User Registration and Login",
        "Email OTP Verification",
        "Password Reset",
        "Savings Group Creation",
        "Joining Groups with Unique Codes",
        "Group Member Management",
        "Contribution Management",
        "Transaction History",
        "Loan Requests",
        "Role-Based Access Control",
        "Super-Admin Dashboard",
        "Mobile and Web Support",
      ],
      security: [
        "Firebase Authentication",
        "Email OTP Verification",
        "Role-Based Access Control",
        "Controlled Administrative Access",
        "Server-Side Firebase Operations",
      ],
      architecture: [
        "React Native and Expo Frontend",
        "Expo Router Navigation",
        "Controller Layer",
        "Service Layer",
        "Firebase Authentication",
        "Cloud Firestore",
        "Node.js and Express OTP Service",
      ],
      contribution: [
        "Contributed to UI/UX design during the earlier stages",
        "Contribute to application development as Lead Developer",
        "Taking on project coordination responsibilities during the final sprint",
        "Taking on Quality Assurance responsibilities during the final sprint",
        "Supporting application testing and defect verification",
      ],
      details: {
        project: "Siya-Fund Stokvel Savings and Loan Management Platform",
        type: "Work Integrated Learning 3 (WIL 3)",
        duration: "Five-month project",
        startDate: "August 2026",
        status: "In Development",
      },
      github: "https://github.com/EFTECH05/Siya-Fund",
      youtubeEmbed: "https://www.youtube.com/embed/_7wb0Phdr5s",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <p>Some of my work</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-period">{project.period}</span>
            </div>

            <h3>
              {project.icon} {project.title}
            </h3>

            <p className="project-description">{project.description}</p>

            <div className="project-role">
              <span>Role</span>
              <strong>{project.role}</strong>
            </div>

            {project.teamMembers?.length > 0 && (
              <div className="project-team">
                <h4>Team Members</h4>

                <div className="team-members-list">
                  {project.teamMembers.map((member) => (
                    <div className="team-member" key={member.name}>
                      <div className="team-member-info">
                        <strong>{member.name}</strong>
                        <span>{member.role}</span>
                      </div>

                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="linkedin-link"
                          aria-label={`${member.name}'s LinkedIn profile`}
                          title={`View ${member.name}'s LinkedIn profile`}
                        >
                          <FaLinkedin />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="project-tags">
              {project.technologies.slice(0, 6).map((technology) => (
                <span key={technology}>{technology}</span>
              ))}

              {project.technologies.length > 6 && (
                <span>+{project.technologies.length - 6} more</span>
              )}
            </div>

            <div className="project-links">
              <Link
                to={`/projects/${project.number}`}
                state={{ project }}
                className="project-link primary-project-link"
              >
                View Project →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
