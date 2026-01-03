// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16">
<h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
  Applied AI for Leaders Who Need Results — Not Experiments
</h1>

<p className="mt-5 max-w-3xl text-lg text-zinc-700">
  AI doesn’t fail because it’s complex. It fails because it’s applied without
  discipline.
</p>

<p className="mt-4 max-w-3xl text-lg text-zinc-700">
  Heartland Intelligence Group helps leaders turn AI into a measurable operating
  advantage—embedded in real workflows, governed by leadership, and tied directly
  to outcomes.
</p>

<p className="mt-4 font-medium text-zinc-900">
  No hype. No chaos. Just AI that works.
</p>

<div className="mt-8">
  <Link
    href="/contact"
    className="inline-flex items-center rounded-md border border-zinc-900 px-6 py-3 text-sm font-medium transition hover:bg-zinc-900 hover:text-white"
  >
    Start with an AI Clarity Session
  </Link>
</div>

      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl border-t px-6 py-16">
<h2 className="text-2xl font-semibold tracking-tight">About Heartland Intelligence Group</h2>

<h2 className="text-2xl font-semibold tracking-tight">
  The Problem Isn’t AI. It’s Application.
</h2>

<div className="mt-6 space-y-6 text-zinc-700 leading-8">
  <p>
    Most organizations already have AI tools. What they don’t have is alignment
    on where AI should matter, a system that turns insight into execution, or
    governance that keeps speed from becoming risk.
  </p>

  <p>
    So AI gets bolted on. Teams ignore it. Value leaks quietly.
  </p>

  <p className="font-medium text-zinc-900">
    That’s not a technology failure. That’s a leadership gap.
  </p>

  <div className="rounded-xl border bg-zinc-50 p-6">
    <p className="font-semibold text-zinc-900">How HIG Approaches AI</p>
    <p className="mt-2">
      We don’t start with tools. We start with how your business actually runs.
    </p>
  </div>

  <ul className="list-disc space-y-2 pl-6">
    <li><strong>Align</strong> objectives, constraints, and ownership</li>
    <li><strong>Instrument</strong> friction, delays, and decision bottlenecks</li>
    <li><strong>Design</strong> AI directly against revenue, cost, or leverage</li>
    <li><strong>Integrate</strong> AI into real workflows</li>
    <li><strong>Govern</strong> for security, adoption, and compounding value</li>
  </ul>

  <p className="font-medium text-zinc-900">
    This is how AI becomes an operating system—not a distraction.
  </p>
</div>


      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl border-t px-6 py-16">
<h2 className="text-2xl font-semibold tracking-tight">
  What We Deliver
</h2>

<p className="mt-4 max-w-3xl text-zinc-700 leading-8">
  We design and implement AI systems that operate inside your business—not
  alongside it. Everything we deliver is built to support execution, governance,
  and measurable outcomes.
</p>

<div className="mt-8 grid gap-6 md:grid-cols-2">
  <div className="rounded-lg border p-6">
    <h3 className="font-semibold">Executive AI Strategy</h3>
    <p className="mt-2 text-sm text-zinc-700">
      Clear roadmaps that align AI to business priorities, ownership, and risk—
      before tools or vendors enter the conversation.
    </p>
  </div>

  <div className="rounded-lg border p-6">
    <h3 className="font-semibold">Applied AI Systems</h3>
    <p className="mt-2 text-sm text-zinc-700">
      Productized AI embedded directly into operations, leadership workflows, and
      decision-making—not demos or pilots.
    </p>
  </div>

  <div className="rounded-lg border p-6">
    <h3 className="font-semibold">Governance & Infrastructure</h3>
    <p className="mt-2 text-sm text-zinc-700">
      Security, controls, and operating guardrails that allow speed without
      introducing exposure or chaos.
    </p>
  </div>

  <div className="rounded-lg border p-6">
    <h3 className="font-semibold">Adoption & Enablement</h3>
    <p className="mt-2 text-sm text-zinc-700">
      Practical training and systems that teams actually use—so AI compounds
      instead of collecting dust.
    </p>
  </div>
</div>

<p className="mt-8 font-medium text-zinc-900">
  If it doesn’t create leverage, it doesn’t ship.
</p>

<div className="mt-6">
  <Link
    href="/contact"
    className="text-sm font-medium text-zinc-900 underline underline-offset-4 hover:no-underline"
  >
    Pressure-test your current AI approach →
  </Link
      </section>

      {/* CTA */}
      <section className="border-t bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Ready to talk?</h2>

          <p className="mx-auto mt-4 max-w-xl text-zinc-700">
            If you’re exploring practical intelligence systems or need clarity on next
            steps, let’s start a conversation.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-zinc-900 px-6 py-3 text-sm font-medium transition hover:bg-zinc-900 hover:text-white"
            >
              Contact Heartland Intelligence Group
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
