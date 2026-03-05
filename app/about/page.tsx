// app/about/page.tsx

const bullets = [
    "Core drilling for plumbing, electrical, HVAC, and structural penetrations",
    "Slab cutting and flat sawing for floors, roads, and driveways",
    "Wall cutting for door, window, and utility openings",
    "Reinforced concrete cutting when structural steel is present",
    "Demolition and concrete removal for renovations and rebuilds",
  ];
  
  const process = [
    ["Quick call", "Tell us the scope, location, and timeline."],
    ["Site details", "We confirm access, measurements, and any constraints."],
    ["Clear estimate", "You get a written scope and price."],
    ["Work & cleanup", "We complete the job and keep the site clean."],
  ];
  
  const whoWeHelp = [
    "Homeowners",
    "General contractors",
    "Property managers",
    "Commercial remodel teams",
    "Trades needing penetrations (plumbing, electrical, HVAC)",
  ];
  
  export default function About() {
    return (
      <>
        {/* HERO */}
        <section className="bg-[#0d0d0d] text-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <p className="text-sm tracking-widest text-white/70">ABOUT</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
              Built for clean cuts, safe work,
              <span className="text-[#c1121f]"> and fast scheduling</span>
            </h1>
            <p className="mt-4 max-w-3xl text-white/70">
              Xtreme Concrete Cutting & Demolition LLC is based in Goldsboro, NC. We provide concrete
              cutting, core drilling, and demolition services for residential and commercial projects
              across Eastern North Carolina.
            </p>
  
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="rounded-xl bg-[#c1121f] px-6 py-3 text-center text-sm font-semibold shadow-sm hover:opacity-95"
              >
                Request a Quote
              </a>
              <a
                href="tel:+19194292619"
                className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-center text-sm font-semibold hover:border-[#c1121f] hover:text-[#c1121f]"
              >
                Call (919) 429-2619
              </a>
            </div>
  
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["Safety-first", "Controlled work and jobsite awareness."],
                ["Clean, accurate cuts", "Attention to layout, depth, and finish."],
                ["Fast response", "Clear communication from quote to completion."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="mt-1 text-sm text-white/70">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CONTENT */}
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            {/* What we do */}
            <div className="rounded-2xl border border-black/10 p-6 shadow-sm">
              <h2 className="text-2xl font-bold">What we do</h2>
              <p className="mt-3 text-sm text-black/70">
                We specialize in precision concrete cutting and demolition work that supports remodels,
                new builds, commercial fit-outs, and utility installs.
              </p>
  
              <ul className="mt-5 space-y-2 text-sm text-black/80">
                {bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
  
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/services"
                  className="rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/[0.02]"
                >
                  View Services
                </a>
                <a
                  href="/contact"
                  className="rounded-xl bg-[#c1121f] px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  Request a Quote
                </a>
              </div>
            </div>
  
            {/* Why hire us + who we help */}
            <div className="rounded-2xl bg-black/[0.03] p-6">
              <h2 className="text-2xl font-bold">Why customers hire us</h2>
  
              <div className="mt-5 grid gap-4">
                {[
                  ["Safety-first", "Controlled cutting methods, clean work areas, and jobsite awareness."],
                  ["Clean, accurate cuts", "Precision openings with attention to layout, depth, and finish."],
                  ["Fast scheduling", "Quick response times and clear communication from quote to completion."],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm text-black/70">{desc}</p>
                  </div>
                ))}
              </div>
  
              <div className="mt-8 rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <p className="font-semibold">Who we work with</p>
                <p className="mt-2 text-sm text-black/70">
                  We regularly support a mix of residential and commercial work:
                </p>
                <ul className="mt-3 grid gap-2 text-sm text-black/70 sm:grid-cols-2">
                  {whoWeHelp.map((x) => (
                    <li key={x}>• {x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
  
          {/* Process */}
          <section className="mt-12 rounded-2xl border border-black/10 p-6 shadow-sm">
            <h3 className="text-2xl font-bold">Our process</h3>
            <p className="mt-2 text-sm text-black/70">
              Simple, straightforward, and built to keep your project moving.
            </p>
  
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {process.map(([title, desc], idx) => (
                <div key={title} className="rounded-2xl bg-black/[0.03] p-5">
                  <div className="text-sm font-bold text-[#c1121f]">Step {idx + 1}</div>
                  <div className="mt-1 font-semibold">{title}</div>
                  <div className="mt-2 text-sm text-black/70">{desc}</div>
                </div>
              ))}
            </div>
          </section>
  
          {/* Service area */}
          <section className="mt-12 rounded-2xl border border-black/10 p-6 shadow-sm">
            <h3 className="text-2xl font-bold">Service area</h3>
            <p className="mt-2 text-sm text-black/70">
              Based in Goldsboro, NC — serving surrounding areas across Eastern North Carolina. If
              you’re unsure, request a quote and include your job location.
            </p>
  
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-block rounded-xl bg-[#c1121f] px-6 py-3 text-center text-sm font-semibold text-white hover:opacity-95"
              >
                Request a Quote
              </a>
              <a
                href="tel:+19194292619"
                className="inline-block rounded-xl border border-black/10 bg-white px-6 py-3 text-center text-sm font-semibold hover:bg-black/[0.02]"
              >
                Call (919) 429-2619
              </a>
            </div>
  
            <div className="mt-6 rounded-2xl bg-black/[0.03] p-5">
              <p className="text-sm font-semibold">For a faster quote, send:</p>
              <ul className="mt-2 space-y-1 text-sm text-black/70">
                <li>• Job address / city</li>
                <li>• A short description of the work</li>
                <li>• Photos (if available)</li>
                <li>• Timeline / desired start date</li>
              </ul>
            </div>
          </section>
        </section>
      </>
    );
  }