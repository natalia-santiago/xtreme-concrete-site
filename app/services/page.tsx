// app/services/page.tsx

const services = [
  {
    title: "Core Drilling",
    desc: "Precision drilling for plumbing, electrical, HVAC, and structural penetrations.",
    idealFor: ["Plumbing & drain lines", "Electrical conduit", "HVAC sleeves", "Anchor / dowel holes"],
  },
  {
    title: "Concrete Slab Cutting",
    desc: "Flat sawing for floors, roads, driveways, and commercial slabs.",
    idealFor: ["Trench cuts", "Repair sections", "Expansion joints", "Access openings"],
  },
  {
    title: "Concrete Wall Cutting",
    desc: "Clean openings for doors, windows, and utilities in concrete walls.",
    idealFor: ["Door & window openings", "Utility penetrations", "New access points", "Remodel work"],
  },
  {
    title: "Reinforced Wall Cutting",
    desc: "Specialized cutting for heavily reinforced structural concrete.",
    idealFor: ["Structural walls", "Heavier rebar", "Controlled openings", "Commercial & industrial work"],
  },
  {
    title: "Building Demolition",
    desc: "Safe demolition and concrete removal for renovation and rebuild projects.",
    idealFor: ["Slab removal", "Driveway tear-out", "Site clean-up", "Renovation prep"],
  },
];

const faqs = [
  {
    q: "Do you offer free estimates?",
    a: "Yes — we can usually give a quick estimate after a short call, and confirm after a site visit if needed.",
  },
  {
    q: "What areas do you serve?",
    a: "We’re based in Goldsboro, NC and serve surrounding areas. If you’re unsure, send your address and we’ll confirm.",
  },
  {
    q: "How soon can you schedule?",
    a: "It depends on scope and weather. Reach out and we’ll give you the earliest available dates.",
  },
  {
    q: "Do you handle cleanup?",
    a: "Yes. We keep the work area tidy and handle debris removal when it’s included in the scope.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      {/* Hero */}
      <header className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Concrete Cutting & Demolition Services in{" "}
            <span className="text-[#c1121f]">Goldsboro, NC</span>
          </h1>
          <p className="mt-3 text-black/70">
            Clean cuts, safe demolition, and a straightforward process — from estimate to cleanup.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-xl bg-[#c1121f] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              Request a Quote
            </a>
            <a
              href="tel:+19194292619"
              className="rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold hover:bg-black/[0.02]"
            >
              Call (919) 429-2619
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Fast Response", "Quick quotes and scheduling updates."],
              ["Safety First", "Controlled cuts and careful site work."],
              ["Clean Finish", "Professional edges and tidy cleanup."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-black/10 p-4 shadow-sm">
                <div className="text-sm font-semibold">{title}</div>
                <div className="mt-1 text-sm text-black/70">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual placeholder card (no fake projects) */}
        <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 shadow-sm">
          <div className="h-1 w-12 rounded bg-[#c1121f]" />
          <h2 className="mt-4 text-xl font-semibold">What we can help with</h2>
          <p className="mt-2 text-black/70">
            If you need an opening, a clean cut, or removal work — we’ll guide you through options
            and get it done the right way.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-black/70">
            <li>• Utility penetrations (plumbing, electrical, HVAC)</li>
            <li>• Slab and wall openings</li>
            <li>• Controlled demolition and removal</li>
            <li>• Repair sections and access cuts</li>
          </ul>
        </div>
      </header>

      {/* How it works */}
      <section className="mt-14 rounded-2xl border border-black/10 p-6 shadow-sm">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            ["1", "Call or message", "Tell us what you need and where the job is located."],
            ["2", "Site details", "We confirm measurements, access, and timeline."],
            ["3", "Estimate", "You receive a clear scope and price."],
            ["4", "Work & cleanup", "We complete the job and keep the site clean."],
          ].map(([num, title, desc]) => (
            <div key={title} className="rounded-2xl bg-black/[0.03] p-5">
              <div className="text-sm font-bold text-[#c1121f]">Step {num}</div>
              <div className="mt-1 font-semibold">{title}</div>
              <div className="mt-2 text-sm text-black/70">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Cards */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <p className="mt-2 text-black/70">
          Select a service below — if you’re not sure which one you need, contact us and we’ll help
          you choose.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/10 p-6 shadow-sm">
              <div className="h-1 w-10 rounded bg-[#c1121f]" />
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-black/70">{s.desc}</p>

              <div className="mt-4">
                <div className="text-sm font-semibold">Ideal for</div>
                <ul className="mt-2 list-disc pl-5 text-sm text-black/70">
                  {s.idealFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="rounded-xl bg-[#c1121f] px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  Get a Quote
                </a>
                <a
                  href="tel:+19194292619"
                  className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/[0.02]"
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-black/10 p-6 shadow-sm">
              <div className="font-semibold">{f.q}</div>
              <p className="mt-2 text-sm text-black/70">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14 rounded-2xl bg-black/[0.03] p-8">
        <h2 className="text-2xl font-bold">Need concrete cutting or demolition?</h2>
        <p className="mt-2 text-black/70">
          Reach out with your location and a quick description of the job — we’ll respond fast.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="rounded-xl bg-[#c1121f] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          >
            Request a Quote
          </a>
          <a
            href="tel:+19194292619"
            className="rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold hover:bg-black/[0.02]"
          >
            Call (919) 429-2619
          </a>
        </div>
      </section>
    </main>
  );
}