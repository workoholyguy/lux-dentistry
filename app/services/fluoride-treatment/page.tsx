import Image from "next/image";

export const metadata = {
  title: "Fluoride Treatment | Lux Dentistry",
  description: "Professional fluoride treatments to strengthen tooth enamel and prevent cavities for optimal dental protection.",
};

const fluorideTypes = [
  {
    name: "Topical Fluoride Varnish",
    description: "Paint-on treatment that adheres to teeth for extended protection",
    concentration: "5% sodium fluoride",
    duration: "4-6 hours protection",
    frequency: "Every 3-6 months"
  },
  {
    name: "Fluoride Foam/Gel Tray",
    description: "Custom-fitted trays filled with fluoride foam or gel",
    concentration: "1.23% acidulated phosphate fluoride",
    duration: "1-4 weeks protection",
    frequency: "Every 3-6 months"
  },
  {
    name: "High-Concentration Gel",
    description: "Professional application of concentrated fluoride gel",
    concentration: "1.23% fluoride ion",
    duration: "Several months protection",
    frequency: "Every 6 months or as needed"
  },
  {
    name: "Silver Diamine Fluoride (SDF)",
    description: "Alternative treatment for high-risk patients or difficult-to-treat areas",
    concentration: "38% silver diamine fluoride",
    duration: "Up to 3 years protection",
    frequency: "As needed for specific cases"
  }
];

const benefits = [
  "Strengthens tooth enamel",
  "Makes teeth more resistant to acid",
  "Reverses early tooth decay",
  "Reduces sensitivity",
  "Provides long-lasting protection",
  "Safe for all ages when properly applied"
];

const whoNeedsFluoride = [
  "Children and teenagers during tooth development",
  "Adults with dry mouth or gum recession",
  "Patients with history of frequent cavities",
  "Those undergoing orthodontic treatment",
  "Patients with exposed root surfaces",
  "Individuals with poor oral hygiene habits"
];

export default function FluorideTreatmentPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/flourde-5.jpg"
            alt="Professional fluoride treatment"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-nearBlack/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Strengthen your teeth with professional fluoride treatment.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Fluoride is nature's cavity fighter. Professional application provides concentrated protection that toothpaste alone can't deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Fluoride Protection</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              How fluoride protects your teeth.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Fluoride is a naturally occurring mineral that strengthens tooth enamel and makes
              teeth more resistant to decay. While toothpaste contains fluoride, professional
              treatments provide much higher concentrations for enhanced protection and can
              even reverse early cavities.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/flourde-3.jpg"
                alt="Fluoride protection for teeth"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FLUORIDE TYPES */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Types of Professional Fluoride Treatment</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Different fluoride treatments offer varying levels of protection and duration based on your needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {fluorideTypes.map((fluoride) => (
              <div
                key={fluoride.name}
                className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-nearBlack">{fluoride.name}</h3>
                <p className="text-sm text-charcoal">{fluoride.description}</p>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Concentration:</div>
                    <p className="text-charcoal">{fluoride.concentration}</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Protection Duration:</div>
                    <p className="text-charcoal">{fluoride.duration}</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Frequency:</div>
                    <p className="text-charcoal">{fluoride.frequency}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Benefits of Fluoride Treatment</h2>
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
      </section>

      {/* WHO NEEDS FLUORIDE */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
                Who benefits from professional fluoride?
              </h2>
              <p className="mb-6 text-base leading-7 text-charcoal">
                Professional fluoride treatments are recommended for patients who need extra
                protection beyond daily toothpaste use.
              </p>
              <div className="space-y-3">
                {whoNeedsFluoride.map((group) => (
                  <div
                    key={group}
                    className="flex items-center gap-3 rounded-lg bg-white p-3 border border-silver/60"
                  >
                    <div className="h-2 w-2 rounded-full bg-gold flex-shrink-0"></div>
                    <span className="text-sm text-charcoal">{group}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/flourde-1.jpg"
                  alt="Who benefits from fluoride treatment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT PROCESS WITH PLACEHOLDER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">The Fluoride Treatment Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Quick, comfortable application that provides immediate and long-term protection.
          </p>
        </div>

        {/* Process steps with image/video placeholders */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Preparation</h3>
            <p className="text-sm text-charcoal mb-4">Teeth are cleaned and dried for optimal fluoride adhesion</p>
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg overflow-hidden border border-silver/60">
              <div className="relative w-full h-full">
                <Image
                  src="/flourde-6.jpg"
                  alt="Preparing teeth for fluoride treatment"
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
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Application</h3>
            <p className="text-sm text-charcoal mb-4">Fluoride is carefully applied to all tooth surfaces</p>
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg overflow-hidden border border-silver/60">
              <div className="relative w-full h-full">
                <Image
                  src="/flourde-4.jpg"
                  alt="Applying fluoride treatment"
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
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Protection</h3>
            <p className="text-sm text-charcoal mb-4">Instructions for care while fluoride takes effect</p>
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg overflow-hidden border border-silver/60">
              <div className="relative w-full h-full">
                <Image
                  src="/flourde-0.jpg"
                  alt="Fluoride protection and care"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY AND EFFECTIVENESS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Safe and Effective Protection</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 border border-silver/60">
              <h3 className="text-lg font-semibold text-nearBlack mb-4">Safety First</h3>
              <div className="space-y-3 text-sm text-charcoal">
                <p>• Professional application ensures proper dosage</p>
                <p>• FDA-approved concentrations for safety</p>
                <p>• Minimal risk of fluorosis in adults</p>
                <p>• Safe for patients of all ages</p>
                <p>• No contraindications with most medications</p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 border border-silver/60">
              <h3 className="text-lg font-semibold text-nearBlack mb-4">Proven Effectiveness</h3>
              <div className="space-y-3 text-sm text-charcoal">
                <p>• Reduces cavities by 20-40%</p>
                <p>• Reverses early enamel decay</p>
                <p>• Strengthens weakened tooth structure</p>
                <p>• Provides long-term protection</p>
                <p>• Cost-effective prevention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Strengthen your teeth with fluoride protection.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Professional fluoride treatments provide the concentrated protection your teeth need for optimal health.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Schedule Treatment
          </a>
        </div>
      </section>
    </div>
  );
}
