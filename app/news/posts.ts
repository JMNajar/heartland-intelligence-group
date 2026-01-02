export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  content: string; // simple text for now (can upgrade to MDX later)
};

export const posts: Post[] = [
  {
    slug: "what-were-building",
    title: "What we’re building at Heartland Intelligence Group",
    date: "2026-01-01",
    excerpt:
      "A quick look at how we help leaders turn AI into repeatable systems that drive clarity, speed, and results.",
    content:
      "We’re focused on helping leaders turn artificial intelligence into repeatable, reliable systems.\n\nNot experiments. Not demos.\nSystems that actually support decisions and execution.",
  },
  {
    slug: "three-ai-workflows",
    title: "Three AI workflows every service business should systemize",
    date: "2025-12-20",
    excerpt:
      "Simple automations and copilots that save time weekly without creating chaos.",
    content:
      "Most AI value doesn’t come from big ideas.\nIt comes from boring workflows done consistently.",
  },
  {
    slug: "ai-adoption-checklist",
    title: "AI adoption: the boring checklist that wins",
    date: "2025-12-05",
    excerpt:
      "Governance, training, and rollout practices that keep teams confident and consistent.",
    content:
      "AI fails when governance and rollout are ignored.\nThis checklist avoids that.",
  },
];
