import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heartland Intelligence Group",
  description: "Practical AI systems for leaders who want clarity, speed, and results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900">
        <header className="border-b border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Heartland Intelligence Group"
                width={240}
                height={70}
                priority
              />
            </a>

            <nav className="flex items-center gap-6 text-sm font-medium text-zinc-700">
              <a href="/" className="hover:text-zinc-900">Home</a>
              <a href="/about" className="hover:text-zinc-900">About</a>
              <a href="/news" className="hover:text-zinc-900">News</a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>

        <footer className="border-t border-zinc-200 py-8">
          <div className="mx-auto max-w-6xl px-6 text-sm text-zinc-600">
            © {new Date().getFullYear()} Heartland Intelligence Group. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
