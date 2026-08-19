import React from "react";
import Navbar from "../components/Navbar";

import xchangeImg from "./assets/xchange.avif";
import legoImg from "./assets/lego.jpg";
import fundraiserImg from "./assets/fundraiser.jpg";

function Events() {
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

      {/* --- HUGE, BOLD RED SECTION IDENTITY HEADER --- */}
      <div className="mt-8 bg-york-red text-white py-12 relative z-10 border-y-4 border-black select-none">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-baseline justify-between gap-4">

          <div className="flex items-baseline gap-2">

            <span className="text-2xl font-serif italic text-red-200">
              The
            </span>

            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none">
              EVENTS
            </h2>

            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-outline-white uppercase leading-none hidden sm:inline">
              PAGE
            </h2>

          </div>

          <div className="text-xs font-bold uppercase tracking-widest text-red-100 max-w-xs md:text-right leading-relaxed">
            ✦ CHANNELS FOR STUDENT INCUBATION, CAMPUS ADVOCACY, AND GLOBAL
            DEVELOPMENT FUNDRAISING.
          </div>

        </div>
      </div>

      {/* --- THREE BOXES / 3D FLIP EVENTS LIST GRID --- */}
      <section
        id="events"
        className="py-20 bg-gray-50 px-6 relative z-10"
      >

        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-end mb-12">

            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Our Events & Initiatives
              </h3>

              {/* <p className="text-gray-500 mt-2">
                Hover over a card to view detailed event information
              </p> */}
            </div>

            {/* <button className="text-york-red font-bold border-b-2 border-york-red pb-1 transition-all hover:pr-2">
              View All Events
            </button> */}

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Event Card 1 */}
            <div className="w-full h-[400px] perspective-1000 group">

              {/* <div className="w-full h-full relative transform-style-3d duration-700 group-hover:rotate-y-180 shadow-sm hover:shadow-xl rounded-xl"> */}
              <div className="w-full h-full relative transform-style-3d duration-700 shadow-sm hover:shadow-xl rounded-xl">
                {/* FRONT */}
                <div className="absolute w-full h-full bg-white border border-gray-100 rounded-xl overflow-hidden backface-hidden flex flex-col">

                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={xchangeImg}
                      alt="xChange Conference"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">

                    <div>
                      <span className="text-york-red font-bold text-xs uppercase tracking-wider">
                        CONFERENCE
                      </span>

                      <h3 className="text-xl font-bold mt-2 text-gray-900">
                        xChange Conference
                      </h3>

                      <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                        xChange is EWB Canada’s annual national conference, bringing together changemakers from across Canada to connect, learn, and take collective action on complex social challenges.
                      </p>
                    </div>

                    {/* <span className="text-york-red font-bold text-xs tracking-wider mt-4 block">
                      HOVER TO FLIP →
                    </span> */}

                  </div>
                </div>

                {/* BACK
                <div className="absolute w-full h-full bg-york-red text-white rounded-xl overflow-hidden backface-hidden rotate-y-180 p-8 flex flex-col justify-between border border-black/10">

                  <div>

                    <span className="text-white font-bold text-xs tracking-widest uppercase opacity-90">
                      Event Details
                    </span>

                    <h3 className="text-2xl font-black mt-2 tracking-tight text-white">
                      JOIN THE HACK
                    </h3>

                    <div className="w-12 h-0.5 bg-white my-4"></div>

                    <ul className="space-y-3 text-sm font-medium text-white">
                      <li>
                        🗓 <strong>Date:</strong> October 14, 2026
                      </li>

                      <li>
                        📍 <strong>Location:</strong> Bergeron Centre (BEST Lab)
                      </li>

                      <li>
                        👥 <strong>Eligibility:</strong> Open to all YorkU
                        Students
                      </li>
                    </ul>

                  </div>

                  <button className="w-full bg-white text-york-red font-bold py-3 text-xs uppercase tracking-widest rounded shadow hover:bg-red-50 transition-colors">
                    Register Now
                  </button>

                </div> */}

              </div>
            </div>

            {/* Event Card 2 */}
            <div className="w-full h-[400px] perspective-1000 group">

              {/* <div className="w-full h-full relative transform-style-3d duration-700 group-hover:rotate-y-180 shadow-sm hover:shadow-xl rounded-xl"> */}
              <div className="w-full h-full relative transform-style-3d duration-700 shadow-sm hover:shadow-xl rounded-xl">
                {/* FRONT */}
                <div className="absolute w-full h-full bg-white border border-gray-100 rounded-xl overflow-hidden backface-hidden flex flex-col">

                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={fundraiserImg}
                      alt="Fundraiser"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">

                    <div>
                      <span className="text-york-red font-bold text-xs uppercase tracking-wider">
                        FUNDRAISER
                      </span>

                      <h3 className="text-xl font-bold mt-2 text-gray-900">
                        Charity Fundraiser
                      </h3>

                      <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                        We host fundraisers that support meaningful causes, like our fundraiser for Kids in Tech, which helps empower youth to become future technology leaders.
                      </p>
                    </div>

                    {/* <span className="text-york-red font-bold text-xs tracking-wider mt-4 block">
                      HOVER TO FLIP →
                    </span> */}

                  </div>
                </div>

                {/* BACK
                <div className="absolute w-full h-full bg-york-red text-white rounded-xl overflow-hidden backface-hidden rotate-y-180 p-8 flex flex-col justify-between border border-black/10">

                  <div>

                    <span className="text-white font-bold text-xs tracking-widest uppercase opacity-90">
                      Event Details
                    </span>

                    <h3 className="text-2xl font-black mt-2 tracking-tight text-white">
                      DESIGN CHALLENGE
                    </h3>

                    <div className="w-12 h-0.5 bg-white my-4"></div>

                    <ul className="space-y-3 text-sm font-medium text-white">

                      <li>
                        🗓 <strong>Timeline:</strong> 4-Week Incubation
                      </li>

                      <li>
                        📍 <strong>Kickoff:</strong> Lassonde Building Lecture
                        Hall
                      </li>

                      <li>
                        🏆 <strong>Prizes:</strong> Project funding allocated
                      </li>

                    </ul>

                  </div>

                  <button className="w-full bg-white text-york-red font-bold py-3 text-xs uppercase tracking-widest rounded shadow hover:bg-red-50 transition-colors">
                    Join A Team
                  </button>

                </div> */}

              </div>
            </div>

            {/* Event Card 3 */}
            <div className="w-full h-[400px] perspective-1000 group">

              {/* <div className="w-full h-full relative transform-style-3d duration-700 group-hover:rotate-y-180 shadow-sm hover:shadow-xl rounded-xl"> */}
              <div className="w-full h-full relative transform-style-3d duration-700 shadow-sm hover:shadow-xl rounded-xl">
                {/* FRONT */}
                <div className="absolute w-full h-full bg-white border border-gray-100 rounded-xl overflow-hidden backface-hidden flex flex-col">

                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={legoImg}
                      alt="Lego Design Challenge"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">

                    <div>

                      <span className="text-york-red font-bold text-xs uppercase tracking-wider">
                        SOCIAL EVENT
                      </span>

                      <h3 className="text-xl font-bold mt-2 text-gray-900">
                        Lego Design Challenge
                      </h3>

                      <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                        Our LEGO de-stressor is one of our most popular events, giving students a fun way to relax, get creative, build their own LEGO designs, and compete for prizes in a friendly challenge.
                      </p>

                    </div>

                    {/* <span className="text-york-red font-bold text-xs tracking-wider mt-4 block">
                      HOVER TO FLIP →
                    </span> */}

                  </div>

                </div>

                {/* BACK
                <div className="absolute w-full h-full bg-york-red text-white rounded-xl overflow-hidden backface-hidden rotate-y-180 p-8 flex flex-col justify-between border border-black/10">

                  <div>

                    <span className="text-white font-bold text-xs tracking-widest uppercase opacity-90">
                      Event Details
                    </span>

                    <h3 className="text-2xl font-black mt-2 tracking-tight text-white">
                      HCD WORKSHOP
                    </h3>

                    <div className="w-12 h-0.5 bg-white my-4"></div>

                    <ul className="space-y-3 text-sm font-medium text-white">

                      <li>
                        🗓 <strong>Date:</strong> Alternating Wednesdays
                      </li>

                      <li>
                        📍 <strong>Room:</strong> Steacie Science Library
                      </li>

                      <li>
                        💡 <strong>Focus:</strong> Social Impact Frameworks
                      </li>

                    </ul>

                  </div>

                  <button className="w-full bg-white text-york-red font-bold py-3 text-xs uppercase tracking-widest rounded shadow hover:bg-red-50 transition-colors">
                    Save a Seat
                  </button>

                </div> */}

              </div>
            </div>

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

export default Events;
