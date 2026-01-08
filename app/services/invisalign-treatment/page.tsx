import Image from "next/image";

export const metadata = {
  title: "Invisalign Treatment | Lux Dentistry",
  description: "Clear aligner therapy for discreet teeth straightening. Invisalign offers comfortable, removable aligners for a beautiful smile.",
};

const invisalignBenefits = [
  "Virtually invisible aligners",
  "Removable for eating and cleaning",
  "Comfortable plastic material",
  "Fewer office visits than braces",
  "Predictable treatment with 3D planning",
  "No metal brackets or wires"
];

const treatmentProcess = [
  {
    step: "Initial Consultation",
    description: "Comprehensive examination and treatment planning",
    duration: "1 hour",
    details: "Digital scan, photos, and discussion of goals"
  },
  {
    step: "3D Treatment Plan",
    description: "Custom treatment plan created with ClinCheck® software",
    duration: "1-2 weeks",
    details: "Virtual simulation of tooth movement throughout treatment"
  },
  {
    step: "Aligner Delivery",
    description: "Receive your custom aligners and begin treatment",
    duration: "30 minutes",
    details: "Fitting, instructions, and first set of aligners"
  },
  {
    step: "Progress Monitoring",
    description: "Regular check-ups every 4-6 weeks",
    duration: "15-30 minutes",
    details: "Monitor progress and provide new aligner sets"
  },
  {
    step: "Refinement (if needed)",
    description: "Fine-tuning for optimal results",
    duration: "Varies",
    details: "Additional aligners to perfect the final result"
  },
  {
    step: "Retention",
    description: "Maintain your new smile with retainers",
    duration: "Ongoing",
    details: "Wear retainers to prevent teeth from shifting back"
  }
];

const invisalignTypes = [
  {
    name: "Invisalign Full",
    description: "Complete treatment for comprehensive orthodontic cases",
    indications: "Crowding, spacing, crossbites, overbites, underbites",
    duration: "12-18 months",
    aligners: "26-48 sets"
  },
  {
    name: "Invisalign Lite",
    description: "Shorter treatment for minor orthodontic issues",
    indications: "Mild crowding, minor spacing, relapse cases",
    duration: "6-8 months",
    aligners: "14-20 sets"
  },
  {
    name: "Invisalign i7",
    description: "Shortest treatment for very minor cases",
    indications: "Minor crowding or spacing in 1-2 teeth",
    duration: "3-6 months",
    aligners: "7 sets"
  },
  {
    name: "Invisalign Teen",
    description: "Designed specifically for teenagers",
    indications: "All teen orthodontic needs with compliance indicators",
    duration: "12-18 months",
    aligners: "As needed"
  }
];

const careInstructions = [
  "Wear aligners 20-22 hours per day",
  "Remove for eating and drinking (except water)",
  "Brush teeth after each meal before reinserting",
  "Clean aligners daily with clear antibacterial soap",
  "Store aligners in provided case when not wearing",
  "Avoid smoking and avoid chewing gum",
  "Visit dentist every 4-6 weeks for progress checks"
];

export default function InvisalignTreatmentPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/invisalign-0.jpg"
            alt="Hero: Invisalign treatment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-nearBlack/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Straighten your teeth discreetly with Invisalign.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Clear, removable aligners that give you the smile you want without the look of traditional braces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Clear Aligners</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              Modern orthodontics for the modern lifestyle.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Invisalign uses a series of clear, custom-made aligners to gradually straighten your teeth.
              Unlike traditional braces, Invisalign aligners are virtually invisible, removable for eating
              and cleaning, and designed for comfort. Using advanced 3D imaging technology, we can show
              you exactly how your teeth will move throughout treatment.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/invisalign-1.webp"
                alt="Invisalign aligners"
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
            <h2 className="text-3xl font-semibold text-nearBlack">Why Choose Invisalign?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Invisalign offers all the benefits of traditional orthodontics with added convenience and aesthetics.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {invisalignBenefits.map((benefit) => (
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

      {/* INVISALIGN TYPES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Invisalign Treatment Options</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Different Invisalign systems for varying treatment needs and timelines.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {invisalignTypes.map((type) => (
            <div
              key={type.name}
              className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-nearBlack">{type.name}</h3>
              <p className="text-sm text-charcoal">{type.description}</p>
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Indications:</div>
                  <p className="text-charcoal">{type.indications}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Duration:</div>
                    <p className="text-charcoal">{type.duration}</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Aligners:</div>
                    <p className="text-charcoal">{type.aligners}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TREATMENT PROCESS WITH PLACEHOLDER */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">The Invisalign Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              A straightforward process from consultation to final results, typically taking 6-18 months.
            </p>
          </div>

          {/* Process steps with image/video placeholders */}
          <div className="space-y-6">
            {treatmentProcess.map((step, index) => (
              <div key={step.step} className="flex flex-col gap-4 rounded-lg bg-white p-6 border border-silver/60">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-nearBlack font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-nearBlack">{step.step}</h3>
                    <p className="text-sm text-gold">{step.duration}</p>
                  </div>
                </div>
                <p className="text-sm text-charcoal">{step.description}</p>
                <p className="text-sm text-charcoal/80">{step.details}</p>
                {/* Image/Video placeholder for each step */}
                <div className="w-full max-w-sm h-24 rounded-lg bg-silver/20 border border-silver/60 relative">
                  <Image
                    src={
                      index === 0 ? "/invisalign-2.png" :
                      index === 1 ? "/invisalign-3.png" :
                      index === 2 ? "/invisalign-4.jpeg" :
                      index === 3 ? "/invisalign-6.jpg" :
                      index === 4 ? "/invisalign-7.jpeg" :
                      "/invisalign-8.webp"
                    }
                    alt={`${step.step} demo`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARE INSTRUCTIONS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              Caring for your Invisalign aligners.
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              Proper care of your aligners ensures effective treatment and maintains oral hygiene.
              Follow these guidelines for the best results.
            </p>
            <div className="space-y-3">
              {careInstructions.map((instruction) => (
                <div
                  key={instruction}
                  className="flex items-start gap-3 rounded-lg bg-white p-3 border border-silver/60"
                >
                  <div className="h-2 w-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-charcoal">{instruction}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/invisalign-8.webp"
                alt="Aligner care instructions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER PLACEHOLDER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">See the Transformation</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Invisalign can correct crowding, spacing, and bite issues for a beautiful, confident smile.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/invisalign-9.jpg"
                alt="Before Invisalign"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-center text-sm text-charcoal">Crowded or misaligned teeth</p>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/invisalign-10.png"
                alt="After Invisalign"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-center text-sm text-charcoal">Straight, beautiful smile</p>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES HIGHLIGHTS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Invisalign Success Rates</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-green-700">96%</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Patient Satisfaction</h3>
              <p className="text-sm text-charcoal">Patients report high satisfaction with comfort and aesthetics</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-blue-700">90%</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Treatment Success</h3>
              <p className="text-sm text-charcoal">Most cases achieve predicted results with proper wear</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-gold">22h</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Daily Wear</h3>
              <p className="text-sm text-charcoal">Optimal wear time for best results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Ready for straighter teeth without braces?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Schedule your Invisalign consultation to see if clear aligners are right for you. We'll create a personalized treatment plan.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Start Invisalign Journey
          </a>
        </div>
      </section>
    </div>
  );
}
