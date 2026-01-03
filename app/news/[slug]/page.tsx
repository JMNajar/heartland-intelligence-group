import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../posts";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);
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
