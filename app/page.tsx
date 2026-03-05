import Link from "next/link";
import Testimonials from "@/components/Testimonials";

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
  },
  {
    title: "Concrete Slab Cutting",
    desc: "Flat sawing for floors, roads, driveways, and commercial slabs.",
    bullets: ["Trench cuts", "Slab removal sections", "Clean straight cuts"],
  },
  {
    title: "Concrete Wall Cutting",
    desc: "Clean openings for doors, windows, and utilities in concrete walls.",
    bullets: ["Door + window openings", "Access points", "Utility pass-throughs"],
  },
  {
    title: "Reinforced Wall Cutting",
    desc: "Specialized cutting for heavily reinforced structural concrete.",
    bullets: ["Rebar + structural work", "Controlled cuts", "Minimal overcut"],
  },
  {
    title: "Building Demolition",
    desc: "Safe demolition and concrete removal for renovation and rebuild projects.",
    bullets: ["Removal + hauling", "Site cleanup", "Prep for next phase"],
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-industrial text-white">
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-widest text-white/70">GOLDSBORO, NC</p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
              Concrete Cutting &amp; Demolition <span className="text-[#c1121f]">Done Right</span>
            </h1>

            <p className="mt-4 max-w-xl text-white/75">
              Core drilling, slab cutting, wall cutting, reinforced concrete cutting, and demolition
              services across Eastern North Carolina.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-[#c1121f] px-6 py-3 text-center text-sm font-bold uppercase tracking-wide hover:bg-[#8f0e16]"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+19194292619"
                className="rounded-md border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide hover:border-white/40"
              >
                Call (919) 429-2619
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/75">
              {["Fast response", "Safety-first work", "Clean, accurate cuts"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <div className="h-1 w-12 rounded bg-[#c1121f]" />
            <h2 className="mt-4 text-lg font-bold uppercase tracking-wide">What we can help with</h2>
            <p className="mt-2 text-sm text-white/75">
              If you need an opening, a clean cut, or controlled demolition, we’ll guide you through
              the best approach.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Utility penetrations", "Plumbing, electrical, HVAC"],
                ["Slab openings", "Trench cuts, repair sections"],
                ["Wall openings", "Doors, windows, access points"],
                ["Controlled demolition", "Removal and site prep"],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="mt-1 text-xs text-white/70">{desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-white/80">
                For a faster quote, include:
              </p>
              <ul className="mt-2 space-y-1 text-xs text-white/70">
                <li>• Job address / city</li>
                <li>• Photos (if available)</li>
                <li>• Approx. dimensions & thickness</li>
                <li>• Desired start date</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE STRIP */}
      <section className="bg-[#ededed] border-y border-black/10">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-3 px-6 py-5 sm:grid-cols-3">
          {serviceStrip.map((item) => (
            <div key={item.title} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-black/10" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wide">{item.title}</div>
                <div className="text-xs text-black/60">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE (NO EMPTY PHOTO BOX) */}
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-6 py-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-extrabold uppercase tracking-wide">Who we are</h2>

            <p className="mt-3 text-sm text-black/70">
              Xtreme Concrete Cutting &amp; Demolition LLC is based in Goldsboro, NC and serves
              surrounding areas across Eastern North Carolina. We focus on safe methods, clean results,
              and clear communication from quote to completion.
            </p>

            <p className="mt-3 text-sm text-black/70">
              We’re a new company building our online portfolio — references are available on request.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Safety-first", "Jobsite awareness and controlled work practices."],
                ["Quality", "Clean cuts, tidy work areas, and solid communication."],
                ["Reliability", "Clear estimates and scheduling updates."],
                ["Service area", "Goldsboro + surrounding Eastern NC."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-black/10 bg-black/[0.02] p-5">
                  <div className="text-xs font-bold uppercase tracking-wide text-[#c1121f]">{title}</div>
                  <div className="mt-2 text-sm text-black/70">{desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/about"
                className="inline-block rounded-md bg-[#c1121f] px-5 py-3 text-xs font-bold uppercase tracking-wide text-white hover:bg-[#8f0e16]"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right column becomes a “capabilities” panel instead of a fake photo */}
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="h-1 w-12 rounded bg-[#c1121f]" />
            <h3 className="mt-4 text-lg font-extrabold uppercase tracking-wide">What to expect</h3>

            <ul className="mt-4 space-y-3 text-sm text-black/70">
              <li>• Quick response and clear communication</li>
              <li>• Safe work practices and tidy cleanup</li>
              <li>• Accurate cuts with attention to layout and finish</li>
              <li>• A straightforward estimate and schedule</li>
            </ul>

            <div className="mt-6 rounded-xl border border-black/10 bg-black/[0.02] p-4">
              <p className="text-xs font-bold uppercase tracking-wide">Need a quote today?</p>
              <p className="mt-2 text-sm text-black/70">
                Call or send details through the request form — we’ll respond quickly.
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-md bg-[#c1121f] px-5 py-3 text-xs font-bold uppercase tracking-wide text-white text-center"
                >
                  Request a Quote
                </Link>
                <a
                  href="tel:+19194292619"
                  className="rounded-md border border-black/10 px-5 py-3 text-xs font-bold uppercase tracking-wide text-center hover:bg-black/[0.02]"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES WE OFFER (NO TOP “PHOTO” BOXES) */}
      <section className="bg-[#f3f3f3] border-y border-black/10">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-12">
          <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide">
            Services We Offer
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-black/10" />
                  <div className="min-w-0">
                    <div className="h-1 w-10 rounded bg-[#c1121f]" />
                    <div className="mt-3 text-sm font-extrabold uppercase tracking-wide">{s.title}</div>
                    <p className="mt-2 text-sm text-black/70">{s.desc}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-1 text-sm text-black/70">
                  {s.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-3">
                  <Link
                    href="/contact"
                    className="rounded-md bg-[#c1121f] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white hover:bg-[#8f0e16]"
                  >
                    Get a Quote
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-md border border-black/10 px-4 py-2 text-xs font-bold uppercase tracking-wide hover:bg-black/[0.02]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-12">
          <Testimonials compact />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c1121f] text-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-extrabold uppercase tracking-wide">
                Talk to an expert today!
              </h3>
              <p className="mt-2 text-white/85 text-sm">
                Call us for quick scheduling and a clear estimate.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-black px-6 py-3 text-xs font-bold uppercase tracking-wide hover:bg-[#0d0d0d]"
              >
                Contact Us
              </Link>
              <a
                href="tel:+19194292619"
                className="rounded-md border border-white/30 px-6 py-3 text-xs font-bold uppercase tracking-wide"
              >
                Or Call: (919) 429-2619
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}