import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Core Drilling", href: "/services#core-drilling" },
  { label: "Slab Cutting", href: "/services#slab-cutting" },
  { label: "Wall Cutting", href: "/services#wall-cutting" },
  { label: "Demolition", href: "/services#demolition" },
  { label: "Service Areas", href: "/service-areas" },
];

export default function Header() {
  return (
    <header className="w-full">
      {/* Top info bar */}
      <div className="w-full bg-[#c1121f] text-white">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-2 text-xs">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-semibold">Goldsboro, NC</span>
            <span className="opacity-75">•</span>
            <span className="text-white/90">Serving Eastern NC</span>
            <span className="opacity-75">|</span>
            <a href="tel:+19194292619" className="hover:underline">
              (919) 429-2619
            </a>
            <span className="opacity-75">|</span>
            <a
              href="mailto:xtreme.concretecutting.demo@gmail.com"
              className="hover:underline"
            >
              xtreme.concretecutting.demo@gmail.com
            </a>
          </div>

          {/* Free estimate badge (desktop) */}
          <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90 sm:inline-flex">
            <span className="inline-block h-2 w-2 rounded-full bg-white" />
            FREE ESTIMATES
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-6 py-4">
          {/* Logo + wordmark */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo-transparent.png"
              alt="Xtreme Concrete Cutting & Demolition LLC"
              width={64}
              height={64}
              priority
              className="h-[60px] w-[60px] object-contain"
            />

            <div className="leading-tight">
              <div className="text-xl font-extrabold tracking-wide text-black">
                XTREME <span className="text-[#c1121f]">CONCRETE</span>
              </div>

              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-black/70">
                Concrete Cutting &amp; Demolition LLC
              </div>

              {/* Local trust line */}
              <div className="mt-1 text-[11px] font-semibold text-black/50">
                Goldsboro, NC • Serving Eastern North Carolina
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-10 text-xs font-semibold tracking-widest text-black/70 md:flex">
            <Link href="/services" className="transition hover:text-black">
              SERVICES
            </Link>
            <Link href="/projects" className="transition hover:text-black">
              PROJECTS
            </Link>
            <Link href="/reviews" className="transition hover:text-black">
              REVIEWS
            </Link>
            <Link href="/about" className="transition hover:text-black">
              ABOUT
            </Link>
            <Link href="/contact" className="transition hover:text-black">
              CONTACT
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/contact"
              className="rounded-md bg-[#c1121f] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#8f0e16]"
            >
              REQUEST A QUOTE
            </Link>

            <a
              href="tel:+19194292619"
              className="rounded-md border border-black/15 bg-white px-5 py-2 text-sm font-semibold text-black/80 transition hover:bg-black/[0.02]"
            >
              CALL NOW
            </a>
          </div>

          {/* Mobile CTAs */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="tel:+19194292619"
              className="inline-block rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm"
            >
              CALL
            </a>
            <Link
              href="/contact"
              className="inline-block rounded-md bg-[#c1121f] px-4 py-2 text-sm font-semibold text-white shadow-sm"
            >
              QUOTE
            </Link>
          </div>
        </div>

        {/* Secondary gray bar */}
        <div className="w-full border-t border-black/10 bg-black/[0.03]">
          <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center gap-x-6 gap-y-2 px-6 py-3 text-xs font-semibold text-black/60">
            {quickLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-black">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-black/10" />
      </div>
    </header>
  );
}