import { useEffect, useState } from "react";
import profileImg from "@/assets/chinmay.jpeg";
import { Reveal } from "./Reveal";
import { TechStackChips } from "./TechStackChips";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center pt-10 pb-20 overflow-hidden"
    >
      {/* Background Grid Guide Lines */}
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background pointer-events-none"
        aria-hidden
      />

      {/* Top Meta */}
      <div className="absolute top-8 left-0 right-0 z-30 px-6 sm:px-10 lg:px-16 w-full max-w-[1400px] mx-auto">
        <Reveal className="flex w-full items-center justify-between text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          <span>Portfolio — 2025 / 2026</span>
          <span className="hidden sm:inline">Udaipur, IN → Remote</span>
        </Reveal>
      </div>

      {/* 12-Column Grid Centerpiece */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 mt-16 lg:mt-24">
        {/* Z-0: Background Faint Text ("HI!" and "I'M") */}
        <div className="absolute top-0 lg:-top-10 left-0 right-0 z-0 flex justify-between px-2 sm:px-12 pointer-events-none w-full">
          <Reveal className="w-[40%] flex justify-end pr-4 sm:pr-8">
            <h1
              className="font-display font-bold uppercase leading-none tracking-[-0.02em] text-foreground/20"
              style={{ fontSize: "clamp(5rem, 14vw, 200px)" }}
            >
              HI!
            </h1>
          </Reveal>
          <Reveal className="w-[40%] flex justify-start pl-4 sm:pl-8">
            <h1
              className="font-display font-bold uppercase leading-none tracking-[-0.02em] text-foreground/20"
              style={{ fontSize: "clamp(5rem, 14vw, 200px)" }}
            >
              I'M
            </h1>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-x-6 items-center justify-center w-full relative">
          {/* Z-10: Center Portrait (Arch/Pill shape) */}
          <div className="col-span-8 col-start-3 sm:col-span-6 sm:col-start-4 lg:col-span-4 lg:col-start-5 row-start-1 flex justify-center z-10">
            <Reveal delay={100} className="w-full max-w-[340px]">
              <div
                className="relative w-full aspect-[2/3] rounded-full overflow-hidden ring-1 ring-border/40 shadow-[0_0_80px_rgba(0,0,0,0.8)] group will-change-transform"
                style={{ transform: `translateY(${scrollY * 0.15}px)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src={profileImg}
                  alt="Chinmay Soni"
                  className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
            </Reveal>
          </div>

          {/* Z-20: Foreground Solid Text (Single Line "CHINMAY") */}
          <div className="col-span-12 row-start-1 col-start-1 flex justify-center z-20 pointer-events-none translate-y-[60%] lg:translate-y-[95%]">
            <Reveal delay={200} className="w-full text-center">
              <h1
                className="font-display font-bold uppercase leading-none tracking-[-0.04em] text-foreground drop-shadow-2xl"
                style={{ fontSize: "clamp(4.5rem, 18vw, 220px)" }}
              >
                CHINMAY
              </h1>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom Content: Tagline */}
      <div className="relative z-30 flex flex-col items-center text-center px-6 mt-20 lg:mt-32 w-full">
        <Reveal delay={300} className="max-w-[600px] mb-8">
          <p className="text-base font-semibold text-muted-foreground sm:text-xl leading-relaxed">
            A Full-Stack Developer, who builds from first principles!
          </p>
        </Reveal>

        {/* Horizontal Tech Stack Chips */}
        <TechStackChips />
      </div>
    </section>
  );
}
