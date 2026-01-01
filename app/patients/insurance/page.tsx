import Image from "next/image";

export const metadata = {
  title: "Insurance Information | Lux Dentistry",
  description: "Comprehensive guide to dental insurance, accepted plans, payment options, and financial assistance at Lux Dentistry.",
};

const acceptedPlans = [
  { name: "Delta Dental", logo: "🦷" },
  { name: "MetLife Dental", logo: "🏢" },
  { name: "Aetna Dental", logo: "⚕️" },
  { name: "Cigna Dental", logo: "💙" },
  { name: "UnitedHealthcare Dental", logo: "🛡️" },
  { name: "Guardian Dental", logo: "👤" },
  { name: "Humana Dental", logo: "💜" },
  { name: "Blue Cross Blue Shield Dental", logo: "🔵" }
];

const insuranceTips = [
  {
    title: "Know Your Coverage",
    description: "Review your plan details including deductibles, annual maximums, and covered procedures. Contact your insurance provider if you're unsure about coverage.",
    icon: "📋"
  },
  {
    title: "Pre-Treatment Estimates",
    description: "We provide detailed treatment estimates and work with your insurance to maximize benefits before starting treatment.",
    icon: "💰"
  },
  {
    title: "Filing Claims",
    description: "We handle insurance claims filing for you. We'll submit claims electronically and follow up on any questions.",
    icon: "📝"
  },
  {
    title: "Payment Options",
    description: "We accept cash, credit cards, and offer flexible payment plans. CareCredit financing is available for larger treatments.",
    icon: "💳"
  }
];

const coverageExamples = [
  {
    procedure: "Routine Dental Cleaning",
    typicalCost: "$75 - $150",
    insuranceCoverage: "100% (twice per year)",
    patientPays: "$0 - $50 (depending on plan)"
  },
  {
    procedure: "Dental X-rays (Bitewings)",
    typicalCost: "$25 - $50",
    insuranceCoverage: "100%",
    patientPays: "$0"
  },
  {
    procedure: "Composite Filling (1 surface)",
    typicalCost: "$100 - $250",
    insuranceCoverage: "80-100%",
    patientPays: "$20 - $50"
  },
  {
    procedure: "Root Canal (Front tooth)",
    typicalCost: "$600 - $900",
    insuranceCoverage: "50-80%",
    patientPays: "$120 - $450"
  },
  {
    procedure: "Dental Crown",
    typicalCost: "$800 - $1,500",
    insuranceCoverage: "50-80%",
    patientPays: "$160 - $750"
  },
  {
    procedure: "Dental Implant",
    typicalCost: "$2,500 - $4,500",
    insuranceCoverage: "0-50% (varies by plan)",
    patientPays: "$1,250 - $4,500"
  }
];

const uninsuredOptions = [
  {
    option: "Cash Discounts",
    description: "10-20% discount for paying in full at time of service",
    benefit: "Immediate savings on treatment costs"
  },
  {
    option: "CareCredit",
    description: "Healthcare credit card with promotional financing",
    benefit: "Interest-free options for 6-24 months"
  },
  {
    option: "Payment Plans",
    description: "Flexible monthly payment arrangements",
    benefit: "Spread costs over time with no interest"
  },
  {
    option: "Dental Savings Plans",
    description: "Discount dental plans for uninsured patients",
    benefit: "20-60% savings on routine and preventive care"
  }
];

const emergencyCoverage = [
  {
    situation: "Severe tooth pain",
    coverage: "Usually covered as diagnostic",
    cost: "$50-150 (exam + X-rays)"
  },
  {
    situation: "Broken tooth",
    coverage: "Often covered for repair",
    cost: "$100-500 (depending on extent)"
  },
  {
    situation: "Lost filling/crown",
    coverage: "Usually covered for replacement",
    cost: "$200-800"
  },
  {
    situation: "Dental abscess",
    coverage: "Covered as emergency treatment",
    cost: "$200-600"
  }
];

