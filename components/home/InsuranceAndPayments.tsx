import Link from "next/link";

export default function InsuranceAndPayments() {
  return (
    <section className="bg-softBg py-14">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">
          Insurance & Payments
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
          Clear, flexible payment options.
        </h2>
        <p className="mt-4 text-base leading-7 text-charcoal">
          We work with many insurance plans and outline costs up front. Flexible arrangements are
          available for treatments not covered by insurance.
        </p>
        <div className="mt-6">
          <Link
            href="/patients/insurance"
            className="inline-block rounded-full bg-gold px-5 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

