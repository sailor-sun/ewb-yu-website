import React from "react";
import { Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";

const stats = [
  { value: "4+", label: "Events" },
  { value: "$140+", label: "Funds Raised" },
  { value: "1", label: "Project" },
];

export default function About() {
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
      `}</style>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">

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

      </main>

      <footer className="bg-white border-t border-gray-100 py-12 text-center relative z-10">
        <p className="text-gray-400 text-xs tracking-widest uppercase font-semibold">
          © 2026 EWB York University Chapter
        </p>
      </footer>
    </div>
  );
}
