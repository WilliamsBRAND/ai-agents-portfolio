import Link from "next/link";
import Logo from "./Logo";
import { projects, profile } from "@/lib/projects";
import { BOOKING_URL } from "@/lib/booking";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {profile.tagline}
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.1em] text-muted uppercase">
              Company
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/#services" className="text-sm text-foreground transition-colors hover:text-accent-bright">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-sm text-foreground transition-colors hover:text-accent-bright">
                  Process
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.1em] text-muted uppercase">
              Use cases
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-foreground transition-colors hover:text-accent-bright"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.1em] text-muted uppercase">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-foreground transition-colors hover:text-accent-bright">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground transition-colors hover:text-accent-bright"
                >
                  Book a call
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
