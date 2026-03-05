const services = [
    {
      title: "Core Drilling",
      desc: "Precision drilling for plumbing, electrical, HVAC, and structural penetrations.",
    },
    {
      title: "Concrete Slab Cutting",
      desc: "Flat sawing for floors, roads, driveways, and commercial slabs.",
    },
    {
      title: "Concrete Wall Cutting",
      desc: "Clean openings for doors, windows, and utilities in concrete walls.",
    },
    {
      title: "Reinforced Wall Cutting",
      desc: "Specialized cutting for heavily reinforced structural concrete.",
    },
    {
      title: "Building Demolition",
      desc: "Safe demolition and concrete removal for renovation and rebuild projects.",
    },
  ];
  
  export default function Services() {
    return (
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="mt-2 text-black/70">
          Concrete cutting and demolition services based in Goldsboro, NC.
        </p>
  
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/10 p-6 shadow-sm">
              <div className="h-1 w-10 rounded bg-[#c1121f]" />
              <h2 className="mt-4 text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-black/70">{s.desc}</p>
            </div>
          ))}
        </div>
  
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block rounded-md bg-[#c1121f] px-6 py-3 font-semibold text-white hover:bg-[#8f0e16]"
          >
            Request a Quote
          </a>
        </div>
      </section>
    );
  }