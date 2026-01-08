import Image from "next/image";

export const metadata = {
  title: "Bad Breath Treatment | Lux Dentistry",
  description: "Comprehensive treatment for halitosis (bad breath) including diagnosis, causes identification, and effective solutions.",
};

const commonCauses = [
  {
    cause: "Poor Oral Hygiene",
    description: "Food particles and bacteria buildup in mouth",
    percentage: "80%",
    solutions: "Better brushing, flossing, tongue cleaning"
  },
  {
    cause: "Gum Disease",
    description: "Bacterial infection in gums causing odor",
    percentage: "15%",
    solutions: "Professional cleaning, gum treatment"
  },
  {
    cause: "Dry Mouth",
    description: "Reduced saliva production allows bacteria growth",
    percentage: "5%",
    solutions: "Hydration, saliva substitutes, medication review"
  },
  {
    cause: "Medical Conditions",
    description: "Diabetes, sinus infections, liver/renal issues",
    percentage: "Less than 5%",
    solutions: "Medical consultation, condition treatment"
  },
  {
    cause: "Diet & Lifestyle",
    description: "Strong foods, smoking, alcohol, medications",
    percentage: "Variable",
    solutions: "Dietary changes, smoking cessation, medication alternatives"
  }
];

const treatmentOptions = [
  {
    name: "Professional Dental Cleaning",
    description: "Deep cleaning to remove plaque, tartar, and bacteria",
    effectiveness: "High for hygiene-related halitosis",
    frequency: "Every 6 months"
  },
  {
    name: "Gum Disease Treatment",
    description: "Treatment of periodontal disease causing bad breath",
    effectiveness: "High for gum-related causes",
    frequency: "As needed for active treatment"
  },
  {
    name: "Saliva-Stimulating Products",
    description: "Medications and products to increase saliva flow",
    effectiveness: "High for dry mouth causes",
    frequency: "Daily use as prescribed"
  },
  {
    name: "Antimicrobial Treatments",
    description: "Mouthwashes and treatments to reduce oral bacteria",
    effectiveness: "Moderate to high depending on cause",
    frequency: "Daily use"
  },
  {
    name: "Lifestyle Modifications",
    description: "Dietary changes, smoking cessation, hydration",
    effectiveness: "High for lifestyle-related causes",
    frequency: "Ongoing lifestyle changes"
  }
];

const dailyPrevention = [
  "Brush teeth twice daily for 2 minutes",
  "Floss daily to remove food particles",
  "Clean tongue with tongue scraper or brush",
  "Use alcohol-free mouthwash",
  "Stay hydrated throughout the day",
  "Chew sugar-free gum to stimulate saliva",
  "Visit dentist every 6 months",
  "Avoid smoking and limit alcohol"
];

const whenToSeeDentist = [
  "Bad breath persists despite good oral hygiene",
  "Breath odor is very strong or unusual",
  "Bad breath is accompanied by pain or swelling",
  "You have dry mouth symptoms",
  "Bad breath affects your personal or professional life",
  "You have medical conditions that may contribute",
  "Bad breath returns after professional treatment"
];

