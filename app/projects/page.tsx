import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-12">
        <h1 className="text-3xl font-bold">Projects</h1>

        <p className="mt-2 max-w-2xl text-black/70">
          We’re currently building our portfolio. As we complete projects,
          we’ll post before and after photos here.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {["Driveways", "Patios", "Slabs & Foundations"].map((label) => (
            <div
              key={label}
              className="aspect-[4/3] rounded-2xl border border-black/10 bg-black/[0.03] p-6"
            >
              <div className="font-semibold">{label}</div>
              <p className="mt-2 text-sm text-black/60">
                Photos coming soon.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="rounded-xl bg-[#c1121f] px-6 py-3 text-white font-semibold"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}