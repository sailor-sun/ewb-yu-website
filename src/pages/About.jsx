import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./About.css";

const stats = [
  { value: "12+", label: "Events this year" },
  { value: "80+", label: "Active members" },
  { value: "5", label: "Partner chapters" },
];

export default function About() {
  return (
    <section className="hero" id="about">

      <motion.div
        className="hero__logo-stage"
        initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.25, 1, 0.5, 1],
        }}
      >
        <div className="hero__logo-glow" aria-hidden="true" />

        <img
          src="/logo-EWB.png"
          alt="EWB York University Logo"
          className="hero__logo"
        />
      </motion.div>

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

      <motion.div
        className="hero__cta-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
      >
        <a href="#events" className="btn btn--primary">
          See all events
        </a>

        <a href="#contact" className="btn btn--ghost">
          Join the club
        </a>
      </motion.div>

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
  );
}