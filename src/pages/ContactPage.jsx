import { useState } from "react";
import "./ContactPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CHAPTER_EMAIL = "yorku@chapter.ewb.ca";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState("");

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

  async function handleSubmit(e) {
    e.preventDefault();
    setSendError("");

    if (honey) return;

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const trimmedSubject = subject.trim();
    setSubmitting(true);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CHAPTER_EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            subject: trimmedSubject,
            message: message.trim(),
            _subject: trimmedSubject
              ? `EWB YorkU: ${trimmedSubject}`
              : "New message from EWB YorkU website",
            _template: "table",
            _captcha: "false",
            _replyto: email.trim(),
            submitted: new Date().toISOString(),
          }),
        }
      );

      const data = await response.json().catch(() => null);
      const delivered = data && String(data.success) === "true";

      if (!delivered) {
        const detail = typeof data?.message === "string" ? data.message : "";
        setSendError(
          /activat/i.test(detail)
            ? `Open the confirmation email at ${CHAPTER_EMAIL}, click the link, then send this again.`
            : "We couldn't send that. Try again, or email us directly."
        );
        return;
      }

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrors({});
      setSent(true);
    } catch {
      setSendError("We couldn't send that. Try again, or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
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
        <button
          type="button"
          className="contact-form__submit"
          onClick={() => setSent(false)}
        >
          Send another message
          <span aria-hidden="true"> →</span>
        </button>
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
      onSubmit={handleSubmit}
      noValidate
    >
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

      {sendError && (
        <p className="contact-form__error" role="alert">
          {sendError}
        </p>
      )}

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

          {/* Address — Bottom Left */}
          {/* <div className="contact-page__address">
            <p className="contact-page__address-line">
              Bergeron Centre for Engineering Excellence
            </p>

            <p className="contact-page__address-line">
              4700 Keele St, Toronto, ON.
            </p>
          </div> */}

<main className="contact-page pt-16 md:pt-24">
  <section
    className="contact-form"
    aria-labelledby="contact-form-heading"
  >
    <div className="contact-form__inner">
      <ContactForm />
    </div>
  </section>
</main>


<Footer />
    </>
  );
}

export default ContactPage;