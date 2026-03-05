export default function Contact() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[900px] px-6 py-12">
        <h1 className="text-3xl font-bold">Request a Quote</h1>

        <p className="mt-2 text-black/70">
          Tell us about your project and we’ll get back to you quickly.
        </p>

        <div className="mt-8 rounded-2xl border border-black/10 p-6 shadow-sm">
          <form name="quote" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="quote" />

            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded-md border border-black/20 px-3 py-2"
                name="name"
                placeholder="Name"
                required
              />

              <input
                className="rounded-md border border-black/20 px-3 py-2"
                name="phone"
                placeholder="Phone"
                required
              />

              <input
                className="rounded-md border border-black/20 px-3 py-2 md:col-span-2"
                type="email"
                name="email"
                placeholder="Email"
              />

              <textarea
                className="rounded-md border border-black/20 px-3 py-2 md:col-span-2"
                name="message"
                rows={5}
                placeholder="Project details"
              />
            </div>

            <button
              className="mt-6 w-full rounded-xl bg-[#c1121f] px-6 py-3 font-semibold text-white"
              type="submit"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}