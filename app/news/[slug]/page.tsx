import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../posts";

function parseInline(text: string): React.ReactNode[] {
  // Supports:
  // - **bold**
  // - [label](https://url)
  // Returns an array of strings/elements
  const nodes: React.ReactNode[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    const boldIdx = remaining.indexOf("**");
    const linkIdx = remaining.indexOf("[");

    // Find the earliest special token
    let nextIdx = -1;
    let type: "bold" | "link" | null = null;

    if (boldIdx !== -1) {
      nextIdx = boldIdx;
      type = "bold";
    }
    if (linkIdx !== -1 && (nextIdx === -1 || linkIdx < nextIdx)) {
      nextIdx = linkIdx;
      type = "link";
    }

    if (nextIdx === -1 || !type) {
      nodes.push(remaining);
      break;
    }

    // Push text before token
    if (nextIdx > 0) {
      nodes.push(remaining.slice(0, nextIdx));
      remaining = remaining.slice(nextIdx);
    }

    if (type === "bold") {
      // **bold**
      const end = remaining.indexOf("**", 2);
      if (end === -1) {
        nodes.push(remaining); // unclosed, treat as text
        break;
      }
      const boldText = remaining.slice(2, end);
      nodes.push(
        <strong key={`b-${nodes.length}`} className="font-semibold text-zinc-900">
          {boldText}
        </strong>
      );
      remaining = remaining.slice(end + 2);
      continue;
    }

    if (type === "link") {
      // [label](url)
      const closeBracket = remaining.indexOf("]");
      const openParen = remaining.indexOf("(", closeBracket);
      const closeParen = remaining.indexOf(")", openParen);

      if (
        closeBracket === -1 ||
        openParen === -1 ||
        closeParen === -1 ||
        closeBracket < 1
      ) {
        nodes.push(remaining); // malformed, treat as text
        break;
      }

      const label = remaining.slice(1, closeBracket);
      const url = remaining.slice(openParen + 1, closeParen);

      nodes.push(
        <a
          key={`a-${nodes.length}`}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:text-zinc-900"
        >
          {label}
        </a>
      );

      remaining = remaining.slice(closeParen + 1);
      continue;
    }
  }

  return nodes;
}

function renderBlogContent(content: string) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");

  const blocks: React.ReactNode[] = [];
  let bulletBuffer: string[] = [];
  let numberBuffer: string[] = [];

  const flushBullets = (keyBase: string) => {
    if (bulletBuffer.length === 0) return;
    blocks.push(
      <ul key={`${keyBase}-bul`} className="my-4 list-disc space-y-2 pl-6">
        {bulletBuffer.map((item, idx) => (
          <li key={`${keyBase}-b-${idx}`} className="text-zinc-800">
            {parseInline(item)}
          </li>
        ))}
      </ul>
    );
    bulletBuffer = [];
  };

  const flushNumbers = (keyBase: string) => {
    if (numberBuffer.length === 0) return;
    blocks.push(
      <ol key={`${keyBase}-num`} className="my-4 list-decimal space-y-2 pl-6">
        {numberBuffer.map((item, idx) => (
          <li key={`${keyBase}-n-${idx}`} className="text-zinc-800">
            {parseInline(item)}
          </li>
        ))}
      </ol>
    );
    numberBuffer = [];
  };

  const flushLists = (keyBase: string) => {
    flushBullets(keyBase);
    flushNumbers(keyBase);
  };

  lines.forEach((raw, i) => {
    const line = raw.trim();

    // Divider lines
    if (line === "___" || line === "---" || line.includes("________")) {
      flushLists(`hr-${i}`);
      blocks.push(<hr key={`hr-${i}`} className="my-8 border-zinc-200" />);
      return;
    }

    // Blank line = break (flush lists)
    if (!line) {
      flushLists(`sp-${i}`);
      return;
    }

    // Bullets: "-" or "•"
    const bulletMatch = line.match(/^(-|•)\s+(.*)$/);
    if (bulletMatch) {
      flushNumbers(`bn-${i}`); // don't mix lists
      bulletBuffer.push(bulletMatch[2]);
      return;
    }

    // Numbered list: "1. Something"
    const numberMatch = line.match(/^\d+\.\s+(.*)$/);
    if (numberMatch) {
      flushBullets(`nb-${i}`); // don't mix lists
      numberBuffer.push(numberMatch[1]);
      return;
    }

    flushLists(`lst-${i}`);

    // Headings (simple heuristic)
    const looksLikeLabelHeading =
      /^(One Big Thing|Why This Matters|Weekly Change Map|Solutions You Can Use This Week|Watch-Out for Next Week)$/i.test(
        line
      );
    const isSolutionHeading = /^Solution\s+\d+\s+—\s+/.test(line);

    const isHeading =
      /^[A-Z][A-Za-z0-9 &()’'“”\-]+$/.test(line) &&
      line.length <= 90 &&
      !line.endsWith(".");

    if (looksLikeLabelHeading || isSolutionHeading || isHeading) {
      blocks.push(
        <h2
          key={`h-${i}`}
          className="mt-10 text-2xl font-semibold tracking-tight text-zinc-900"
        >
          {parseInline(line)}
        </h2>
      );
      return;
    }

    // Subheads: label lines
    const isSubhead =
      /^(Who it’s for:|Problem:|Tool or LLM:|1-Day Execution Steps:|What exists at end of day:|Success metric:|Risk note:)/i.test(
        line
      );

    if (isSubhead) {
      blocks.push(
        <p key={`sh-${i}`} className="mt-6 font-semibold text-zinc-900">
          {parseInline(line)}
        </p>
      );
      return;
    }

    // Paragraph
    blocks.push(
      <p key={`p-${i}`} className="mt-4 leading-7 text-zinc-800">
        {parseInline(line)}
      </p>
    );
  });

  // flush at end
  flushLists("final");
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

      <article className="mt-10">{renderBlogContent(post.content)}</article>
    </div>
  );
}
