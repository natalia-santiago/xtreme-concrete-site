import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="bg-[#0d0d0d] text-white">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-14">
          <p className="text-sm tracking-widest text-white/70">ABOUT</p>

          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Built for clean cuts,
            <span className="text-[#c1121f]"> safe work, and fast scheduling</span>
          </h1>

          <p className="mt-4 max-w-3xl text-white/70">
            Xtreme Concrete Cutting & Demolition LLC provides professional concrete cutting,
            drilling, and demolition services throughout Eastern North Carolina.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-[#c1121f] px-6 py-3 font-semibold"
            >
              Request a Quote
            </Link>

            <a
              href="tel:+19194292619"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-6 py-12 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 p-6">
            <h2 className="text-2xl font-bold">What we do</h2>

            <ul className="mt-4 space-y-2 text-black/70">
              <li>• Core drilling for utilities</li>
              <li>• Concrete slab cutting</li>
              <li>• Wall openings</li>
              <li>• Reinforced concrete cutting</li>
              <li>• Controlled demolition</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 p-6">
            <h2 className="text-2xl font-bold">Why customers hire us</h2>

            <ul className="mt-4 space-y-2 text-black/70">
              <li>• Safety-first jobsite practices</li>
              <li>• Clean, accurate cuts</li>
              <li>• Fast scheduling</li>
              <li>• Clear communication</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}