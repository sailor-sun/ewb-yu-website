import React, { useState } from "react";
import Navbar from "../components/Navbar";

const roles = [
  {
    tag: "LEADERSHIP",
    title: "VP Projects",
    blurb:
      "Lead project incubation from ideation to pilot, working directly with community partners.",
  },
  {
    tag: "CREATIVE",
    title: "VP Marketing & Design",
    blurb:
      "Own the chapter's visual identity, social content, and event promo across every platform.",
  },
  {
    tag: "OPERATIONS",
    title: "Events Coordinator",
    blurb:
      "Plan and run workshops, hackathons, and socials at Bergeron every term.",
  },
];

function Join() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans antialiased relative overflow-x-hidden selection:bg-york-red selection:text-white">

      {/* Injecting custom keyframes and 3D card flipping styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }

        .text-outline {
          -webkit-text-stroke: 1.5px #111111;
          color: transparent;
        }

        .text-outline-white {
          -webkit-text-stroke: 2px #bc1d24;
          color: transparent;
        }

        /* --- 3D FLIP CARD STYLES --- */
        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      <Navbar />

      {/* --- HERO --- */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">

        <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
          <div className="w-10 h-[1.5px] bg-gray-900"></div>
          <span>Get Involved / York U</span>
        </div>

        <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-tighter text-york-red uppercase leading-[0.85]">
          Join
        </h1>

        <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-tighter text-outline uppercase leading-[0.95] my-1">
          The
        </h1>

        <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-tighter text-gray-900 uppercase leading-[0.85]">
          Chapter.
        </h1>

        <p className="text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed font-serif pl-2 border-l-4 border-york-red mt-8 max-w-2xl">
          Three ways in — follow along, stay in the loop, or step into a role.
        </p>
      </main>

      {/* --- STEP 01 & 02: GENERAL MEMBERSHIP + MAILING LIST --- */}
      <section className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* General Membership */}
          <div className="border-[2px] border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]">
            <span className="text-york-red font-bold text-xs uppercase tracking-wider">
              Step 01 — General Membership
            </span>

            <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase mt-3 tracking-tight">
              Follow along.
            </h3>

            <p className="text-gray-600 mt-4 leading-relaxed">
              No forms, no fees. Follow us on Instagram to stay in the loop on
              meetings, workshops, and events — that's it, you're a member.
            </p>

            <a
              href="https://www.instagram.com/ewb.york/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-york-red transition-colors group"
            >
              @ewb.york
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-6">
              Meetings · Thursdays · 6 PM · Bergeron 102
            </p>
          </div>

          {/* Mailing List */}
          <div className="border-[2px] border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]">
            <span className="text-york-red font-bold text-xs uppercase tracking-wider">
              Step 02 — Mailing List
            </span>

            <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase mt-3 tracking-tight">
              Stay updated.
            </h3>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Subscribe for event reminders, project updates, and application
              windows straight to your inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="you@my.yorku.ca"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-[2px] border-black px-4 py-3 text-sm focus:outline-none focus:border-york-red"
              />

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-york-red transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            {submitted && (
              <p className="text-york-red text-xs font-bold uppercase tracking-widest mt-4">
                Thanks — you're on the list.
              </p>
            )}
          </div>

        </div>
      </section>

      {/* --- STEP 03: OPEN ROLES IDENTITY HEADER --- */}
      <div className="bg-york-red text-white py-12 relative z-10 border-y-4 border-black select-none">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-baseline justify-between gap-4">

          <div className="flex items-baseline gap-2">

            <span className="text-2xl font-serif italic text-red-200">
              Step 03
            </span>

            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none">
              OPEN
            </h2>

            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-outline-white uppercase leading-none hidden sm:inline">
              ROLES
            </h2>

          </div>

          <div className="text-xs font-bold uppercase tracking-widest text-red-100 max-w-xs md:text-right leading-relaxed">
            ✦ LEADERSHIP AND OPERATIONS POSITIONS OPEN TO ALL YORKU STUDENTS.
          </div>

        </div>
      </div>

      {/* --- OPEN ROLES GRID --- */}
      <section className="py-20 bg-gray-50 px-6 relative z-10">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow"
              >
                <div>
                  <span className="text-york-red font-bold text-xs uppercase tracking-wider">
                    {role.tag}
                  </span>

                  <h3 className="text-xl font-bold mt-2 text-gray-900">
                    {role.title}
                  </h3>

                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {role.blurb}
                  </p>
                </div>

                <a
                  href={`mailto:york@ewb.ca?subject=${encodeURIComponent(
                    `Application — ${role.title}`
                  )}`}
                  className="mt-6 inline-flex items-center justify-between bg-black text-white px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-york-red transition-colors group"
                >
                  Apply
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-gray-100 py-12 text-center relative z-10">
        <p className="text-gray-400 text-xs tracking-widest uppercase font-semibold">
          © 2026 EWB York University Chapter
        </p>
      </footer>

    </div>
  );
}

export default Join;
