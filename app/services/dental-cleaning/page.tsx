import Image from "next/image";

export const metadata = {
  title: "Professional Dental Cleaning | Lux Dentistry",
  description: "Expert dental cleaning services to remove plaque, tartar, and stains for optimal oral health and a brighter smile.",
};

const cleaningTypes = [
  {
    name: "Routine Prophylaxis",
    description: "Standard cleaning for patients with healthy gums and minimal buildup",
    frequency: "Every 6 months",
    duration: "45-60 minutes"
  },
  {
    name: "Deep Cleaning (Scaling & Root Planing)",
    description: "Thorough cleaning below the gumline for patients with gum disease",
    frequency: "As needed, often in 2-4 visits",
    duration: "60-90 minutes per quadrant"
  },
  {
    name: "Gross Debridement",
    description: "Initial cleaning for heavy buildup before comprehensive treatment",
    frequency: "One-time or as needed",
    duration: "60-90 minutes"
  },
  {
    name: "Periodontal Maintenance",
    description: "Ongoing cleaning for patients with treated gum disease",
    frequency: "Every 3-4 months",
    duration: "45-60 minutes"
  }
];

const whatWeRemove = [
  "Plaque - soft, sticky film of bacteria",
  "Tartar - hardened plaque that brushing can't remove",
  "Stains - from coffee, tea, tobacco, and certain foods",
  "Surface debris - food particles and soft deposits",
  "Bacterial toxins - harmful substances that irritate gums"
];

const benefits = [
  "Prevents cavities and gum disease",
  "Freshens breath and improves taste",
  "Removes surface stains for whiter teeth",
  "Allows early detection of dental problems",
  "Reduces risk of systemic health issues",
  "Maintains overall oral health"
];

export default function DentalCleaningPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/dental-cleaning-0.jpg"
            alt="Professional dental cleaning"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-nearBlack/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Professional dental cleanings for optimal oral health.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                More than just a brighter smile – professional cleanings remove harmful buildup and protect your overall health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Professional Cleaning</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              Why professional cleanings matter.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Even with excellent home care, professional dental cleanings are essential for
              removing plaque and tartar that regular brushing and flossing can't reach.
              Our skilled hygienists use specialized tools and techniques for thorough,
              comfortable cleanings.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/dental-cleaning-6.jpg"
                alt="Professional dental cleaning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE REMOVE */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">What Professional Cleaning Removes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Professional cleanings go beyond what you can do at home, removing harmful buildup that leads to decay and gum disease.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whatWeRemove.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg bg-white p-4 border border-silver/60"
              >
                <div className="h-2 w-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <span className="text-sm text-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLEANING TYPES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Types of Professional Cleanings</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Different cleaning approaches based on your oral health needs and gum condition.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cleaningTypes.map((cleaning) => (
            <div
              key={cleaning.name}
              className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-nearBlack">{cleaning.name}</h3>
              <p className="text-sm text-charcoal">{cleaning.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Frequency:</div>
                  <p className="text-charcoal">{cleaning.frequency}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Duration:</div>
                  <p className="text-charcoal">{cleaning.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Benefits of Professional Cleanings</h2>
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

      {/* CLEANING PROCESS WITH PLACEHOLDER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">The Professional Cleaning Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Our systematic approach ensures thorough cleaning while keeping you comfortable throughout.
          </p>
        </div>

        {/* Process steps with image/video placeholders */}
        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-xl">1</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Examination</h3>
            <p className="text-sm text-charcoal mb-4">Assessment of gum health and buildup</p>
            <div className="mx-auto w-full max-w-xs h-24 rounded-lg overflow-hidden border border-silver/60">
              <div className="relative w-full h-full">
                <Image
                  src="/dental-cleaning-5.jpg"
                  alt="Dental examination"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-xl">2</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Scaling</h3>
            <p className="text-sm text-charcoal mb-4">Removal of plaque and tartar</p>
            <div className="mx-auto w-full max-w-xs h-24 rounded-lg overflow-hidden border border-silver/60">
              <div className="relative w-full h-full">
                <Image
                  src="/dental-cleaning-7.jpg"
                  alt="Dental scaling process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-xl">3</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Polishing</h3>
            <p className="text-sm text-charcoal mb-4">Smoothing teeth and stain removal</p>
            <div className="mx-auto w-full max-w-xs h-24 rounded-lg overflow-hidden border border-silver/60">
              <div className="relative w-full h-full">
                <Image
                  src="/dental-cleaning-1.jpg"
                  alt="Dental polishing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-xl">4</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Education</h3>
            <p className="text-sm text-charcoal mb-4">Home care instructions and tips</p>
            <div className="mx-auto w-full max-w-xs h-24 rounded-lg overflow-hidden border border-silver/60">
              <div className="relative w-full h-full">
                <Image
                  src="/dental-cleaning-8.jpg"
                  alt="Dental education and home care"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS AND TECHNIQUES */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
                Advanced tools for gentle, effective cleaning.
              </h2>
              <p className="mb-6 text-base leading-7 text-charcoal">
                Our hygienists use state-of-the-art ultrasonic scalers, hand instruments,
                and polishing systems designed for patient comfort and thorough cleaning.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Ultrasonic scalers for efficient tartar removal</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Hand instruments for precision cleaning</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Air polishing for stain removal</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Fluoride application for enamel protection</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/dental-cleaning-3.jpg"
                  alt="Advanced dental cleaning tools and equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Schedule your professional cleaning today.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Regular professional cleanings are the foundation of good oral health. Don&apos;t wait for problems to develop.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Book Cleaning
          </a>
        </div>
      </section>
    </div>
  );
}
