import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ----------------------------------------------------------------------------
 * Motion helpers
 * ------------------------------------------------------------------------- */

/** Tracks the user's prefers-reduced-motion setting reactively. */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

/**
 * Fires once when the element scrolls into view.
 * Returns [ref, inView]. Honors reduced motion by reporting visible immediately.
 */
function useInView({ threshold = 0.2, rootMargin = "0px 0px -10% 0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setInView(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced, threshold, rootMargin]);

  return [ref, inView];
}

/**
 * Reveal
 * Fades + slides its children into view on scroll. Stagger with `delay`.
 */
function Reveal({ children, as: Tag = "div", delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  const reduced = useReducedMotion();
  const animated = !reduced;

  return (
    <Tag
      ref={ref}
      style={animated ? { transitionDelay: `${delay}ms` } : undefined}
      className={[
        className,
        animated
          ? "transition-all duration-700 ease-out motion-reduce:transition-none"
          : "",
        animated && !inView
          ? "opacity-0 translate-y-8"
          : "opacity-100 translate-y-0",
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}

/* ----------------------------------------------------------------------------
 * Inline icons (no icon dependency). Inherit color via currentColor.
 * ------------------------------------------------------------------------- */

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const Icons = {
  education: (p) => (
    <svg {...iconProps} {...p}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" />
    </svg>
  ),
  projects: (p) => (
    <svg {...iconProps} {...p}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a2 2 0 0 0 2.8 2.8l6-6a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.1-2.1 2.6-2.6Z" />
    </svg>
  ),
  advocacy: (p) => (
    <svg {...iconProps} {...p}>
      <path d="m3 11 18-5v12L3 14v-3Z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  ),
  globe: (p) => (
    <svg {...iconProps} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
    </svg>
  ),
  hands: (p) => (
    <svg {...iconProps} {...p}>
      <path d="M11 14 8.5 9.5a1.5 1.5 0 0 0-2.6 1.5L9 17a5 5 0 0 0 4.3 2.5H17a3 3 0 0 0 3-3v-5" />
      <path d="M14 11V5.5a1.5 1.5 0 0 0-3 0V10" />
      <path d="M17 11V6.5a1.5 1.5 0 0 0-3 0" />
    </svg>
  ),
  leaf: (p) => (
    <svg {...iconProps} {...p}>
      <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 11-4 16-9 16Z" />
      <path d="M4 21c4-7 8-9 13-10" />
    </svg>
  ),
  spark: (p) => (
    <svg {...iconProps} {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  ),
};

/* ----------------------------------------------------------------------------
 * Animated counter
 * ------------------------------------------------------------------------- */

/**
 * CountUp
 * Counts from 0 to `end` once it scrolls into view. Respects reduced motion
 * (jumps straight to the final value).
 */
function CountUp({ end, duration = 1800, prefix = "", suffix = "" }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(end);
      return;
    }

    let raf;
    let start;
    const step = (ts) => {
      if (start === undefined) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // easeOutCubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, end, duration]);

  const display = Number.isInteger(end)
    ? Math.round(value).toLocaleString()
    : value.toFixed(1);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ----------------------------------------------------------------------------
 * UI building blocks
 * ------------------------------------------------------------------------- */

function SectionHeading({ eyebrow, title, className = "" }) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="uppercase tracking-[0.2em] text-ewbGold text-sm font-semibold mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-ewbBlue">
        {title}
      </h2>
    </div>
  );
}

/** A theme palette descriptor used by the "What we do" cards. */
const focusThemes = {
  blue: {
    bar: "bg-ewbBlue",
    iconWrap: "bg-ewbBlue/10 text-ewbBlue group-hover:bg-ewbBlue group-hover:text-white",
    glow: "bg-ewbBlue/10",
  },
  gold: {
    bar: "bg-ewbGold",
    iconWrap: "bg-ewbGold/15 text-ewbGold group-hover:bg-ewbGold group-hover:text-white",
    glow: "bg-ewbGold/15",
  },
  red: {
    bar: "bg-yorkRed",
    iconWrap: "bg-yorkRed/10 text-yorkRed group-hover:bg-yorkRed group-hover:text-white",
    glow: "bg-yorkRed/10",
  },
};

/**
 * FocusCard
 * Dynamic card: top accent bar grows on hover, icon tile fills with brand color,
 * the whole card lifts with a deeper shadow.
 */
function FocusCard({ theme = "blue", icon: Icon, title, children }) {
  const t = focusThemes[theme];
  return (
    <div
      className="group relative h-full overflow-hidden rounded-2xl bg-white p-8 pt-9
                 border border-gray-100 shadow-sm
                 transition-all duration-300 ease-out
                 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent
                 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {/* Top accent bar grows from left edge across the card on hover */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 h-1.5 w-16 rounded-r-full ${t.bar}
                    transition-all duration-500 ease-out group-hover:w-full
                    motion-reduce:transition-none`}
      />
      {/* Soft corner glow appears on hover */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl
                    opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${t.glow}`}
      />

      <span
        className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl
                    transition-colors duration-300 ${t.iconWrap}`}
        aria-hidden="true"
      >
        <Icon />
      </span>

      <h3 className="relative mt-6 text-2xl font-semibold text-ewbBlue">{title}</h3>
      <p className="relative mt-3 text-lg leading-relaxed text-ewbBlue/70">
        {children}
      </p>
    </div>
  );
}

/** Single animated stat for the impact strip. */
function Stat({ end, prefix, suffix, label }) {
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold tracking-tight text-ewbGold tabular-nums">
        <CountUp end={end} prefix={prefix} suffix={suffix} />
      </div>
      <div className="mt-3 text-base md:text-lg text-white/70">{label}</div>
    </div>
  );
}

/** Compact value tile for the values grid. */
function ValueCard({ icon: Icon, title, children }) {
  return (
    <div
      className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-7
                 shadow-sm transition-all duration-300 ease-out
                 hover:-translate-y-1 hover:shadow-xl
                 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl
                   bg-ewbBlue/10 text-ewbBlue transition-colors duration-300
                   group-hover:bg-ewbBlue group-hover:text-white"
        aria-hidden="true"
      >
        <Icon width={24} height={24} />
      </span>
      <div>
        <h3 className="text-xl font-semibold text-ewbBlue">{title}</h3>
        <p className="mt-2 text-lg leading-relaxed text-ewbBlue/70">{children}</p>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function About() {
  return (
    <main className="bg-white text-ewbBlue text-[1.0625rem]">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-ewbBlue text-white">
        {/* Decorative layer: gradient wash + soft glows + faint grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0
                     bg-[radial-gradient(circle_at_top_right,rgba(194,123,58,0.25),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-ewbGold/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-yorkRed/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]
                     [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)]
                     [background-size:64px_64px]
                     [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]"
        />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40">
          <Reveal>
            <span
              className="inline-flex items-center gap-2 rounded-full border border-white/15
                         bg-white/5 px-4 py-1.5 text-sm font-semibold tracking-wide text-ewbGold backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-ewbGold" aria-hidden="true" />
              Engineers Without Borders &middot; York University
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="mt-7 font-bold leading-[1.04] tracking-tight max-w-4xl
                         text-[clamp(2.5rem,6vw,5rem)]"
            >
              Engineering a more{" "}
              <span className="text-ewbGold">equitable</span> world, together.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            {/* TODO: Refine the chapter mission statement in your own words. */}
            <p className="mt-7 max-w-2xl text-xl md:text-2xl text-white/80 leading-relaxed">
              We are a student-led chapter channeling curiosity, technical skill,
              and leadership into lasting social impact &mdash; on campus, in our
              community, and around the globe.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-ewbGold text-ewbBlue font-semibold
                           px-8 py-4 text-lg rounded-2xl shadow-lg shadow-ewbGold/20
                           transition-all duration-200 ease-out
                           hover:-translate-y-0.5 hover:shadow-xl hover:brightness-105
                           motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Get involved
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <a
                href="#what-we-do"
                className="inline-flex items-center justify-center border border-white/25 text-white font-semibold
                           px-8 py-4 text-lg rounded-2xl transition-colors duration-200 ease-out hover:bg-white/10"
              >
                What we do
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Who we are ===== */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16 items-start">
          <Reveal className="md:col-span-5">
            <SectionHeading eyebrow="Who we are" title="A community, not just a club." />
          </Reveal>

          <Reveal delay={120} className="md:col-span-7">
            <div className="space-y-6 text-xl leading-[1.7] text-ewbBlue/80 max-w-2xl">
              <p>
                The York University chapter of Engineers Without Borders brings
                together students from every discipline &mdash; engineering and
                far beyond &mdash; who share a belief that thoughtful, ethical
                engineering can help build a fairer world.
              </p>
              <p>
                {/* TODO: Personalize this with your chapter's real history / founding year. */}
                Since our founding, we&apos;ve run workshops, fundraisers, and
                advocacy campaigns rooted in sustainable development and global
                citizenship. We learn by doing, lead with humility, and grow
                together.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== What we do ===== */}
      <section id="what-we-do" className="bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <Reveal className="max-w-2xl mb-14 md:mb-20">
            <SectionHeading eyebrow="What we do" title="Three ways we create impact." />
            <p className="mt-5 text-xl leading-relaxed text-ewbBlue/70">
              Our work spans learning, building, and speaking up &mdash; so every
              member can find a way to contribute that fits them.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            <Reveal delay={0} className="h-full">
              <FocusCard theme="blue" icon={Icons.education} title="Education">
                Workshops, talks, and events that build awareness around global
                development, sustainability, and ethical engineering.
              </FocusCard>
            </Reveal>
            <Reveal delay={120} className="h-full">
              <FocusCard theme="gold" icon={Icons.projects} title="Projects">
                Hands-on initiatives where members apply their skills to real
                community challenges, from concept to delivery.
              </FocusCard>
            </Reveal>
            <Reveal delay={240} className="h-full">
              <FocusCard theme="red" icon={Icons.advocacy} title="Advocacy">
                Campaigns that push for systemic change and a more sustainable,
                equitable world &mdash; on campus and beyond.
              </FocusCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Mission banner ===== */}
      <section className="bg-ewbBlue text-white">
        <div className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-ewbGold/15 blur-3xl"
          />
          <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
            <Reveal>
              <span
                className="text-7xl md:text-8xl leading-none text-ewbGold/60 font-serif select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
            </Reveal>
            <Reveal delay={100}>
              {/* TODO: Swap in your chapter's own mission/vision statement. */}
              <p className="-mt-6 md:-mt-8 text-3xl md:text-5xl font-bold leading-[1.2] tracking-tight max-w-4xl mx-auto">
                We don&apos;t just imagine a better world &mdash; we engineer it,
                one project, one person, and one community at a time.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-lg md:text-xl text-ewbGold font-semibold tracking-wide">
                Our shared mission
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Impact / animated stats ===== */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <Reveal className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <SectionHeading eyebrow="Our impact" title="Numbers worth sharing." className="[&_h2]:mx-auto" />
          <p className="mt-5 text-xl leading-relaxed text-ewbBlue/70">
            {/* TODO: Replace these numbers with your chapter's real figures. */}
            A snapshot of what our members have built together.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-4 rounded-3xl bg-ewbBlue py-14 px-6 text-white">
            {/* TODO: Update each stat value + label below. */}
            <Stat end={120} suffix="+" label="Active members" />
            <Stat end={25} label="Projects run" />
            <Stat end={15} prefix="$" suffix="k" label="Funds raised" />
            <Stat end={9} label="Years active" />
          </div>
        </Reveal>
      </section>

      {/* ===== Values ===== */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <Reveal className="max-w-2xl mb-14 md:mb-20">
            <SectionHeading eyebrow="What we stand for" title="The values that guide us." />
            <p className="mt-5 text-xl leading-relaxed text-ewbBlue/70">
              {/* TODO: Adjust these values to match your chapter's culture. */}
              Principles we return to in every project, partnership, and decision.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0}>
              <ValueCard icon={Icons.globe} title="Global citizenship">
                We think beyond borders and design with empathy for the people and
                places our work touches.
              </ValueCard>
            </Reveal>
            <Reveal delay={100}>
              <ValueCard icon={Icons.hands} title="Community first">
                We build with communities, not for them &mdash; listening before we
                lead.
              </ValueCard>
            </Reveal>
            <Reveal delay={200}>
              <ValueCard icon={Icons.leaf} title="Sustainability">
                We pursue solutions that last, balancing impact today with
                responsibility for tomorrow.
              </ValueCard>
            </Reveal>
            <Reveal delay={300}>
              <ValueCard icon={Icons.spark} title="Curiosity">
                We stay curious, learn relentlessly, and treat every challenge as a
                chance to grow.
              </ValueCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Closing call to action ===== */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ewbGold px-8 py-16 md:px-16 md:py-24 text-center shadow-sm">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-10 h-64 w-64 rounded-full bg-white/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-ewbBlue/10 blur-3xl"
            />
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-ewbBlue leading-[1.05]">
                Ready to make something happen?
              </h2>
              <p className="mt-5 text-xl text-ewbBlue/80 max-w-xl mx-auto leading-relaxed">
                Whether you want to lead a project, sharpen your skills, or just
                meet good people doing good work &mdash; there&apos;s a place for
                you here.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center justify-center gap-2 bg-ewbBlue text-white font-semibold
                           px-9 py-4 text-lg rounded-2xl shadow-lg
                           transition-all duration-200 ease-out
                           hover:-translate-y-0.5 hover:shadow-xl hover:bg-ewbBlue/90
                           motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Contact us
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
