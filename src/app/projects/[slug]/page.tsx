import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  PlayCircle,
} from "@phosphor-icons/react/dist/ssr";
import { projects, getProject, getVideoEmbed } from "@/lib/projects";
import visuals from "@/lib/project-visuals.json";
import { toolLogos } from "@/lib/tools";
import FadeIn from "@/components/FadeIn";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function Chapter({ index, label }: { index: string; label: string }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
      <span className="font-display text-sm text-accent-bright">{index}</span>
      <span className="h-px w-6 bg-border-subtle" />
      {label}
    </p>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const visual = visuals[slug as keyof typeof visuals] as string | undefined;
  const video = project.videoUrl ? getVideoEmbed(project.videoUrl) : undefined;
  const metricCols =
    project.impact.metrics.length === 4
      ? "sm:grid-cols-2 md:grid-cols-4"
      : "sm:grid-cols-3";

  const nextProject =
    projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-10">
        <FadeIn>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft
              weight="bold"
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
            />
            All projects
          </Link>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">
            {project.category}
          </p>
          <h1 className="mt-4 font-display text-3xl leading-tight text-foreground md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {project.shortDescription}
          </p>
          <p className="mt-4 text-sm text-foreground">
            Client <span className="text-muted">— {project.client}</span>
          </p>
        </FadeIn>
      </section>

      {/* Product visual */}
      <section className="mx-auto max-w-4xl px-6 pb-8">
        <FadeIn>
          <div
            className={`relative overflow-hidden rounded-2xl border bg-surface-raised ${
              video ? "border-accent" : "border-border-subtle"
            }`}
          >
            {video ? (
              <div className="aspect-video w-full">
                <iframe
                  src={
                    video.provider === "loom"
                      ? `https://www.loom.com/embed/${video.id}`
                      : `https://www.youtube.com/embed/${video.id}`
                  }
                  title={`${project.title} walkthrough`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : visual ? (
              <Image
                src={visual}
                alt={`${project.title} interface`}
                width={1200}
                height={675}
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="h-auto w-full"
              />
            ) : (
              <div className="flex aspect-video items-center justify-center">
                <p className="text-sm text-muted">Product visual</p>
              </div>
            )}
            {!video && (
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3.5 py-1.5 text-xs text-foreground/90 backdrop-blur-sm">
                <PlayCircle weight="light" className="h-4 w-4 text-accent-bright" />
                Walkthrough video coming soon
              </div>
            )}
          </div>
        </FadeIn>
      </section>

      {/* 01 — The brief */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <FadeIn>
          <Chapter index="01" label="The brief" />
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-border-subtle bg-surface">
            <span className="absolute inset-y-0 left-0 w-1 bg-accent" />
            <div className="px-7 py-8 md:px-10 md:py-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                From the client
              </p>
              <p className="mt-5 text-lg leading-relaxed text-foreground md:text-xl">
                {project.brief}
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-border-subtle pt-5">
                <span className="h-px w-8 bg-accent-bright" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  {project.client}
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 02 — Implementation plan */}
      <section className="border-y border-border-seam bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <FadeIn>
            <Chapter index="02" label="Implementation plan" />
            <h2 className="mt-6 font-display text-2xl text-foreground md:text-3xl">
              From brief to build
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              How we turned the client&apos;s challenge into a system their
              team actually uses.
            </p>
          </FadeIn>
          <div className="mt-12">
            {project.implementation.map((step, i) => (
              <FadeIn
                key={step.title}
                delay={i * 0.06}
                className="relative flex gap-5 pb-12 last:pb-0 md:gap-6"
              >
                {i < project.implementation.length - 1 && (
                  <span className="absolute left-[15px] top-9 h-[calc(100%-1.5rem)] w-px bg-border-subtle" />
                )}
                <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-background font-display text-xs text-accent-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1">
                  <h3 className="text-base font-medium text-foreground md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                    {step.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Before & After */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <FadeIn>
          <Chapter index="03" label="Before & After" />
          <h2 className="mt-6 font-display text-2xl text-foreground md:text-3xl">
            What changed
          </h2>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          <FadeIn className="rounded-2xl border border-border-subtle bg-surface p-7 md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Before
            </p>
            <ul className="mt-5 space-y-4">
              {project.before.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-base leading-relaxed text-foreground/90"
                >
                  <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-muted" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="hidden items-center justify-center md:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
              <ArrowRight weight="bold" className="h-4 w-4 text-accent-bright" />
            </span>
          </FadeIn>
          <FadeIn
            delay={0.15}
            className="rounded-2xl border border-accent/30 bg-[#150b0d] p-7 md:p-8"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">
              After
            </p>
            <ul className="mt-5 space-y-4">
              {project.after.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-base leading-relaxed text-foreground"
                >
                  <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent-bright" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* 04 — Why this approach */}
      <section className="mx-auto max-w-4xl px-6 pb-16 md:pb-20">
        <FadeIn>
          <Chapter index="04" label="Why this approach" />
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="mt-8 border-l-2 border-accent-bright pl-6 text-lg leading-relaxed text-foreground md:text-xl md:leading-relaxed">
            {project.whyThisApproach}
          </p>
        </FadeIn>
      </section>

      {/* 05 — Impact & benefits */}
      <section className="border-y border-border-seam bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <FadeIn>
            <Chapter index="05" label="Impact & benefits" />
            <p className="mt-8 max-w-3xl font-display text-xl leading-snug text-foreground md:text-3xl">
              {project.impact.headline}
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div
              className={`mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border-subtle pt-8 ${metricCols}`}
            >
              {project.impact.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    {metric.label}
                  </p>
                  <p className="mt-2 font-display text-xl text-accent-bright md:text-2xl">
                    {metric.value}
                  </p>
                  {metric.description && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {metric.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
          {project.impact.benefits.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {project.impact.benefits.map((benefit, i) => (
              <FadeIn
                key={benefit}
                delay={i * 0.08}
                className="rounded-2xl border border-border-subtle bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
              >
                <Check weight="bold" className="h-4 w-4 text-accent-bright" />
                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  {benefit}
                </p>
              </FadeIn>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* 06 — Business outcomes */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <FadeIn>
          <Chapter index="06" label="Business outcomes" />
          <h2 className="mt-6 font-display text-2xl text-foreground md:text-3xl">
            Business outcomes
          </h2>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {project.keyFeatures.map((feature, i) => (
            <FadeIn
              key={feature}
              delay={i * 0.08}
              className="rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
            >
              <Check weight="bold" className="h-4 w-4 text-accent-bright" />
              <p className="mt-4 text-sm leading-relaxed text-foreground">
                {feature}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 07 — Built with */}
      <section className="border-y border-border-seam bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <FadeIn>
            <Chapter index="07" label="Built with" />
            <h2 className="mt-6 font-display text-2xl text-foreground md:text-3xl">
              Tools & capabilities
            </h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {project.tools.map((tool) => {
                const logo = toolLogos[tool];
                return (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-3 rounded-full border border-border-subtle bg-surface px-5 py-3 transition-colors duration-200 hover:border-white/20"
                  >
                    {logo && (
                      <Image
                        src={logo}
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5 object-contain [filter:brightness(0)_invert(1)]"
                      />
                    )}
                    <span className="text-sm whitespace-nowrap text-foreground">
                      {tool}
                    </span>
                  </span>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Next project */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-24">
        <FadeIn>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between rounded-2xl border-2 border-accent bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-bright"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">
                Next project
              </p>
              <p className="mt-2 font-display text-lg text-foreground">
                {nextProject.title}
              </p>
            </div>
            <ArrowRight
              weight="bold"
              className="h-5 w-5 text-accent-bright transition-transform group-hover:translate-x-1"
            />
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
