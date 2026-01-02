// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Contact
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-zinc-700">
        If you’re exploring practical intelligence systems or want to discuss next
        steps, reach out.
      </p>

      <div className="mt-10">
        <a
          href="mailto:info@heartlandintelligencegroup.com"
          className="inline-flex items-center rounded-md border border-zinc-900 px-6 py-3 text-sm font-medium transition hover:bg-zinc-900 hover:text-white"
        >
          Email Heartland Intelligence Group
        </a>
      </div>
    </div>
  );
}