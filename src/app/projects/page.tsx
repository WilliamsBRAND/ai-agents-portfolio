import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";

export default function ProjectsIndex() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn>
        <h1 className="font-display text-3xl text-foreground md:text-4xl">
          Use Cases
        </h1>
      </FadeIn>
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={Math.min(i * 0.06, 0.4)} className="h-full">
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
