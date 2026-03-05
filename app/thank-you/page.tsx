import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold">Thank you!</h1>
      <p className="mt-3 text-black/70">
        We received your request and will reach out as soon as possible.
      </p>

      <div className="mt-6 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold">Need fast help?</p>
        <p className="mt-2 text-sm text-black/70">
          Call{" "}
          <a className="font-semibold text-[#c1121f]" href="tel:+19194292619">
            (919) 429-2619
          </a>{" "}
          for immediate scheduling.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-md border border-black/15 bg-white px-6 py-3 text-sm font-semibold hover:bg-black/[0.02]"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="rounded-md bg-[#c1121f] px-6 py-3 text-sm font-semibold text-white hover:bg-[#8f0e16]"
          >
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}