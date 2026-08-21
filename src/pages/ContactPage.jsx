import React from "react";
import "./ContactPage.css";
import Navbar from "../components/Navbar";

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
            <p className="contact-page__label">Reach</p>

            <div className="contact-page__stack">
              <a href="mailto:yorku@chapter.ewb.ca">
                yorku@chapter.ewb.ca
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
          <div className="contact-page__address">
            <p className="contact-page__address-line">
              Bergeron Centre for Engineering Excellence
            </p>

            <p className="contact-page__address-line">
              4700 Keele St, Toronto, ON.
            </p>
          </div>

        </div>
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