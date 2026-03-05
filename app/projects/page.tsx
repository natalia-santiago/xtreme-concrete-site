// app/projects/page.tsx
export default function ProjectsPage() {
    return (
      <main className="mx-auto max-w-5xl px-4 py-14">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="mt-2 text-black/70">
            We’re a new company and currently building our project portfolio. In the meantime,
            here’s what you can expect when you work with us.
          </p>
        </header>
  
        {/* Coming soon */}
        <section className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Portfolio Coming Soon</h2>
          <p className="mt-2 text-black/70">
            As we complete projects, we’ll post before/after photos, scope details, timelines, and
            materials used.
          </p>
  
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {["Driveways", "Patios", "Slabs & Foundations"].map((label) => (
              <div
                key={label}
                className="aspect-[4/3] rounded-xl border border-black/10 bg-black/[0.03] p-4"
              >
                <div className="text-sm font-semibold">{label}</div>
                <div className="mt-2 text-sm text-black/60">Photos coming soon.</div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Process */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Our Process</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["1) Quick call & site visit", "We confirm scope, measurements, access, and timeline."],
              ["2) Written estimate", "Clear pricing, materials, and what’s included."],
              ["3) Scheduling", "We coordinate start date and set expectations."],
              ["4) Prep & pour", "Proper base prep, forms, reinforcement as needed, and clean edges."],
              ["5) Finish & cure", "Finish options, curing guidance, and final walkthrough."],
              ["6) Follow-up", "We answer questions and ensure you’re happy with the result."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-black/10 p-6 shadow-sm">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-black/70">{desc}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* CTA */}
        <section className="mt-12 rounded-2xl bg-black/[0.03] p-6">
          <h2 className="text-xl font-semibold">Ready to get a quote?</h2>
          <p className="mt-2 text-black/70">
            Tell us what you need and we’ll get back to you quickly.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-xl bg-[#c1121f] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              Request a Quote
            </a>
            <a
              href="tel:+19194292619"
              className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/[0.02]"
            >
              Call (919) 429-2619
            </a>
          </div>
        </section>
      </main>
    );
  }