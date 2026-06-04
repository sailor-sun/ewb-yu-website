import React from 'react';

function App() {
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

      {/* --- WATERMARK SPINNING BACKGROUND LOGO --- */}
      <div className="absolute top-36 -left-16 w-[450px] h-[450px] opacity-10 pointer-events-none z-0 overflow-hidden">
        <img 
          src="/logo-EWB.png" 
          alt="" 
          className="w-full h-full object-contain animate-spin-slow" 
        />
      </div>

      {/* --- TOP HEADER (WHITE) --- */}
      <header className="bg-white border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          {/* Logo & Chapter Brand */}
          <div className="flex items-center gap-4">
            <img src="/logo-EWB.png" alt="EWB Logo" className="h-14 w-14 object-contain" />
            <div className="h-10 w-[1px] bg-gray-300 hidden sm:block"></div>
            <div>
              <h1 className="font-bold text-lg tracking-wider text-gray-900 leading-none">EWB</h1>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mt-1">York Chapter</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-gray-900">
            <a href="#about" className="hover:text-york-red transition-colors py-2">Mission</a>
            <a href="#projects" className="hover:text-york-red transition-colors py-2">Projects</a>
            <a href="#events" className="text-york-red border-b-2 border-york-red py-2">Events</a>
            <a href="#join" className="hover:text-york-red transition-colors py-2">Join</a>
            <a href="#contact" className="hover:text-york-red transition-colors py-2">Contact</a>
          </div>

          {/* Minimalist Action Button */}
          <button className="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-york-red transition-colors flex items-center gap-2 group">
            Apply <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </header>

      {/* --- MOVING TEXT NAV BAR (RED MARQUEE) --- */}
      <div className="bg-york-red text-white uppercase tracking-widest font-bold text-xs py-3.5 border-y border-black/10 shadow-sm overflow-hidden relative z-10 select-none">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
          <span>★ Engineering Equity</span> <span>★ York University</span> <span>★ Global Partnerships</span> <span>★ Est. 2003</span> <span>★ Toronto · Canada</span>
          <span>★ Engineering Equity</span> <span>★ York University</span> <span>★ Global Partnerships</span> <span>★ Est. 2003</span> <span>★ Toronto · Canada</span>
          <span>★ Engineering Equity</span> <span>★ York University</span> <span>★ Global Partnerships</span> <span>★ Est. 2003</span> <span>★ Toronto · Canada</span>
          <span>★ Engineering Equity</span> <span>★ York University</span> <span>★ Global Partnerships</span> <span>★ Est. 2003</span> <span>★ Toronto · Canada</span>
        </div>
      </div>

      {/* --- HERO / HERO GRAPHIC TYPOGRAPHY --- */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bold Typography */}
          <div className="lg:col-span-7 pt-4">
            <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
              <div className="w-10 h-[1.5px] bg-gray-900"></div>
              <span>Chapter № 017 / York U</span>
            </div>
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-tighter text-york-red uppercase leading-[0.85]">
              Engineers
            </h1>
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-tighter text-outline uppercase leading-[0.95] my-1">
              Without
            </h1>
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-tighter text-gray-900 uppercase leading-[0.85]">
              Borders.
            </h1>
          </div>

          {/* Right Column: Editorial Image Box and Statement */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative border-[2px] border-black p-0 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] overflow-hidden group">
              <span className="absolute top-3 left-3 bg-york-red text-white text-[10px] font-bold tracking-widest px-3 py-1 uppercase z-10">
                Field 2026
              </span>
              <div className="overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600" 
                  alt="York U Students Working" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <p className="text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed font-serif pl-2 border-l-4 border-york-red">
              We are student engineers building <span className="text-york-red font-bold not-italic font-sans text-lg tracking-wide uppercase">Equitable</span> systems with the communities we serve — <span className="font-semibold text-gray-900">not for them.</span>
            </p>
          </div>

        </div>
      </main>

      {/* --- HUGE, BOLD RED SECTION IDENTITY HEADER --- */}
      <div className="bg-york-red text-white py-12 relative z-10 border-y-4 border-black select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-serif italic text-red-200">The</span>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none">
              EVENTS
            </h2>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-outline-white uppercase leading-none hidden sm:inline">
              PAGE
            </h2>
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-red-100 max-w-xs md:text-right leading-relaxed">
            ✦ CHANNELS FOR STUDENT INCUBATION, CAMPUS ADVOCACY, AND GLOBAL DEVELOPMENT FUNDRAISING.
          </div>
        </div>
      </div>

      {/* --- THREE BOXES / 3D FLIP EVENTS LIST GRID --- */}
      <section id="events" className="py-20 bg-gray-50 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">Active & Upcoming Tracks</h3>
              <p className="text-gray-500 mt-2">Hover over a card to view detailed event information live at Lassonde</p>
            </div>
            <button className="text-york-red font-bold border-b-2 border-york-red pb-1 transition-all hover:pr-2">View All Events</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Event Card 1 - Lassonde Sustainability Hack */}
            <div className="w-full h-[400px] perspective-1000 group">
              <div className="w-full h-full relative transform-style-3d duration-700 group-hover:rotate-y-180 shadow-sm hover:shadow-xl rounded-xl">
                
                {/* FRONT SIDE */}
                <div className="absolute w-full h-full bg-white border border-gray-100 rounded-xl overflow-hidden backface-hidden flex flex-col">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400" alt="Lassonde Sustainability Hack" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-york-red font-bold text-xs uppercase tracking-wider">HACKATHON</span>
                      <h3 className="text-xl font-bold mt-2 text-gray-900">Lassonde Sustainability Hack</h3>
                      <p className="text-gray-600 mt-3 text-sm leading-relaxed">Ideating and prototyping sustainable eco-friendly systems right here on the YorkU campus.</p>
                    </div>
                    <span className="text-york-red font-bold text-xs tracking-wider mt-4 block">HOVER TO FLIP →</span>
                  </div>
                </div>

                {/* BACK SIDE - ALL TEXT FORCED TO WHITE */}
                <div className="absolute w-full h-full bg-york-red text-white rounded-xl overflow-hidden backface-hidden rotate-y-180 p-8 flex flex-col justify-between border border-black/10">
                  <div>
                    <span className="text-white font-bold text-xs tracking-widest uppercase opacity-90">Event Details</span>
                    <h3 className="text-2xl font-black mt-2 tracking-tight text-white">JOIN THE HACK</h3>
                    <div className="w-12 h-0.5 bg-white my-4"></div>
                    <ul className="space-y-3 text-sm font-medium text-white">
                      <li>🗓 <strong>Date:</strong> October 14, 2026</li>
                      <li>📍 <strong>Location:</strong> Bergeron Centre (BEST Lab)</li>
                      <li>👥 <strong>Eligibility:</strong> Open to all YorkU Students</li>
                    </ul>
                  </div>
                  <button className="w-full bg-white text-york-red font-bold py-3 text-xs uppercase tracking-widest rounded shadow hover:bg-red-50 transition-colors">
                    Register Now
                  </button>
                </div>

              </div>
            </div>

            {/* Event Card 2 - YU Global Clean Water Initiative */}
            <div className="w-full h-[400px] perspective-1000 group">
              <div className="w-full h-full relative transform-style-3d duration-700 group-hover:rotate-y-180 shadow-sm hover:shadow-xl rounded-xl">
                
                {/* FRONT SIDE */}
                <div className="absolute w-full h-full bg-white border border-gray-100 rounded-xl overflow-hidden backface-hidden flex flex-col">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=400" alt="YU Global Clean Water Initiative" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-york-red font-bold text-xs uppercase tracking-wider">DESIGN CHALLENGE</span>
                      <h3 className="text-xl font-bold mt-2 text-gray-900">YU Global Clean Water Initiative</h3>
                      <p className="text-gray-600 mt-3 text-sm leading-relaxed">Connecting student teams with structural resource goals to engineer clean fluid networks.</p>
                    </div>
                    <span className="text-york-red font-bold text-xs tracking-wider mt-4 block">HOVER TO FLIP →</span>
                  </div>
                </div>

                {/* BACK SIDE - ALL TEXT FORCED TO WHITE */}
                <div className="absolute w-full h-full bg-york-red text-white rounded-xl overflow-hidden backface-hidden rotate-y-180 p-8 flex flex-col justify-between border border-black/10">
                  <div>
                    <span className="text-white font-bold text-xs tracking-widest uppercase opacity-90">Event Details</span>
                    <h3 className="text-2xl font-black mt-2 tracking-tight text-white">DESIGN CHALLENGE</h3>
                    <div className="w-12 h-0.5 bg-white my-4"></div>
                    <ul className="space-y-3 text-sm font-medium text-white">
                      <li>🗓 <strong>Timeline:</strong> 4-Week Incubation</li>
                      <li>📍 <strong>Kickoff:</strong> Lassonde Building Lecture Hall</li>
                      <li>🏆 <strong>Prizes:</strong> Project funding allocated</li>
                    </ul>
                  </div>
                  <button className="w-full bg-white text-york-red font-bold py-3 text-xs uppercase tracking-widest rounded shadow hover:bg-red-50 transition-colors">
                    Join A Team
                  </button>
                </div>

              </div>
            </div>

            {/* Event Card 3 - Human-Centered Design Workshop */}
            <div className="w-full h-[400px] perspective-1000 group">
              <div className="w-full h-full relative transform-style-3d duration-700 group-hover:rotate-y-180 shadow-sm hover:shadow-xl rounded-xl">
                
                {/* FRONT SIDE */}
                <div className="absolute w-full h-full bg-white border border-gray-100 rounded-xl overflow-hidden backface-hidden flex flex-col">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400" alt="Human-Centered Design Workshop" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-york-red font-bold text-xs uppercase tracking-wider">WORKSHOP</span>
                      <h3 className="text-xl font-bold mt-2 text-gray-900">Human-Centered Design Workshop</h3>
                      <p className="text-gray-600 mt-3 text-sm leading-relaxed">Mastering systems-based engineering frameworks built directly around actual community needs.</p>
                    </div>
                    <span className="text-york-red font-bold text-xs tracking-wider mt-4 block">HOVER TO FLIP →</span>
                  </div>
                </div>

                {/* BACK SIDE - ALL TEXT FORCED TO WHITE */}
                <div className="absolute w-full h-full bg-york-red text-white rounded-xl overflow-hidden backface-hidden rotate-y-180 p-8 flex flex-col justify-between border border-black/10">
                  <div>
                    <span className="text-white font-bold text-xs tracking-widest uppercase opacity-90">Event Details</span>
                    <h3 className="text-2xl font-black mt-2 tracking-tight text-white">HCD WORKSHOP</h3>
                    <div className="w-12 h-0.5 bg-white my-4"></div>
                    <ul className="space-y-3 text-sm font-medium text-white">
                      <li>🗓 <strong>Date:</strong> Alternating Wednesdays</li>
                      <li>📍 <strong>Room:</strong> Steacie Science Library</li>
                      <li>💡 <strong>Focus:</strong> Social Impact Frameworks</li>
                    </ul>
                  </div>
                  <button className="w-full bg-white text-york-red font-bold py-3 text-xs uppercase tracking-widest rounded shadow hover:bg-red-50 transition-colors">
                    Save a Seat
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-gray-100 py-12 text-center relative z-10">
        <p className="text-gray-400 text-xs tracking-widest uppercase font-semibold">© 2026 EWB York University Chapter</p>
      </footer>

    </div>
  );
}

export default App;
