export default function EmergencyCTA() {
  return (
    <section className="bg-nearBlack py-14 text-softBg">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">Dental emergency?</h2>
        <p className="mt-3 text-base leading-7 text-silver">
          Same-day emergency appointments are available. Call now and we will guide you to the next step.
        </p>
        <a
          href="tel:6787737354"
          className="mt-6 inline-block rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold transition hover:border-goldSoft hover:text-goldSoft"
        >
          Call Now
        </a>
      </div>
    </section>
  );
}

