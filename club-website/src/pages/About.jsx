import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Reveal
 * Wraps children and fades them up into view once they enter the viewport.
 * Uses IntersectionObserver (no animation library) and respects
 * prefers-reduced-motion by skipping the animation entirely.
 */
function Reveal({ children, as: Tag = "div", delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);

    // If motion is reduced, show immediately and skip the observer.
    if (mq.matches) {
      setVisible(true);
      return () => mq.removeEventListener?.("change", onChange);
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      mq.removeEventListener?.("change", onChange);
    };
  }, []);

  const animated = !reduced;

  return (
    <Tag
      ref={ref}
      style={animated ? { transitionDelay: `${delay}ms` } : undefined}
      className={[
        className,
        animated
          ? "transition-all duration-500 ease-out motion-reduce:transition-none"
          : "",
        animated && !visible ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0",
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}

/**
 * SectionHeading
 * Consistent eyebrow + title pairing used across sections.
 */
function SectionHeading({ eyebrow, title, className = "" }) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="uppercase tracking-widest text-ewbGold text-sm font-semibold mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-ewbBlue">
        {title}
      </h2>
    </div>
  );
}

/**
 * FocusCard
 * Card used in the "What we do" grid. Gentle lift + shadow on hover.
 */
function FocusCard({ accent, title, children }) {
  return (
    <div
      className="group h-full bg-white rounded-2xl p-7 border border-gray-100 shadow-sm
                 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl
                 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${accent} mb-5`}
        aria-hidden="true"
      />
      <h3 className="text-xl font-semibold text-ewbBlue mb-2">{title}</h3>
      <p className="text-ewbBlue/70 leading-relaxed">{children}</p>
    </div>
  );
}

/**
 * Stat
 * Single number + label used in the impact strip.
 */
function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-ewbGold">{value}</div>
      <div className="mt-2 text-sm md:text-base text-white/70">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <main className="bg-white text-ewbBlue">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-ewbBlue text-white">
        {/* Soft decorative glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-ewbGold/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-white/5 blur-3xl"
        />

        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <Reveal>
            <p className="uppercase tracking-widest text-ewbGold text-sm font-semibold mb-4">
              Engineers Without Borders &middot; York University
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 max-w-3xl">
              Engineering a more equitable world, together.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            {/* TODO: Refine the chapter mission statement in your own words. */}
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              We are a student-led chapter channeling curiosity, technical skill,
              and leadership into lasting social impact &mdash; on campus, in our
              community, and around the globe.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-ewbGold text-ewbBlue font-semibold
                           px-7 py-3 rounded-xl shadow-sm transition-all duration-200 ease-out
                           hover:-translate-y-0.5 hover:shadow-lg hover:brightness-105
                           motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Get involved
              </Link>
              <a
                href="#what-we-do"
                className="inline-flex items-center justify-center border border-white/30 text-white font-semibold
                           px-7 py-3 rounded-xl transition-colors duration-200 ease-out hover:bg-white/10"
              >
                What we do
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Who we are ===== */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16 items-start">
          <Reveal className="md:col-span-5">
            <SectionHeading eyebrow="Who we are" title="A community, not just a club." />
          </Reveal>

          <Reveal delay={120} className="md:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed text-ewbBlue/80 max-w-2xl">
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
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <Reveal className="max-w-2xl mb-12 md:mb-16">
            <SectionHeading
              eyebrow="What we do"
              title="Three ways we create impact."
            />
            <p className="mt-4 text-lg leading-relaxed text-ewbBlue/70">
              Our work spans learning, building, and speaking up &mdash; so every
              member can find a way to contribute that fits them.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            <Reveal delay={0} className="h-full">
              <FocusCard accent="bg-ewbBlue" title="Education">
                Workshops, talks, and events that build awareness around global
                development, sustainability, and ethical engineering.
              </FocusCard>
            </Reveal>
            <Reveal delay={120} className="h-full">
              <FocusCard accent="bg-ewbGold" title="Projects">
                Hands-on initiatives where members apply their skills to real
                community challenges, from concept to delivery.
              </FocusCard>
            </Reveal>
            <Reveal delay={240} className="h-full">
              <FocusCard accent="bg-yorkRed" title="Advocacy">
                Campaigns that push for systemic change and a more sustainable,
                equitable world &mdash; on campus and beyond.
              </FocusCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Impact / stats strip ===== */}
      <section className="bg-ewbBlue text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Our impact so far
            </h2>
            <p className="mt-3 text-white/70 text-lg">
              {/* TODO: Replace these numbers with your chapter's real figures. */}
              A snapshot of what our members have built together.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
              {/* TODO: Update each stat value + label below. */}
              <Stat value="120+" label="Active members" />
              <Stat value="25" label="Events hosted" />
              <Stat value="8" label="Community projects" />
              <Stat value="$15k" label="Funds raised" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Closing call to action ===== */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ewbGold px-8 py-14 md:px-16 md:py-20 text-center shadow-sm">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full bg-white/20 blur-3xl"
            />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-ewbBlue mb-4">
                Ready to make something happen?
              </h2>
              <p className="text-ewbBlue/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Whether you want to lead a project, sharpen your skills, or just
                meet good people doing good work &mdash; there&apos;s a place for
                you here.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-ewbBlue text-white font-semibold
                           px-8 py-3.5 rounded-xl shadow-sm transition-all duration-200 ease-out
                           hover:-translate-y-0.5 hover:shadow-lg hover:bg-ewbBlue/90
                           motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
