import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
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

      <Navbar />

      {/* --- HERO / HERO GRAPHIC TYPOGRAPHY --- */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Bold Typography */}
          <div className="lg:col-span-7 pt-4">

            <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
              <div className="w-10 h-[1.5px] bg-gray-900"></div>
              <span> York U</span>
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

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            <div className="relative border-[2px] border-black p-0 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] overflow-hidden group">


              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600"
                  alt="York U Students Working"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>

            {/* <span className="text-york-red font-bold not-italic font-sans text-lg tracking-wide uppercase">
                test
              </span>{" "} */}
            <p className="text-xl md:text-2xl font-medium text-gray-800 italic leading-relaxed font-serif pl-2 border-l-4 border-york-red">
              We are EWB YorkU, a student chapter of{" "}
              <a
                href="https://www.ewb.ca/en/"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline hover:text-york-red transition-colors"
              >
                Engineers Without Borders Canada
              </a>
              , empowering students to turn ideas into meaningful impact.
            </p>

          </div>

        </div>
      </main>

      {/* --- WHAT WE BUILD / PORTFOLIO --- */}
      <section className="bg-black text-white py-20 md:py-28 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <p className="text-york-red font-bold text-xs uppercase tracking-widest mb-3">
                — Portfolio
              </p>

              <h2 className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                Milestones
              </h2>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">

            {/* Project 1 */}
            <div className="pt-10 md:pt-0 md:px-10 first:md:pl-0 last:md:pr-0">
              <div className="flex items-center justify-between mb-8">
                <span className="border border-white/30 text-white/80 text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Advocacy
                </span>

                <span className="text-4xl font-black text-white/20">01</span>
              </div>

              <h3 className="text-3xl font-bold uppercase tracking-tight leading-[1.05] mb-4">
                Flip the Switch:
                <br />
                MP Talk
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                Spoke with an MP about our Flip the Switch project and its goals for creating meaningful change.
              </p>

              {/* <a
                href="#"
                className="text-xs font-bold uppercase tracking-widest text-white hover:text-york-red transition-colors inline-flex items-center gap-2"
              >
                Read Brief
                <span>→</span>
              </a> */}
            </div>

            {/* Project 2 */}
            <div className="pt-10 md:pt-0 md:px-10 first:md:pl-0 last:md:pr-0">
              <div className="flex items-center justify-between mb-8">
                <span className="border border-white/30 text-white/80 text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Fundraiser
                </span>

                <span className="text-4xl font-black text-white/20">02</span>
              </div>

              <h3 className="text-3xl font-bold uppercase tracking-tight leading-[1.05] mb-4">
                Raised funds for
                <br />
                Kids In Tech
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                Raised funds through a fundraiser supporting technology-focused opportunities for kids.
              </p>

              {/* <a
                href="#"
                className="text-xs font-bold uppercase tracking-widest text-white hover:text-york-red transition-colors inline-flex items-center gap-2"
              >
                Read Brief
                <span>→</span>
              </a> */}
            </div>

            {/* Project 3 */}
            <div className="pt-10 md:pt-0 md:px-10 first:md:pl-0 last:md:pr-0">
              <div className="flex items-center justify-between mb-8">
                <span className="border border-white/30 text-white/80 text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  Project
                </span>

                <span className="text-4xl font-black text-white/20">03</span>
              </div>

              <h3 className="text-3xl font-bold uppercase tracking-tight leading-[1.05] mb-4">
                EWB YorkU
                <br />
                Meeting with MP
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                We had the honour of meeting with MP Judy Sgro to discuss the Flip the Switch campaign and its goals. </p>

              {/* <a
                href="#"
                className="text-xs font-bold uppercase tracking-widest text-white hover:text-york-red transition-colors inline-flex items-center gap-2"
              >
                Read Brief
                <span>→</span>
              </a> */}
            </div>

          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Home;
