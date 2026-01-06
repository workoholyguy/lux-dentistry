import Image from "next/image";

export const metadata = {
  title: "Preventative Dental Care | Lux Dentistry",
  description: "Comprehensive preventive dental care to maintain optimal oral health and prevent future dental problems.",
};

const benefits = [
  "Early detection of potential issues",
  "Prevention of costly treatments",
  "Maintaining natural teeth longer",
  "Better overall health outcomes",
  "Cost-effective long-term care",
  "Peace of mind and confidence"
];

const services = [
  {
    name: "Comprehensive Oral Examination",
    description: "Thorough evaluation of teeth, gums, and oral tissues to identify any potential issues early."
  },
  {
    name: "Risk Assessment",
    description: "Personalized evaluation of your risk factors for dental diseases and conditions."
  },
  {
    name: "Oral Hygiene Instructions",
    description: "Customized guidance on proper brushing, flossing, and oral care routines."
  },
  {
    name: "Dietary Counseling",
    description: "Advice on nutrition choices that support dental health and prevent decay."
  },
  {
    name: "Sealant Application",
    description: "Protective coating applied to molars to prevent cavities in hard-to-reach areas."
  },
  {
    name: "Fluoride Treatments",
    description: "Professional application of fluoride to strengthen tooth enamel and prevent decay."
  }
];

export default function PreventativeDentalCarePage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/preventative-4.jpg"
            alt="Preventative dental care"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-nearBlack/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Preventative dental care for a lifetime of healthy smiles.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Regular preventive care is the foundation of good oral health. We focus on stopping problems before they start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Preventive Care</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              Why prevention matters more than treatment.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Preventive dental care is about maintaining optimal oral health and catching potential
              issues before they become serious problems. Regular check-ups, cleanings, and education
              help you avoid costly treatments and maintain your natural teeth for life.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/preventative-0.jpg"
                alt="Preventive dental care"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Benefits of Preventive Care</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-lg bg-white p-4 border border-silver/60"
              >
                <div className="h-2 w-2 rounded-full bg-gold flex-shrink-0"></div>
                <span className="text-sm text-charcoal">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Our Preventive Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Comprehensive preventive care includes regular examinations, professional cleanings,
            and personalized guidance to maintain your oral health.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-nearBlack">{service.name}</h3>
              <p className="text-sm leading-6 text-charcoal">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISUAL GALLERY */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-silver/60">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/preventative-6.webp"
                  alt="Preventive dental care"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-silver/60">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/preventative-7.webp"
                  alt="Preventive dental care"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION WITH PLACEHOLDER */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">The Preventive Care Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Our systematic approach ensures comprehensive care and early detection of potential issues.
            </p>
          </div>

          {/* Process steps placeholder - will be replaced with images/videos */}
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Initial Assessment</h3>
              <p className="text-sm text-charcoal">Comprehensive examination and risk evaluation</p>
              <div className="mt-4 mx-auto w-full max-w-xs h-32 rounded-lg overflow-hidden border border-silver/60">
                <div className="relative w-full h-full">
                  <Image
                    src="/preventative-1.jpg"
                    alt="Initial assessment and examination"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Professional Cleaning</h3>
              <p className="text-sm text-charcoal">Thorough cleaning and preventive treatments</p>
              <div className="mt-4 mx-auto w-full max-w-xs h-32 rounded-lg overflow-hidden border border-silver/60">
                <div className="relative w-full h-full">
                  <Image
                    src="/preventative-2.jpg"
                    alt="Professional dental cleaning"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Education & Prevention</h3>
              <p className="text-sm text-charcoal">Personalized guidance for ongoing care</p>
              <div className="mt-4 mx-auto w-full max-w-xs h-32 rounded-lg overflow-hidden border border-silver/60">
                <div className="relative w-full h-full">
                  <Image
                    src="/preventative-3.jpg"
                    alt="Dental education and prevention"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENCY GUIDANCE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/preventative-5.webp"
                alt="Regular dental visits"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              How often should you visit?
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-silver/60">
                <div className="font-medium text-nearBlack mb-1">Most Adults</div>
                <p className="text-sm text-charcoal">Every 6 months for routine check-ups and cleanings</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-silver/60">
                <div className="font-medium text-nearBlack mb-1">High Risk Patients</div>
                <p className="text-sm text-charcoal">Every 3-4 months for enhanced preventive care</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-silver/60">
                <div className="font-medium text-nearBlack mb-1">Children</div>
                <p className="text-sm text-charcoal">Every 6 months, with additional visits as needed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Start your preventive care journey today.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Regular preventive care is the best investment you can make in your oral health.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Schedule Check-up
          </a>
        </div>
      </section>
    </div>
  );
}
