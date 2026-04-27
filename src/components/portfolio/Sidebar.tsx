import { Mail, Github, Linkedin, MapPin, Code2, Download } from "lucide-react";
import profileImg from "@/assets/chinmay.jpeg";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "./MagneticWrapper";

function scrollToContact() {
  const el = document.getElementById("contact");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Sidebar() {
  return (
    <aside className="flex flex-col rounded-2xl border border-border/50 bg-background/40 backdrop-blur-md p-6 lg:p-8 relative z-10 shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.02] to-transparent pointer-events-none" />

      {/* Header Profile */}
      <div className="flex items-center gap-4 border-b border-border/50 pb-6 relative z-10">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-border shadow-lg">
          <img
            src={profileImg}
            alt="Portrait of Chinmay Soni"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <div>
          <p className="font-display text-base font-semibold tracking-tight text-foreground">
            Chinmay Soni
          </p>
          <p className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
            @chinmaysoni
          </p>
        </div>
      </div>

      {/* Meta */}
      <dl className="mt-6 space-y-4 text-xs relative z-10">
        <div className="flex justify-between items-center">
          <dt className="flex items-center gap-2 uppercase tracking-[0.2em] text-muted-foreground/60 text-[10px]">
            <MapPin className="h-3 w-3" /> Location
          </dt>
          <dd className="text-foreground">Udaipur, IN</dd>
        </div>
        <div className="flex justify-between items-center">
          <dt className="flex items-center gap-2 uppercase tracking-[0.2em] text-muted-foreground/60 text-[10px]">
            <Code2 className="h-3 w-3" /> Role
          </dt>
          <dd className="text-foreground">Full-Stack / AI</dd>
        </div>
        <div className="flex justify-between items-center">
          <dt className="flex items-center gap-2 uppercase tracking-[0.2em] text-muted-foreground/60 text-[10px]">
            <span className="w-3 text-center">⏳</span> Year
          </dt>
          <dd className="text-foreground">B.Tech Y2</dd>
        </div>
      </dl>

      {/* Recognition */}
      <div className="mt-8 border-t border-border/50 pt-6 relative z-10">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">
          Recognition
        </p>
        <ul className="space-y-3 text-xs">
          <li className="flex justify-between items-center gap-4">
            <span className="text-foreground truncate">Klymo Ascent 1.0</span>
            <span className="text-muted-foreground whitespace-nowrap">3rd · 2026</span>
          </li>
          <li className="flex justify-between items-center gap-4">
            <span className="text-foreground truncate">Visual Vortex 2.0</span>
            <span className="text-muted-foreground whitespace-nowrap">3rd · 2026</span>
          </li>
          <li className="flex justify-between items-center gap-4">
            <span className="text-foreground truncate">Newton School of Tech</span>
            <span className="text-muted-foreground whitespace-nowrap">2024-now</span>
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-8 relative z-10">
        <MagneticWrapper strength={0.3}>
          <Button
            onClick={scrollToContact}
            className="w-full rounded-md bg-foreground text-background hover:bg-foreground/90 font-medium flex gap-2 h-11"
          >
            Hire me
            <Mail className="h-4 w-4 ml-1" />
          </Button>
        </MagneticWrapper>
      </div>

      {/* Footer socials */}
      <div className="mt-8 pt-6 border-t border-border/50 flex flex-col gap-4 relative z-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <MagneticWrapper strength={0.2}>
              <a
                href="https://github.com/chinmay7980"
                target="_blank"
                rel="noreferrer"
                className="flex p-1 items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </MagneticWrapper>
            <MagneticWrapper strength={0.2}>
              <a
                href="https://www.linkedin.com/in/chinmay-soni-334b8539b/"
                target="_blank"
                rel="noreferrer"
                className="flex p-1 items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </MagneticWrapper>
          </div>
          <MagneticWrapper strength={0.15}>
            <a
              href="/resume.pdf"
              download="Chinmay_Soni_Resume.pdf"
              className="group flex items-center gap-1.5 text-[10px] uppercase tracking-[0.1em] font-medium text-foreground hover:text-foreground/90 transition-all bg-foreground/5 hover:bg-foreground/10 hover:shadow-sm px-3 py-2 rounded-md border border-border/50 hover:border-border"
            >
              <Download className="h-3 w-3 transition-transform group-hover:translate-y-[1px]" />
              Resume
            </a>
          </MagneticWrapper>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 leading-relaxed mt-2">
          Open to full-stack & AI internships for 2026
        </p>
      </div>
    </aside>
  );
}
