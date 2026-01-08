import Image from "next/image";

export const metadata = {
  title: "Full Mouth Crowns | Lux Dentistry",
  description: "Complete mouth rehabilitation with custom crowns to restore function, aesthetics, and oral health.",
};

const indicationsForFullMouth = [
  "Severely worn down teeth from grinding or acid erosion",
  "Multiple large cavities or failing restorations",
  "Teeth damaged by trauma or accident",
  "Genetic conditions affecting tooth structure",
  "Desire for complete smile makeover",
  "Jaw joint problems requiring occlusal adjustment"
];

const treatmentPhases = [
  {
    phase: "Planning & Preparation",
    duration: "1-2 weeks",
    description: "Comprehensive examination, treatment planning, and initial preparations",
    steps: ["Full mouth X-rays and impressions", "Bite analysis and jaw evaluation", "Treatment plan development", "Financial planning discussion"]
  },
  {
    phase: "Temporary Phase",
    duration: "2-4 weeks",
    description: "Temporary restorations while custom crowns are fabricated",
    steps: ["Tooth preparations", "Temporary crown placement", "Bite adjustment and testing", "Patient adaptation period"]
  },
  {
    phase: "Final Restorations",
    duration: "2-6 weeks",
    description: "Placement of permanent custom crowns",
    steps: ["Crown delivery and cementation", "Final bite adjustment", "Occlusal refinement", "Post-treatment evaluation"]
  },
  {
    phase: "Follow-up Care",
    duration: "Ongoing",
    description: "Long-term maintenance and monitoring",
    steps: ["Regular check-ups every 3-6 months", "Professional cleanings", "Bite adjustments as needed", "Monitoring for wear or changes"]
  }
];

const benefits = [
  "Complete restoration of dental function",
  "Improved aesthetics and smile appearance",
  "Better bite alignment and jaw function",
  "Protection against further tooth wear",
  "Enhanced self-confidence and quality of life",
  "Long-term durability with proper care"
];

export default function FullMouthCrownsPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/full-mouth-4.jpg"
            alt="Full mouth crowns rehabilitation"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-nearBlack/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Complete mouth rehabilitation with full-mouth crowns.
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-6 text-white/90 sm:text-lg sm:leading-7">
                Transform your dental health and appearance with comprehensive crown therapy designed for lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Full Mouth Rehabilitation</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              Comprehensive restoration for optimal oral health.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Full-mouth crowns involve placing custom crowns on all or most of your teeth
              to restore function, aesthetics, and protection. This comprehensive approach
              addresses severe wear, damage, or bite issues that affect your entire mouth.
              The result is a beautiful, functional smile that lasts for decades.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/full-mouth-3.jpg"
                alt="Full mouth crowns rehabilitation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INDICATIONS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">When Full-Mouth Crowns Are Recommended</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Full-mouth rehabilitation is typically recommended when individual restorations aren't sufficient.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {indicationsForFullMouth.map((indication) => (
              <div
                key={indication}
                className="flex items-start gap-3 rounded-lg bg-white p-4 border border-silver/60"
              >
                <div className="h-2 w-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <span className="text-sm text-charcoal">{indication}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Benefits of Full-Mouth Crowns</h2>
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

      {/* TREATMENT PHASES */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Treatment Timeline & Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Full-mouth rehabilitation is a comprehensive process that typically takes 2-3 months to complete.
            </p>
          </div>

          <div className="space-y-8">
            {treatmentPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-nearBlack font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-nearBlack">{phase.phase}</h3>
                    <p className="text-sm text-gold font-medium">{phase.duration}</p>
                  </div>
                </div>
                <p className="text-sm text-charcoal">{phase.description}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {phase.steps.map((step) => (
                    <div key={step} className="flex items-center gap-2 text-sm text-charcoal">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIAL OPTIONS */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              Choosing the right crown materials.
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              For full-mouth cases, we select crown materials based on your specific needs,
              budget, and long-term goals. We often combine different materials for optimal
              results.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                <span className="text-sm">Front teeth: All-ceramic for natural aesthetics</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                <span className="text-sm">Back teeth: Zirconia or PFM for strength</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                <span className="text-sm">High-stress areas: Gold for longevity</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                <span className="text-sm">Budget considerations: PFM as cost-effective option</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/full-mouth-0.jpg"
                alt="Crown material options for full mouth rehabilitation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONSIDERATIONS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Important Considerations</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 border border-silver/60">
              <h3 className="text-lg font-semibold text-nearBlack mb-4">What to Expect</h3>
              <div className="space-y-3 text-sm text-charcoal">
                <p>• Treatment takes 2-3 months total</p>
                <p>• Multiple appointments required</p>
                <p>• Temporary restorations during fabrication</p>
                <p>• Some sensitivity during adjustment period</p>
                <p>• Significant investment in oral health</p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 border border-silver/60">
              <h3 className="text-lg font-semibold text-nearBlack mb-4">Long-term Success</h3>
              <div className="space-y-3 text-sm text-charcoal">
                <p>• Proper oral hygiene essential</p>
                <p>• Regular professional cleanings</p>
                <p>• Night guard if grinding present</p>
                <p>• Periodic bite adjustments</p>
                <p>• Crowns can last 10-30 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS VISUALIZATION WITH PLACEHOLDER */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">The Transformation Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            See how full-mouth rehabilitation can transform your smile and dental function.
          </p>
        </div>

        {/* Before/After placeholder */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/2_Before.jpeg"
                alt="Before full mouth crowns treatment"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-center text-sm text-charcoal">Worn down teeth affecting function and appearance</p>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/2_After.jpeg"
                alt="After full mouth crowns treatment"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-center text-sm text-charcoal">Restored function, aesthetics, and confidence</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Transform your smile with full-mouth rehabilitation.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            If you're dealing with severe tooth wear or multiple dental issues, full-mouth crowns may be the comprehensive solution you need.
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
