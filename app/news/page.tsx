import Link from "next/link";
import { posts } from "./posts";

export default function NewsPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">News</h1>

      <p className="mt-4 max-w-2xl text-lg text-zinc-700">
        Updates, insights, and field notes from Heartland Intelligence Group.
      </p>

      <div className="mt-12 grid gap-8">
        {sorted.map((post) => (
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
