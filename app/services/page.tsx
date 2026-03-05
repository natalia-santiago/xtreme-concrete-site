import Link from "next/link";

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
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-12">
        <h1 className="text-3xl font-bold">Services</h1>

        <p className="mt-2 max-w-2xl text-black/70">
          Concrete cutting and demolition services based in Goldsboro, NC.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="h-1 w-10 rounded bg-[#c1121f]" />

              <h2 className="mt-4 text-lg font-semibold">{s.title}</h2>

              <p className="mt-2 text-sm text-black/70">{s.desc}</p>

              <div className="mt-5 flex gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-[#c1121f] px-4 py-2 text-sm font-semibold text-white"
                >
                  Get a Quote
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-black/10 px-4 py-2 text-sm font-semibold"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}