// components/Footer.tsx
import Link from "next/link";

const services = [
  "Core Drilling",
  "Concrete Slab Cutting",
  "Concrete Wall Cutting",
  "Reinforced Wall Cutting",
  "Building Demolition",
];

const links = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceAreas = [
  "Goldsboro",
  "Wayne County",
  "Wilson",
  "Smithfield",
  "Selma",
  "Kinston",
  "Surrounding areas",
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold tracking-wide">
              XTREME <span className="text-[#c1121f]">CONCRETE</span>
            </p>
            <p className="mt-2 text-sm text-white/70">
              Concrete Cutting & Demolition
            </p>
            <p className="mt-4 text-sm text-white/70">Based in Goldsboro, NC</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+19194292619"
                className="rounded-xl bg-[#c1121f] px-4 py-2 text-sm font-semibold hover:bg-[#8f0e16]"
              >
                Call Now
              </a>
              <Link
                href="/contact"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-sm">
            <p className="font-semibold">Contact</p>
            <div className="mt-3 space-y-2 text-white/70">
              <p>
                <span className="text-white/80">Main:</span>{" "}
                <a className="hover:text-[#c1121f]" href="tel:+19194292619">
                  (919) 429-2619
                </a>
              </p>
              <p>
                <span className="text-white/80">Office:</span>{" "}
                <a className="hover:text-[#c1121f]" href="tel:+19197444460">
                  (919) 744-4460
                </a>
              </p>
              <p>
                <a
                  className="hover:text-[#c1121f]"
                  href="mailto:xtreme.concretecutting.demo@gmail.com"
                >
                  xtreme.concretecutting.demo@gmail.com
                </a>
              </p>

              <div className="pt-2">
                <p className="text-white/80 font-medium">Hours</p>
                <p>Mon–Sat: 8:00 AM – 6:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-sm">
            <p className="font-semibold">Quick Links</p>
            <ul className="mt-3 space-y-2 text-white/70">
              {links.map((l) => (
                <li key={l.href}>
                  <Link className="hover:text-[#c1121f]" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="font-semibold">Service Areas</p>
              <p className="mt-3 text-white/70 leading-6">
                {serviceAreas.join(" • ")}
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="text-sm">
            <p className="font-semibold">Services</p>
            <ul className="mt-3 space-y-2 text-white/70">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Xtreme Concrete Cutting & Demolition LLC • Goldsboro, NC
        </div>
      </div>
    </footer>
  );
}