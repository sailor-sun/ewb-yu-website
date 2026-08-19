import React from "react";
import Navbar from "../components/Navbar";

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

          {/* Right Column */}
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
              We are student engineers building{" "}
              <span className="text-york-red font-bold not-italic font-sans text-lg tracking-wide uppercase">
                Equitable
              </span>{" "}
              systems with the communities we serve —{" "}
              <span className="font-semibold text-gray-900">
                not for them.
              </span>
            </p>

          </div>

        </div>
      </main>

    </div>
  );
}

export default Home;
