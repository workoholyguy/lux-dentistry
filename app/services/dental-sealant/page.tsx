export const metadata = {
  title: "Dental Sealants | Lux Dentistry",
  description: "Protective dental sealants for children and adults to prevent cavities in hard-to-reach areas of molars and premolars.",
};

const sealantBenefits = [
  "Prevents up to 80% of cavities in treated teeth",
  "Protects grooves and fissures where most cavities occur",
  "Long-lasting protection (5-10 years)",
  "Painless application process",
  "Cost-effective preventive measure",
  "No alteration of natural tooth structure"
];

const idealCandidates = [
  "Children and teenagers with developing permanent teeth",
  "Adults with deep grooves in molars",
  "Patients with history of cavities",
  "Those with difficulty maintaining oral hygiene in back teeth",
  "Patients undergoing orthodontic treatment",
  "Individuals with special needs or limited dexterity"
];

const maintenanceTips = [
  "Continue regular brushing and flossing",
  "Use fluoridated toothpaste",
  "Visit dentist every 6 months for check-ups",
  "Avoid chewing hard foods on sealed teeth initially",
  "Report any chipping or wear to your dentist",
  "Consider reapplication every 5-10 years"
];

export default function DentalSealantPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slateBlue to-navy">
          <div className="absolute inset-0 bg-nearBlack/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Shield your teeth from cavities with dental sealants.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Invisible protective coating that seals out decay-causing bacteria and food particles from tooth grooves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Cavity Prevention</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              A protective barrier against decay.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Dental sealants are thin, protective coatings applied to the chewing surfaces of
              back teeth. They fill in the deep grooves and fissures where food particles and
              bacteria can hide, preventing cavities before they start. This simple, painless
              procedure provides years of protection.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for dental sealants */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">🛡️</div>
                  <p className="text-sm">Dental Sealants Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Why Dental Sealants Work</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Sealants provide a physical barrier that keeps decay-causing elements away from vulnerable tooth surfaces.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sealantBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-lg bg-white p-4 border border-silver/60"
              >
                <div className="h-2 w-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <span className="text-sm text-charcoal">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO NEEDS SEALANTS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              Who benefits from dental sealants?
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              Sealants are most effective when applied soon after permanent teeth erupt,
              but adults can benefit too, especially those prone to cavities.
            </p>
            <div className="space-y-3">
              {idealCandidates.map((candidate) => (
                <div
                  key={candidate}
                  className="flex items-center gap-3 rounded-lg bg-white p-3 border border-silver/60"
                >
                  <div className="h-2 w-2 rounded-full bg-gold flex-shrink-0"></div>
                  <span className="text-sm text-charcoal">{candidate}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for sealant candidates */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">👨‍👩‍👧‍👦</div>
                  <p className="text-sm">Ideal Candidates for Sealants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS WITH PLACEHOLDER */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">The Sealant Application Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Quick, painless procedure that can be completed in one dental visit.
            </p>
          </div>

          {/* Process steps with image/video placeholders */}
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Cleaning</h3>
              <p className="text-sm text-charcoal mb-4">Tooth surface is thoroughly cleaned</p>
              {/* Image/Video placeholder */}
              <div className="mx-auto w-full max-w-xs h-24 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
                <div className="text-center text-silver">
                  <div className="text-2xl mb-1">🧹</div>
                  <p className="text-xs">Cleaning Process Image</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Preparation</h3>
              <p className="text-sm text-charcoal mb-4">Tooth is prepared for sealant adhesion</p>
              {/* Image/Video placeholder */}
              <div className="mx-auto w-full max-w-xs h-24 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
                <div className="text-center text-silver">
                  <div className="text-2xl mb-1">🔧</div>
                  <p className="text-xs">Preparation Video</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Application</h3>
              <p className="text-sm text-charcoal mb-4">Sealant material is applied and cured</p>
              {/* Image/Video placeholder */}
              <div className="mx-auto w-full max-w-xs h-24 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
                <div className="text-center text-silver">
                  <div className="text-2xl mb-1">💡</div>
                  <p className="text-xs">Application Animation</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Check</h3>
              <p className="text-sm text-charcoal mb-4">Bite and sealant integrity are verified</p>
              {/* Image/Video placeholder */}
              <div className="mx-auto w-full max-w-xs h-24 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
                <div className="text-center text-silver">
                  <div className="text-2xl mb-1">✅</div>
                  <p className="text-xs">Final Check Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAINTENANCE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              Caring for your dental sealants.
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              Sealants are durable but require proper care to maximize their lifespan.
              Regular dental check-ups ensure they remain intact and effective.
            </p>
            <div className="grid gap-3">
              {maintenanceTips.map((tip) => (
                <div
                  key={tip}
                  className="flex items-start gap-3 rounded-lg bg-white p-3 border border-silver/60"
                >
                  <div className="h-2 w-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-charcoal">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for sealant maintenance */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">🧴</div>
                  <p className="text-sm">Sealant Care & Maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN TO GET SEALANTS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">When to Get Dental Sealants</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-lg">👶</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Children</h3>
              <p className="text-sm text-charcoal">As soon as 6-year molars and 12-year molars erupt (ages 6-7 and 11-12)</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-lg">🧑</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Teens</h3>
              <p className="text-sm text-charcoal">Before wisdom teeth erupt, and premolars if not previously sealed</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-lg">👨</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Adults</h3>
              <p className="text-sm text-charcoal">Any time to protect vulnerable teeth, especially with cavity history</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Protect your teeth from cavities today.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Dental sealants provide an invisible shield against decay. Schedule a consultation to see if they're right for you.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
