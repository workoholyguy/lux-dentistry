export const metadata = {
  title: "ADA Accessibility Statement | Lux Dentistry",
  description:
    "Lux Dentistry’s commitment to digital accessibility and how to contact us with access needs or feedback.",
};

const clinic = {
  name: "Lux Dentistry",
  addressLine1: "1155 Bluegrass Ct",
  addressLine2: "Alpharetta, GA 30004",
  phone: "(678) 773-7354",
  email: "Nasimdoroudgar@gmail.com",
  site: "https://www.theluxdentistry.com",
};

export default function AdaCompliancePage() {
  return (
    <div className="bg-softBg text-charcoal">
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">
          ADA Compliance
        </p>
        <h1 className="text-3xl font-semibold text-nearBlack md:text-4xl">
          Americans with Disabilities Act (ADA) Accessibility Statement
        </h1>
        <p className="max-w-4xl text-base leading-7 text-charcoal">
          {clinic.name} is committed to making {clinic.site} accessible to everyone. We aim to align
          with the Web Content Accessibility Guidelines (WCAG) and continuously improve usability for
          all visitors.
        </p>
      </section>

      <section className="border-y border-silver/50 bg-white/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-nearBlack">Our efforts</h2>
            <ul className="space-y-3 text-base leading-7 text-charcoal">
              <li className="flex gap-2">
                <span className="text-gold">•</span>
                <span>Designing and developing with WCAG guidance in mind.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold">•</span>
                <span>Regularly reviewing pages to identify and remediate accessibility issues.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold">•</span>
                <span>Considering new solutions to improve the experience for all users.</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-nearBlack">If you need assistance</h2>
            <p className="text-base leading-7 text-charcoal">
              If you experience difficulty accessing any part of our site, contact us. We will work to
              provide the information you need in an accessible format and address any barriers.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 rounded-2xl border border-silver/60 bg-white/70 p-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-nearBlack">Phone</h3>
            <a
              className="text-base font-semibold text-gold transition hover:text-goldSoft"
              href={`tel:${clinic.phone.replace(/\D/g, "")}`}
            >
              {clinic.phone}
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-nearBlack">Email</h3>
            <a
              className="text-base font-semibold text-gold transition hover:text-goldSoft"
              href={`mailto:${clinic.email}`}
            >
              {clinic.email}
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-nearBlack">Address</h3>
            <p className="text-base leading-7 text-charcoal">
              {clinic.addressLine1}
              <br />
              {clinic.addressLine2}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

