export const metadata = {
  title: "Crowns and Bridges | Lux Dentistry",
  description: "Custom dental crowns and bridges to restore damaged teeth and replace missing teeth with natural-looking, functional restorations.",
};

const crownTypes = [
  {
    name: "Porcelain Crowns",
    description: "All-ceramic crowns that match natural tooth color perfectly",
    advantages: ["Excellent aesthetics", "Biocompatible", "Strong and durable"],
    bestFor: "Front teeth, visible areas",
    longevity: "10-15 years"
  },
  {
    name: "Porcelain-Fused-to-Metal",
    description: "Porcelain exterior bonded to metal framework",
    advantages: ["Natural appearance", "Very strong", "Cost-effective"],
    bestFor: "Back teeth, high-stress areas",
    longevity: "10-15 years"
  },
  {
    name: "Gold Crowns",
    description: "Cast gold alloy for superior strength and longevity",
    advantages: ["Extremely durable", "Biocompatible", "Minimal wear on opposing teeth"],
    bestFor: "Back teeth, patients with metal allergies to PFM",
    longevity: "20-30 years"
  },
  {
    name: "Zirconia Crowns",
    description: "Solid zirconia for strength and aesthetics",
    advantages: ["Very strong", "Excellent aesthetics", "Metal-free"],
    bestFor: "Any location, patients preferring metal-free restorations",
    longevity: "10-20 years"
  }
];

const bridgeTypes = [
  {
    name: "Traditional Bridges",
    description: "Fixed bridge anchored by crowned adjacent teeth",
    advantages: ["Stable and secure", "Natural appearance", "Durable"],
    bestFor: "Replacing 1-2 missing teeth with strong adjacent teeth",
    preparation: "Adjacent teeth need crowning"
  },
  {
    name: "Maryland Bridges",
    description: "Resin-bonded bridge with metal or porcelain wings",
    advantages: ["Conservative", "No adjacent tooth alteration", "Cost-effective"],
    bestFor: "Front teeth, minimal tooth preparation needed",
    preparation: "Minimal alteration of adjacent teeth"
  },
  {
    name: "Implant-Supported Bridges",
    description: "Bridge anchored by dental implants",
    advantages: ["No damage to adjacent teeth", "Very stable", "Bone preservation"],
    bestFor: "Multiple missing teeth, patients wanting implant benefits",
    preparation: "Surgical implant placement required"
  }
];

const whenYouNeedCrowns = [
  "Large cavities that weaken tooth structure",
  "Cracked or fractured teeth",
  "Severely worn down teeth",
  "After root canal treatment",
  "To support large fillings",
  "For cosmetic improvement of misshapen teeth"
];

export default function CrownsAndBridgesPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slateBlue to-navy">
          <div className="absolute inset-0 bg-nearBlack/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Restore function and beauty with crowns and bridges.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Custom-crafted dental restorations that look, feel, and function like natural teeth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Dental Restorations</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              Comprehensive tooth replacement solutions.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Crowns and bridges are fixed dental restorations that replace missing tooth
              structure or entire teeth. Crowns cap damaged teeth to restore strength and
              appearance, while bridges replace missing teeth by spanning the gap between
              remaining teeth. Both provide natural-looking, functional results.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for crowns and bridges */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">👑</div>
                  <p className="text-sm">Crowns & Bridges Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN YOU NEED CROWNS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">When Do You Need Crowns?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Crowns restore and protect teeth that are too damaged for simpler restorations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whenYouNeedCrowns.map((reason) => (
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

      {/* CROWN TYPES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Types of Dental Crowns</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            We offer various crown materials to meet your aesthetic, functional, and budgetary needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {crownTypes.map((crown) => (
            <div
              key={crown.name}
              className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-nearBlack">{crown.name}</h3>
              <p className="text-sm text-charcoal">{crown.description}</p>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Advantages:</div>
                  <ul className="space-y-1">
                    {crown.advantages.map((advantage) => (
                      <li key={advantage} className="flex items-center gap-2 text-sm text-charcoal">
                        <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Best For:</div>
                  <p className="text-sm text-charcoal">{crown.bestFor}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Longevity:</div>
                  <p className="text-sm text-charcoal">{crown.longevity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BRIDGE TYPES */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Types of Dental Bridges</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Bridges replace missing teeth by anchoring to adjacent natural teeth or implants.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            {bridgeTypes.map((bridge) => (
              <div
                key={bridge.name}
                className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-nearBlack">{bridge.name}</h3>
                <p className="text-sm text-charcoal">{bridge.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Advantages:</div>
                    <ul className="space-y-1">
                      {bridge.advantages.map((advantage) => (
                        <li key={advantage} className="flex items-center gap-2 text-sm text-charcoal">
                          <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Best For:</div>
                    <p className="text-sm text-charcoal">{bridge.bestFor}</p>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Preparation:</div>
                  <p className="text-sm text-charcoal">{bridge.preparation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT PROCESS WITH PLACEHOLDER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">The Crown & Bridge Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Most crowns and bridges require 2-3 visits over 2-3 weeks for completion.
          </p>
        </div>

        {/* Process steps with image/video placeholders */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Preparation</h3>
            <p className="text-sm text-charcoal mb-4">Tooth/teeth prepared and impressions taken</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
              <div className="text-center text-silver">
                <div className="text-2xl mb-1">🔧</div>
                <p className="text-xs">Preparation Image</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">2</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Temporary</h3>
            <p className="text-sm text-charcoal mb-4">Temporary restoration placed while custom crown/bridge is made</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
              <div className="text-center text-silver">
                <div className="text-2xl mb-1">⏳</div>
                <p className="text-xs">Temporary Restoration Video</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">3</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Final Placement</h3>
            <p className="text-sm text-charcoal mb-4">Custom crown/bridge permanently cemented</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
              <div className="text-center text-silver">
                <div className="text-2xl mb-1">🎉</div>
                <p className="text-xs">Final Placement Animation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAL SELECTION */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
                Choosing the right material for you.
              </h2>
              <p className="mb-6 text-base leading-7 text-charcoal">
                We help you select the best crown or bridge material based on location,
                function, aesthetics, durability, and your budget preferences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Aesthetics: Porcelain or zirconia for natural appearance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Strength: Gold or zirconia for back teeth</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Cost: PFM as balance of aesthetics and durability</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Metal-free: All-ceramic options for sensitive patients</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
              <div className="relative aspect-[4/3] w-full">
                {/* Image placeholder for material comparison */}
                <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⚖️</div>
                    <p className="text-sm">Material Comparison Chart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AFTERCARE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Caring for Your Crowns and Bridges</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 border border-silver/60">
            <h3 className="text-lg font-semibold text-nearBlack mb-4">Daily Care</h3>
            <div className="space-y-3 text-sm text-charcoal">
              <p>• Brush twice daily with soft toothbrush</p>
              <p>• Floss daily, use floss threaders for bridges</p>
              <p>• Use antimicrobial mouthwash</p>
              <p>• Avoid chewing hard foods or ice</p>
              <p>• Clean around bridge pontics carefully</p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 border border-silver/60">
            <h3 className="text-lg font-semibold text-nearBlack mb-4">Professional Care</h3>
            <div className="space-y-3 text-sm text-charcoal">
              <p>• Visit dentist every 6 months for check-ups</p>
              <p>• Professional cleanings every 6 months</p>
              <p>• Monitor for loose or damaged restorations</p>
              <p>• X-rays to check bone support</p>
              <p>• Repair or replacement as needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Restore your smile with crowns and bridges.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Don&apos;t live with damaged or missing teeth. Schedule a consultation to discuss your restoration options.
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
