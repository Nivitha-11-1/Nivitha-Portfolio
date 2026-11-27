import { useState } from "react";
import { AlertCircle, CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { RevealBlock, SectionHeader } from "./SectionHeader";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(values) {
  const errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim() || values.subject.trim().length < 3) {
    errors.subject = "Please enter a subject (at least 3 characters).";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Please enter a message (at least 10 characters).";
  }
  return errors;
}

export default function Contact({ personal, social, contact }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasEmail = Boolean(social.email && social.email.trim());
  const hasGitHub = Boolean(social.githubUrl && social.githubUrl.trim());
  const hasLinkedIn = Boolean(social.linkedinUrl && social.linkedinUrl.trim());
  const hasEndpoint = Boolean(contact.formEndpoint && contact.formEndpoint.trim());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (status.type) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus({
        type: "error",
        message: "Please review and correct the highlighted fields below.",
      });
      return;
    }

    if (hasEndpoint) {
      setIsSubmitting(true);
      try {
        const res = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        });
        if (!res.ok) {
          throw new Error("Unable to submit form right now.");
        }
        setStatus({
          type: "success",
          message: "Thank you for reaching out. Your message has been sent.",
        });
        setValues({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } catch {
        setStatus({
          type: "error",
          message:
            "Submission failed due to a network or server error. Please try emailing directly.",
        });
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    if (hasEmail) {
      const mailtoSubject = encodeURIComponent(values.subject.trim());
      const mailtoBody = encodeURIComponent(
        `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`
      );
      window.location.href = `mailto:${social.email.trim()}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setStatus({
        type: "success",
        message:
          "Your message passed validation and opened in your default email client.",
      });
      return;
    }

    setStatus({
      type: "success",
      message:
        "Message validated cleanly. Add your email or formEndpoint in src/config/portfolioConfig.js to enable direct delivery.",
    });
  };

  return (
    <section
      id="contact"
      className="section section--subtle"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          id="contact-heading"
          title={contact.heading}
          subtitle={contact.subheading}
        />

        <RevealBlock>
          <div className="contact-grid">
            <aside className="contact-info-card" aria-label="Contact Details">
              {hasEmail && (
                <div className="contact-item">
                  <div className="contact-item__icon" aria-hidden="true">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="contact-item__label">Email</div>
                    <a
                      href={`mailto:${social.email}`}
                      className="contact-item__value contact-item__link"
                    >
                      {social.email}
                    </a>
                  </div>
                </div>
              )}

              {hasGitHub && (
                <div className="contact-item">
                  <div className="contact-item__icon" aria-hidden="true">
                    <GitHubIcon size={18} />
                  </div>
                  <div>
                    <div className="contact-item__label">GitHub</div>
                    <a
                      href={social.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-item__value contact-item__link"
                    >
                      {social.githubUrl}
                    </a>
                  </div>
                </div>
              )}

              {hasLinkedIn && (
                <div className="contact-item">
                  <div className="contact-item__icon" aria-hidden="true">
                    <LinkedInIcon size={18} />
                  </div>
                  <div>
                    <div className="contact-item__label">LinkedIn</div>
                    <a
                      href={social.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-item__value contact-item__link"
                    >
                      {social.linkedinUrl}
                    </a>
                  </div>
                </div>
              )}

              <div className="contact-item">
                <div className="contact-item__icon" aria-hidden="true">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="contact-item__label">Location</div>
                  <span className="contact-item__value">{personal.location}</span>
                </div>
              </div>
            </aside>

            <div className="contact-form-card">
              <form onSubmit={handleSubmit} noValidate aria-label="Contact Form">
                {status.message && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`form-status ${
                      status.type === "success"
                        ? "form-status--success"
                        : "form-status--error"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 size={18} aria-hidden="true" />
                    ) : (
                      <AlertCircle size={18} aria-hidden="true" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="contact-name" className="form-label">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "error-name" : undefined}
                      className={`form-input ${
                        errors.name ? "form-input--error" : ""
                      }`}
                    />
                    {errors.name && (
                      <span id="error-name" className="form-error">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-email" className="form-label">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "error-email" : undefined}
                      className={`form-input ${
                        errors.email ? "form-input--error" : ""
                      }`}
                    />
                    {errors.email && (
                      <span id="error-email" className="form-error">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={values.subject}
                    onChange={handleChange}
                    placeholder="Software Developer Internship Opportunity"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "error-subject" : undefined}
                    className={`form-input ${
                      errors.subject ? "form-input--error" : ""
                    }`}
                  />
                  {errors.subject && (
                    <span id="error-subject" className="form-error">
                      {errors.subject}
                    </span>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Share details about the internship role, team, or project inquiry..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "error-message" : undefined}
                    className={`form-textarea ${
                      errors.message ? "form-textarea--error" : ""
                    }`}
                  />
                  {errors.message && (
                    <span id="error-message" className="form-error">
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn--primary"
                  >
                    <Send size={16} aria-hidden="true" />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
