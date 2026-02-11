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

function ScanIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <line x1="7" y1="12" x2="17" y2="12" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function SmartphoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const steps = [
  {
    icon: <UploadIcon />,
    title: "Connect Your Bank",
    description:
      "Securely link your credit card or bank account, or simply upload a statement. We never store your credentials.",
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

const features = [
  {
    icon: <ScanIcon />,
    title: "Transaction Scanning",
    description:
      "Automatically analyze your spending and identify companies with questionable ethics records.",
  },
  {
    icon: <LeafIcon />,
    title: "Ethical Alternatives",
    description:
      "Get personalized recommendations for ethical brands and services that align with your values.",
  },
  {
    icon: <FilterIcon />,
    title: "Cause-Based Filtering",
    description:
      "Filter by the causes you care about most — environment, labor, human rights, political donations, and more.",
  },
  {
    icon: <ShieldIcon />,
    title: "Privacy First",
    description:
      "Your financial data is encrypted end-to-end. We never sell your data or share it with third parties.",
  },
  {
    icon: <SmartphoneIcon />,
    title: "iOS & Android",
    description:
      "A native mobile experience on both platforms, designed for quick checks on the go.",
  },
  {
    icon: <UsersIcon />,
    title: "Community Driven",
    description:
      "Powered by a growing community of conscious consumers who research and verify company ethics data.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-foreground">
            dirty<span className="text-gradient">money</span>
          </span>
          <a
            href="#waitlist"
            className="rounded-full bg-emerald px-5 py-2 text-sm font-semibold text-background transition-all hover:bg-emerald-light hover:shadow-lg hover:shadow-emerald/20"
          >
            Join the Waitlist
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
        {/* Background glow */}
        <div className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="animate-fade-in mb-6 inline-block rounded-full border border-emerald/20 bg-emerald/5 px-4 py-1.5 text-sm font-medium text-emerald-light">
            Coming soon to iOS & Android
          </div>

          <h1 className="animate-fade-in-up text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Know Where Your
            <br />
            <span className="text-gradient">Money Really Goes</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Dirty Money scans your bank transactions, flags companies funding
            unethical causes, and helps you find alternatives that align with
            your values. Vote with your wallet.
          </p>

          <div className="animate-fade-in-up delay-400 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#waitlist"
              className="animate-pulse-glow rounded-full bg-emerald px-8 py-3.5 text-base font-semibold text-background transition-all hover:bg-emerald-light"
            >
              Get Early Access
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-border px-8 py-3.5 text-base font-semibold text-foreground transition-all hover:border-emerald/30 hover:bg-surface-light"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="animate-fade-in delay-700 absolute bottom-10 flex flex-col items-center gap-2 text-muted">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-muted/50 to-transparent" />
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
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald/10 text-emerald transition-colors group-hover:bg-emerald/20">
                  {step.icon}
                </div>
                <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-emerald">
                  Step {i + 1}
                </span>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for <span className="text-gradient">Conscious Consumers</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Every feature is designed to make ethical spending effortless.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass-card group rounded-2xl p-7 transition-all duration-300"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald/10 text-emerald transition-colors group-hover:bg-emerald/20">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Waitlist CTA ── */}
      <section id="waitlist" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Make Your
            <br />
            <span className="text-gradient">Money Matter?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Join the waitlist to get early access when we launch. Be one of the
            first to take control of where your money goes.
          </p>

          <div className="mx-auto mt-10 max-w-md">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border/50 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm font-semibold tracking-tight text-foreground">
            dirty<span className="text-gradient">money</span>
          </span>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Dirty Money. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
