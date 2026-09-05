import React from "react";
import { Link } from "react-router-dom";
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
      title: "Municipal Services Application for South Africa",
      period: "Aug 2026 – Present",
      icon: "🏛️",
      description:
        "A comprehensive Municipal Services Application for South Africa currently being developed as part of my Advanced Application Development (AAPD7112) / Programming 3B (PROG7312) module. The application is designed to improve citizen engagement and municipal service delivery by providing residents with a platform to report service issues, access local events and announcements, and track service request progress.",
      role: "Software Developer",
      teamProject: false,

      technologies: [
        "C#",
        ".NET Framework",
        "Windows Forms",
        "SQL / Database",
        "Microsoft Azure",
        "Visual Studio",
        "Git",
        "GitHub",
      ],

      features: [
        "User Authentication",
        "Role-Based Access Control (RBAC)",
        "Resident & Administrator Functionality",
        "Municipal Issue Reporting",
        "Issue Location Tracking",
        "Issue Categories",
        "Image & Document Attachments",
        "Local Events & Announcements",
        "Event Search & Filtering",
        "Event Recommendations",
        "Service Request Status Tracking",
        "Unique Service Request Identifiers",
      ],

      security: [
        "User Authentication",
        "Role-Based Access Control",
        "Admin Access Control",
        "Super Admin Access Control",
        "Citizen Access Control",
      ],

      architecture: [
        "Windows Forms Desktop Application",
        "C# Application Layer",
        "SQL / Database Layer",
        "Object-Oriented Programming",
        "Azure Cloud Integration",
      ],

      dataStructures: [
        "Lists",
        "Stacks",
        "Queues",
        "Priority Queues",
        "Dictionaries",
        "Sorted Dictionaries",
        "Hash Tables",
        "Sets",
        "Binary Trees",
        "Binary Search Trees",
        "AVL Trees",
        "Red-Black Trees",
        "Heaps",
        "Graphs",
        "Graph Traversal",
        "Minimum Spanning Trees",
      ],

      contribution: [
        "Developing the municipal services application",
        "Implementing Role-Based Access Control",
        "Developing citizen functionality",
        "Developing administrator functionality",
        "Developing municipal issue reporting",
        "Implementing issue categorisation",
        "Implementing image and document attachments",
        "Developing local events and announcements",
        "Implementing event search and filtering",
        "Implementing service request tracking",
        "Applying data structures and algorithms",
        "Preparing Azure cloud integration for the final implementation stage",
      ],

      details: {
        module:
          "AAPD7112 – Advanced Application Development / PROG7312 – Programming 3B",
        project: "Municipal Services Application for South Africa",
        type: "Portfolio of Evidence (POE)",
        institution: "IIE Rosebank College",
        status: "🚧 Currently in Development",
      },

      github: "https://github.com/EFTECH05/MunicipalServicesApp",

      youtubeEmbed: "https://www.youtube-nocookie.com/embed/koWJNoyAdkg",
    },

    {
      number: "07",
      title: "Cloud-Based Retail Management System",
      period: "Aug 2026 – Present",
      icon: "🛒",
      description:
        "A cloud-based Retail Management System currently being developed as part of the Cloud Development B (CLDV7112) module. The project focuses on applying Microsoft Azure cloud services while building a full-stack application using ASP.NET Core and React.",
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
        "Developing RESTful APIs using C# and ASP.NET Core",
        "Building the React.js frontend",
        "Implementing product management functionality",
        "Implementing inventory management functionality",
        "Implementing customer management functionality",
        "Implementing order management functionality",
        "Integrating Azure Table Storage",
        "Integrating Azure Blob Storage for product images",
        "Integrating Azure Queue Storage for processing",
        "Integrating Azure File Storage for application logging",
        "Connecting the React frontend with the ASP.NET Core backend",
        "Deploying and testing the application using Azure App Service",
      ],

      details: {
        module: "CLDV7112 – Cloud Development B",
        project: "Cloud-Based Retail Management System",
        type: "Academic Cloud Development Project",
        institution: "IIE Rosebank College",
        status: "🚧 Currently in Development",
      },

      youtubeEmbed: "https://www.youtube-nocookie.com/embed/OVbIeN8GSlM",

      github: "https://github.com/EFTECH05/Project-1-Azure-Storage-Solution-",
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
