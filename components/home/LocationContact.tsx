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
        <div className="overflow-hidden rounded-2xl border border-silver/60">
          <iframe
            title="Lux Dentistry Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.992784369931!2d-84.2822414237591!3d34.10168027315505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f596a95e0620c5%3A0x6f0615f6cf646c26!2s1155%20Bluegrass%20Ct%2C%20Alpharetta%2C%20GA%2030004!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="320"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full md:h-80"
          />
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

