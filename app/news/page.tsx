export default function NewsPage() {
  const posts = [
    {
      title: "What we’re building at Heartland Intelligence Group",
      date: "2026-01-01",
      excerpt:
        "A quick look at how we help leaders turn AI into repeatable systems that drive clarity, speed, and results.",
    },
    {
      title: "Three AI workflows every service business should systemize",
      date: "2025-12-20",
      excerpt:
        "Simple automations and copilots that save time weekly without creating chaos.",
    },
    {
      title: "AI adoption: the boring checklist that wins",
      date: "2025-12-05",
      excerpt:
        "Governance, training, and rollout practices that keep teams confident and consistent.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">News</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-700">
        Updates, insights, and field notes from Heartland Intelligence Group.
      </p>

      <div className="mt-10 grid gap-6">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-2xl border border-zinc-200 p-6"
          >
            <div className="text-sm text-zinc-500">{post.date}</div>
            <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-700">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}