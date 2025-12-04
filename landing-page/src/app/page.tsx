import Link from "next/link";
import {
  ArrowRight,
  Compass,
  LineChart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Ambient Strategy",
    description:
      "Autonomous briefings surface the signal you need before standups, investor calls, and launches.",
    icon: Sparkles,
  },
  {
    title: "Adaptive Sprints",
    description:
      "Dynamic sprint maps rebalance priorities in real time as velocity or goals shift across the team.",
    icon: Compass,
  },
  {
    title: "Risk Sentinel",
    description:
      "Early warning monitors sense blockers across product, growth, and revenue before deadlines slip.",
    icon: ShieldCheck,
  },
  {
    title: "Story Metrics",
    description:
      "Narrative dashboards translate metrics into plain language updates for every stakeholder.",
    icon: LineChart,
  },
];

const milestones = [
  {
    stage: "Capture",
    title: "Collect every signal automatically",
    description:
      "Sync GitHub, Linear, Notion, and Slack to funnel team activity into a single adaptive canvas.",
  },
  {
    stage: "Align",
    title: "Autogenerate shared context",
    description:
      "Daily pulses summarize progress, surface risks, and align teams on what matters most.",
  },
  {
    stage: "Accelerate",
    title: "Ship with confident clarity",
    description:
      "Predictive nudges unblock owners in real time so momentum compounds week over week.",
  },
];

