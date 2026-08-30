import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
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

      <main className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 text-center">

        <p className="text-york-red font-bold text-xs uppercase tracking-widest mb-6">
          Page Not Found
        </p>

        <h1 className="text-8xl sm:text-9xl font-black tracking-tighter uppercase leading-none">
          <span className="text-york-red">4</span>
          <span className="text-outline">0</span>
          <span className="text-york-red">4</span>
        </h1>

        <p className="text-lg text-gray-600 mt-8 max-w-md mx-auto leading-relaxed">
          Sorry, the page you were looking for doesn't exist. Let's get you
          back to engineering change.
        </p>

        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-york-red transition-colors group"
        >
          Back to Home
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>

      </main>

      <Footer />
    </div>
  );
}

export default NotFound;
