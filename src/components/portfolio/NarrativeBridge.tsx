import { Reveal } from "./Reveal";

interface NarrativeBridgeProps {
  text: string;
}

export function NarrativeBridge({ text }: NarrativeBridgeProps) {
  return (
    <div className="flex items-center justify-center px-6 pb-16 pt-8 sm:pb-24 sm:pt-12 text-center">
      <Reveal delay={100}>
        <div className="relative max-w-4xl mx-auto">
          <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-tight">
            Thinking is cheap. Shipping is hard.
            <br className="hidden sm:block" />
            <span className="text-muted-foreground/50"> Here is what happens when these rules meet reality.</span>
          </h3>
        </div>
      </Reveal>
    </div>
  );
}
