import Image from "next/image";
import FadeIn from "./FadeIn";
import visuals from "@/lib/service-visuals.json";

// Toggle: set to false to revert to text-only cards
const VISUAL_MODE = true;

const services: {
  title: string;
  description: string;
  visual: keyof typeof visuals;
}[] = [
  {
    title: "AI Sales Agents",
    description:
      "Qualify leads, follow up, update your CRM, and keep deals moving, without a single lead going cold because someone was busy.",
    visual: "sales",
  },
  {
    title: "AI Customer Support Agents",
    description:
      "Answer the questions customers keep asking, fix the simple issues, and only hand it to a person when it truly needs one.",
    visual: "support",
  },
  {
    title: "AI Operations Agents",
    description:
      "Handle the internal work that eats your team's time: reporting, data, coordination, and documentation.",
    visual: "ops",
  },
  {
    title: "Marketing & Outreach Agents",
    description:
      "Write drafts, personalise outreach, and run campaigns across every platform, without the manual grind.",
    visual: "marketing",
  },
  {
    title: "Custom Internal AI Agents",
    description:
      "Built around your specific systems, your data, and the way your business actually works, not a template.",
    visual: "custom",
  },
  {
    title: "AI Voice Agents",
    description:
      "Answer and place real phone calls, qualify callers, book appointments, and recover missed calls the moment they happen.",
    visual: "voice",
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <FadeIn key={service.title} delay={Math.min(i * 0.05, 0.3)} className="h-full">
          <div className="group h-full overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-white/15">
            {VISUAL_MODE && (
              <div className="relative h-44 w-full overflow-hidden border-b border-border-seam bg-surface-raised/50">
                <Image
                  src={visuals[service.visual]}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-6 pt-4">
              <h3 className="font-display text-base text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
