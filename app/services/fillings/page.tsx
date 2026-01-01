export const metadata = {
  title: "Dental Fillings | Lux Dentistry",
  description: "High-quality dental fillings to restore decayed or damaged teeth using composite, amalgam, and other advanced materials.",
};

const fillingTypes = [
  {
    name: "Composite Fillings",
    description: "Tooth-colored resin that blends seamlessly with natural teeth",
    advantages: ["Natural appearance", "Bonded to tooth structure", "Conservative preparation"],
    bestFor: "Front teeth, visible areas",
    longevity: "5-15 years"
  },
  {
    name: "Amalgam Fillings",
    description: "Silver-colored mixture of metals (mercury, silver, tin, copper)",
    advantages: ["Very durable", "Cost-effective", "Quick placement"],
    bestFor: "Back teeth, high-stress areas",
    longevity: "10-15 years"
  },
  {
    name: "Gold Fillings",
    description: "Cast gold alloy custom-made in dental lab",
    advantages: ["Extremely durable", "Biocompatible", "Long-term success"],
    bestFor: "Large restorations, Patients with metal allergies to amalgam",
    longevity: "15-30 years"
  },
  {
    name: "Ceramic Fillings",
    description: "Porcelain-based material for superior aesthetics and strength",
    advantages: ["Excellent aesthetics", "Very strong", "Biocompatible"],
    bestFor: "Large restorations, Aesthetic concerns",
    longevity: "10-20 years"
  }
];

const whenYouNeedFillings = [
  "Tooth decay (cavities)",
  "Cracked or fractured teeth",
  "Worn down teeth from grinding",
  "Replacing old, failing fillings",
  "Preventing further decay progression",
  "Restoring broken tooth structure"
];

export default function FillingsPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-navy to-slateBlue">
          <div className="absolute inset-0 bg-nearBlack/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Restore your teeth with durable, natural-looking fillings.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Modern dental fillings not only repair decay but restore function and aesthetics, helping you maintain a healthy, confident smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Tooth Restoration</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              Repairing and restoring damaged teeth.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Dental fillings are the most common restorative treatment, used to repair teeth
              damaged by decay, cracks, or wear. Modern materials and techniques allow us
              to restore both the function and appearance of your teeth while preserving
              as much natural tooth structure as possible.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for dental fillings */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">🦷</div>
                  <p className="text-sm">Dental Fillings Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN YOU NEED FILLINGS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">When Do You Need a Filling?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Fillings are needed when tooth structure is lost due to decay or damage.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whenYouNeedFillings.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 rounded-lg bg-white p-4 border border-silver/60"
              >
                <div className="h-2 w-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <span className="text-sm text-charcoal">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILLING TYPES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Types of Dental Fillings</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            We offer various filling materials to match your needs, budget, and aesthetic preferences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {fillingTypes.map((filling) => (
            <div
              key={filling.name}
              className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-nearBlack">{filling.name}</h3>
              <p className="text-sm text-charcoal">{filling.description}</p>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Advantages:</div>
                  <ul className="space-y-1">
                    {filling.advantages.map((advantage) => (
                      <li key={advantage} className="flex items-center gap-2 text-sm text-charcoal">
                        <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Best For:</div>
                  <p className="text-sm text-charcoal">{filling.bestFor}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Longevity:</div>
                  <p className="text-sm text-charcoal">{filling.longevity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FILLING PROCESS WITH PLACEHOLDER */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">The Filling Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Most fillings can be completed in one comfortable visit with local anesthesia.
            </p>
          </div>

          {/* Process steps with image/video placeholders */}
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Numbing</h3>
              <p className="text-sm text-charcoal mb-4">Local anesthesia for comfort</p>
              {/* Image/Video placeholder */}
              <div className="mx-auto w-full max-w-xs h-24 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
                <div className="text-center text-silver">
                  <div className="text-2xl mb-1">💉</div>
                  <p className="text-xs">Anesthesia Image</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Decay Removal</h3>
              <p className="text-sm text-charcoal mb-4">Careful removal of decayed tooth structure</p>
              {/* Image/Video placeholder */}
              <div className="mx-auto w-full max-w-xs h-24 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
                <div className="text-center text-silver">
                  <div className="text-2xl mb-1">🔨</div>
                  <p className="text-xs">Decay Removal Video</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Preparation</h3>
              <p className="text-sm text-charcoal mb-4">Tooth prepared for filling material</p>
              {/* Image/Video placeholder */}
              <div className="mx-auto w-full max-w-xs h-24 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
                <div className="text-center text-silver">
                  <div className="text-2xl mb-1">🔧</div>
                  <p className="text-xs">Preparation Animation</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Placement</h3>
              <p className="text-sm text-charcoal mb-4">Filling placed and shaped to restore tooth</p>
              {/* Image/Video placeholder */}
              <div className="mx-auto w-full max-w-xs h-24 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
                <div className="text-center text-silver">
                  <div className="text-2xl mb-1">🎨</div>
                  <p className="text-xs">Filling Placement Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAL SELECTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              Choosing the right filling material.
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              We help you select the best filling material based on the location of the tooth,
              your budget, aesthetic preferences, and the extent of the restoration needed.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                <span className="text-sm">Front teeth: Composite or ceramic for natural appearance</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                <span className="text-sm">Back teeth: Amalgam or gold for durability</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                <span className="text-sm">Large restorations: Gold or ceramic for longevity</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                <span className="text-sm">Metal allergies: Composite or ceramic alternatives</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for material selection */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎨</div>
                  <p className="text-sm">Filling Materials Comparison</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AFTERCARE */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Caring for Your New Filling</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 border border-silver/60">
              <h3 className="text-lg font-semibold text-nearBlack mb-4">Immediate Aftercare</h3>
              <div className="space-y-3 text-sm text-charcoal">
                <p>• Avoid chewing on the filled tooth for 24 hours</p>
                <p>• Stick to soft foods initially</p>
                <p>• Avoid extreme temperatures</p>
                <p>• Take prescribed pain medication if needed</p>
                <p>• Call if you experience severe pain or sensitivity</p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 border border-silver/60">
              <h3 className="text-lg font-semibold text-nearBlack mb-4">Long-term Care</h3>
              <div className="space-y-3 text-sm text-charcoal">
                <p>• Maintain excellent oral hygiene</p>
                <p>• Visit dentist every 6 months</p>
                <p>• Use fluoridated toothpaste</p>
                <p>• Wear night guard if you grind teeth</p>
                <p>• Report any changes to your dentist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Restore your smile with quality fillings.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Don&apos;t let tooth decay progress. Schedule an appointment to discuss your filling options.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Schedule Filling
          </a>
        </div>
      </section>
    </div>
  );
}
