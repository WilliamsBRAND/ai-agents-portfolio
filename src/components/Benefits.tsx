import FadeIn from "./FadeIn";

const benefits = [
  {
    title: "Work gets done faster",
    description:
      "The agent moves work between your tools and your team automatically, so nothing gets stuck waiting on a review, follow-up, or handoff.",
  },
  {
    title: "You spend less on operations",
    description:
      "The repetitive work that once needed manual effort now runs automatically, allowing the same team to achieve more without expanding.",
  },
  {
    title: "Consistent execution, 24/7",
    description:
      "Agents don't get tired, don't clock out, and don't miss important tasks. Your business keeps running day and night.",
  },
  {
    title: "Fewer handoffs, fewer delays",
    description:
      "Work flows from one system to the next automatically, so nothing sits waiting for someone to move it forward.",
  },
  {
    title: "It scales as your business grows",
    description:
      "When demand increases, the system scales with it. You don't have to hire ahead of every busy season.",
  },
  {
    title: "Decisions you can trust",
    description:
      "Every agent follows clear rules and processes, giving you consistent outcomes every time, with full visibility into every decision.",
  },
];

export default function Benefits() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit, i) => (
        <FadeIn key={benefit.title} delay={Math.min(i * 0.05, 0.3)}>
          <div className="border-l border-border-subtle pl-5 transition-colors duration-300 hover:border-white/25">
            <h3 className="font-display text-base text-foreground">
              {benefit.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {benefit.description}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
