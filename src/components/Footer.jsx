import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/EFTECH05",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.24-5.11 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/franklin-ngangu-7a376a214/",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.74H4.96V9.17h2.97v9.57ZM6.45 7.86a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.29 10.88h-2.97v-4.66c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.74H9.46V9.17h2.85v1.31h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.55v5.25Z"
          />
        </svg>
      ),
    },
  ];

  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-container">
        {/* Top section */}
        <div className="footer-main">
          <div className="footer-brand">
            <a
              href="#home"
              className="footer-logo"
              aria-label="Franklin Ngangu - back to home"
            >
              <span className="footer-logo-bracket">&lt;</span>
              <span>FN</span>
              <span className="footer-logo-bracket">/&gt;</span>
              <span className="footer-logo-dot">.</span>
            </a>

            <h3>
              Franklin <span>Ngangu.</span>
            </h3>

            <p className="footer-description">
              Building modern digital experiences through software development,
              thoughtful design, and practical technology.
            </p>

            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.name} profile`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-navigation">
            <h4>Explore</h4>

            <ul>
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <span className="footer-link-arrow">↗</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact call to action */}
          <div className="footer-cta">
            <span className="footer-eyebrow">
              <span className="footer-status-dot" />
              LET'S CONNECT
            </span>

            <h4>
              Have an idea?
              <br />
              <span>Let's build it.</span>
            </h4>

            <p>
              Have a project or opportunity in mind? Let's start a conversation.
            </p>

            <a href="#contact" className="footer-contact-link">
              Get in touch
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} <span>Franklin Ngangu</span>. All rights reserved.
          </p>

          <p className="footer-made">
            Designed with care <span aria-label="love">♥</span> Built for the
            web.
          </p>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 19V5" />
              <path d="m5 12 7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
