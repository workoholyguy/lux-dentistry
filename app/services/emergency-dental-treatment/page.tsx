export const metadata = {
  title: "Emergency Dental Treatment | Lux Dentistry",
  description: "24/7 emergency dental care for severe tooth pain, trauma, infections, and urgent dental situations.",
};

const emergencyTypes = [
  {
    type: "Severe Tooth Pain",
    description: "Intense, persistent toothache that doesn't respond to pain medication",
    urgency: "High - requires immediate attention",
    commonCauses: "Infection, cracked tooth, abscess"
  },
  {
    type: "Knocked-Out Tooth",
    description: "Permanent tooth completely displaced from socket",
    urgency: "Critical - time-sensitive (1 hour window)",
    commonCauses: "Trauma, sports injury, accident"
  },
  {
    type: "Broken or Cracked Tooth",
    description: "Tooth fracture exposing pulp or causing pain",
    urgency: "High - sharp pain, infection risk",
    commonCauses: "Biting hard object, trauma, large filling"
  },
  {
    type: "Lost Filling or Crown",
    description: "Restoration comes out, exposing sensitive tooth structure",
    urgency: "Medium - discomfort but not always urgent",
    commonCauses: "Wear, decay under restoration, trauma"
  },
  {
    type: "Dental Abscess",
    description: "Infected area with pus, swelling, and severe pain",
    urgency: "High - can lead to systemic infection",
    commonCauses: "Untreated decay, failed root canal, gum disease"
  },
  {
    type: "Soft Tissue Injuries",
    description: "Cut or torn gums, tongue, cheeks, or lips",
    urgency: "Medium to High - bleeding control needed",
    commonCauses: "Bites, sharp objects, trauma"
  },
  {
    type: "Broken Orthodontic Appliance",
    description: "Braces wire or aligner causing pain or tissue damage",
    urgency: "Medium - discomfort but rarely life-threatening",
    commonCauses: "Chewing hard foods, trauma, normal wear"
  },
  {
    type: "Post-Procedure Complications",
    description: "Bleeding, swelling, or pain after dental treatment",
    urgency: "Medium to High - depending on severity",
    commonCauses: "Normal healing response or complications"
  }
];

const emergencyProtocol = [
  {
    step: "Contact Us Immediately",
    action: "Call (678) 773-7354 or visit emergency room if after hours",
    timeframe: "Immediately",
    details: "Don&apos;t wait - early intervention improves outcomes"
  },
  {
    step: "Pain Management",
    action: "Take prescribed pain medication or over-the-counter options",
    timeframe: "While waiting for care",
    details: "Ibuprofen is often most effective for dental pain"
  },
  {
    step: "Temporary Relief",
    action: "Apply cold compress, use salt water rinse, avoid hot/cold foods",
    timeframe: "Until seen by dentist",
    details: "These measures provide temporary comfort"
  },
  {
    step: "Preserve Dental Work",
    action: "Save broken pieces, keep tooth moist if knocked out",
    timeframe: "Until treatment",
    details: "Preserved pieces aid in restoration"
  }
];

const preparationTips = [
  "Keep our phone number saved: (678) 773-7354",
  "Know location of nearest emergency room",
  "Have pain medication and basic first aid supplies",
  "Keep dental records accessible",
  "Understand your medical history and medications",
  "Have emergency contact information ready",
  "Know how to transport a knocked-out tooth"
];

const emergencyMyths = [
  {
    myth: "Dental emergencies aren't real emergencies",
    fact: "Severe dental pain and infections can be life-threatening and require immediate care"
  },
  {
    myth: "Go to ER for all dental emergencies",
    fact: "ERs can provide pain relief but aren't equipped for definitive dental treatment"
  },
  {
    myth: "Dental emergencies only happen to others",
    fact: "Anyone can experience a dental emergency - being prepared saves time and teeth"
  },
  {
    myth: "You can wait a few days for severe pain",
    fact: "Delaying treatment can worsen conditions and complicate treatment"
  }
];

export default function EmergencyDentalTreatmentPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-navy to-slateBlue">
          <div className="absolute inset-0 bg-nearBlack/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Dental emergencies don't wait for business hours.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                24/7 emergency dental care when you need it most. We're here for urgent dental situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Emergency Care</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              When dental problems become urgent.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Dental emergencies can happen anytime - severe pain, trauma, infections, or
              broken dental work. We provide prompt, compassionate care for all urgent
              dental situations. Whether it's a knocked-out tooth, severe infection, or
              unbearable pain, we're equipped to handle emergencies with the latest
              technology and sedation options for your comfort.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for emergency dental care */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚨</div>
                  <p className="text-sm">Emergency Dental Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY TYPES */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Common Dental Emergencies</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Recognizing dental emergencies helps you know when to seek immediate care.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {emergencyTypes.map((emergency) => (
              <div
                key={emergency.type}
                className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-nearBlack">{emergency.type}</h3>
                <p className="text-sm text-charcoal">{emergency.description}</p>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gold uppercase tracking-wide">Urgency:</div>
                  <p className="text-sm text-charcoal">{emergency.urgency}</p>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gold uppercase tracking-wide">Common Causes:</div>
                  <p className="text-sm text-charcoal">{emergency.commonCauses}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MYTHS VS FACTS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Emergency Care Myths vs. Facts</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {emergencyMyths.map((item) => (
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

      {/* WHAT TO DO IMMEDIATELY */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">What To Do During a Dental Emergency</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              These steps can provide immediate relief and preserve your dental health until professional care.
            </p>
          </div>

          <div className="space-y-6">
            {emergencyProtocol.map((step, index) => (
              <div key={step.step} className="flex flex-col gap-4 rounded-lg bg-white p-6 border border-silver/60">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-nearBlack">{step.step}</h3>
                    <p className="text-sm text-gold">{step.timeframe}</p>
                  </div>
                </div>
                <p className="text-sm text-charcoal font-medium">{step.action}</p>
                <p className="text-sm text-charcoal">{step.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREPARATION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              Be prepared for dental emergencies.
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              While we can't predict when emergencies will occur, being prepared can
              make all the difference in outcomes. Keep these essentials ready.
            </p>
            <div className="space-y-3">
              {preparationTips.map((tip) => (
                <div
                  key={tip}
                  className="flex items-center gap-3 rounded-lg bg-white p-3 border border-silver/60"
                >
                  <div className="h-2 w-2 rounded-full bg-gold flex-shrink-0"></div>
                  <span className="text-sm text-charcoal">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for emergency kit */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">🩹</div>
                  <p className="text-sm">Emergency Preparedness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN TO GO TO ER */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">When to Visit the Emergency Room</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Go to ER Immediately If:</h3>
              <div className="space-y-3 text-sm text-red-700">
                <p>• Uncontrolled bleeding that won't stop</p>
                <p>• Severe facial swelling affecting breathing</p>
                <p>• High fever with dental infection</p>
                <p>• Signs of systemic infection (chills, nausea)</p>
                <p>• Trauma with loss of consciousness</p>
                <p>• Severe allergic reaction to medication</p>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Call Our Emergency Line For:</h3>
              <div className="space-y-3 text-sm text-blue-700">
                <p>• Severe tooth pain</p>
                <p>• Knocked-out tooth</p>
                <p>• Broken or cracked tooth</p>
                <p>• Dental abscess or infection</p>
                <p>• Lost filling or crown</p>
                <p>• Broken orthodontic appliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEDATION FOR EMERGENCIES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Comfort During Emergency Treatment</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Dental anxiety doesn't take a break during emergencies. We offer sedation options for your comfort.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center rounded-lg bg-white p-6 border border-silver/60">
            <div className="text-3xl mb-2">💉</div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Local Anesthesia</h3>
            <p className="text-sm text-charcoal">Numbs the treatment area for pain-free procedures</p>
          </div>

          <div className="text-center rounded-lg bg-white p-6 border border-silver/60">
            <div className="text-3xl mb-2">😌</div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Oral Sedation</h3>
            <p className="text-sm text-charcoal">Anti-anxiety medication for relaxation during treatment</p>
          </div>

          <div className="text-center rounded-lg bg-white p-6 border border-silver/60">
            <div className="text-3xl mb-2">💤</div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">IV Sedation</h3>
            <p className="text-sm text-charcoal">Deep sedation for complex or traumatic emergency procedures</p>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Emergency Dental Care When You Need It
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-2">📞</div>
                <div className="font-semibold">Emergency Line</div>
                <div className="text-xl">(678) 773-7354</div>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-2">🏥</div>
                <div className="font-semibold">After Hours</div>
                <div className="text-sm">Call for urgent care instructions</div>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-2">🚨</div>
                <div className="font-semibold">Response Time</div>
                <div className="text-sm">Within 24 hours for most emergencies</div>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-2">🩺</div>
                <div className="font-semibold">Full Emergency Care</div>
                <div className="text-sm">Diagnosis, treatment, and pain relief</div>
              </div>
            </div>

            <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
              Don&apos;t suffer through dental pain. Contact us immediately for emergency care.
              We're here to help when you need it most.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:6787737354"
                className="inline-block rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition"
              >
                Call Emergency Line: (678) 773-7354
              </a>
              <a
                href="/contact"
                className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
              >
                Schedule Emergency Visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
