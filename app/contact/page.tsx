// app/contact/page.tsx
import Link from "next/link";

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold">Request a Quote</h1>

      <p className="mt-2 text-black/70">
        Tell us what you need and we’ll get back to you. For fast help, call{" "}
        <a className="font-semibold text-[#c1121f]" href="tel:+19194292619">
          (919) 429-2619
        </a>
        .
      </p>

      <p className="mt-2 text-sm text-black/60">
        Typical response time: <span className="font-semibold">same day or within 24 hours</span>.
      </p>

      <div className="mt-8 rounded-2xl border border-black/10 p-6 shadow-sm">
        {/* Plain HTML submit (no JS). This MUST produce a POST request in Network. */}
        <form
          name="quote"
          method="POST"
          action="/thank-you"
          encType="application/x-www-form-urlencoded"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-4"
        >
          {/* Required for Netlify */}
          <input type="hidden" name="form-name" value="quote" />

          {/* Honeypot */}
          <div className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-black/80">Name</label>
              <input
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                type="text"
                name="name"
                required
                autoComplete="name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black/80">Phone</label>
              <input
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                type="tel"
                name="phone"
                required
                autoComplete="tel"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black/80">Email</label>
            <input
              className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
              type="email"
              name="email"
              required
              autoComplete="email"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-black/80">Location / Job Site</label>
              <input
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                type="text"
                name="location"
                placeholder="City / address (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black/80">Dimensions</label>
              <input
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                type="text"
                name="dimensions"
                placeholder='e.g., 4" x 6"'
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-black/80">Thickness</label>
              <input
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                type="text"
                name="thickness"
                placeholder='e.g., 6"'
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black/80">What do you need?</label>
            <textarea
              className="mt-1 min-h-[140px] w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
              name="message"
              required
              placeholder="Tell us about the job…"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="rounded-xl bg-[#c1121f] px-5 py-2.5 font-semibold text-white shadow-sm hover:opacity-95"
            >
              Send Request
            </button>

            <Link className="text-sm text-black/60 hover:underline" href="/">
              Back to home
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}