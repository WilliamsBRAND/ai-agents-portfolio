import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <FadeIn>
        <p className="text-xs tracking-[0.14em] text-accent-bright uppercase">
          Get in touch
        </p>
        <h1 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
          Let&apos;s build your next AI system
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Voice agents, sales automation, marketing systems, or a full-stack
          app, tell me what&apos;s broken and I&apos;ll show you what it looks
          like automated.
        </p>
        <a
          href="mailto:hello@tomidewilliams.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-bright hover:shadow-[0_12px_32px_-12px_rgba(168,40,58,0.6)] active:scale-[0.98]"
        >
          <EnvelopeSimple weight="bold" className="h-4 w-4" />
          hello@tomidewilliams.com
        </a>
      </FadeIn>
    </section>
  );
}
