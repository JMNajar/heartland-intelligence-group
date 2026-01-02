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
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="mt-4 max-w-3xl text-zinc-700">
          Heartland Intelligence Group helps leaders design, deploy, and scale
          practical intelligence systems that drive real outcomes.
        </p>
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
