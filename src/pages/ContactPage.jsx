import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <main className="contact-page">
      <div className="contact-page__inner">
        <div className="contact-page__brand-block">
          <h1 className="contact-page__title" aria-label="EWB York University">
            <span className="contact-page__word">EWB</span>
            <span className="contact-page__cross" aria-hidden="true">×</span>
            <span className="contact-page__word">YORK</span>
          </h1>

          <div className="contact-page__u-wrap">
            <span className="contact-page__u">U.</span>
          </div>
        </div>

        <div className="contact-page__meta">
          <div className="contact-page__column">
            <p className="contact-page__label">Reach</p>
            <div className="contact-page__stack">
              <a href="mailto:york@ewb.ca">YORK@EWB.CA</a>
              <a href="https://www.instagram.com/ewb.yorku/" target="_blank" rel="noreferrer">@EWB.YORK</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LINKEDIN / EWB-
                <br />
                YORK
              </a>
            </div>
          </div>

          <div className="contact-page__column">
            <p className="contact-page__label">Meet</p>
            <div className="contact-page__stack">
              <span>THURSDAYS · 6 PM</span>
              <span>BERGERON 102</span>
              <span>ALL FACULTIES<br />WELCOME</span>
            </div>
          </div>
        </div>

        <div className="contact-page__address">
          <p className="contact-page__address-line contact-page__address-line--script">
            Bergeron Centre for Engineering
          </p>
          <p className="contact-page__address-line contact-page__address-line--script">
            Excellence,
          </p>
          <p className="contact-page__address-line">4700 Keele St, Toronto, ON.</p>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
