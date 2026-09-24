import React from "react";

function Footer() {
  return (
    <footer className="relative bg-[#fafafa] border-t-4 border-black overflow-hidden">

      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand */}
          <div className="lg:col-span-7">
            <h2 className="text-6xl sm:text-7xl font-black tracking-tighter text-gray-900 uppercase leading-[0.9]">
              EWB <span className="text-york-red">×</span> York
              U.
            </h2>

            <p className="text-lg md:text-xl font-serif italic text-gray-700 leading-relaxed mt-8 max-w-md">
              Bergeron Centre for Engineering Excellence,
              <br />
              4700 Keele St, Toronto, ON.
            </p>
          </div>

          {/* Reach & Meet */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Reach
              </p>

              <ul className="space-y-3 text-sm font-bold uppercase tracking-wide text-gray-900">
                <li>
                  <a
                    href="mailto:yorku@chapter.ewb.ca"
                    className="hover:text-york-red transition-colors"
                  >
                    yorku@chapter.ewb.ca
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/ewbyorku/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-york-red transition-colors"
                  >
                    @ewbyorku
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/ewbyork/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-york-red transition-colors"
                  >
                    Facebook / EWB York
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/ewb-york-university-chapter-43655a34b/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-york-red transition-colors"
                  >
                    Linkedin / EWB YorkU
                  </a>
                </li>
              </ul>
            </div>
{/* 
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Meet
              </p>

              <ul className="space-y-3 text-sm font-bold uppercase tracking-wide text-gray-900">
                <li>Thursdays · 6 PM</li>
                <li>Bergeron 102</li>
                <li>All Faculties Welcome</li>
              </ul>
            </div> */}

          </div>

        </div>

        <div className="border-t border-black/20 mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            © 2026 EWB York Chapter
          </p>

          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Affiliated · Engineers Without Borders Canada &nbsp;·&nbsp; Toronto ·
            Treaty 13 Territory
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
