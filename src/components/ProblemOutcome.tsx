import { X, Check } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "./FadeIn";

const problems = [
  "Work keeps piling up on the same few people",
  "Leads go cold while you chase follow-ups by hand",
  "Your team answers the same questions every single day",
  "The know-how lives in people's heads, not in your systems",
  "Growing always seems to mean hiring more people",
];

const outcomes = [
  "The work keeps moving, even when you're asleep",
  "Every lead gets a fast reply, the moment they reach out",
  "Customers get accurate answers instantly",
  "Your team's knowledge keeps working, even without the team around",
  "You grow without having to hire for volume",
];

export default function ProblemOutcome() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <FadeIn>
        <div className="h-full rounded-2xl border border-border-subtle bg-surface p-7 transition-colors duration-300 hover:border-white/15">
          <h3 className="font-display text-sm tracking-[0.1em] text-muted uppercase">
            The Challenges
          </h3>
          <ul className="mt-5 space-y-4">
            {problems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <X weight="bold" className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
      <FadeIn delay={0.08}>
        <div className="h-full rounded-2xl border border-border-subtle bg-surface p-7 transition-colors duration-300 hover:border-white/15">
          <h3 className="font-display text-sm tracking-[0.1em] text-accent-bright uppercase">
            The Outcome With AI Agents
          </h3>
          <ul className="mt-5 space-y-4">
            {outcomes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <Check
                  weight="bold"
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-bright"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </div>
  );
}
