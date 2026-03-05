// app/thank-you/page.tsx
import Link from "next/link";

export default function ThankYou() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-14">
      <h1 className="text-3xl font-bold">Thank you!</h1>
      <p className="mt-2 text-black/70">
        We received your request and will get back to you soon.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-black px-5 py-2.5 font-semibold text-white hover:opacity-90"
      >
        Back to home
      </Link>
    </section>
  );
}