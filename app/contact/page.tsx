export default function Contact() {
    return (
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-bold">Request a Quote</h1>
        <p className="mt-2 text-black/70">
          Tell us what you need and we’ll get back to you. For fast help, call{" "}
          <a className="font-semibold text-[#c1121f]" href="tel:+19194292619">
            (919) 429-2619
          </a>.
        </p>
  
        <div className="mt-8 rounded-2xl border border-black/10 p-6 shadow-sm">
          {/* Netlify-friendly form (works after deploy) */}
          <form name="quote" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="quote" />
  
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm">
                Name
                <input
                  className="mt-1 w-full rounded-md border border-black/20 px-3 py-2"
                  name="name"
                  required
                />
              </label>
  
              <label className="text-sm">
                Phone
                <input
                  className="mt-1 w-full rounded-md border border-black/20 px-3 py-2"
                  name="phone"
                  required
                />
              </label>
  
              <label className="text-sm md:col-span-2">
                Email
                <input
                  className="mt-1 w-full rounded-md border border-black/20 px-3 py-2"
                  type="email"
                  name="email"
                />
              </label>
  
              <label className="text-sm md:col-span-2">
                Project Address / City
                <input className="mt-1 w-full rounded-md border border-black/20 px-3 py-2" name="location" />
              </label>
  
              <label className="text-sm md:col-span-2">
                Service Needed
                <select className="mt-1 w-full rounded-md border border-black/20 px-3 py-2" name="service">
                  <option>Core Drilling</option>
                  <option>Concrete Slab Cutting</option>
                  <option>Concrete Wall Cutting</option>
                  <option>Reinforced Wall Cutting</option>
                  <option>Building Demolition</option>
                  <option>Other</option>
                </select>
              </label>
  
              <label className="text-sm md:col-span-2">
                Details
                <textarea
                  className="mt-1 w-full rounded-md border border-black/20 px-3 py-2"
                  name="message"
                  rows={5}
                />
              </label>
            </div>
  
            <button
              className="mt-6 w-full rounded-md bg-[#c1121f] px-6 py-3 font-semibold text-white hover:bg-[#8f0e16]"
              type="submit"
            >
              Send Request
            </button>
          </form>
        </div>
  
        <div className="mt-10 rounded-2xl bg-black/5 p-6">
          <p className="font-semibold">Xtreme Concrete Cutting & Demolition LLC</p>
          <p className="mt-2 text-sm text-black/70">Goldsboro, NC</p>
          <p className="mt-3 text-sm">
            Tel: (919) 429-2619 <br />
            Office: (919) 744-4460 <br />
            xtreme.concretecutting.demo@gmail.com
          </p>
        </div>
      </section>
    );
  }