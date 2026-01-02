// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Heartland Intelligence Group",
  description: "Heartland Intelligence Group",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* HEADER (only here) */}
        <header className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Heartland Intelligence Group"
                width={260}
                height={80}
                priority
              />
            </Link>

            <nav className="flex gap-6 text-sm">
              <Link href="/">Home</Link>
              <Link href="/#about">About</Link>
              <Link href="/#services">Services</Link>
              <Link href="/news">News</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-1">{children}</main>

        {/* FOOTER (only here) */}
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between text-sm">
            <p className="opacity-70">
              © {new Date().getFullYear()} Heartland Intelligence Group
            </p>
            <nav>
              <Link href="/privacy">Privacy</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}