import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/lib/projects";
import covers from "@/lib/project-covers.json";

export default function ProjectCard({ project }: { project: Project }) {
  const cover = covers[project.slug as keyof typeof covers];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
    >
      {cover ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-raised">
          <Image
            src={cover}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground/85 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      ) : (
        <div className="relative flex aspect-[16/10] w-full items-center justify-center border-b border-border-subtle bg-surface-raised">
          <span className="text-xs font-medium uppercase tracking-wider text-muted">
            {project.category}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between gap-6 p-6">
        <div>
          <h3 className="font-display text-lg text-foreground">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.shortDescription}
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-sm font-medium text-accent-bright">
          Explore case study
          <ArrowUpRight
            weight="regular"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </Link>
  );
}
