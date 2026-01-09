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
  description: "Applied AI for leaders who need results — not experiments.",
};

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5H4.5V23H.5V8.5zM8.5 8.5H12.3V10.4H12.35C12.88 9.4 14.18 8.35 16.12 8.35 20.03 8.35 20.75 10.9 20.75 14.22V23H16.75V14.9C16.75 12.97 16.71 10.5 14.08 10.5 11.41 10.5 11 12.58 11 14.76V23H7V8.5H8.5z" />
    </svg>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="border-b" style={{ borderColor: "var(--line)" }}>
          <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Heartland Intelligence Group"
                width={260}
                height={80}
                priority
              />
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium text-[var(--navy)]">
              <Link className="hover:underline decoration-[var(--gold)] decoration-2 underline-offset-8" href="/">
                Home
              </Link>
              <Link className="hover:underline decoration-[var(--gold)] decoration-2 underline-offset-8" href="/#about">
                About
              </Link>
              <Link className="hover:underline decoration-[var(--gold)] decoration-2 underline-offset-8" href="/#services">
                Services
              </Link>
              <Link className="hover:underline decoration-[var(--gold)] decoration-2 underline-offset-8" href="/news">
                News
              </Link>
              <Link className="hover:underline decoration-[var(--gold)] decoration-2 underline-offset-8" href="/contact">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="border-t" style={{ borderColor: "var(--line)" }}>
          <div className="mx-auto max-w-6xl px-6 py-8 flex items-center justify-between text-sm text-[var(--muted)]">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-[var(--navy)] font-medium">
                Heartland Intelligence Group
              </span>
            </p>

            <div className="flex items-center gap-6">
              <Link className="hover:underline decoration-[var(--gold)] underline-offset-4" href="/privacy">
                Privacy
              </Link>

              <a
                className="inline-flex items-center gap-2 hover:underline decoration-[var(--gold)] underline-offset-4"
                href="https://www.linkedin.com/company/heartland-intelligence-group/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="h-4 w-4 text-[var(--navy)]" />
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
