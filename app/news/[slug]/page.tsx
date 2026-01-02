import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<
  string,
  { title: string; date: string; content: string }
> = {
  "what-were-building": {
    title: "What we’re building at Heartland Intelligence Group",
    date: "2026-01-01",
    content:
      "We’re focused on helping leaders turn AI into repeatable, reliable systems.\n\nNot experiments. Not demos.\nSystems that actually support decisions and execution.",
  },
  "three-ai-workflows": {
    title: "Three AI workflows every service business should systemize",
    date: "2025-12-20",
    content:
      "Most AI value doesn’t come from big ideas.\nIt comes from boring workflows done consistently.",
  },
  "ai-adoption-checklist": {
    title: "AI adoption: the boring checklist that wins",
    date: "2025-12-05",
    content:
      "AI fails when governance and rollout are ignored.\nThis checklist avoids that.",
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/news" className="text-sm text-zinc-600 hover:underline">
        ← Back to News
      </Link>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
        {post.title}
      </h1>
      <div className="mt-2 text-sm text-zinc-500">{post.date}</div>

      <article className="mt-8 space-y-4 text-zinc-800">
        {post.content.split("\n").map((line, i) =>
          line.trim() ? <p key={i}>{line}</p> : null
        )}
      </article>
    </div>
  );
}