import Image from "next/image";

export const metadata = {
  title: "Why Choose Us | Lux Dentistry",
  description: "Discover what sets Lux Dentistry apart: our commitment to clarity, comfort, and comprehensive dental care.",
};

const reasons = [
  {
    title: "Transparent Communication",
    description: "We explain everything clearly before, during, and after treatment. No medical jargon, just straightforward information you can understand.",
    icon: "💬"
  },
  {
    title: "Comfort-Focused Care",
    description: "Sedation options, anxiety management, and gentle techniques ensure your comfort is our priority at every visit.",
    icon: "🌿"
  },
  {
    title: "Advanced Technology",
    description: "Digital X-rays, laser dentistry, and modern equipment for precise, efficient, and minimally invasive treatments.",
    icon: "⚡"
  },
  {
    title: "Preventive Approach",
    description: "We focus on preventing problems before they start, saving you time, money, and discomfort in the long run.",
    icon: "🛡️"
  },
  {
    title: "Comprehensive Services",
    description: "From cleanings to complex restorations, we provide complete dental care under one roof with coordinated treatment.",
    icon: "🏥"
  },
  {
    title: "Patient-Centered Scheduling",
    description: "Flexible hours, minimal wait times, and appointment structures that respect your time and preferences.",
    icon: "⏰"
  }
];

export default function WhyChooseUsPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-navy to-slateBlue">
          <div className="absolute inset-0 bg-nearBlack/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Why patients choose Lux Dentistry for their dental care.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                We believe dental care should be clear, comfortable, and comprehensive. Here's what makes us different.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REASONS GRID */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Why Choose Us</p>
          <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
            Built on trust, clarity, and patient comfort.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-3xl">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-nearBlack">{reason.title}</h3>
              <p className="text-base leading-7 text-charcoal">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PATIENT EXPERIENCE */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
                Your comfort comes first.
              </h2>
              <p className="mb-6 text-base leading-7 text-charcoal">
                We understand that dental visits can be stressful for many people. That's why we create a calm,
                supportive environment where you feel heard and cared for. From our gentle approach to our
                flexible scheduling, everything is designed with your comfort in mind.
              </p>
              <div className="space-y-4 text-sm text-charcoal">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span>Anxiety-free consultations with no pressure</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span>Sedation options for nervous patients</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span>Extended appointment times for complex needs</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span>Emergency appointments within 24 hours</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
              <div className="relative aspect-[4/5] w-full">
                {/* Image placeholder for patient comfort */}
                <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🪑</div>
                    <p className="text-sm">Patient Comfort Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for expertise */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">👨‍⚕️</div>
                  <p className="text-sm">Clinical Expertise Image</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              Decades of clinical expertise.
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              Our team brings extensive experience across all areas of dentistry. We stay current with the
              latest techniques and technologies while maintaining a conservative, evidence-based approach
              to treatment planning.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-4 border border-silver/60">
                <div className="text-2xl font-bold text-gold">15+</div>
                <div className="text-sm text-charcoal">Years of Experience</div>
              </div>
              <div className="rounded-lg bg-white p-4 border border-silver/60">
                <div className="text-2xl font-bold text-gold">5000+</div>
                <div className="text-sm text-charcoal">Happy Patients</div>
              </div>
              <div className="rounded-lg bg-white p-4 border border-silver/60">
                <div className="text-2xl font-bold text-gold">100%</div>
                <div className="text-sm text-charcoal">Digital Practice</div>
              </div>
              <div className="rounded-lg bg-white p-4 border border-silver/60">
                <div className="text-2xl font-bold text-gold">24h</div>
                <div className="text-sm text-charcoal">Emergency Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Ready to experience dental care that puts you first?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Schedule your consultation today and discover why patients choose Lux Dentistry for their dental needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:6787737354"
              className="rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold transition hover:border-goldSoft hover:text-goldSoft"
            >
              Call (678) 773-7354
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