export default function InsurancePage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slateBlue to-navy">
          <div className="absolute inset-0 bg-nearBlack/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Dental Insurance & Payment Options
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                We work with most insurance plans and offer flexible payment options to make quality dental care accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCEPTED INSURANCE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Accepted Insurance Plans</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            We participate with most major dental insurance providers. If your plan isn't listed, please contact us to verify coverage.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {acceptedPlans.map((plan) => (
            <div
              key={plan.name}
              className="flex items-center gap-3 rounded-lg bg-white p-4 border border-silver/60 shadow-sm"
            >
              <div className="text-2xl">{plan.logo}</div>
              <span className="font-medium text-nearBlack">{plan.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start gap-3">
            <div className="text-blue-600 mt-1">ℹ️</div>
            <div>
              <h3 className="font-medium text-blue-900 mb-2">Not Listed?</h3>
              <p className="text-blue-800">
                If your insurance plan isn't shown above, we likely still accept it. We work with most PPO and HMO plans.
                Contact us with your insurance details for verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSURANCE TIPS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Maximizing Your Insurance Benefits</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {insuranceTips.map((tip) => (
              <div
                key={tip.title}
                className="flex items-start gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                <div className="text-3xl">{tip.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-nearBlack mb-2">{tip.title}</h3>
                  <p className="text-base leading-7 text-charcoal">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE EXAMPLES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Typical Insurance Coverage</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            These are general estimates. Actual coverage depends on your specific insurance plan and benefits.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-silver/60">
            <thead className="bg-silver/20">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-nearBlack">Procedure</th>
                <th className="px-4 py-3 text-left font-semibold text-nearBlack">Typical Cost</th>
                <th className="px-4 py-3 text-left font-semibold text-nearBlack">Insurance Coverage</th>
                <th className="px-4 py-3 text-left font-semibold text-nearBlack">Patient Pays</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-silver/40">
              {coverageExamples.map((example) => (
                <tr key={example.procedure} className="hover:bg-silver/10">
                  <td className="px-4 py-3 font-medium text-nearBlack">{example.procedure}</td>
                  <td className="px-4 py-3 text-charcoal">{example.typicalCost}</td>
                  <td className="px-4 py-3 text-charcoal">{example.insuranceCoverage}</td>
                  <td className="px-4 py-3 text-charcoal">{example.patientPays}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* EMERGENCY COVERAGE */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Emergency Dental Care Coverage</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Dental emergencies are typically covered by insurance. We accept most plans for urgent care.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {emergencyCoverage.map((emergency) => (
              <div
                key={emergency.situation}
                className="rounded-lg bg-white p-6 border border-silver/60"
              >
                <h3 className="font-semibold text-nearBlack mb-2">{emergency.situation}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Coverage:</span> {emergency.coverage}</p>
                  <p><span className="font-medium">Typical Cost:</span> {emergency.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNINSURED OPTIONS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              Options for Uninsured Patients
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              Quality dental care shouldn't be out of reach. We offer several payment options
              for uninsured patients and those with high deductibles.
            </p>

            <div className="space-y-4">
              {uninsuredOptions.map((option) => (
                <div
                  key={option.option}
                  className="rounded-lg bg-white p-4 border border-silver/60"
                >
                  <h3 className="font-semibold text-nearBlack mb-1">{option.option}</h3>
                  <p className="text-sm text-charcoal mb-2">{option.description}</p>
                  <p className="text-sm text-gold font-medium">{option.benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for payment options */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">💰</div>
                  <p className="text-sm">Payment Options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSURANCE VERIFICATION */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Insurance Verification & Support</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Free Verification</h3>
              <p className="text-sm text-charcoal">We verify your benefits before treatment at no cost to you</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Claims Assistance</h3>
              <p className="text-sm text-charcoal">Our team handles all insurance claims and follows up on questions</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Patient Advocacy</h3>
              <p className="text-sm text-charcoal">We advocate for you to maximize insurance benefits and minimize costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FOR HELP */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Questions about insurance or payment?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Our knowledgeable team is here to help you understand your coverage and explore payment options.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:6787737354"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
            >
              Call (678) 773-7354
            </a>
            <a
              href="/contact"
              className="rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold transition hover:border-goldSoft hover:text-goldSoft"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
