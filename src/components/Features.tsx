import { Lightning, Stack, Speedometer, CurrencyDollar } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "./FadeIn";

const solutions = [
  {
    audience: "Service providers",
    description:
      "I build AI intake and follow-up systems that qualify leads and book calls for you, so you close more clients without hiring a VA.",
    icon: Lightning,
  },
  {
    audience: "SaaS companies",
    description:
      "I set up AI agents that onboard users, qualify trial leads, and answer support questions, so your team keeps building while the automation handles the rest.",
    icon: Stack,
  },
  {
    audience: "Agencies",
    description:
      "I automate lead intake, reporting, and client communication, so your team spends less time on admin and more time on the work that grows revenue.",
    icon: Speedometer,
  },
  {
    audience: "E-commerce brands",
    description:
      "I set up AI agents that recover lost revenue, answer order questions, and re-engage repeat buyers, without adding to your support team.",
    icon: CurrencyDollar,
  },
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {solutions.map((item, i) => (
        <FadeIn key={item.audience} delay={Math.min(i * 0.06, 0.3)} className="h-full">
          <div className="flex h-full items-start gap-4 rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-accent/10">
              <item.icon className="h-5 w-5 text-accent-bright" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-accent-bright uppercase tracking-wider">
                  {item.audience}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
