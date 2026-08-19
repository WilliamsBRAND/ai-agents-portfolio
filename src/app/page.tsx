import Link from "next/link";
import { ArrowRight, PlayCircle } from "@phosphor-icons/react/dist/ssr";
import { profile, projects } from "@/lib/projects";
import { BOOKING_URL } from "@/lib/booking";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import ProblemOutcome from "@/components/ProblemOutcome";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import HowIWork from "@/components/HowIWork";
import Faq from "@/components/Faq";
import FadeIn from "@/components/FadeIn";

const heroHeadline =
  "Marketing Automations and AI Agents for Your Business";

export default function Home() {
  return (
    <>
      {/* Hero, centered */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-16 text-center md:pt-24">
        <FadeIn>
          <h1 className="mx-auto max-w-3xl font-sans text-4xl font-bold leading-[1.15] text-foreground md:text-5xl lg:text-6xl">
            {heroHeadline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-bright hover:shadow-[0_12px_32px_-12px_rgba(168,40,58,0.6)] active:scale-[0.98]"
            >
              Book a strategy call
              <ArrowRight weight="bold" className="h-4 w-4" />
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-6 py-3 text-sm text-foreground transition-all duration-200 hover:border-white/20 hover:bg-white/[0.03] active:scale-[0.98]"
            >
              See use cases
            </Link>
          </div>
        </FadeIn>

        {/* Video frame */}
        <FadeIn delay={0.12} className="mt-16">
          <div className="rounded-2xl border border-border-subtle bg-[rgb(20,8,10)] p-1.5 transition-colors duration-300 hover:border-white/15">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-surface-raised">
              <iframe
                src="https://www.loom.com/embed/b840c6796aff421482008263213c5741?autoplay=1"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 h-full w-full"
              ></iframe>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Built with */}
      <section className="border-y border-border-seam bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <FadeIn>
            <p className="text-center text-xs tracking-[0.14em] text-muted uppercase">
              Built with
            </p>
            <div className="mt-8">
              <TechStack />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Build */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-2xl text-foreground md:text-3xl">
              What We Build
            </h2>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-bright active:scale-[0.98]"
            >
              Book a strategy call
            </a>
          </div>
        </FadeIn>
        <div className="mt-10">
          <Services />
        </div>
      </section>

      {/* Why AI Agents */}
      <section className="border-t border-border-seam bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeIn>
            <h2 className="font-display text-2xl text-foreground md:text-3xl">
              Why AI Agents
            </h2>
          </FadeIn>
          <div className="mt-10">
            <ProblemOutcome />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="border-b border-border-seam">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeIn>
            <h2 className="font-display text-2xl text-foreground md:text-3xl">
              Who This Is For
            </h2>
          </FadeIn>
          <div className="mt-10">
            <Features />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <h2 className="font-display text-2xl text-foreground md:text-3xl">
            What you get
          </h2>
        </FadeIn>
        <div className="mt-10">
          <Benefits />
        </div>
      </section>

      {/* Steps */}
      <section id="process" className="border-y border-border-seam bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeIn>
            <h2 className="font-display text-2xl text-foreground md:text-3xl">
              My Process
            </h2>
          </FadeIn>
          <div className="mt-10">
            <HowIWork />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <h2 className="font-display text-2xl text-foreground md:text-3xl">
            Use Cases
          </h2>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <FadeIn key={project.slug} delay={Math.min(i * 0.05, 0.3)} className="h-full">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-6 py-3 text-sm text-foreground transition-all duration-200 hover:border-white/25 active:scale-[0.98]"
          >
            Explore all case studies
            <ArrowRight weight="bold" className="h-4 w-4" />
          </Link>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <FadeIn>
          <h2 className="font-display text-2xl text-foreground md:text-3xl">
            FAQ
          </h2>
        </FadeIn>
        <div className="mt-8">
          <Faq />
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border-seam bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <FadeIn>
            <h2 className="font-display text-2xl text-foreground md:text-4xl">
              Ready to build yours?
            </h2>
            <p className="mt-3 text-base text-muted">
              Tell me what&apos;s slowing your business down. I&apos;ll build
              the system that fixes it.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-sm text-muted">
              {profile.tagline}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-bright hover:shadow-[0_12px_32px_-12px_rgba(168,40,58,0.6)] active:scale-[0.98]"
            >
              Book a call and let&apos;s talk
              <ArrowRight weight="bold" className="h-4 w-4" />
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
