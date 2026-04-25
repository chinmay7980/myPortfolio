import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import { GridBackground } from "@/components/portfolio/GridBackground";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Process } from "@/components/portfolio/Process";
import { Contact } from "@/components/portfolio/Contact";
import { Navbar } from "@/components/portfolio/Navbar";
import { NarrativeBridge } from "@/components/portfolio/NarrativeBridge";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground pt-16">
      <GridBackground />
      <Navbar />

      <Hero />

      <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row px-6 lg:px-16 gap-16 pb-32">
        {/* Sticky Sidebar Container */}
        <div className="w-full lg:w-[300px] shrink-0">
          <div className="lg:sticky lg:top-32">
            <Sidebar />
          </div>
        </div>

        {/* Main Scrolling Content */}
        <main className="flex-1 min-w-0">
          <About />
          <Process />

          <NarrativeBridge text="Thinking is cheap. Shipping is hard. Here is what happens when these rules meet reality." />

          <Work />
          <Contact />
        </main>
      </div>

      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
