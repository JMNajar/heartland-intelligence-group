import Link from "next/link";

const posts = [
  {
    slug: "what-were-building",
    title: "What we’re building at Heartland Intelligence Group",
    date: "2026-01-01",
    excerpt:
      "A quick look at how we help leaders turn AI into repeatable systems that drive clarity, speed, and results.",
  },
  {
    slug: "three-ai-workflows",
    title: "Three AI workflows every service business should systemize",
    date: "2025-12-20",
    excerpt:
      "Simple automations and copilots that save time weekly without creating chaos.",
  },
  {
    slug: "ai-adoption-checklist",
    title: "AI adoption: the boring checklist that wins",
    date: "2025-12-05",
    excerpt:
      "Governance, training, and rollout practices that keep teams confident and consistent.",
  },
];

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">News</h1>

      <p className="mt-4 max-w-2xl text-lg text-zinc-700">
        Updates, insights, and field notes from Heartland Intelligence Group.
      </p>

      <div className="mt-12 grid gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border p-6 transition hover:bg-zinc-50"
          >
            <div className="text-sm text-zinc-500">{post.date}</div>

            <h2 className="mt-2 text-xl font-semibold">
              <Link href={`/news/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>

            <p className="mt-2 text-sm text-zinc-700">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}