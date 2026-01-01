export const metadata = {
  title: "Root Canal Treatment | Lux Dentistry",
  description: "Advanced root canal therapy to save infected teeth and relieve pain with modern techniques and technology.",
};

const whenYouNeedRootCanal = [
  "Severe tooth pain or sensitivity",
  "Deep cavities reaching the nerve",
  "Cracked or fractured teeth",
  "Infection or abscess in tooth root",
  "Swelling or tenderness in gums",
  "Darkening of the tooth",
  "Repeated dental procedures on same tooth"
];

const rootCanalProcess = [
  {
    step: "Examination & Diagnosis",
    description: "Clinical examination and X-rays to confirm need for root canal",
    duration: "30-60 minutes"
  },
  {
    step: "Anesthesia & Access",
    description: "Local anesthesia and opening access to the pulp chamber",
    duration: "15-30 minutes"
  },
  {
    step: "Cleaning & Shaping",
    description: "Removal of infected pulp and shaping of root canals",
    duration: "30-60 minutes"
  },
  {
    step: "Filling & Sealing",
    description: "Filling canals with biocompatible material and sealing the tooth",
    duration: "15-30 minutes"
  },
  {
    step: "Restoration",
    description: "Placement of crown or filling to protect the treated tooth",
    duration: "Separate appointment"
  }
];

const mythsVsFacts = [
  {
    myth: "Root canals are extremely painful",
    fact: "Modern techniques make root canals no more uncomfortable than a regular filling"
  },
  {
    myth: "Root canals cause illness",
    fact: "This myth has been thoroughly debunked by scientific research"
  },
  {
    myth: "Extraction is better than root canal",
    fact: "Saving your natural tooth is always preferable when possible"
  },
  {
    myth: "Root canals always need crowns",
    fact: "Some front teeth may only need a filling, but back teeth usually need crowns"
  }
];

export default function RootCanalTreatmentPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slateBlue to-navy">
          <div className="absolute inset-0 bg-nearBlack/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Save your tooth with advanced root canal treatment.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Modern root canal therapy eliminates infection and relieves pain while preserving your natural tooth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Endodontic Treatment</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              Why save your natural tooth when possible.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Root canal treatment removes infected or inflamed pulp from inside the tooth,
              cleans and disinfects the root canals, then fills and seals them. This saves
              your natural tooth and eliminates pain. Modern techniques make the procedure
              comfortable and highly successful, with success rates over 95%.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for root canal */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">🦷</div>
                  <p className="text-sm">Root Canal Treatment Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN YOU NEED ROOT CANAL */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Signs You May Need a Root Canal</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              These symptoms indicate the tooth pulp may be infected or inflamed.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whenYouNeedRootCanal.map((sign) => (
              <div
                key={sign}
                className="flex items-start gap-3 rounded-lg bg-white p-4 border border-silver/60"
              >
                <div className="h-2 w-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                <span className="text-sm text-charcoal">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MYTHS VS FACTS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Root Canal Myths vs. Facts</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Separating fact from fiction about root canal treatment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {mythsVsFacts.map((item) => (
            <div
              key={item.myth}
              className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
            >
              <div>
                <div className="text-xs font-medium text-red-600 uppercase tracking-wide mb-1">Myth:</div>
                <p className="text-sm text-charcoal">{item.myth}</p>
              </div>
              <div>
                <div className="text-xs font-medium text-green-600 uppercase tracking-wide mb-1">Fact:</div>
                <p className="text-sm text-charcoal">{item.fact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TREATMENT PROCESS WITH PLACEHOLDER */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">The Root Canal Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Most root canals can be completed in 1-2 visits with modern techniques and anesthesia.
            </p>
          </div>

          {/* Process steps with image/video placeholders */}
          <div className="space-y-6">
            {rootCanalProcess.map((step, index) => (
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
                {/* Image/Video placeholder for each step */}
                <div className="w-full max-w-xs h-24 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
                  <div className="text-center text-silver">
                    <div className="text-2xl mb-1">📹</div>
                    <p className="text-xs">{step.step} Animation</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFTER TREATMENT */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              After your root canal treatment.
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              Most patients return to normal activities immediately. The treated tooth
              may be sensitive for a few days, but this usually resolves quickly.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                <span className="text-sm">Some sensitivity is normal for 3-5 days</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                <span className="text-sm">Take prescribed antibiotics if given</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                <span className="text-sm">Avoid chewing on treated tooth until restoration placed</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                <span className="text-sm">Schedule crown placement within 2-4 weeks</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for aftercare */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏥</div>
                  <p className="text-sm">Post-Treatment Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS RATES AND BENEFITS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Why Choose Root Canal Over Extraction?</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center mb-4">
                <span className="text-2xl">95%</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Success Rate</h3>
              <p className="text-sm text-charcoal">Modern root canals have over 95% success rate</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Natural Function</h3>
              <p className="text-sm text-charcoal">Maintains your natural tooth and bite</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Cost Effective</h3>
              <p className="text-sm text-charcoal">Often less expensive than extraction and replacement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Don&apos;t let tooth pain control your life.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Root canal treatment can eliminate pain and save your natural tooth. Schedule a consultation to discuss your options.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Schedule Root Canal
          </a>
        </div>
      </section>
    </div>
  );
}
