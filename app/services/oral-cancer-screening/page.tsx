export const metadata = {
  title: "Oral Cancer Screening | Lux Dentistry",
  description: "Early detection oral cancer screening using advanced technology and clinical expertise for peace of mind and early treatment.",
};

const screeningMethods = [
  {
    name: "Visual Examination",
    description: "Comprehensive visual inspection of oral tissues, gums, tongue, and throat",
    whatWeLookFor: "Unusual lesions, discolorations, or abnormal tissue changes"
  },
  {
    name: "Physical Palpation",
    description: "Gentle feeling of the tissues to detect lumps, bumps, or unusual textures",
    whatWeLookFor: "Abnormal masses or enlarged lymph nodes"
  },
  {
    name: "VELscope® Technology",
    description: "Advanced light technology that helps identify abnormal tissue changes",
    whatWeLookFor: "Cellular changes invisible to the naked eye"
  },
  {
    name: "Risk Assessment",
    description: "Evaluation of personal and family history factors",
    whatWeLookFor: "Lifestyle factors that may increase oral cancer risk"
  }
];

const riskFactors = [
  "Tobacco use (smoking, chewing)",
  "Heavy alcohol consumption",
  "Human papillomavirus (HPV) infection",
  "Excessive sun exposure to lips",
  "Family history of oral cancer",
  "Poor oral hygiene",
  "Immunosuppression",
  "Age over 40"
];

const earlySigns = [
  "Persistent mouth sores or ulcers",
  "Unexplained bleeding in the mouth",
  "White or red patches in the mouth",
  "Difficulty chewing or swallowing",
  "Persistent sore throat",
  "Lump or thickening in the mouth or neck",
  "Numbness in the tongue or mouth",
  "Changes in voice or speech"
];

export default function OralCancerScreeningPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-navy to-slateBlue">
          <div className="absolute inset-0 bg-nearBlack/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Early detection saves lives: Oral cancer screening.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Regular oral cancer screenings are crucial for early detection and successful treatment. We use advanced technology to identify potential issues before they become serious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Cancer Prevention</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              Why oral cancer screening matters.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Oral cancer can develop anywhere in the mouth or throat and often goes undetected
              in early stages. Regular screenings can identify abnormalities early when treatment
              is most effective. Early detection significantly improves survival rates.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for oral cancer awareness */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">🔍</div>
                  <p className="text-sm">Oral Cancer Screening Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENING METHODS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Our Screening Methods</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              We use a comprehensive approach combining traditional examination with advanced technology.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {screeningMethods.map((method) => (
              <div
                key={method.name}
                className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-nearBlack">{method.name}</h3>
                <p className="text-sm text-charcoal">{method.description}</p>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gold uppercase tracking-wide">What we look for:</div>
                  <p className="text-sm text-charcoal">{method.whatWeLookFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RISK FACTORS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              Risk Factors for Oral Cancer
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              Understanding your risk factors helps us determine the appropriate screening frequency
              and focus areas during your examination.
            </p>
            <div className="grid gap-3">
              {riskFactors.map((factor) => (
                <div
                  key={factor}
                  className="flex items-center gap-3 rounded-lg bg-white p-3 border border-silver/60"
                >
                  <div className="h-2 w-2 rounded-full bg-red-500 flex-shrink-0"></div>
                  <span className="text-sm text-charcoal">{factor}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for risk factors */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">⚠️</div>
                  <p className="text-sm">Risk Factors Infographic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EARLY SIGNS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Early Warning Signs</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              While regular screenings are the best prevention, knowing these signs can help you seek prompt attention.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {earlySigns.map((sign) => (
              <div
                key={sign}
                className="flex items-start gap-3 rounded-lg bg-white p-4 border border-silver/60"
              >
                <div className="h-2 w-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                <span className="text-sm text-charcoal">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENING PROCESS WITH PLACEHOLDER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">The Screening Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Quick, painless, and thorough examination that takes just minutes but provides valuable peace of mind.
          </p>
        </div>

        {/* Process steps with image/video placeholders */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Initial Consultation</h3>
            <p className="text-sm text-charcoal mb-4">Review of medical history and risk factors</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
              <div className="text-center text-silver">
                <div className="text-2xl mb-1">📋</div>
                <p className="text-xs">Consultation Image</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">2</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Comprehensive Exam</h3>
            <p className="text-sm text-charcoal mb-4">Visual and physical examination of oral tissues</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
              <div className="text-center text-silver">
                <div className="text-2xl mb-1">🔍</div>
                <p className="text-xs">Examination Process Video</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">3</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Advanced Screening</h3>
            <p className="text-sm text-charcoal mb-4">VELscope® technology and additional testing if needed</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
              <div className="text-center text-silver">
                <div className="text-2xl mb-1">💡</div>
                <p className="text-xs">VELscope Technology Animation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANCE OF REGULAR SCREENINGS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
              <div className="relative aspect-[4/3] w-full">
                {/* Image placeholder for regular screenings */}
                <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📅</div>
                    <p className="text-sm">Regular Screening Schedule</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
                How often should you be screened?
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-silver/60">
                  <div className="font-medium text-nearBlack mb-1">Average Risk Adults</div>
                  <p className="text-sm text-charcoal">Annual screening as part of routine dental check-ups</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-silver/60">
                  <div className="font-medium text-nearBlack mb-1">High Risk Individuals</div>
                  <p className="text-sm text-charcoal">Every 6 months or more frequently as recommended</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-silver/60">
                  <div className="font-medium text-nearBlack mb-1">Age 40+</div>
                  <p className="text-sm text-charcoal">Annual screening recommended for all adults</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Early detection saves lives.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Don&apos;t wait for symptoms. Regular oral cancer screenings provide peace of mind and early intervention when needed.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Schedule Screening
          </a>
        </div>
      </section>
    </div>
  );
}
