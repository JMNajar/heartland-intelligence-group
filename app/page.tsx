// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Heartland Intelligence Group
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-zinc-700">
          Practical AI systems for leaders who want clarity, speed, and results.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl border-t px-6 py-16">
<h2 className="text-2xl font-semibold tracking-tight">About Heartland Intelligence Group</h2>

<div className="mt-6 space-y-6 text-zinc-700 leading-8">
  <p>
    Heartland Intelligence Group (HIG) helps organizations turn artificial
    intelligence into real leverage—without the hype, chaos, or half-baked
    experiments.
  </p>

  <p>
    We work with leaders and growth teams who know AI matters, but aren’t
    interested in another shiny tool. They want clarity, systems, and results.
  </p>

  <div className="rounded-xl border bg-zinc-50 p-6">
    <p className="font-semibold text-zinc-900">Our philosophy is simple:</p>
    <p className="mt-2">
      Make AI useful. Make it understandable. Make it profitable.
    </p>
  </div>

  <h3 className="pt-2 text-lg font-semibold text-zinc-900">What We Do</h3>
  <p>
    We deliver AI consulting, training, and applied strategy built for how
    businesses actually operate. That means:
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Clear AI strategy and roadmaps</li>
    <li>Productized AI systems for marketing, operations, and decisions</li>
    <li>Practical training that drives adoption</li>
    <li>Automation that reduces friction and increases output</li>
  </ul>

  <p className="font-medium text-zinc-900">
    No gimmicks. No prompt parlor tricks. Just AI that earns its keep.
  </p>

  <h3 className="pt-2 text-lg font-semibold text-zinc-900">Why We’re Different</h3>
  <p className="text-zinc-900">
    Most firms sell tools. <span className="font-semibold">We build thinking systems.</span>
  </p>

  <p>We prioritize:</p>
  <ul className="list-disc space-y-2 pl-6">
    <li>Execution over buzzwords</li>
    <li>Systems over one-off tactics</li>
    <li>Adoption over overwhelm</li>
    <li>ROI over experimentation theater</li>
  </ul>

  <p className="font-medium text-zinc-900">
    If it doesn’t move the business forward, it doesn’t ship.
  </p>

  <h3 className="pt-2 text-lg font-semibold text-zinc-900">The Team</h3>
  <p>
    HIG is led by Jason Padgett, Harrison Painter, and Ronda Swartz—a senior
    consulting team with deep experience in AI strategy and business
    transformation.
  </p>
  <p className="text-zinc-900">Different disciplines. One standard: execution.</p>

  <h3 className="pt-2 text-lg font-semibold text-zinc-900">Our Mission</h3>
  <p>
    To help organizations cut through complexity and deploy AI that works—
    strategically, ethically, and profitably.
  </p>

  <div className="rounded-xl border p-6">
    <p className="text-zinc-900">
      Because AI shouldn’t feel intimidating.{" "}
      <span className="font-semibold">It should feel like horsepower.</span>
    </p>
  </div>
</div>

      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl border-t px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Services</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="font-semibold">AI Strategy & Systems</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Clear, deployable intelligence systems built for execution.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="font-semibold">Operational Intelligence</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Decision support for leaders who value clarity over noise.
            </p>
          </div>
        </div>
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
