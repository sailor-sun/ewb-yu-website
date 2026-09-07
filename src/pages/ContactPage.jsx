import React, { useState } from "react";
import { useSearchParams } from "react-router";
import "./ContactPage.css";
import Navbar from "../components/Navbar";

const CHAPTER_EMAIL = "yorku@chapter.ewb.ca";

function ContactForm() {
  const [searchParams] = useSearchParams();
  const alreadySent = searchParams.get("sent") === "1";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const next = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please enter a valid email.";
    }
    if (!message.trim()) next.message = "Please write a message.";
    return next;
  }

  function handleSubmit(e) {
    if (honey) {
      e.preventDefault();
      return;
    }

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      e.preventDefault();
      return;
    }

    setSubmitting(true);
  }

  if (alreadySent) {
    return (
      <div className="contact-form__success" role="status">
        <p className="contact-page__label">Sent</p>
        <h2 id="contact-form-heading" className="contact-form__title">
          Thanks — we got it.
        </h2>
        <p className="contact-form__note">
          We&apos;ll write back to the email you left. If it&apos;s urgent, reach us at{" "}
          <a href={`mailto:${CHAPTER_EMAIL}`}>{CHAPTER_EMAIL}</a>.
        </p>
      </div>
    );
  }

  return (
    <>
      <p className="contact-page__label">Write to us</p>
      <h2 id="contact-form-heading" className="contact-form__title">
        Send a message
      </h2>
      <p className="contact-form__note">
        Fill this in and it lands in our inbox. We usually reply within a few days.
      </p>
    <form
      className="contact-form__form"
      action={`https://formsubmit.co/${CHAPTER_EMAIL}`}
      method="POST"
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        type="hidden"
        name="_next"
        value={`${typeof window !== "undefined" ? window.location.origin : ""}/contact?sent=1`}
      />
      <input
        type="hidden"
        name="_subject"
        value={subject.trim() ? `EWB YorkU: ${subject.trim()}` : "New message from EWB YorkU website"}
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_replyto" value={email} />

      <label className="contact-form__honey" htmlFor="contact-website">
        Website
        <input
          id="contact-website"
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
        />
      </label>

      <div className="contact-form__grid">
        <div className="contact-form__field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className="contact-form__error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email && (
            <p id="contact-email-error" className="contact-form__error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What's this about?"
          />
        </div>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
          />
          {errors.message && (
            <p id="contact-message-error" className="contact-form__error">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="contact-form__submit"
        disabled={submitting}
      >
        {submitting ? "Sending" : "Send message"}
        <span aria-hidden="true"> →</span>
      </button>
    </form>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="contact-page">
        <div className="contact-page__inner">

          {/* Brand */}
          <div className="contact-page__brand-block">
            <h1
              className="contact-page__title"
              aria-label="EWB York University"
            >
              <span className="contact-page__word">EWB</span>
              <span
                className="contact-page__cross"
                aria-hidden="true"
              >
                ×
              </span>
            </h1>

            <div className="contact-page__u-wrap">
              <span className="contact-page__u">York U.</span>
            </div>
          </div>


          {/* Reach — Center */}
          <div className="contact-page__reach">
            <p className="contact-page__label">Reach Out</p>

            <div className="contact-page__stack">
              <a href={`mailto:${CHAPTER_EMAIL}`}>
                {CHAPTER_EMAIL}
              </a>

              <a
                href="https://www.instagram.com/ewbyorku/"
                target="_blank"
                rel="noreferrer"
              >
                @EWBYORKU
              </a>

              <a
                href="https://www.facebook.com/ewbyork/"
                target="_blank"
                rel="noreferrer"
              >
                FACEBOOK / EWBYORK
              </a>
            </div>
          </div>


          {/* Address — Bottom Left */}
          {/* <div className="contact-page__address">
            <p className="contact-page__address-line">
              Bergeron Centre for Engineering Excellence
            </p>

            <p className="contact-page__address-line">
              4700 Keele St, Toronto, ON.
            </p>
          </div> */}

        </div>

        <section className="contact-form" aria-labelledby="contact-form-heading">
          <div className="contact-form__inner">
            <ContactForm />
          </div>
        </section>
      </main>


      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 text-center relative z-10">
        <p className="text-gray-400 text-xs tracking-widest uppercase font-semibold">
          © 2026 EWB York University Chapter
        </p>
      </footer>
    </>
  );
}

export default ContactPage;