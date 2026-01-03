// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Cinzel, Inter } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
      <body
        className={`${inter.className} ${cinzel.variable} ${inter.variable} min-h-screen flex flex-col`}
      >
        {/* HEADER (only here) */}
        <header className="border-b border-[color:var(--line)] bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Heartland Intelligence Group"
                width={260}
                height={80}
                priority
              />
            </Link>

            <nav className="flex gap-6 text-sm font-medium text-[color:var(--fg)]">
              <Link className="hover:opacity-80" href="/">
                Home
              </Link>
              <Link className="hover:opacity-80" href="/#about">
                About
              </Link>
              <Link className="hover:opacity-80" href="/#services">
                Services
              </Link>
              <Link className="hover:opacity-80" href="/news">
                News
              </Link>
              <Link className="hover:opacity-80" href="/contact">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-1">{children}</main>

        {/* FOOTER (only here) */}
        <footer className="border-t border-[color:var(--line)] bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm">
            <p className="opacity-70">© {new Date().getFullYear()} Heartland Intelligence Group</p>

            <nav className="flex items-center gap-6">
              <Link className="hover:opacity-80" href="/privacy">
                Privacy
              </Link>

              <a
                href="https://www.linkedin.com/company/heartland-intelligence-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:opacity-80"
                aria-label="Heartland Intelligence Group on LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.27 2.37 4.27 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.86V9h2.954v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C0 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
