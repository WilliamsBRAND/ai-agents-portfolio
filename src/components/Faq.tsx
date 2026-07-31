"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

const faqs = [
  {
    q: "What business problems can AI agents solve?",
    a: "AI agents automate repetitive work, improve response times, reduce operational costs, eliminate bottlenecks, and help your team focus on higher-value work.",
  },
  {
    q: "Which processes should I automate first?",
    a: "We typically start with the workflows that consume the most time or have the biggest impact, such as lead qualification, customer support, internal operations, or sales follow-up.",
  },
  {
    q: "Will AI agents replace my team?",
    a: "No. AI agents are designed to handle repetitive tasks so your team can focus on work that requires human judgment, creativity, and relationships.",
  },
  {
    q: "How quickly can I expect to see results?",
    a: "Many businesses begin seeing improvements within weeks, with measurable gains as more workflows are automated over time.",
  },
  {
    q: "Can AI agents integrate with my existing software?",
    a: "Yes. We build AI agents that integrate with your existing CRM, communication tools, databases, APIs, and other business systems.",
  },
  {
    q: "How secure is my business data?",
    a: "Security is considered from the start. We implement appropriate access controls, permissions, and secure integrations based on your business requirements.",
  },
  {
    q: "How much does an AI agent cost?",
    a: "Every project is different. Pricing depends on the complexity, integrations, and scope. After an initial discovery call, we'll provide a tailored proposal.",
  },
  {
    q: "How long does implementation take?",
    a: "Most projects are completed within 2\u20136 weeks, depending on the complexity of the solution and the systems involved.",
  },
  {
    q: "What happens after the system goes live?",
    a: "We monitor performance, make improvements where needed, and provide ongoing support to ensure your AI agents continue delivering value.",
  },
  {
    q: "Can I start with a small project first?",
    a: "Absolutely. Most clients begin with a single high-impact workflow before expanding into additional AI agents and automations.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border-subtle">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="py-2">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 rounded-lg px-3 py-4 text-left transition-colors duration-200 hover:bg-surface"
              aria-expanded={isOpen}
            >
              <h3 className="font-display text-base text-foreground">
                {item.q}
              </h3>
              <CaretDown
                weight="bold"
                className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-accent-bright" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <p className="px-3 pb-5 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
