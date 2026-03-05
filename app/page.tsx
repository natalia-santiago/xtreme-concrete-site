export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0d0d0d] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm tracking-widest text-white/70">GOLDSBORO, NC</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
              Concrete Cutting & Demolition
              <span className="text-[#c1121f]"> Done Right</span>
            </h1>
            <p className="mt-4 text-white/70">
              Core drilling, slab cutting, wall cutting, reinforced concrete cutting, and demolition.
              Fully equipped and ready to work across Eastern North Carolina.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="rounded-md bg-[#c1121f] px-6 py-3 text-center font-semibold hover:bg-[#8f0e16]"
              >
                Request a Quote
              </a>
              <a
                href="tel:+19194292619"
                className="rounded-md border border-white/25 px-6 py-3 text-center font-semibold hover:border-[#c1121f] hover:text-[#c1121f]"
              >
                Call (919) 429-2619
              </a>
            </div>
          </div>

          {/* Placeholder image block */}
          <div className="rounded-2xl bg-white/5 p-6">
            <div className="aspect-video w-full rounded-xl bg-white/10" />
            <p className="mt-3 text-sm text-white/60">
              Replace this with job site photos (concrete cutting / core drilling / demolition).
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold">Services</h2>
        <p className="mt-2 text-sm text-black/70">
          Fast scheduling, clean cuts, and safety-first work practices.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { title: "Core Drilling", desc: "Precision drilling for plumbing, electrical, and HVAC." },
            { title: "Concrete Slab Cutting", desc: "Flat sawing for floors, roads, driveways, and slabs." },
            { title: "Concrete Wall Cutting", desc: "Openings for doors, windows, and utilities." },
            { title: "Reinforced Wall Cutting", desc: "Specialized cutting for structural reinforced concrete." },
            { title: "Building Demolition", desc: "Safe demolition and concrete removal." },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/10 p-6 shadow-sm">
              <div className="h-1 w-10 rounded bg-[#c1121f]" />
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-black/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c1121f] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold">Need Concrete Cutting or Demolition?</h3>
            <p className="mt-2 text-white/85">Call now or request a quote — we’ll respond quickly.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="/contact" className="rounded-md bg-black px-6 py-3 font-semibold hover:bg-[#0d0d0d]">
              Request a Quote
            </a>
            <a href="tel:+19194292619" className="rounded-md border border-white/30 px-6 py-3 font-semibold">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}