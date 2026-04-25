import { Reveal } from "./Reveal";
import { ReactLogo, NextLogo, NodeLogo, MongoLogo, TailwindLogo, FigmaLogo } from "./TechLogos";

const technologies = [
  { name: "React", icon: ReactLogo },
  { name: "Next.js", icon: NextLogo },
  { name: "TypeScript", icon: null },
  { name: "Node.js", icon: NodeLogo },
  { name: "Express", icon: null },
  { name: "MongoDB", icon: MongoLogo },
  { name: "Tailwind CSS", icon: TailwindLogo },
  { name: "Figma", icon: FigmaLogo },
  { name: "Git", icon: null },
];

export function TechStackChips() {
  // Duplicate array for seamless infinite scroll
  const carouselItems = [...technologies, ...technologies, ...technologies];

  return (
    <Reveal delay={400} className="w-full max-w-[100vw]">
      {/* Container with faded edges */}
      <div
        className="w-full overflow-hidden pb-6 pt-4"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max items-center gap-3 animate-marquee hover:[animation-play-state:paused]">
          {carouselItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group flex items-center gap-2 rounded-full border border-border/20 bg-muted/10 px-4 py-2 transition-all duration-300 hover:scale-[1.03] hover:border-border/60 hover:bg-foreground/10 cursor-default shrink-0"
            >
              {tech.icon && (
                <tech.icon className="h-4 w-4 text-foreground/70 transition-colors group-hover:text-foreground" />
              )}
              <span className="text-sm font-medium tracking-wide text-muted-foreground transition-colors group-hover:text-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
