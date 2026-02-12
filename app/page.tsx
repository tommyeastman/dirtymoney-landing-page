import Image from "next/image";
import { WaitlistForm } from "./components/WaitlistForm";

function UploadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

function SwitchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}


const steps = [
  {
    icon: <UploadIcon />,
    title: "Connect Your Bank",
    description:
      "Securely link your credit card or bank account. We never store your credentials.",
  },
  {
    icon: <FlagIcon />,
    title: "See Who You're Funding",
    description:
      "We scan your transactions and flag every company tied to causes you care about — from climate to labor rights.",
  },
  {
    icon: <SwitchIcon />,
    title: "Switch to Ethical Alternatives",
    description:
      "Discover vetted, ethical replacements for flagged companies. Vote with your wallet and make your money matter.",
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 z-50 w-full border-b border-border-light/50 bg-hero-bg/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-hero-heading">
            dirty<span className="text-gradient-dark">money</span>
          </span>
          <a
            href="#waitlist"
            className="rounded-full bg-emerald px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-emerald-dark hover:shadow-lg hover:shadow-emerald/20"
          >
            Join the Waitlist
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero-section relative overflow-hidden px-6 pt-24 pb-16 text-center">
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="animate-fade-in mb-8 inline-block rounded-full border border-emerald/30 bg-emerald/10 px-4 py-1.5 text-sm font-medium text-emerald-dark">
            Coming soon to iOS & Android
          </div>

          <h1 className="animate-fade-in-up text-4xl font-bold leading-[1.1] tracking-tight text-hero-heading sm:text-5xl md:text-6xl">
            Vote with Your{" "}
            <span className="text-gradient-dark">Wallet.</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mx-auto mt-4 max-w-xl text-base leading-relaxed text-hero-muted sm:text-lg">
            Dirty Money scans your bank transactions, flags companies funding
            unethical causes, and helps you find alternatives that align with
            your values.
          </p>

        </div>

        <div className="mt-12 flex justify-center">
          <Image
            src="/hero-image.png"
            alt="Dirty Money app screenshot"
            width={800}
            height={800}
            className="w-full max-w-md rounded-2xl"
            priority
          />
        </div>

        <div className="animate-fade-in-up delay-400 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#waitlist"
              className="animate-pulse-glow rounded-full bg-emerald px-8 py-3 text-base font-semibold text-white transition-all hover:bg-emerald-dark"
            >
              Get Early Access
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-border-muted px-8 py-3 text-base font-semibold text-hero-heading transition-all hover:border-emerald hover:text-emerald-dark"
            >
              See How It Works
            </a>
          </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Three simple steps to take control of your spending and align your
              money with your morals.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="glass-card group relative rounded-2xl p-8 transition-all duration-300"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-dark/15 text-emerald-dark transition-colors group-hover:bg-emerald-dark/25">
                  {step.icon}
                </div>
                <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-emerald-dark">
                  Step {i + 1}
                </span>
                <h3 className="mb-3 text-xl font-bold text-hero-heading">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-hero-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built for Conscious Consumers ── */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for <span className="text-gradient">Conscious Consumers</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Every feature is designed to make ethical spending effortless.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <Image
              src="/dirtymoney_single_character.png"
              alt="Dirty Money character"
              width={800}
              height={800}
              className="w-full max-w-md rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ── Waitlist CTA ── */}
      <section id="waitlist" className="bg-hero-bg px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-hero-heading sm:text-4xl">
            Ready to Make Your
            <br />
            <span className="text-gradient-dark">Money Matter?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-hero-muted">
            Join the waitlist to get early access when we launch. Be one of the
            first to take control of where your money goes.
          </p>

          <div className="mx-auto mt-10 max-w-md">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-hero-bg border-t border-border-light px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm font-semibold tracking-tight text-hero-heading">
            dirty<span className="text-gradient-dark">money</span>
          </span>
          <p className="text-sm text-hero-muted">
            &copy; {new Date().getFullYear()} Dirty Money. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
