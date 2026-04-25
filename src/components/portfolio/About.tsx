import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-28 sm:px-10 lg:px-16">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">01 — About</p>
      </Reveal>

      <div className="mt-10 grid gap-12 md:grid-cols-12">
        <Reveal delay={80} className="md:col-span-5">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Turning logic
            <br />
            <span className="text-muted-foreground">into experiences people can feel.</span>
          </h2>
        </Reveal>

        <Reveal delay={160} className="md:col-span-7 md:pl-8">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Most developers focus on making things work. Most designers focus on how things look.
              I’m interested in what happens in between — where logic becomes something you can
              actually feel.
            </p>
            <p>
              I’m a B.Tech CS & AI undergrad, but most of my real learning happens in the browser. I take
              rough ideas and shape them into products that remove real friction.
            </p>
            <p>
              I build fast, but I don’t ignore the details. Because good products don’t just function —
              they feel obvious.
            </p>
            <p>
              Outside of code, I pay attention to how films and anime create flow and rhythm — and
              bring that same sense of experience into the interfaces I build.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
