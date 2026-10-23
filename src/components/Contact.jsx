import React, { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Automatically hide the success message after 3 seconds.
  useEffect(() => {
    if (!isSuccess || !result) return;

    const timeoutId = setTimeout(() => {
      setResult("");
      setIsSuccess(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [isSuccess, result]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "0717b838-3a8b-457e-9a63-40706d352caa");

    formData.append("subject", "New Portfolio Contact Message");

    setIsSending(true);
    setResult("Sending your message...");
    setIsSuccess(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setResult(
          "Thank you for reaching out! Your message has been sent successfully.",
        );
        form.reset();
      } else {
        setResult(
          data.message || "We couldn't send your message. Please try again.",
        );
      }
    } catch {
      setResult(
        "A connection error occurred. Please check your internet and try again.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section heading */}
        <div className="section-heading">
          <span className="contact-eyebrow">
            <span className="contact-eyebrow-line" />
            CONTACT
          </span>

          <h2>
            Let's build
            <span className="contact-heading-accent"> something great.</span>
          </h2>

          <p className="contact-heading-description">
            Have a project in mind, an opportunity to discuss, or an idea you'd
            like to bring to life? I'd love to hear from you.
          </p>
        </div>

        {/* Main contact layout */}
        <div className="contact-content">
          {/* Introduction panel */}
          <div className="contact-intro">
            <div className="contact-availability">
              <span className="availability-dot" />
              Open to opportunities
            </div>

            <h3>
              Let's turn your
              <br />
              <span>ideas into reality.</span>
            </h3>

            <p className="contact-intro-description">
              I'm interested in connecting with people, collaborating on
              meaningful projects, and exploring opportunities to build useful,
              reliable software solutions.
            </p>

            <div className="contact-divider" />

            <div className="contact-info-item">
              <div className="contact-info-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <div>
                <span className="contact-info-label">GET IN TOUCH</span>
                <p>Send me a message using the form.</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-11a8 8 0 1 0-16 0c0 7 8 11 8 11Z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              </div>

              <div>
                <span className="contact-info-label">LOCATION</span>
                <p>South Africa · Available for remote collaboration</p>
              </div>
            </div>

            <div className="contact-decoration" aria-hidden="true">
              LET'S CONNECT
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form-card">
            <div className="contact-form-header">
              <div>
                <span className="form-step-label"></span>
                <h3>Send a message</h3>
                <p>Fill in the details below and I'll be in touch.</p>
              </div>

              <div className="form-header-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </div>
            </div>

            <form className="contact-form" onSubmit={onSubmit}>
              <div className="contact-form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  maxLength={150}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me a little about your project, idea, or opportunity..."
                  maxLength={5000}
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={isSending}
              >
                <span>{isSending ? "Sending message..." : "Send message"}</span>

                {!isSending && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                )}
              </button>

              {/* Success, loading, and error messages */}
              {result && (
                <p
                  className={`contact-result ${
                    isSuccess
                      ? "success"
                      : result.startsWith("Sending")
                        ? "pending"
                        : "error"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {result}
                </p>
              )}

              <p className="contact-form-note">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
                Your details are used to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
