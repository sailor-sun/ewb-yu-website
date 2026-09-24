import React from "react";
import { Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stats = [
  { value: "17+", label: "Events" },
  { value: "3+", label: "Workshops" },
  { value: "1", label: "Project" },
];

const executiveRoles = [
  "Vice President",
  "VP Advocacy",
  "VP Events",
  "VP Marketing",
  "Finance Associates",
  "Events Associates",
  "Advocacy Associate",
];

const generalMembers = [
  "Chapter Members",
  "Specific Project Members",
  "Volunteers",
  "Event Participants",
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans antialiased relative overflow-x-hidden selection:bg-york-red selection:text-white">

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

        /* Organization chart connector */

        .branch {
          position: relative;
          height: 70px;
          width: 100%;
        }

        .branch-line {
          position: absolute;
          top: 0;
          left: 50%;
          width: 3px;
          height: 28px;
          background: #000000;
          transform: translateX(-50%);
        }

        .branch-horizontal {
          position: absolute;
          top: 28px;
          left: 16.5%;
          right: 16.5%;
          height: 3px;
          background: #000000;
        }

        .branch-drops {
          position: absolute;
          top: 28px;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .branch-drops span {
          position: relative;
          height: 35px;
        }

        .branch-drops span::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 3px;
          height: 16px;
          background: #000000;
          transform: translateX(-50%);
        }

        .branch-drops span::after {
          content: "↓";
          position: absolute;
          left: 50%;
          bottom: -6px;
          transform: translateX(-50%);
          font-family: Arial, Helvetica, sans-serif;
          color: #000000;
          font-size: 1.4rem;
          line-height: 1;
        }

        .branch-two .branch-horizontal {
          left: 25%;
          right: 25%;
        }

        .branch-two .branch-drops {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 900px) {
          .branch {
            display: none;
          }
        }
      `}</style>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">

        {/* ABOUT INTRO */}

        <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
          <div className="w-10 h-[1.5px] bg-gray-900"></div>

          <span className="inline-flex items-center gap-2">
            <Sparkles size={14} aria-hidden="true" />
            Engineers Without Borders · York University
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tighter text-gray-900 uppercase leading-[0.95] max-w-4xl">
          Build <span className="text-york-red">change</span>, one event at a
          time.
        </h1>

        <div className="mt-8 max-w-2xl space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-gray-900">EWB YorkU</strong> was
            initiated in{" "}
            <a
              href="https://www.yorku.ca/yfile/2003/03/28/engineers-remove-borders/"
              target="_blank"
              rel="noreferrer"
              className="font-bold underline decoration-york-red underline-offset-4 hover:text-york-red transition-colors"
            >
              2003
            </a>{" "}
            as a student chapter of Engineers Without Borders Canada. Since
            then, our chapter has worked to empower students to become{" "}
            <strong className="text-gray-900">changemakers</strong> through
            sustainability workshops, advocacy campaigns, and
            community-driven projects. We also support Indigenous
            communities, promote fair trade, and advocate for a more{" "}
            <strong className="text-gray-900">
              globally conscious engineering curriculum
            </strong>
            .
          </p>

          <p className="text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed font-serif pl-4 border-l-4 border-york-red">
            From campus campaigns and fundraisers to national conferences —
            here's what we're up to in 2025 at Lassonde.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-12 max-w-xl border-[2px] border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-black text-york-red tracking-tighter">
                {stat.value}
              </span>

              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ORGANIZATION CHART */}

        <section className="mt-16 md:mt-20 relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#eeeae2] border-t-4 border-black py-16 md:py-20 -mb-16 md:-mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
              How We're Organized
            </p>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 uppercase leading-[0.95]">
              How our chapter works
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Our chapter is made up of an executive team, general members,
              and student-led programs working together across EWB YorkU.
            </p>
          </div>

          <div className="text-center">

            {/* CO-PRESIDENTS */}

            <div className="inline-block min-w-[220px] bg-york-red text-white font-black px-8 py-5 border-[3px] border-black uppercase tracking-wide shadow-[9px_9px_0px_0px_rgba(0,0,0,1)]">
              CO-PRESIDENTS
            </div>

            {/* THREE-WAY BRANCH */}

            <div className="branch">
              <div className="branch-line"></div>
              <div className="branch-horizontal"></div>

              <div className="branch-drops">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* THREE MAIN GROUPS */}

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_2fr] gap-6 items-start">

              {/* EXECUTIVE TEAM */}

              <div className="border-[3px] border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black text-white px-5 py-5 font-bold uppercase tracking-wide">
                  Executive Team
                </div>

                <div className="px-4 pt-3">
                  <div className="text-2xl text-black text-center mb-1">↓</div>

                  <div className="pb-4">
                    {executiveRoles.map((role, index) => (
                      <div
                        key={role}
                        className={`border-b-2 border-black last:border-b-0 px-1 py-[0.85rem] font-semibold ${
                          index >= 4 ? "bg-gray-100" : "bg-white"
                        }`}
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* GENERAL MEMBERS */}

              <div className="border-[3px] border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black text-white px-5 py-5 font-bold uppercase tracking-wide">
                  General Members
                </div>

                <div className="px-4 pt-3">
                  <div className="text-2xl text-black text-center mb-1">↓</div>

                  <div className="pb-4">
                    {generalMembers.map((member, index) => (
                      <div
                        key={member}
                        className={`border-b-2 border-black last:border-b-0 px-1 py-[0.85rem] font-semibold ${
                          index > 0 ? "bg-gray-100" : "bg-white"
                        }`}
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* PROGRAMS */}

              <div className="border-[3px] border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black text-white px-5 py-5 font-bold uppercase tracking-wide">
                  Programs
                </div>

                <div className="px-5 pt-2 pb-5">

                  {/* TWO-WAY BRANCH */}

                  <div className="branch branch-two">
                    <div className="branch-line"></div>
                    <div className="branch-horizontal"></div>

                    <div className="branch-drops">
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* TECHNICAL PROJECTS */}

                    <div>
                      <div className="border-[2px] border-black px-4 py-[0.65rem] text-center font-semibold bg-white">
                        Technical Projects
                      </div>

                      <div className="text-2xl text-black text-center my-2">↓</div>

                      <div className="border-[2px] border-black px-4 py-[0.65rem] text-center font-semibold bg-gray-100">
                        Project Leads
                      </div>

                      <div className="text-2xl text-black text-center my-2">↓</div>

                      <div className="border-[2px] border-black px-4 py-[0.65rem] text-center font-semibold bg-black text-white">
                        Qualified Project Contributors
                      </div>
                    </div>

                    {/* COMMUNITY PROJECTS */}

                    <div>
                      <div className="border-[2px] border-black px-4 py-[0.65rem] text-center font-semibold bg-white">
                        Community Projects
                      </div>

                      <div className="text-2xl text-black text-center my-2">↓</div>

                      <div className="border-[2px] border-black px-4 py-[0.65rem] text-center font-semibold bg-gray-100">
                        Project Leads
                      </div>

                      <div className="text-2xl text-black text-center my-2">↓</div>

                      <div className="border-[2px] border-black px-4 py-[0.65rem] text-center font-semibold bg-black text-white">
                        Qualified Project Contributors
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}