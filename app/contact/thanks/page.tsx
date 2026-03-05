import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="mx-auto w-full max-w-[900px] px-6 py-20">
      <h1 className="text-3xl font-bold">Thank you!</h1>
      <p className="mt-3 text-black/70">
        We received your request and will contact you shortly.
      </p>

      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="rounded-md bg-[#c1121f] px-6 py-3 text-sm font-semibold text-white"
        >
          Back to Home
        </Link>
        <a
          href="tel:+19194292619"
          className="rounded-md border border-black/15 bg-white px-6 py-3 text-sm font-semibold"
        >
          Call (919) 429-2619
        </a>
      </div>
    </main>
  );
}