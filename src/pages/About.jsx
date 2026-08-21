import React from "react";
// import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./About.css";
import Navbar from "../components/Navbar";

const stats = [
  { value: "4+", label: "Events" },
  { value: "$140+", label: "Funds Raised" },
  { value: "1", label: "Project" },
];

export default function About() {
  return (
    <>
      <Navbar />

      <section className="hero" id="about">

        {/* MOTION TEMPORARILY DISABLED
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
        */}

        <p className="hero__eyebrow">
          <Sparkles size={14} aria-hidden="true" />
          <span>Engineers Without Borders · York University</span>
        </p>

        {/* </motion.p> */}


        {/* MOTION TEMPORARILY DISABLED
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25,
            duration: 0.7,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
        */}

        <h1 className="hero__title">
          Build <span className="hero__accent">change</span>,
          <br />
          one event at a time.
        </h1>

        {/* </motion.h1> */}


        {/* MOTION TEMPORARILY DISABLED
        <motion.p
          className="hero__lede"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
        */}

       

<p className="hero__lede">
  <strong>EWB YorkU</strong> was initiated in{" "}
  <a
    href="https://www.yorku.ca/yfile/2003/03/28/engineers-remove-borders/"
    target="_blank"
    rel="noreferrer"
    className="font-bold underline hover:text-york-red transition-colors"
  >
    2003
  </a>{" "}
  as a student chapter of Engineers Without Borders Canada. Since then, our
  chapter has worked to empower students to become <strong>changemakers</strong>{" "}
  through sustainability workshops, advocacy campaigns, and community-driven
  projects. We also support Indigenous communities, promote fair trade, and
  advocate for a more{" "}
  <strong>globally conscious engineering curriculum</strong>.
</p>

         <p className="hero__lede">
          From campus campaigns and fundraisers to national conferences —
          here&apos;s what we&apos;re up to in 2025 at Lassonde.
        </p>


        {/* </motion.p> */}


        {/* MOTION TEMPORARILY DISABLED
        <motion.ul
          className="hero__stats"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.7,
              },
            },
          }}
        >
        */}

        <ul className="hero__stats">
          {stats.map((stat) => (

            /* MOTION TEMPORARILY DISABLED
            <motion.li
              key={stat.label}
              className="hero__stat"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
            >
            */

            <li key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </li>

            /* </motion.li> */

          ))}
        </ul>

        {/* </motion.ul> */}


      </section>

      <footer className="bg-white border-t border-gray-100 py-12 text-center relative z-10">
        <p className="text-gray-400 text-xs tracking-widest uppercase font-semibold">
          © 2026 EWB York University Chapter
        </p>
      </footer>
    </>
  );
}