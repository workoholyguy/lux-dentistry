export const metadata = {
  title: "HIPAA Notice of Privacy Practices | Lux Dentistry",
  description:
    "How Lux Dentistry uses and protects your health information, your rights, and how to contact us with questions or concerns.",
};

const clinic = {
  name: "Lux Dentistry",
  addressLine1: "1155 Bluegrass Ct",
  addressLine2: "Alpharetta, GA 30004",
  phone: "(678) 773-7354",
  email: "Nasimdoroudgar@gmail.com",
};

const rights = [
  "Get an electronic or paper copy of your medical record and other health information we have about you.",
  "Ask us to correct information you believe is incomplete or inaccurate.",
  "Request confidential communications (for example, using a different mailing address).",
  "Ask us to limit what we use or share for treatment, payment, or operations; we will honor when possible and when it will not affect your care.",
  "Receive a list of certain disclosures we have made of your health information for the prior six years.",
  "Get a copy of this notice at any time.",
  "Choose someone to act for you if they have medical power of attorney or are your legal guardian.",
  "File a complaint if you believe your privacy rights have been violated.",
];

const choices = [
  "Share information with family or friends involved in your care or in a disaster relief situation.",
  "Include you in reminders or basic communications related to your care.",
  "Contact you for fundraising; you can ask us not to contact you again.",
];

const usesAndDisclosures = [
  "Treat you and coordinate your care with other providers.",
  "Run our practice operations, improve services, and contact you when needed.",
  "Bill and receive payment from you, your health plan, or other payers.",
  "Help with public health and safety issues, such as reporting disease or suspected abuse when required.",
  "Comply with law enforcement or government requests when legally required.",
  "Respond to organ and tissue donation requests, medical examiners, or funeral directors as allowed by law.",
  "Address workers’ compensation, law enforcement, and other government requests when applicable.",
  "Respond to lawsuits, court orders, or subpoenas when required.",
];

const responsibilities = [
  "Maintain the privacy and security of your protected health information.",
  "Inform you promptly if a breach occurs that may have compromised your information.",
  "Follow the duties and privacy practices described in this notice.",
  "Use or share your information only as described here unless you authorize additional uses in writing. You may revoke that authorization in writing at any time.",
];

export default function HipaaNoticePage() {
  return (
    <div className="bg-softBg text-charcoal">
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">
          HIPAA Notice of Privacy Practices
        </p>
        <h1 className="text-3xl font-semibold text-nearBlack md:text-4xl">
          Your information. Your rights. Our responsibilities.
        </h1>
        <p className="max-w-4xl text-base leading-7 text-charcoal">
          This notice describes how medical information about you may be used and disclosed, and how
          you can access this information. Please review it carefully. If you have questions, contact
          us using the information below.
        </p>
        <div className="rounded-xl border border-silver/60 bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-nearBlack">Contact</h2>
          <p className="mt-2 text-base leading-7 text-charcoal">
            {clinic.name}
            <br />
            {clinic.addressLine1}
            <br />
            {clinic.addressLine2}
            <br />
            Phone:{" "}
            <a className="text-gold transition hover:text-goldSoft" href={`tel:${clinic.phone.replace(/\D/g, "")}`}>
              {clinic.phone}
            </a>
          </p>
        </div>
      </section>

      <section className="border-y border-silver/50 bg-white/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-nearBlack">Your Rights</h2>
            <ul className="space-y-3 text-base leading-7 text-charcoal">
              {rights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-nearBlack">Your Choices</h2>
            <p className="text-base leading-7 text-charcoal">
              In certain situations you can tell us how to share your information. We will follow your
              instructions when possible and when it does not affect your care.
            </p>
            <ul className="space-y-3 text-base leading-7 text-charcoal">
              {choices.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 rounded-2xl border border-silver/60 bg-white/70 p-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-nearBlack">Our Uses and Disclosures</h2>
            <p className="text-base leading-7 text-charcoal">
              We typically use or share your health information in the following ways:
            </p>
            <ul className="space-y-3 text-base leading-7 text-charcoal">
              {usesAndDisclosures.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-charcoal">
              For certain situations—such as marketing, sale of information, or most sharing of psychotherapy notes—we
              will obtain your written permission first.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-nearBlack">Our Responsibilities</h2>
            <ul className="space-y-3 text-base leading-7 text-charcoal">
              {responsibilities.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-charcoal">
              We may change the terms of this notice, and the changes will apply to all information we have about you.
              The current notice will always be available on our website and by request in our office.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-xl border border-silver/60 bg-white/70 p-6">
          <h2 className="text-xl font-semibold text-nearBlack">Questions or Complaints</h2>
          <p className="mt-2 text-base leading-7 text-charcoal">
            If you have questions or want to exercise your rights, contact us at the phone number above. You may also
            submit a complaint to the U.S. Department of Health and Human Services, Office for Civil Rights. We will not
            retaliate for filing a complaint. For official guidance, visit{" "}
            <a
              href="https://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/index.html"
              className="text-gold transition hover:text-goldSoft"
            >
              hhs.gov/ocr/privacy/hipaa
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

