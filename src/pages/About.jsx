import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./About.css";
import Navbar from "../components/Navbar";

const stats = [
  { value: "12+", label: "Events this year" },
  { value: "80+", label: "Active members" },
  { value: "5", label: "Partner chapters" },
];

export default function About() {
  return (
    <>
      <Navbar />
    <section className="hero" id="about">

      <motion.p
        className="hero__eyebrow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <Sparkles size={14} aria-hidden="true" />
        <span>Engineers Without Borders · York University</span>
      </motion.p>

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
        Build <span className="hero__accent">change</span>,
        <br />
        one event at a time.
      </motion.h1>

      <motion.p
        className="hero__lede"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        From campus campaigns and fundraisers to national conferences —
        here&apos;s what we&apos;re up to this term at Lassonde.
      </motion.p>


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
        {stats.map((stat) => (
          <motion.li
            key={stat.label}
            className="hero__stat"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <span className="hero__stat-value">{stat.value}</span>
            <span className="hero__stat-label">{stat.label}</span>
          </motion.li>
        ))}
      </motion.ul>

    </section>


<section className="chapter-structure">
  <div className="chapter-structure__intro">
    <p className="chapter-structure__eyebrow">How We're Organized</p>
    <h2>How our chapter works</h2>
    <p>
      Our chapter is organized through an executive team, general members,
      and project-based programs led by students.
    </p>
  </div>

  <div className="org-chart">

    <div className="org-card org-card--top">
      Co-Presidents
    </div>

    <div className="branch-connector branch-connector--main">
      <div className="branch-connector__vertical" />
      <div className="branch-connector__horizontal" />

      <div className="branch-connector__drops">
        <span />
        <span />
        <span />
      </div>
    </div>

    <div className="org-groups">

      {/* EXECUTIVE TEAM */}
      <div className="org-group">
        <div className="org-card org-card--title">
          Executive Team
        </div>

        <div className="org-arrow">↓</div>

        <div className="org-card">Vice President</div>
        <div className="org-card">VP Advocacy</div>
        <div className="org-card">VP Events</div>
        <div className="org-card">VP Marketing</div>

        <div className="org-arrow">↓</div>

        <div className="org-card org-card--member">
          Finance Associates
        </div>

        <div className="org-card org-card--member">
          Events Associates
        </div>

        <div className="org-card org-card--member">
          Advocacy Associate
        </div>
      </div>

      {/* GENERAL MEMBERS */}
      <div className="org-group">
        <div className="org-card org-card--title">
          General Members
        </div>

        <div className="org-arrow">↓</div>

        <div className="org-card">
          Chapter Members
        </div>

        <div className="org-card org-card--member">
          Specific Project Members
        </div>

        <div className="org-card org-card--member">
          Volunteers
        </div>

        <div className="org-card org-card--member">
          Event Participants
        </div>
      </div>

      {/* PROGRAMS */}
      <div className="org-group org-group--projects">
        <div className="org-card org-card--title">
          Programs
        </div>

        <div className="branch-connector branch-connector--two">
          <div className="branch-connector__vertical" />
          <div className="branch-connector__horizontal" />

          <div className="branch-connector__drops branch-connector__drops--two">
            <span />
            <span />
          </div>
        </div>

        <div className="project-grid project-grid--two">

          <div className="project-column">
            <div className="org-card">
              Technical Projects
            </div>

            <div className="org-arrow">↓</div>

            <div className="org-card org-card--lead">
              Project Leads
            </div>

            <div className="org-arrow">↓</div>

            <div className="org-card org-card--member">
              Qualified Project Contributors
            </div>
          </div>

          <div className="project-column">
            <div className="org-card">
              Community Projects
            </div>

            <div className="org-arrow">↓</div>

            <div className="org-card org-card--lead">
              Project Leads
            </div>

            <div className="org-arrow">↓</div>

            <div className="org-card org-card--member">
              Qualified Project Contributors
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

    <footer className="bg-white border-t border-gray-100 py-12 text-center relative z-10">
        <p className="text-gray-400 text-xs tracking-widest uppercase font-semibold">
          © 2026 EWB York University Chapter
        </p>
      </footer>
    </>
  );
}