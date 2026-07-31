import FadeIn from "./FadeIn";

const steps = [
  {
    title: "We find the real bottleneck",
    description:
      "We map how your business actually works, find where work gets stuck, and agree on what should run itself.",
  },
  {
    title: "We design the agent",
    description:
      "We define the logic, the decisions, and the tools it needs, so it behaves like a careful team member, not a script.",
  },
  {
    title: "We build and connect it",
    description:
      "We build the agent, test it, and connect it to the tools you already use. No switching platforms to make it work.",
  },
  {
    title: "We launch and keep improving",
    description:
      "We put it live, watch how it performs on real work, and keep improving it. It doesn't get left to run on its own.",
  },
];

export default function HowIWork() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <FadeIn key={step.title} delay={Math.min(i * 0.08, 0.3)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle font-display text-sm text-accent-bright">
            {String(i + 1).padStart(2, "0")}
          </div>
          <p className="mt-4 text-xs tracking-[0.1em] text-accent-bright uppercase">
            Step {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-display text-base text-foreground">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {step.description}
          </p>
        </FadeIn>
      ))}
    </div>
  );
}
