import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-heading">
          <p>Let's work together</p>
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-content">
          {/* Introduction */}
          <div className="contact-intro">
            <h3>Have a project, opportunity, or idea?</h3>

            <p>
              Interested in working together or discussing a project? Feel free
              to reach out. I am always open to connecting, learning about new
              opportunities, and discussing innovative software solutions.
            </p>
          </div>

          {/* Contact Card */}
          <div className="contact-action">
            <div className="contact-icon">✉</div>

            <div className="contact-action-content">
              <span>GET IN TOUCH</span>

              <h4>Let's start a conversation.</h4>

              <p className="contact-email">simbingangu@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
