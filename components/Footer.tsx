export default function Footer() {
    return (
      <footer className="bg-[#0d0d0d] text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">Xtreme Concrete Cutting & Demolition LLC</p>
            <p className="mt-2 text-sm text-white/70">Goldsboro, NC</p>
          </div>
  
          <div className="text-sm">
            <p className="font-semibold">Contact</p>
            <p className="mt-2 text-white/70">Tel: (919) 429-2619</p>
            <p className="text-white/70">Office: (919) 744-4460</p>
            <p className="text-white/70">xtreme.concretecutting.demo@gmail.com</p>
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