export default function BadBreathTreatmentPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/breath-0.webp"
            alt="Hero: Bad breath treatment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-nearBlack/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Fresh breath and confident smiles.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Comprehensive diagnosis and treatment for halitosis (bad breath) to restore your confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Halitosis Treatment</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              Understanding and treating bad breath.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Bad breath (halitosis) affects millions of people and can significantly impact
              self-confidence and social interactions. While most cases are caused by oral
              hygiene issues, some may indicate underlying medical conditions. We provide
              comprehensive diagnosis and treatment to identify the cause and eliminate
              bad breath effectively.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/breath-1.png"
                alt="Bad breath treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMMON CAUSES */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">What Causes Bad Breath?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Most bad breath originates in the mouth, but identifying the specific cause is key to effective treatment.
            </p>
          </div>

          <div className="space-y-6">
            {commonCauses.map((cause) => (
              <div
                key={cause.cause}
                className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-nearBlack">{cause.cause}</h3>
                  <span className="text-sm font-medium text-gold bg-gold/10 px-2 py-1 rounded">
                    {cause.percentage}
                  </span>
                </div>
                <p className="text-sm text-charcoal">{cause.description}</p>
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Solutions:</div>
                  <p className="text-sm text-charcoal">{cause.solutions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN TO SEE DENTIST */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              When to seek professional help.
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              While good oral hygiene helps most people, persistent bad breath requires
              professional diagnosis to identify and treat the underlying cause.
            </p>
            <div className="space-y-3">
              {whenToSeeDentist.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-3 rounded-lg bg-white p-3 border border-silver/60"
                >
                  <div className="h-2 w-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-charcoal">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/breath-2.webp"
                alt="Professional consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Treatment Options</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Treatment depends on the underlying cause and is tailored to your specific situation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            {treatmentOptions.map((treatment) => (
              <div
                key={treatment.name}
                className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-nearBlack">{treatment.name}</h3>
                <p className="text-sm text-charcoal">{treatment.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Effectiveness:</div>
                    <p className="text-sm text-charcoal">{treatment.effectiveness}</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Frequency:</div>
                    <p className="text-sm text-charcoal">{treatment.frequency}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNOSIS PROCESS WITH PLACEHOLDER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">The Diagnosis Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Thorough evaluation to identify the cause of bad breath and determine the most effective treatment.
          </p>
        </div>

        {/* Process steps with image/video placeholders */}
        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-xl">1</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Medical History</h3>
            <p className="text-sm text-charcoal mb-4">Review of health conditions and medications</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-24 rounded-lg bg-silver/20 border border-silver/60 relative">
              <Image src="/breath-3.webp" alt="Medical history review" fill className="object-cover rounded-lg" />
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-xl">2</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Oral Examination</h3>
            <p className="text-sm text-charcoal mb-4">Comprehensive dental and gum evaluation</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-24 rounded-lg bg-silver/20 border border-silver/60 relative">
              <Image src="/breath-4.jpg" alt="Oral examination" fill className="object-cover rounded-lg" />
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-xl">3</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Breath Analysis</h3>
            <p className="text-sm text-charcoal mb-4">Objective measurement of breath odor</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-24 rounded-lg bg-silver/20 border border-silver/60 relative">
              <Image src="/breath-5.jpg" alt="Breath analysis" fill className="object-cover rounded-lg" />
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-xl">4</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Treatment Plan</h3>
            <p className="text-sm text-charcoal mb-4">Customized treatment based on findings</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-24 rounded-lg bg-silver/20 border border-silver/60 relative">
              <Image src="/breath-6.jpg" alt="Treatment plan" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* PREVENTION */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Daily Prevention Habits</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              These daily habits can prevent bad breath and maintain fresh breath throughout the day.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {dailyPrevention.map((tip) => (
              <div
                key={tip}
                className="flex items-start gap-3 rounded-lg bg-white p-4 border border-silver/60"
              >
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                <span className="text-sm text-charcoal">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MYTHS VS FACTS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Bad Breath Myths vs. Facts</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 border border-silver/60">
            <h3 className="text-lg font-semibold text-nearBlack mb-4">Myth: Mouthwash Cures Bad Breath</h3>
            <p className="text-sm text-charcoal">While mouthwash helps, it only masks symptoms temporarily. The underlying cause needs treatment.</p>
          </div>

          <div className="rounded-lg bg-white p-6 border border-silver/60">
            <h3 className="text-lg font-semibold text-nearBlack mb-4">Fact: Most Bad Breath Comes From The Mouth</h3>
            <p className="text-sm text-charcoal">80% of bad breath originates in the mouth from bacteria, food particles, and poor oral hygiene.</p>
          </div>

          <div className="rounded-lg bg-white p-6 border border-silver/60">
            <h3 className="text-lg font-semibold text-nearBlack mb-4">Myth: Brushing Teeth Is Enough</h3>
            <p className="text-sm text-charcoal">While essential, brushing alone misses interdental areas where bacteria accumulate.</p>
          </div>

          <div className="rounded-lg bg-white p-6 border border-silver/60">
            <h3 className="text-lg font-semibold text-nearBlack mb-4">Fact: Bad Breath Can Indicate Health Issues</h3>
            <p className="text-sm text-charcoal">Persistent bad breath can signal gum disease, dry mouth, or systemic conditions requiring medical attention.</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Fresh breath starts with proper diagnosis.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Don&apos;t mask bad breath – eliminate the cause. Schedule a comprehensive evaluation to identify and treat the underlying issue.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Schedule Bad Breath Evaluation
          </a>
        </div>
      </section>
    </div>
  );
}
