import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../posts";

function renderBlogContent(content: string) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");

  const blocks: React.ReactNode[] = [];
  let listBuffer: string[] = [];

  const flushList = (keyBase: string) => {
    if (listBuffer.length === 0) return;
    blocks.push(
      <ul key={`${keyBase}-ul`} className="my-4 list-disc space-y-2 pl-6">
        {listBuffer.map((item, idx) => (
          <li key={`${keyBase}-li-${idx}`} className="text-zinc-800">
            {item}
          </li>
        ))}
      </ul>
    );
    listBuffer = [];
  };

  lines.forEach((raw, i) => {
    const line = raw.trim();

    // Horizontal rule
    if (line === "___" || line === "---" || line.includes("________")) {
      flushList(`hr-${i}`);
      blocks.push(<hr key={`hr-${i}`} className="my-8 border-zinc-200" />);
      return;
    }

    // Empty line = paragraph break
    if (!line) {
      flushList(`sp-${i}`);
      return;
    }

    // Bullets: "-" or "•"
    const bulletMatch = line.match(/^(-|•)\s+(.*)$/);
    if (bulletMatch) {
      listBuffer.push(bulletMatch[2]);
      return;
    } else {
      flushList(`lst-${i}`);
    }

    // Headings: treat "Something:" and known section titles as headings
    const isHeading =
      /^[A-Z][A-Za-z0-9 &()’'“”\-]+$/.test(line) &&
      line.length <= 80 &&
      !line.endsWith("."); // reduce false positives

    const looksLikeLabelHeading =
      /^(One Big Thing|Why This Matters|Weekly Change Map|Solutions You Can Use This Week|Watch-Out for Next Week)$/i.test(
        line
      );

    // "Solution 1 — ..." style heading
    const isSolutionHeading = /^Solution\s+\d+\s+—\s+/.test(line);

    if (looksLikeLabelHeading || isSolutionHeading || isHeading) {
      blocks.push(
        <h2
          key={`h-${i}`}
          className="mt-10 text-2xl font-semibold tracking-tight text-zinc-900"
        >
          {line}
        </h2>
      );
      return;
    }

    // Subhead: "Who it’s for:" etc.
    const isSubhead = /^(Who it’s for:|Problem:|Tool or LLM:|1-Day Execution Steps:|What exists at end of day:|Success metric:|Risk note:)/i.test(
      line
    );

    if (isSubhead) {
      blocks.push(
        <p key={`sh-${i}`} className="mt-6 font-semibold text-zinc-900">
          {line}
        </p>
      );
      return;
    }

    // Normal paragraph
    blocks.push(
      <p key={`p-${i}`} className="mt-4 leading-7 text-zinc-800">
        {line}
      </p>
    );
  });

  flushList("final");
  return blocks;
}

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

      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900">
        {post.title}
      </h1>

      <div className="mt-3 text-sm text-zinc-500">{post.date}</div>

      <article className="mt-10">
        {renderBlogContent(post.content)}
      </article>
    </div>
  );
}
