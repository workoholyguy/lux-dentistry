const address = ["1155 Bluegrass Ct", "Alpharetta, GA 30004"];
const phone = "(678) 773-7354";
const hours = [
  "Mon–Thu: 09:00am – 05:00pm",
  "Fri: 08:00am – 02:00pm",
  "Sat–Sun: Closed",
];

export default function LocationContact() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="relative h-72 rounded-2xl bg-silver/30 shadow-inner md:h-80">
          <div className="absolute inset-0 rounded-2xl border border-silver/60" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Visit Us</p>
          <h2 className="text-3xl font-semibold text-nearBlack md:text-4xl">Schedule your visit</h2>
          <div className="text-base leading-7 text-charcoal">
            <p>{address[0]}</p>
            <p>{address[1]}</p>
            <p className="mt-2">
              Phone:{" "}
              <a className="text-gold transition hover:text-goldSoft" href={`tel:${phone.replace(/\D/g, "")}`}>
                {phone}
              </a>
            </p>
            <div className="mt-3 space-y-1">
              {hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
            >
              Book Now
            </a>
            <a
              href="https://maps.google.com/?q=1155+Bluegrass+Ct+Alpharetta+GA+30004"
              className="rounded-full border border-gold px-5 py-3 text-sm font-semibold text-gold transition hover:border-goldSoft hover:text-goldSoft"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

