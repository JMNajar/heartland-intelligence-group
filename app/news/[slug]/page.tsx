import { notFound } from "next/navigation";

const posts: Record<
  string,
  { title: string; date: string; content: string }
> = {
  "what-were-building": {
    title: "What we’re building at Heartland Intelligence Group",
    date: "2026-01-01",
    content: `
We’re focused on helping leaders turn artificial intelligence into
repeatable, reliable systems.

Not experiments. Not demos.
Systems that actually support decisions and execution.
`,
  },

  "three-ai-workflows": {
    title: "Three AI workflows every service business should systemize",
    date: "2025-12-20",
    content: `
Most AI value doesn’t come from big ideas.
It comes from boring workflows done consistently.
`,
  },

  "ai-adoption-checklist": {
    title: "AI adoption: the boring checklist that wins",
    date: "2025-12-05",
    content: `
AI fails when governance and rollout are ignored.
This checklist avoids that.
`,
  },
};

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts[params.slug];

  if (!post) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {post.title}
      </h1>

      <div className="mt-2 text-sm text-zinc-500">{post.date}</div>

      <article className="prose prose-zinc mt-8 max-w-none">
        {post.content.split("\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>
    </div>
  );
}