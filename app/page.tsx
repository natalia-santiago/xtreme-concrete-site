// app/page.tsx
import Image from "next/image";

const services = [
  {
    title: "Core Drilling",
    desc: "Precision drilling for plumbing, electrical, HVAC, and structural penetrations.",
    img: "/images/core-drilling.jpg",
  },
  {
    title: "Concrete Slab Cutting",
    desc: "Flat sawing for floors, roads, driveways, and commercial slabs.",
    img: "/images/hero.jpg",
  },
  {
    title: "Concrete Wall Cutting",
    desc: "Clean openings for doors, windows, and utilities in concrete walls.",
    img: "/images/safety.jpg",
  },
  {
    title: "Reinforced Wall Cutting",
    desc: "Specialized cutting for heavily reinforced structural concrete.",
    img: "/images/core-drilling.jpg",
  },
  {
    title: "Building Demolition",
    desc: "Safe demolition and concrete removal for renovation and rebuild projects.",
    img: "/images/demolition.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO (full width background image like Advance Concrete) */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Concrete cutting in progress"
            fill
            priority
            className="object-cover"
          />
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/65" />
          {/* subtle red glow to match brand */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#c1121f]/15 via-transparent to-[#c1121f]/10" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-14 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs tracking-widest text-white/70">GOLDSBORO, NC</p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
                Concrete Cutting &amp; Demolition{" "}
                <span className="text-[#c1121f]">Done Right</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm text-white/75">
                Core drilling, slab cutting, wall cutting, reinforced concrete cutting, and demolition.
                Fully equipped and ready to work across Eastern North Carolina.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="rounded-md bg-[#c1121f] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#8f0e16]"
                >
                  Request a Quote
                </a>
                <a
                  href="tel:+19194292619"
                  className="rounded-md border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white hover:border-[#c1121f] hover:text-[#c1121f]"
                >
                  Call (919) 429-2619
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Fast response", "Safety-first work", "Clean, accurate cuts"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right-side “what we can help with” card */}
            <div className="rounded-2xl border border-white/10 bg-black/35 p-6 shadow-xl backdrop-blur">
              <div className="h-1 w-10 rounded bg-[#c1121f]" />
              <h2 className="mt-4 text-lg font-semibold text-white">What we can help with</h2>
              <p className="mt-2 text-sm text-white/70">
                If you need an opening, a clean cut, or controlled demolition, we’ll guide you through the best approach.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ["Utility penetrations", "Plumbing, electrical, HVAC"],
                  ["Slab openings", "Trench cuts, repair sections"],
                  ["Wall openings", "Doors, windows, access points"],
                  ["Controlled demolition", "Removal and site prep"],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-xs text-white/70">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold text-white/85">For a faster quote, include:</p>
                <ul className="mt-2 space-y-1 text-xs text-white/70">
                  <li>• Job address / city</li>
                  <li>• Photos (if available)</li>
                  <li>• Approx. dimensions &amp; thickness</li>
                  <li>• Desired start date</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Category bar (like the “icons strip” on contractor sites) */}
        <div className="relative w-full bg-white">
          <div className="mx-auto grid w-full max-w-7xl gap-3 px-4 py-5 md:grid-cols-3">
            {[
              ["CORE DRILLING", "Penetrations & utilities"],
              ["CUTTING & DEMO", "Slab + wall cutting"],
              ["SITE SUPPORT", "Clean removal & prep"],
            ].map(([title, sub]) => (
              <div key={title} className="flex items-center gap-4 rounded-xl border border-black/10 bg-white p-4">
                <div className="h-10 w-10 rounded-full bg-black/5" />
                <div>
                  <p className="text-xs font-bold tracking-widest text-black/70">{title}</p>
                  <p className="text-xs text-black/60">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE (no fake projects, no empty photo boxes) */}
      <section className="w-full bg-black/[0.03]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold">Who we are</h2>
            <p className="mt-3 text-sm text-black/70">
              Xtreme Concrete Cutting &amp; Demolition LLC is based in Goldsboro, NC and serves surrounding areas
              across Eastern North Carolina. We focus on safe methods, clean results, and clear communication
              from quote to completion.
            </p>
            <p className="mt-3 text-sm text-black/70">
              We’re a new company building our online portfolio — references are available upon request.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/about"
                className="rounded-md bg-[#c1121f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8f0e16]"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="rounded-md border border-black/15 bg-white px-6 py-3 text-sm font-semibold hover:bg-black/[0.02]"
              >
                Request a Quote
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <div className="relative h-56 w-full md:h-72">
              <Image
                src="/images/safety.jpg"
                alt="Safety-first jobsite"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold">Safety-first work</p>
              <p className="mt-1 text-sm text-black/70">
                Controlled cutting, tidy work areas, and jobsite awareness — every job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Services We Offer</h2>
            <p className="mt-2 text-sm text-black/70">
              Fast scheduling, clean cuts, and safety-first work practices.
            </p>
          </div>

          <a
            href="/services"
            className="hidden rounded-md border border-black/15 bg-white px-4 py-2 text-sm font-semibold hover:bg-black/[0.02] sm:inline-block"
          >
            View all services
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <div className="relative h-40 w-full">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="p-6">
                <div className="h-1 w-10 rounded bg-[#c1121f]" />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-black/70">{s.desc}</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="rounded-md bg-[#c1121f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#8f0e16]"
                  >
                    Get a Quote
                  </a>
                  <a
                    href="/services"
                    className="rounded-md border border-black/15 bg-white px-4 py-2 text-sm font-semibold hover:bg-black/[0.02]"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS (still honest: new company) */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-14">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Reviews</h2>
              <p className="mt-2 text-sm text-black/70">
                We’re a new company and currently building our online review presence. References are available upon request.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-md bg-[#c1121f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#8f0e16]"
              >
                Request a Quote
              </a>
              <a
                href="/reviews"
                className="rounded-md border border-black/15 bg-white px-4 py-2 text-sm font-semibold hover:bg-black/[0.02]"
              >
                View Reviews
              </a>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-black/[0.03] p-4">
              <p className="font-semibold">References available</p>
              <p className="mt-1 text-sm text-black/70">
                If you’d like to speak with recent customers, we can share references for similar work.
              </p>
            </div>

            <div className="rounded-xl bg-black/[0.03] p-4">
              <p className="font-semibold">What you can expect</p>
              <p className="mt-1 text-sm text-black/70">
                Clear communication, safe work practices, clean results, and fast scheduling when possible.
              </p>
            </div>

            <div className="rounded-xl bg-black/[0.03] p-4">
              <p className="font-semibold">Future reviews</p>
              <p className="mt-1 text-sm text-black/70">
                As we complete more jobs, we’ll post verified reviews and before/after photos here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="w-full bg-[#c1121f] text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold">Talk to an expert today!</h3>
            <p className="mt-2 text-white/85">Call us for quick scheduling and a clear estimate.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="/contact" className="rounded-md bg-black px-6 py-3 text-sm font-semibold hover:bg-[#0d0d0d]">
              Contact Us
            </a>
            <a
              href="tel:+19194292619"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold"
            >
              Or call: (919) 429-2619
            </a>
          </div>
        </div>
      </section>
    </>
  );
}