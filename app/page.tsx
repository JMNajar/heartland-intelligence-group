import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
    <Image
      src="/logo.png"
      alt="Heartland Intelligence Group"
      width={260}
      height={80}
      priority
    />

    <nav className="flex gap-8 text-sm font-medium text-zinc-700">
      <a href="/" className="hover:text-zinc-900">Home</a>
      <a href="/about" className="hover:text-zinc-900">About</a>
      <a href="/services" className="hover:text-zinc-900">Services</a>
      <a href="/contact" className="hover:text-zinc-900">Contact</a>
    </nav>
  </div>
</header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Heartland Intelligence Group
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700">
          Practical AI systems for leaders who want clarity, speed, and results.
        </p>
      </main>
    </div>
  );
}
