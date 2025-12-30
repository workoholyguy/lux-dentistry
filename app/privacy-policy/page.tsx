export const metadata = {
  title: "Privacy Policy | Lux Dentistry",
  description:
    "How Lux Dentistry collects, uses, and protects your personal information across our website and services.",
};

const clinic = {
  name: "Lux Dentistry",
  addressLine1: "1155 Bluegrass Ct",
  addressLine2: "Alpharetta, GA 30004",
  phone: "(678) 773-7354",
  email: "Nasimdoroudgar@gmail.com",
  site: "https://www.theluxdentistry.com",
  effective: "December 30, 2025",
};

const personalInfo = ["Name", "Email", "Phone or mobile number", "Home or mailing address"];

const usageInfo = [
  "Contact and communicate with you, including appointment reminders and responses to inquiries.",
  "Provide and improve our services and patient experience.",
  "Maintain internal records and administration.",
  "Comply with legal, regulatory, and reporting obligations.",
];

const automaticInfo = [
  "IP address, browser type, and device information.",
  "Pages visited, time and date of visits, and time spent on pages.",
  "Error details and basic diagnostics to improve site performance.",
];

const sharing = [
  "Service providers who support our operations (for example, hosting, analytics) under confidentiality obligations.",
  "Legal requirements, such as responding to lawful requests from government or law enforcement.",
  "Business transfers, in the event of a merger, acquisition, or similar transaction, consistent with this policy.",
];

const rights = [
  "Request access to the personal information we hold about you.",
  "Ask us to correct information that is inaccurate or incomplete.",
  "Request confidential communications or alternative contact methods.",
  "Ask us to limit certain uses or sharing when legally permitted and without impacting care.",
  "Withdraw consent where processing is based on consent, without affecting prior lawful processing.",
  "Request deletion of personal information when it is no longer needed or when allowed by law.",
  "Opt out of marketing communications; unsubscribe instructions are included in those messages.",
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-softBg text-charcoal">
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Privacy Policy</p>
        <h1 className="text-3xl font-semibold text-nearBlack md:text-4xl">Your privacy matters to us.</h1>
        <p className="max-w-4xl text-base leading-7 text-charcoal">
          This Privacy Policy explains how {clinic.name} collects, uses, and protects personal information across our
          website and services. By using our site or sharing your information with us, you agree to this policy. The
          effective date is {clinic.effective}.
        </p>
        <div className="grid gap-6 rounded-xl border border-silver/60 bg-white/80 p-6 shadow-sm md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-nearBlack">Who we are</h2>
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
              <br />
              Email:{" "}
              <a className="text-gold transition hover:text-goldSoft" href={`mailto:${clinic.email}`}>
                {clinic.email}
              </a>
              <br />
              Website:{" "}
              <a className="text-gold transition hover:text-goldSoft" href={clinic.site}>
                {clinic.site}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-nearBlack">What this covers</h2>
            <p className="mt-2 text-base leading-7 text-charcoal">
              This policy applies to personal information we collect through our website and any related online contact
              channels we operate. It does not replace our HIPAA Notice of Privacy Practices for health information used
              in care delivery; please see our HIPAA notice for those details.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-silver/50 bg-white/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-nearBlack">Information we collect</h2>
            <p className="text-base leading-7 text-charcoal">
              We collect information you provide directly and information gathered automatically when you use our site.
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-nearBlack">Personal information</h3>
              <ul className="space-y-2 text-base leading-7 text-charcoal">
                {personalInfo.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-nearBlack">Automatically collected</h3>
              <ul className="space-y-2 text-base leading-7 text-charcoal">
                {automaticInfo.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-charcoal">
                This information alone does not directly identify you, but it may be combined with other data to do so.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-nearBlack">How we use your information</h2>
            <ul className="space-y-2 text-base leading-7 text-charcoal">
              {usageInfo.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-charcoal">
              We use and share information only when we have a legitimate reason and when it is reasonably necessary for
              these purposes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 rounded-2xl border border-silver/60 bg-white/70 p-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-nearBlack">Sharing your information</h2>
            <ul className="space-y-3 text-base leading-7 text-charcoal">
              {sharing.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-charcoal">
              We do not sell your personal information. We will obtain your authorization where required before using
              information for purposes such as marketing beyond your preferences.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-nearBlack">Data security and retention</h2>
            <p className="text-base leading-7 text-charcoal">
              We protect personal information with commercially reasonable safeguards to prevent loss, theft, and
              unauthorized access or disclosure. No method of transmission or storage is completely secure, but we work
              to keep your data safe.
            </p>
            <p className="text-base leading-7 text-charcoal">
              We retain personal information only as long as needed for the purposes described or as required by law. If
              it is no longer required, we delete it or de-identify it.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 rounded-2xl border border-silver/60 bg-white/70 p-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-nearBlack">Your rights and choices</h2>
            <ul className="space-y-3 text-base leading-7 text-charcoal">
              {rights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-charcoal">
              To exercise these rights, contact us using the details below. We may need to verify your identity before
              fulfilling certain requests.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-nearBlack">Other important information</h2>
            <ul className="space-y-3 text-base leading-7 text-charcoal">
              <li className="flex gap-2">
                <span className="text-gold">•</span>
                <span>
                  Children&apos;s privacy: our services are not directed to children under 13, and we do not knowingly
                  collect information from them.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold">•</span>
                <span>
                  International transfers: information may be stored or processed in other locations; we protect it in
                  line with this policy and applicable law.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold">•</span>
                <span>
                  Links: our site may link to other sites we do not control; review their policies for how they handle
                  data.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold">•</span>
                <span>
                  Changes: we may update this policy; the effective date will reflect the latest version available on
                  our site.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-silver/60 bg-white/70 p-6">
          <h2 className="text-xl font-semibold text-nearBlack">Contact us</h2>
          <p className="mt-2 text-base leading-7 text-charcoal">
            For questions or concerns about this policy or your personal information, contact:
          </p>
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
            <br />
            Email:{" "}
            <a className="text-gold transition hover:text-goldSoft" href={`mailto:${clinic.email}`}>
              {clinic.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

