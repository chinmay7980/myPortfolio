import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowUpRight, Copy, Loader2, Mail } from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EMAIL = "chinmay.soni2024@nst.rishihood.edu.in";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("That doesn't look like a valid email").max(255),
  company: z.string().trim().max(100).optional(),
  about: z.string().optional(),
  engagement: z.string().optional(),
  message: z.string().trim().min(1, "Tell me a little about it").max(1000),
});

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const parsed = contactSchema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      about: data.get("about"),
      engagement: data.get("engagement"),
      message: data.get("message"),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);

    // Append Web3Forms access key
    data.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "");
    data.append("subject", `New Portfolio Message from ${parsed.data.name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent! I'll get back to you soon.");
        form.reset();
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please email me directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="border-t border-border pt-16 pb-28">
      <Reveal className="flex items-center gap-4">
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap">
          04 / CONTACT
        </p>
        <div className="h-px w-full bg-border/50" />
      </Reveal>

      <div className="mt-20 grid gap-16 xl:gap-20 lg:grid-cols-12">
        {/* Left Column: Text & Info */}
        <Reveal delay={80} className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <h2
              className="font-display font-bold leading-[1.05] tracking-tight text-foreground"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
            >
              Hiring,
              <br />
              collaborating,
              <br />
              or just
              <br />
              curious?
            </h2>
            <p className="mt-8 text-base sm:text-lg text-muted-foreground/80 max-w-md leading-relaxed">
              I'm looking for my first internship in full-stack or AI, and I'm always down for a
              good hackathon team. Drop a line — I reply to every email.
            </p>
          </div>

          <div className="mt-16 lg:mt-32">
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border/60 bg-foreground/[0.02]">
                <Mail className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-2">
                  Or just write
                </p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(EMAIL);
                    toast.success("Email copied to clipboard");
                  }}
                  className="group flex items-center gap-2 text-foreground transition-colors hover:text-foreground/80"
                >
                  <span className="text-sm sm:text-base font-medium">{EMAIL}</span>
                  <Copy className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-foreground" />
                </button>
              </div>
            </div>
            <p className="mt-12 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 font-mono">
              Open to full-stack & AI internships for 2026
            </p>
          </div>
        </Reveal>

        {/* Right Column: Form */}
        <Reveal delay={120} className="lg:col-span-6">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
            {/* Row 1 */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <Label
                  htmlFor="name"
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Your name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Jordan Rivera"
                  className="h-12 border-border/60 bg-transparent text-base placeholder:text-muted-foreground/50 focus-visible:border-foreground/50 rounded-none shadow-none"
                />
              </div>
              <div className="space-y-3">
                <Label
                  htmlFor="email"
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jordan@studio.com"
                  className="h-12 border-border/60 bg-transparent text-base placeholder:text-muted-foreground/50 focus-visible:border-foreground/50 rounded-none shadow-none"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="space-y-3">
              <Label
                htmlFor="company"
                className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
              >
                Company / Studio (Optional)
              </Label>
              <Input
                id="company"
                name="company"
                placeholder="Independent"
                className="h-12 border-border/60 bg-transparent text-base placeholder:text-muted-foreground/50 focus-visible:border-foreground/50 rounded-none shadow-none"
              />
            </div>

            {/* Row 3 */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <Label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  What is this about?
                </Label>
                <Select name="about">
                  <SelectTrigger className="h-12 border-border/60 bg-transparent text-base text-muted-foreground/80 rounded-none shadow-none focus:ring-0 focus:border-foreground/50">
                    <SelectValue placeholder="Pick the closest" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border/60 rounded-none">
                    <SelectItem value="internship">Internship Opportunity</SelectItem>
                    <SelectItem value="freelance">Freelance Project</SelectItem>
                    <SelectItem value="collab">Hackathon / Collab</SelectItem>
                    <SelectItem value="other">Just saying hi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Type of engagement
                </Label>
                <Select name="engagement">
                  <SelectTrigger className="h-12 border-border/60 bg-transparent text-base text-muted-foreground/80 rounded-none shadow-none focus:ring-0 focus:border-foreground/50">
                    <SelectValue placeholder="Internship, gig, chat..." />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border/60 rounded-none">
                    <SelectItem value="ft_intern">Full-time Internship</SelectItem>
                    <SelectItem value="pt_intern">Part-time Internship</SelectItem>
                    <SelectItem value="contract">Contract / Gig</SelectItem>
                    <SelectItem value="chat">Coffee Chat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 4 */}
            <div className="space-y-3">
              <Label
                htmlFor="message"
                className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
              >
                Tell me the story
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What you are making, where it is stuck, and what a good answer would look like."
                className="resize-none border-border/60 bg-transparent text-base placeholder:text-muted-foreground/50 focus-visible:border-foreground/50 rounded-none shadow-none pt-3"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={submitting}
              className="group mt-4 h-14 w-full bg-foreground text-background hover:bg-foreground/90 rounded-none shadow-none text-base font-medium flex items-center justify-between px-6"
            >
              <span>{submitting ? "Sending..." : "Send message"}</span>
              {submitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              )}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
