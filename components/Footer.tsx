export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-6 py-12 md:grid-cols-4">

        <div>
          <p className="text-lg font-bold">
            XTREME <span className="text-[#c1121f]">CONCRETE</span>
          </p>

          <p className="mt-2 text-sm text-white/70">
            Concrete Cutting & Demolition
          </p>

          <p className="mt-1 text-sm text-white/70">
            Based in Goldsboro, NC
          </p>
        </div>

        <div className="text-sm">
          <p className="font-semibold">Contact</p>

          <p className="mt-2 text-white/70">(919) 429-2619</p>

          <p className="text-white/70">(919) 744-4460</p>

          <p className="text-white/70">
            xtreme.concretecutting.demo@gmail.com
          </p>
        </div>

        <div className="text-sm">
          <p className="font-semibold">Quick Links</p>

          <ul className="mt-2 space-y-1 text-white/70">
            <li>Services</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-semibold">Services</p>

          <ul className="mt-2 space-y-1 text-white/70">
            <li>Core Drilling</li>
            <li>Concrete Slab Cutting</li>
            <li>Concrete Wall Cutting</li>
            <li>Reinforced Wall Cutting</li>
            <li>Building Demolition</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Xtreme Concrete Cutting & Demolition LLC
      </div>
    </footer>
  );
}