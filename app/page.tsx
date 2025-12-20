export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Top bar */}
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-tight">
            Heartland Intelligence Group
          </div>

          <nav className="hidden gap-6 text-sm text-zinc-700 md:flex">
            <a className="hover:text-zinc-950" href="#services">Services</a>
            <a className="hover:text-zinc-950" href="#how">How it works</a>
            <a className="hover:text-zinc-950" href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Book a call
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-5xl px-6">
        <section className="py-16 md:py-20">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Practical AI systems for leaders who want clarity, speed, and measurable results.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700">
            We help service businesses and startups productize and systemize marketing and operations with AI—
            so you get consistent visibility and scalable profitability.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Get a plan in 30 minutes
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              See what we do
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <div className="text-sm font-semibold">AI Strategy</div>
              <div className="mt-2 text-sm text-zinc-700">
                Clear roadmap, use-cases, and a “what to automate first” plan.
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <div className="text-sm font-semibold">AI Training</div>
              <div className="mt-2 text-sm text-zinc-700">
                Teams learn to use AI safely and effectively in real workflows.
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5">
              <div className="text-sm font-semibold">Implementation</div>
              <div className="mt-2 text-sm text-zinc-700">
                Build the systems—prompts, automations, and dashboards—so it sticks.
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-14">
          <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-zinc-50 p-6">
              <div className="text-sm font-semibold">1) Diagnose</div>
              <p className="mt-2 text-sm leading-7 text-zinc-700">
                We map your offers, funnel, and bottlenecks to find the fastest wins.
              </p>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-6">
              <div className="text-sm font-semibold">2) Systemize</div>
              <p className="mt-2 text-sm leading-7 text-zinc-700">
                We turn what works into repeatable playbooks your team can run.
              </p>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-6">
              <div className="text-sm font-semibold">3) Automate</div>
              <p className="mt-2 text-sm leading-7 text-zinc-700">
                We implement AI workflows that produce consistent output without chaos.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-6">
              <div className="text-sm font-semibold">Executive AI Sprint</div>
              <p className="mt-2 text-sm leading-7 text-zinc-700">
                A focused engagement to define use-cases, guardrails, and a 90-day plan.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-6">
              <div className="text-sm font-semibold">AI Enablement for Teams</div>
              <p className="mt-2 text-sm leading-7 text-zinc-700">
                Training + templates so your team can execute consistently and safely.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-6">
              <div className="text-sm font-semibold">Marketing Systems w/ AI</div>
              <p className="mt-2 text-sm leading-7 text-zinc-700">
                Content, email, outreach, and offer systems built to run on repeat.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-6">
              <div className="text-sm font-semibold">Custom AI Workflow Build</div>
              <p className="mt-2 text-sm leading-7 text-zinc-700">
                Automations and AI assistants tailored to your operations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="rounded-3xl bg-zinc-900 p-8 text-white md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">Want a site that actually sells?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-200">
              Tell us what you sell and what’s inconsistent right now. We’ll map the fastest path to
              consistent visibility and a system your team can run.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
                href="mailto:info@yourdomain.com"
              >
                Email us
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                href="#"
              >
                Schedule a call
              </a>
            </div>
          </div>
        </section>

        <footer className="py-10 text-sm text-zinc-500">
          © {new Date().getFullYear()} Heartland Intelligence Group. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
