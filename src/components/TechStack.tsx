"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";

const stack = [
  { name: "Claude Code", file: "claude.svg" },
  { name: "n8n", file: "n8n.svg" },
  { name: "GoHighLevel", file: "gohighlevel.svg" },
  { name: "ElevenLabs", file: "elevenlabs.svg" },
  { name: "Meta Ads", file: "meta.svg" },
  { name: "Supabase", file: "supabase.svg" },
  { name: "Vercel", file: "vercel.svg" },
  { name: "Next.js", file: "nextdotjs.svg" },
  { name: "OpenAI", file: "openai.svg" },
  { name: "Antigravity", file: "antigravity.svg" },
  { name: "OpenCode", file: "opencode.svg" },
  { name: "Codex", file: "codex.svg" },
  { name: "Perplexity", file: "perplexity.svg" },
  { name: "Cursor", file: "cursor.svg" },
  { name: "Gemini", file: "gemini.svg" },
  { name: "Clay", file: "clay.svg" },
  { name: "Apollo", file: "apollo.svg" },
  { name: "Hunter", file: "hunter.svg" },
  { name: "HubSpot", file: "hubspot.svg" },
  { name: "Instantly", file: "instantly.svg" },
  { name: "Phantombuster", file: "phantombuster.svg" },
  { name: "Taplio", file: "taplio.svg" },
  { name: "Make", file: "make.svg" },
  { name: "Zapier", file: "zapier.svg" },
  { name: "Twilio", file: "twilio.svg" },
  { name: "Vapi", file: "vapi.svg" },
  { name: "Lovable", file: "lovable.svg" },
  { name: "Base44", file: "base44.svg" },
];

function Tool({ name, file }: { name: string; file: string | null }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-full border border-border-subtle bg-surface px-5 py-3 transition-colors duration-200 hover:border-white/20">
      {file ? (
        <Image
          src={`/logos/${file}`}
          alt={name}
          width={20}
          height={20}
          className="h-5 w-5 object-contain [filter:brightness(0)_invert(1)]"
        />
      ) : null}
      <span className="text-sm whitespace-nowrap text-foreground">{name}</span>
    </div>
  );
}

export default function TechStack() {
  const reduce = useReducedMotion();
  const loop = [...stack, ...stack];

  return (
    <div className="marquee-pause relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max gap-4 ${reduce ? "" : "animate-marquee"}`}
        style={reduce ? undefined : { animationDuration: "28s" }}
      >
        {loop.map((tool, i) => (
          <Tool key={`${tool.name}-${i}`} name={tool.name} file={tool.file} />
        ))}
      </div>
    </div>
  );
}
