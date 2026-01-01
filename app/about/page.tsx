export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          About Heartland Intelligence Group
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-700">
          Heartland Intelligence Group helps leaders turn AI into practical,
          repeatable systems—so teams move faster, decisions get clearer, and
          results show up on the scoreboard.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-zinc-200 p-6">
            <h2 className="text-base font-semibold">What we do</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              We identify high-value workflows, design the right AI approach, and
              help you implement tools your team actually uses—without turning
              your business into a science experiment.
            </p>
          </section>

          <section className="rounded-2xl border border-zinc-200 p-6">
            <h2 className="text-base font-semibold">How we work</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              Simple, measurable, and ethical. We focus on clarity, execution,
              and outcomes—using AI to support people, not replace them.
            </p>
          </section>
        </div>

        <section className="mt-10 rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-base font-semibold">What you can expect</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            <li>A clear AI roadmap aligned to business goals</li>
            <li>Practical workflows your team can run weekly</li>
            <li>Templates, prompts, and training that stick</li>
            <li>Focus on ROI: time saved, revenue gained, risk reduced</li>
          </ul>
        </section>

        <div className="mt-10">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Talk to us
          </a>
        </div>
      </main>
    </div>
  );
}