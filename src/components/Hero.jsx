import React from "react";
import mee from "../assets/mee.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>

        <h1>
          Franklin <span>Ngangu</span>
        </h1>

        <h2>Software Development Graduate with Distinction</h2>

        <p className="hero-description">
          An ambitious software development graduate passionate about
          technology, continuous learning and building practical digital
          solutions. I am focused on developing my skills and gaining real-world
          experience in the software development industry.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          {/* GitHub */}
          <a
            href="https://github.com/EFTECH05"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Visit my GitHub profile"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .269.18.58.688.482A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
            </svg>

            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/franklin-ngangu-7a376a214/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Visit my LinkedIn profile"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.998h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.605 0 4.27 2.373 4.27 5.467v6.276ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.564V8.998H3.555v11.454Z" />
            </svg>

            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Profile */}
      <div className="hero-visual">
        <div className="profile-card">
          <div className="profile-photo-wrapper">
            <div className="profile-photo-ring">
              <img src={mee} alt="Franklin Ngangu" className="profile-photo" />
            </div>
          </div>

          <h3>Software Development Graduate</h3>

          <p>Learning, building and growing in technology.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
