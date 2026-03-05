// app/services/page.tsx
import Image from "next/image";
import Link from "next/link";

const serviceStrip = [
  { title: "Core Drilling", sub: "Penetrations & utilities" },
  { title: "Cutting & Demo", sub: "Slab + wall cutting" },
  { title: "Site Support", sub: "Clean removal & prep" },
];

const services = [
  {
    title: "Core Drilling",
    desc: "Precision drilling for plumbing, electrical, HVAC, and structural penetrations.",
    bullets: ["Utility penetrations", "HVAC + plumbing holes", "Electrical conduit runs"],
    img: "/images/core-drilling.jpg",
  },
  {
    title: "Concrete Slab Cutting",
    desc: "Flat sawing for floors, roads, driveways, and commercial slabs.",
    bullets: ["Trench cuts", "Slab removal sections", "Clean straight cuts"],
    img: "/images/hero.jpg",
  },
  {
    title: "Concrete Wall Cutting",
    desc: "Clean openings for doors, windows, and utilities in concrete walls.",
    bullets: ["Door + window openings", "Access points", "Utility pass-throughs"],
    img: "/images/safety.jpg",
  },
  {
    title: "Reinforced Wall Cutting",
    desc: "Specialized cutting for heavily reinforced structural concrete.",
    bullets: ["Rebar + structural work", "Controlled cuts", "Minimal overcut"],
    img: "/images/core-drilling.jpg",
  },
  {
    title: "Building Demolition",
    desc: "Safe demolition and concrete removal for renovation and rebuild projects.",
    bullets: ["Removal + hauling", "Site cleanup", "Prep for next phase"],
    img: "/images/demolition.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Concrete cutting services"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#c1121f]/15 via-transparent to-[#c1121f]/10" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-14 md:py-16">
          <p className="text-xs tracking-widest text-white/70">SERVICES</p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Concrete Cutting &amp; Demolition <span className="text-[#c1121f]">Services</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-white/75">
            Based in Goldsboro, NC — serving surrounding areas across Eastern North Carolina.
            Fast scheduling, clean cuts, and safety-first work practices.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-[#c1121f] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#8f0e16]"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+19194292619"
              className="rounded-md border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white hover:border-[#c1121f] hover:text-[#c1121f]"
            >
              Call (919) 429-2619
            </a>
          </div>
        </div>

        {/* STRIP */}
        <div className="relative w-full bg-white">
          <div className="mx-auto grid w-full max-w-7xl gap-3 px-4 py-5 md:grid-cols-3">
            {serviceStrip.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-xl border border-black/10 bg-white p-4"
              >
                <div className="h-10 w-10 rounded-full bg-black/5" />
                <div>
                  <p className="text-xs font-bold tracking-widest text-black/70">{item.title.toUpperCase()}</p>
                  <p className="text-xs text-black/60">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-bold">What we do</h2>
          <p className="mt-2 max-w-2xl text-sm text-black/70">
            We handle residential and commercial concrete cutting and demolition work.
            If you’re unsure which service applies, request a quote and describe your job.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
              >
                <div className="relative h-40 w-full">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="p-6">
                  <div className="h-1 w-10 rounded bg-[#c1121f]" />
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-black/70">{s.desc}</p>

                  <ul className="mt-4 space-y-1 text-sm text-black/70">
                    {s.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="rounded-md bg-[#c1121f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#8f0e16]"
                    >
                      Get a Quote
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-md border border-black/15 bg-white px-4 py-2 text-sm font-semibold hover:bg-black/[0.02]"
                    >
                      Ask a Question
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#c1121f] text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold">Need concrete cutting or demolition?</h3>
            <p className="mt-2 text-white/85">Call now or request a quote — we’ll respond quickly.</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold hover:bg-[#0d0d0d]"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+19194292619"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}