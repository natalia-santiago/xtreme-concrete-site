// components/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top info bar (like Advance Concrete vibe) */}
      <div className="w-full bg-[#c1121f] text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 text-xs">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Goldsboro, NC</span>
            <span className="opacity-75">|</span>
            <a className="hover:underline" href="tel:+19194292619">
              (919) 429-2619
            </a>
            <span className="opacity-75">|</span>
            <a className="hover:underline" href="mailto:xtreme.concretecutting.demo@gmail.com">
              xtreme.concretecutting.demo@gmail.com
            </a>
          </div>

          <div className="hidden sm:block">Mon–Sat: 8AM–6PM</div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo only (bigger, blends on white) */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-transparent.png"
              alt="Xtreme Concrete Cutting & Demolition LLC"
              width={170}
              height={54}
              priority
              className="h-[52px] w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-xs font-semibold tracking-widest text-black/70 md:flex">
            <Link className="hover:text-black" href="/services">
              SERVICES
            </Link>
            <Link className="hover:text-black" href="/projects">
              PROJECTS
            </Link>
            <Link className="hover:text-black" href="/reviews">
              REVIEWS
            </Link>
            <Link className="hover:text-black" href="/about">
              ABOUT
            </Link>
            <Link className="hover:text-black" href="/contact">
              CONTACT
            </Link>
          </nav>

          <a
            href="tel:+19194292619"
            className="rounded-md bg-[#c1121f] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8f0e16]"
          >
            CALL NOW
          </a>
        </div>

        {/* thin divider like classic contractor sites */}
        <div className="h-px w-full bg-black/10" />
      </div>
    </header>
  );
}