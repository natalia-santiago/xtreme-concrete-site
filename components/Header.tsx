import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full">
      {/* TOP INFO BAR */}
      <div className="bg-[#c1121f] text-white">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-1.5 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/90">
            <span className="hidden sm:inline">Goldsboro, NC</span>
            <a className="hover:text-white" href="tel:+19194292619">
              (919) 429-2619
            </a>
            <span className="hidden md:inline text-white/70">|</span>
            <a
              className="hover:text-white"
              href="mailto:xtreme.concretecutting.demo@gmail.com"
            >
              xtreme.concretecutting.demo@gmail.com
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-white/90">
            <span className="text-white/80">Mon–Sat: 8AM–6PM</span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="bg-white border-b border-black/10">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-2">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Xtreme Concrete Cutting & Demolition"
              width={118}
              height={118}
              priority
              className="object-contain"
            />
          </Link>

          {/* NAV */}
          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-wide text-black md:flex">
            <Link href="/services" className="hover:text-[#c1121f] transition">
              Services
            </Link>
            <Link href="/projects" className="hover:text-[#c1121f] transition">
              Projects
            </Link>
            <Link href="/reviews" className="hover:text-[#c1121f] transition">
              Reviews
            </Link>
            <Link href="/about" className="hover:text-[#c1121f] transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#c1121f] transition">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <a
            href="tel:+19194292619"
            className="rounded-md bg-[#c1121f] px-5 py-1.5 text-xs font-bold uppercase tracking-wide text-white hover:bg-[#8f0e16] transition"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}