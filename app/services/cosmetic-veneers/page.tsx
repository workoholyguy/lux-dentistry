export const metadata = {
  title: "Cosmetic Veneers | Lux Dentistry",
  description: "Transform your smile with custom porcelain veneers for perfect teeth color, shape, and alignment.",
};

const veneerBenefits = [
  "Dramatically improve smile appearance",
  "Resistant to staining and discoloration",
  "Conservative treatment (minimal tooth removal)",
  "Natural-looking and long-lasting",
  "Strengthen weakened teeth",
  "Correct minor alignment issues"
];

const veneerTypes = [
  {
    name: "Porcelain Veneers",
    description: "Custom-made ceramic shells bonded to front of teeth",
    advantages: ["Excellent aesthetics", "Very durable", "Natural translucency"],
    longevity: "10-15 years",
    cost: "Most expensive option"
  },
  {
    name: "Composite Veneers",
    description: "Tooth-colored resin applied directly to teeth",
    advantages: ["More affordable", "Can be done in one visit", "Reparable"],
    longevity: "5-7 years",
    cost: "Most affordable option"
  },
  {
    name: "Lumineers®",
    description: "Ultra-thin, pre-made porcelain veneers",
    advantages: ["Minimal preparation", "Reversible", "Very conservative"],
    longevity: "10-20 years",
    cost: "Premium pricing"
  }
];

const idealCandidates = [
  "Teeth that are stained or discolored",
  "Chipped, cracked, or worn teeth",
  "Gaps between teeth",
  "Misshapen or uneven teeth",
  "Minor crowding or spacing issues",
  "Teeth that appear too small or large"
];

const veneerProcess = [
  {
    step: "Consultation & Planning",
    description: "Digital smile design and treatment planning",
    duration: "1 hour",
    details: "Photos, impressions, color selection, and mock-up preview"
  },
  {
    step: "Tooth Preparation",
    description: "Minimal enamel removal for veneer placement",
    duration: "30-60 minutes",
    details: "Usually 0.5-1mm of enamel removed for proper fit and aesthetics"
  },
  {
    step: "Impressions & Temporaries",
    description: "Creating molds and placing temporary veneers",
    duration: "30 minutes",
    details: "Digital scanning or traditional impressions, temporary protection applied"
  },
  {
    step: "Veneer Fabrication",
    description: "Custom veneers created in dental lab",
    duration: "1-2 weeks",
    details: "Precision crafting for perfect fit, color, and shape"
  },
  {
    step: "Bonding & Final Placement",
    description: "Permanent attachment of custom veneers",
    duration: "1-2 hours",
    details: "Try-in, adjustments, and permanent bonding with special cement"
  }
];

export default function CosmeticVeneersPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slateBlue to-navy">
          <div className="absolute inset-0 bg-nearBlack/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Transform your smile with custom porcelain veneers.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Perfectly crafted ceramic shells that give you the smile you've always wanted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Smile Makeover</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              The gold standard in cosmetic dentistry.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Porcelain veneers are thin, custom-made shells that bond to the front of your teeth
              to create a beautiful, natural-looking smile. They can correct discoloration, chips,
              cracks, gaps, and minor alignment issues. With proper care, veneers can last 10-15
              years or longer, making them an excellent long-term investment in your smile.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for cosmetic veneers */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">✨</div>
                  <p className="text-sm">Cosmetic Veneers Image</p>
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
            <h2 className="text-3xl font-semibold text-nearBlack">Why Choose Porcelain Veneers?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Veneers offer a comprehensive solution for multiple cosmetic concerns in one treatment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {veneerBenefits.map((benefit) => (
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

      {/* IDEAL CANDIDATES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              Are veneers right for you?
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              Veneers can address many cosmetic concerns and are an excellent choice for patients
              seeking dramatic smile improvements with conservative treatment.
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
              {/* Image placeholder for ideal candidates */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">😊</div>
                  <p className="text-sm">Smile Transformation Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VENEER TYPES */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Types of Dental Veneers</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Different veneer materials and techniques to match your needs and budget.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            {veneerTypes.map((veneer) => (
              <div
                key={veneer.name}
                className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-nearBlack">{veneer.name}</h3>
                <p className="text-sm text-charcoal">{veneer.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Advantages:</div>
                    <ul className="space-y-1">
                      {veneer.advantages.map((advantage) => (
                        <li key={advantage} className="flex items-center gap-2 text-sm text-charcoal">
                          <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Longevity:</div>
                    <p className="text-sm text-charcoal">{veneer.longevity}</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Cost:</div>
                    <p className="text-sm text-charcoal">{veneer.cost}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT PROCESS WITH PLACEHOLDER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">The Veneer Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            A multi-step process that typically takes 2-3 weeks from consultation to final placement.
          </p>
        </div>

        {/* Process steps with image/video placeholders */}
        <div className="space-y-6">
          {veneerProcess.map((step, index) => (
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
              <div className="w-full max-w-sm h-24 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
                <div className="text-center text-silver">
                  <div className="text-2xl mb-1">📸</div>
                  <p className="text-xs">{step.step} Demo</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CARE AND MAINTENANCE */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Caring for Your Veneers</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 border border-silver/60">
              <h3 className="text-lg font-semibold text-nearBlack mb-4">Daily Care</h3>
              <div className="space-y-3 text-sm text-charcoal">
                <p>• Brush twice daily with non-abrasive toothpaste</p>
                <p>• Floss daily with unwaxed floss or floss threaders</p>
                <p>• Use mouthwash without alcohol</p>
                <p>• Avoid staining foods/drinks or use straw</p>
                <p>• Wear night guard if you grind teeth</p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 border border-silver/60">
              <h3 className="text-lg font-semibold text-nearBlack mb-4">Professional Care</h3>
              <div className="space-y-3 text-sm text-charcoal">
                <p>• Visit dentist every 6 months for check-ups</p>
                <p>• Professional cleanings every 6 months</p>
                <p>• Annual polishing to maintain luster</p>
                <p>• Monitor for chips, cracks, or loose bonds</p>
                <p>• Repair or replace as needed (rare)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER PLACEHOLDER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Smile Transformation Results</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            See the dramatic difference porcelain veneers can make in just weeks.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-sm">Before Veneers</p>
                </div>
              </div>
            </div>
            <p className="mt-2 text-center text-sm text-charcoal">Natural teeth with cosmetic concerns</p>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">✨</div>
                  <p className="text-sm">After Veneers</p>
                </div>
              </div>
            </div>
            <p className="mt-2 text-center text-sm text-charcoal">Perfect smile with porcelain veneers</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Ready for your dream smile?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Schedule a consultation to see how porcelain veneers can transform your smile. We'll create a personalized treatment plan just for you.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Schedule Smile Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
