import { Reveal } from "./Reveal";

const principles = [
  {
    n: "01",
    title: "I don’t start with code, I start with friction.",
    body: "If I can’t clearly define what’s broken, I don’t build. Most bad products start too early.",
  },
  {
    n: "02",
    title: "I move from idea → browser as fast as possible.",
    body: "Figma helps me think, but the real answers come when users interact with something real.",
  },
  {
    n: "03",
    title: "I’d rather ship imperfect than think perfect.",
    body: "A working v1 with real users teaches more than a polished idea no one uses.",
  },
  {
    n: "04",
    title: "I treat AI as a tool, not a shortcut.",
    body: "I use AI to accelerate thinking and building — not to replace understanding.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-t border-border px-6 py-28 sm:px-10 lg:px-16">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          03 — How I think
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Four rules I keep coming back to —
          <span className="text-muted-foreground"> regardless of the project.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {principles.map((p, i) => (
          <Reveal key={p.n} delay={i * 80} className="bg-background p-8 sm:p-10">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-sm tracking-[0.2em] text-muted-foreground">
                {p.n}
              </span>
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {p.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
