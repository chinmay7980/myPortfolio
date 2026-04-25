import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface CaseStudy {
  index: string;
  title: string;
  tag: string;
  year: string;
  problem: string;
  process: string;
  impact: string;
  visual: string; // CSS background gradient string
  award?: string;
}

const studies: CaseStudy[] = [
  {
    index: "01",
    title: "Intern Karo",
    tag: "Product Design · Full-stack",
    year: "2025",
    problem: "Students drown in irrelevant internship listings.",
    process:
      "Designed a discovery flow that reads more like a feed than a job board — surfacing roles based on real GitHub signal instead of keyword soup.",
    impact: "A platform where the right opportunities feel inevitable, not lucky.",
    visual:
      "radial-gradient(120% 80% at 20% 10%, oklch(0.32 0 0), oklch(0.13 0 0) 70%), linear-gradient(180deg, oklch(0.22 0 0), oklch(0.13 0 0))",
  },
  {
    index: "02",
    title: "Shadow Chat",
    tag: "Product Design · Realtime",
    year: "2026",
    problem: "Identity overhead kills honest conversation.",
    process:
      "Built a stateless WebSocket + Redis matchmaking layer with zero data persistence. Designed the UI to feel like a quiet room, not a feed.",
    impact: "A chat that forgets you the moment you leave. 3rd place at Klymo Ascent 1.0.",
    visual:
      "radial-gradient(100% 70% at 80% 20%, oklch(0.4 0 0), oklch(0.13 0 0) 70%), linear-gradient(180deg, oklch(0.18 0 0), oklch(0.13 0 0))",
    award: "Klymo Ascent 1.0 — 3rd place",
  },
  {
    index: "03",
    title: "UniVerse",
    tag: "Product Design · AI",
    year: "2026",
    problem: "Campus events drown in noise; nobody finds the good ones.",
    process:
      "AI-driven recommendations, real-time availability, and a visual campus map. Gamified the journey just enough to make discovery a habit.",
    impact: "Students actually showed up. 3rd place at Visual Vortex 2.0 (GDG).",
    visual:
      "radial-gradient(110% 80% at 50% 0%, oklch(0.36 0 0), oklch(0.13 0 0) 70%), linear-gradient(180deg, oklch(0.2 0 0), oklch(0.13 0 0))",
    award: "Visual Vortex 2.0 — 3rd place",
  },

];

export function Work() {
  return (
    <section id="work" className="border-t border-border px-6 py-28 sm:px-10 lg:px-16">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          02 — Selected Work
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Things I've shipped —{" "}
          <span className="text-muted-foreground">and what they taught me.</span>
        </h2>
      </Reveal>

      <div className="mt-16 relative pb-10">
        {studies.map((study, index) => (
          <article
            key={study.index}
            className="group sticky"
            style={{ top: `calc(10vh + ${index * 40}px)`, marginBottom: '10vh' }}
          >
            <div className="bg-background border border-border/40 rounded-3xl p-4 sm:p-8 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.6)]">
              <Reveal>
                <div
                  className="relative overflow-hidden rounded-2xl border border-border/50 bg-muted/20"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{ background: study.visual }}
                  />
                  <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 z-10">
                    <div className="flex items-start justify-between text-[11px] uppercase tracking-[0.24em] text-foreground">
                      <span>{study.index}</span>
                      <span>{study.year}</span>
                    </div>
                    <div>
                      <h3
                        className="font-display font-bold uppercase leading-none tracking-[-0.03em] text-foreground drop-shadow-md"
                        style={{ fontSize: "clamp(2.25rem, 7vw, 6rem)" }}
                      >
                        {study.title}
                      </h3>
                      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-foreground/80 drop-shadow-sm">
                        {study.tag}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-8 grid gap-8 md:grid-cols-12 px-2 sm:px-4">
                  <div className="md:col-span-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Problem
                    </p>
                    <p className="mt-3 text-base text-foreground">{study.problem}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Process
                    </p>
                    <p className="mt-3 text-base text-muted-foreground">{study.process}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Impact
                    </p>
                    <p className="mt-3 text-base text-muted-foreground">{study.impact}</p>
                    {study.award && (
                      <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground">
                        ★ {study.award}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-8 px-2 sm:px-4">
                  <span className="link-underline inline-flex items-center gap-2 text-sm text-foreground cursor-pointer">
                    Read case study
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
