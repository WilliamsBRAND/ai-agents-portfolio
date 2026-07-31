import {
  Phone,
  ChatCircleDots,
  Megaphone,
  Code,
  Robot,
  ChartLineUp,
} from "@phosphor-icons/react/dist/ssr";

const items = [
  {
    icon: Phone,
    title: "Voice agents",
    description:
      "AI agents that call, qualify, and book appointments the moment a lead comes in.",
  },
  {
    icon: ChatCircleDots,
    title: "Sales agents",
    description:
      "Conversational AI that answers questions, handles objections, and updates your CRM.",
  },
  {
    icon: Megaphone,
    title: "Marketing agents",
    description:
      "Research, content, and campaign automation that runs end to end.",
  },
  {
    icon: Code,
    title: "Full-stack apps",
    description:
      "Custom platforms, dashboards, and content systems, built and shipped with Claude Code.",
  },
  {
    icon: Robot,
    title: "CRM automation",
    description:
      "Lead scoring, pipeline, and payment automation inside GoHighLevel.",
  },
  {
    icon: ChartLineUp,
    title: "Growth systems",
    description:
      "GTM strategy and paid acquisition wired straight into the automation that converts it.",
  },
];

export default function WhatIBuild() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-border-subtle bg-surface p-6"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
            <item.icon weight="regular" className="h-5 w-5 text-accent-bright" />
          </div>
          <h3 className="mt-4 font-display text-base text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
