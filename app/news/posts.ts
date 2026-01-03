export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "ai-update-week-52-2025",
    title: "AI Update: What Happened Last Week",
    date: "2026-01-02",
    excerpt:
      "AI is shifting from demos to repeatable agent workflows as Copilot adoption accelerates and security risks rise.",
    content:
      "2025 Weekly 52 AI MARKET REPORT…\n" +
      "(ChatGPT Research + NotebookLM Synthesis)\n\n" +
      "One Big Thing\n" +
      "AI is shifting from “cool demos” to repeatable, agent-driven workflows that do real work.\n\n" +
      "Why This Matters (SMB lens)\n" +
      "- Random experimenting is losing. SOPs are winning.\n" +
      "- Model choice is now a business decision, not a nerd decision.\n" +
      "- Microsoft’s SMB Copilot packaging creates a forced adoption wave.\n" +
      "- Claude is leaning hard into coding + agents.\n" +
      "- Security risk is rising as “skills/agents” spread.\n\n" +
      "Weekly Change Map\n" +
      "1) Foundation Models & LLM Platforms — CHANGE\n" +
      "- OpenAI went “Code Red” to prioritize core performance and reliability.\n" +
      "- Anthropic launched Claude Opus 4.5, positioned for coding + agents.\n" +
      "- Differentiation is clearer: OpenAI (general), Anthropic (coding/agents), Google (multimodal infra).\n\n" +
      "2) AI Tools SMB Teams Actually Use — CHANGE\n" +
      "- Microsoft released new Copilot Business SKUs/bundles aimed at SMBs (Dec 1, 2025).\n" +
      "- This pushes “AI is optional” → “AI is included, so use it.”\n\n" +
      "3) Service Businesses & Agencies — CHANGE\n" +
      "- Productized offers are converging on Model Fit Audits and 90-Day Activation Sprints.\n" +
      "- Faster time-to-value becomes the margin advantage.\n\n" +
      "4) Automation & Data Systems — CHANGE\n" +
      "- Market is converging on agentic workflows that execute tasks, not just draft text.\n" +
      "- Anthropic acquiring Bun signals faster developer tooling loops around “Claude Code.”\n\n" +
      "5) AI Infrastructure — CHANGE\n" +
      "- Anthropic’s $30B+ compute move (Microsoft + NVIDIA) signals scale and long-run reliability focus.\n" +
      "- Expect tighter ecosystem coupling with Azure.\n\n" +
      "6) AI Governance & Compliance — CHANGE\n" +
      "- New vulnerability class: agent/skill abuse (including ransomware-style exploitation).\n" +
      "- Risk grows as teams turn on connectors, skills, and automations.\n\n" +
      "Solutions You Can Use This Week\n\n" +
      "Solution 1 — Model Fit Audit (Pick the Right Brain for Each Workflow)\n" +
      "Who it’s for: Service Business\n" +
      "Problem: Teams use one model for everything and get inconsistent results.\n" +
      "Tool or LLM: GPT-5.1 (general ops) + Claude Opus 4.5 (coding/agents)\n" +
      "1-Day Execution Steps:\n" +
      "- List the top 10 weekly workflows (sales, ops, delivery, support).\n" +
      "- Tag each: writing, research, coding, automation, analysis.\n" +
      "- Run the same 3 test prompts per workflow in both models.\n" +
      "- Score output quality (1–5) on accuracy, speed, and edit time.\n" +
      "- Pick “default model” per workflow category.\n" +
      "- Write 1 paste-ready prompt template per workflow.\n" +
      "- Store results in a 1-page decision sheet for the team.\n" +
      "What exists at end of day: Model map + 10 prompt templates + default model rules.\n" +
      "Success metric: 20–40% reduction in revision time within 7 days.\n" +
      "Risk note: If your tests use fuzzy prompts, your conclusions will be fuzzy too.\n\n" +
      "Solution 2 — Copilot Activation Sprint (Top 10 Department Workflows)\n" +
      "Who it’s for: Small Business\n" +
      "Problem: Copilot gets bought, then becomes expensive shelfware.\n" +
      "Tool or LLM: Microsoft 365 Copilot (SMB SKU)\n" +
      "1-Day Execution Steps:\n" +
      "- Pick one department (sales or ops first).\n" +
      "- Identify the 10 most repeated tasks (emails, proposals, meeting notes, follow-ups).\n" +
      "- Create 1 “gold standard” example for each task.\n" +
      "- Build Copilot prompts using the gold examples as reference.\n" +
      "- Set a simple usage rule: “Copilot first draft, human final pass.”\n" +
      "- Train the team in a 45-minute working session using real tasks.\n" +
      "- Add a weekly scorecard: time saved + outputs shipped.\n" +
      "What exists at end of day: 10 Copilot playbooks + team usage rule + scorecard.\n" +
      "Success metric: Copilot used in 70%+ of target tasks by week 2.\n" +
      "Risk note: Without agreed templates, Copilot amplifies everyone’s chaos equally.\n\n" +
      "Solution 3 — AI Security Checkup (Lock Down Skills, Agents, and Connectors)\n" +
      "Who it’s for: Startup\n" +
      "Problem: Agent/skill features increase the blast radius of a bad permission or prompt.\n" +
      "Tool or LLM: Your agent platform + access controls + a simple audit checklist\n" +
      "1-Day Execution Steps:\n" +
      "- Inventory every enabled skill/agent + what it can access.\n" +
      "- Remove unused connectors and redundant permissions.\n" +
      "- Apply least-privilege roles for files, email, CRM, and ticketing.\n" +
      "- Add approval gates for money-moving or client-impacting actions.\n" +
      "- Log agent actions (who/what/when/output).\n" +
      "- Write a 1-page “agent incident plan” (pause, revoke, notify, review).\n" +
      "- Run a red-team test: attempt data exfil + unsafe actions via prompts.\n" +
      "What exists at end of day: Permission map + reduced access + incident mini-playbook + logs on.\n" +
      "Success metric: 100% of agents have explicit scopes + approvals for risky actions.\n" +
      "Risk note: “It’s just a bot” is how breaches start.\n\n" +
      "Solution 4 — SOP Factory (Turn One Workflow Into a Repeatable AI Process)\n" +
      "Who it’s for: Service Business\n" +
      "Problem: AI value disappears when it isn’t documented.\n" +
      "Tool or LLM: Any LLM + Google Docs/Notion + your task system\n" +
      "1-Day Execution Steps:\n" +
      "- Choose one workflow that happens weekly (lead follow-up, reporting, onboarding).\n" +
      "- Break it into 6–10 steps in plain language.\n" +
      "- Write one prompt per step (inputs → output format).\n" +
      "- Add a checklist for human review points.\n" +
      "- Create a shared folder with templates and examples.\n" +
      "- Assign one owner for updates and drift control.\n" +
      "- Run it once end-to-end and time it.\n" +
      "What exists at end of day: One full SOP + prompts + templates + owner + baseline timing.\n" +
      "Success metric: Workflow time cut by 25% on the second run.\n" +
      "Risk note: If you don’t set output formats, you’ll get creative writing instead of usable work.\n\n" +
      "Watch-Out for Next Week\n" +
      "Agent security incidents will spike as more teams enable skills/connectors without permission discipline.\n",
  },

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