const metrics = [
  {
    label: "Velocity Lift",
    value: "37%",
    caption: "average increase in planned vs. shipped work",
  },
  {
    label: "Signal Compression",
    value: "11x",
    caption: "less noise hitting founders & leads",
  },
  {
    label: "Teams Orchestrated",
    value: "3.2K+",
    caption: "deployments from early-stage to Series C",
  },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center opacity-80">
        <div className="h-[520px] w-[520px] rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-indigo-400 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute left-24 top-72 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-12 top-32 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24 pt-10 sm:px-10 lg:px-16">
        <nav className="flex items-center justify-between rounded-full border border-slate-200/40 bg-white/80 px-6 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-sky-400 to-indigo-500 text-white shadow-lg">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">
              Lumenflow
            </span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <Link href="#platform" className="transition hover:text-slate-900">
              Platform
            </Link>
            <Link href="#features" className="transition hover:text-slate-900">
              Features
            </Link>
            <Link href="#milestones" className="transition hover:text-slate-900">
              Flow
            </Link>
            <Link href="#contact" className="transition hover:text-slate-900">
              Launch
            </Link>
          </div>
          <Link
            href="#contact"
            className="group hidden items-center gap-2 rounded-full border border-slate-900/10 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg md:flex"
          >
            Request access
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </nav>

        <main className="mt-24 flex flex-1 flex-col gap-24">
          <section className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-200/80 bg-white/80 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-600 shadow-sm">
                Minimal operating system
              </span>
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Orchestrate{" "}
                <span className="bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
                  momentum
                </span>{" "}
                for your entire startup.
              </h1>
              <p className="text-lg leading-8 text-slate-600 md:max-w-xl">
                Lumenflow turns scattered updates into one ambient workspace where founders, PMs, and
                builders stay aligned without meetings. Plans stay clear. Teams stay in flow.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="group flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
                >
                  Start the pilot
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#features"
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900"
                >
                  Explore the product
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 sm:max-w-xl">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col border-slate-200">
                    <span className="text-3xl font-semibold text-slate-900">
                      {metric.value}
                    </span>
                    <span className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      {metric.label}
                    </span>
                    <p className="mt-2 text-xs text-slate-500">{metric.caption}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex h-full flex-col justify-end">
              <div className="glass-panel relative h-full w-full overflow-hidden rounded-[32px] border border-slate-200/60 bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),_transparent_60%)]" />
                <header className="flex items-center justify-between border-b border-slate-200/60 px-6 py-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      flow status
                    </p>
                    <h2 className="text-lg font-semibold text-slate-900">
                      Launch Week Control Room
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
                    Live pulse
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                </header>
                <div className="space-y-6 px-6 py-8">
                  <div className="flex flex-col gap-3 rounded-2xl border border-emerald-100/70 bg-emerald-50/70 p-4">
                    <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.28em] text-emerald-500">
                      Signal Briefing
                      <span className="rounded-full bg-white/60 px-2 py-1 text-[10px] text-emerald-500">
                        +12 clarity
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-slate-700">
                      Growth funnel stabilised. Engineering velocity up 9%. Focus remains on onboarding
                      sequence experiment shipping Friday 14:00 UTC.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200/60 p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                        Sprint focus
                      </span>
                      <span className="text-xs text-emerald-500">93% aligned</span>
                    </div>
                    <div className="mt-4 space-y-4">
                      {[
                        { label: "Activation flow refresh", progress: 82 },
                        { label: "Investor data room", progress: 64 },
                        { label: "Lifecycle experiment A/B", progress: 45 },
                      ].map((item) => (
                        <div key={item.label} className="space-y-2">
                          <div className="flex items-center justify-between text-sm text-slate-600">
                            <span>{item.label}</span>
                            <span className="font-medium text-slate-900">
                              {item.progress}%
                            </span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-slate-200/70">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400"
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                      next best action
                    </p>
                    <p className="mt-3 text-sm text-slate-700">
                      Align marketing and product owners on onboarding timeline. Suggested sync in 18
                      minutes with AI-notes generated automatically.
                    </p>
                    <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-slate-900 px-4 py-2 text-xs font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
                      Initiate warm intro
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="space-y-12">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Signal clarity
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Designed for teams who crave fewer meetings and sharper focus.
                </h2>
              </div>
              <Link
                href="#milestones"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900"
              >
                See the operating flow
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-8 transition hover:-translate-y-1 hover:border-slate-200 hover:shadow-2xl"
                >
                  <feature.icon className="h-10 w-10 text-slate-900 transition group-hover:scale-105 group-hover:text-emerald-500" />
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                    Learn more
                    <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-emerald-500" />
                  </div>
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-200 via-sky-200 to-white opacity-0 blur-3xl transition group-hover:opacity-80" />
                </div>
              ))}
            </div>
          </section>

          <section id="milestones" className="space-y-12">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Startup rhythm
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  An operating cadence built to keep founders and teams in sync.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                Lumenflow blends AI summarization with human intent, so every milestone stays tethered
                to the company narrative, not another dashboard.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {milestones.map((milestone) => (
                <div
                  key={milestone.stage}
                  className="relative flex flex-col rounded-3xl border border-slate-200/70 bg-white/80 p-8 transition hover:-translate-y-1 hover:border-slate-200 hover:shadow-xl"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {milestone.stage}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {milestone.description}
                  </p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                  <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200/80 text-[10px] font-semibold text-slate-600 ring-4 ring-white"
                        >
                          {["UX", "PM", "ENG"][i - 1]}
                        </div>
                      ))}
                    </div>
                    <span>Auto-briefings across teams stay synced.</span>
                  </div>
                  <div className="pointer-events-none absolute -bottom-6 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-200 to-emerald-100 opacity-0 blur-2xl transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </section>

          <section
            id="platform"
            className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-slate-900 px-10 py-12 text-white shadow-2xl"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  Unified clarity layer
                </p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  A canvas where strategy, execution, and narrative live together.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  Think of Lumenflow as the silent operator: it watches your tools, synthesizes signals,
                  and keeps the entire company pointed in the same direction. No extra decks, no status
                  meetings—just clarity, on demand.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Integrations", value: "40+" },
                  { label: "AI co-pilots", value: "6" },
                  { label: "Real-time sync", value: "Sub-30s" },
                  { label: "Security posture", value: "SOC2-in-progress" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-200">
                      {item.label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="rounded-[32px] border border-slate-200/70 bg-white/90 px-10 py-12 shadow-2xl"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Launch partners
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                  High-trust pilots opening monthly. Join the next cohort.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  We onboard early-stage teams who value intentional design and deep execution. Drop
                  your email and we&apos;ll share a curated walkthrough tailored to your stack.
                </p>
              </div>
              <form className="glass-panel flex w-full max-w-md flex-col gap-3 rounded-3xl p-6">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Work email
                </label>
                <input
                  type="email"
                  placeholder="you@startup.com"
                  className="w-full rounded-2xl border border-slate-200/60 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
                  required
                />
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Team size
                </label>
                <select
                  className="w-full rounded-2xl border border-slate-200/60 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
                  defaultValue="scale"
                >
                  <option value="seed">2-10</option>
                  <option value="scale">11-35</option>
                  <option value="growth">36-80</option>
                  <option value="enterprise">80+</option>
                </select>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
                >
                  Request a demo
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-slate-500">
                  By submitting, you agree to curated product updates. No noise—only momentum.
                </p>
              </form>
            </div>
          </section>
        </main>

        <footer className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-slate-200/60 py-6 text-xs text-slate-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Lumenflow Labs. Built for the ambitious.
          </span>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/" className="hover:text-slate-900">
              Terms
            </Link>
            <Link href="/" className="hover:text-slate-900">
              Status
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
