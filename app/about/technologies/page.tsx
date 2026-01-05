import LimitedVideo from "@/components/about/LimitedVideo";

export const metadata = {
  title: "Technologies | Lux Dentistry",
  description: "Explore the advanced dental technologies and equipment we use to provide precise, comfortable, and efficient dental care.",
};

const technologies = [
  {
    category: "Digital Imaging",
    items: [
      {
        name: "Digital X-Ray System",
        description: "Instant, high-resolution images with 90% less radiation than traditional X-rays.",
        benefits: ["Immediate results", "Lower radiation", "Precise diagnosis"]
      },
      {
        name: "Intraoral Camera",
        description: "Real-time imaging of your teeth and mouth during examinations.",
        benefits: ["Visual education", "Early detection", "Treatment planning"]
      },
      {
        name: "3D Cone Beam CT",
        description: "Three-dimensional imaging for implants, oral surgery, and complex cases.",
        benefits: ["Detailed 3D views", "Precise measurements", "Surgical planning"]
      }
    ]
  },
  {
    category: "Treatment Technologies",
    items: [
      {
        name: "Laser Dentistry",
        description: "Precise, minimally invasive procedures for gum treatment and soft tissue work.",
        benefits: ["Less discomfort", "Faster healing", "Reduced bleeding"]
      },
      {
        name: "Electric Handpieces",
        description: "Quiet, efficient drilling with better control and patient comfort.",
        benefits: ["Reduced noise", "Precise control", "Comfortable experience"]
      },
      {
        name: "CAD/CAM System",
        description: "In-office creation of crowns, veneers, and restorations in a single visit.",
        benefits: ["Same-day crowns", "Perfect fit", "Digital precision"]
      }
    ]
  },
  {
    category: "Patient Comfort",
    items: [
      {
        name: "Sedation Options",
        description: "Nitrous oxide, oral sedation, and IV sedation for anxious patients.",
        benefits: ["Anxiety reduction", "Comfort during treatment", "Pain management"]
      },
      {
        name: "Digital Impressions",
        description: "Comfortable scanning instead of messy traditional impressions.",
        benefits: ["No gagging", "Faster process", "More accurate"]
      },
      {
        name: "Sterilization System",
        description: "Hospital-grade sterilization ensuring the highest level of infection control.",
        benefits: ["Patient safety", "Sterile environment", "Peace of mind"]
      }
    ]
  }
];

export default function TechnologiesPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <LimitedVideo
            src="/dexis-device-video.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            maxDuration={97}
          />
          <div className="absolute inset-0 bg-nearBlack/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-6xl px-6 pb-12">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Advanced technology for better dental care.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                We invest in the latest dental technologies to provide more accurate, comfortable, and efficient treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Our Technology</p>
          <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
            Precision, comfort, and efficiency in every treatment.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base leading-7 text-charcoal">
            Modern dental technology allows us to provide better care with greater accuracy, less discomfort,
            and faster treatment times. Every piece of equipment in our office serves a purpose: improving
            your experience and treatment outcomes.
          </p>
        </div>
      </section>

      {/* TECHNOLOGIES GRID */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="space-y-16">
          {technologies.map((category) => (
            <div key={category.category}>
              <h3 className="mb-8 text-2xl font-semibold text-nearBlack text-center">
                {category.category}
              </h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    <h4 className="text-lg font-semibold text-nearBlack">{tech.name}</h4>
                    <p className="text-sm leading-6 text-charcoal mb-4">{tech.description}</p>
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-gold uppercase tracking-wide">Benefits:</div>
                      <ul className="space-y-1">
                        {tech.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-sm text-charcoal">
                            <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED EQUIPMENT */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
                State-of-the-art digital workflow.
              </h2>
              <p className="mb-6 text-base leading-7 text-charcoal">
                Our digital dentistry system connects all our technologies for seamless treatment planning
                and execution. From digital impressions to CAD/CAM restorations, everything works together
                to provide you with the best possible care.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Digital treatment planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Paperless patient records</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Integrated imaging systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Real-time treatment coordination</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
              <div className="relative aspect-[4/3] w-full">
                <LimitedVideo
                  src="/dexis-device-video.mp4"
                  className="h-full w-full object-cover"
                  maxDuration={97}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENT TO INNOVATION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
            Continuous investment in your care.
          </h2>
          <p className="mb-8 max-w-3xl mx-auto text-base leading-7 text-charcoal">
            Technology in dentistry evolves rapidly, and we stay current with the latest advancements.
            Our commitment to ongoing education and equipment upgrades ensures you always receive
            the most modern, effective dental care available.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 border border-silver/60 text-center">
              <div className="text-2xl mb-2">📚</div>
              <div className="font-medium text-nearBlack">Annual Training</div>
              <div className="text-sm text-charcoal">Ongoing education</div>
            </div>
            <div className="rounded-lg bg-white p-6 border border-silver/60 text-center">
              <div className="text-2xl mb-2">🔄</div>
              <div className="font-medium text-nearBlack">Equipment Updates</div>
              <div className="text-sm text-charcoal">Latest technology</div>
            </div>
            <div className="rounded-lg bg-white p-6 border border-silver/60 text-center">
              <div className="text-2xl mb-2">🎯</div>
              <div className="font-medium text-nearBlack">Precision Focus</div>
              <div className="text-sm text-charcoal">Accurate treatments</div>
            </div>
            <div className="rounded-lg bg-white p-6 border border-silver/60 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-medium text-nearBlack">Efficiency</div>
              <div className="text-sm text-charcoal">Faster results</div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Experience the difference modern dentistry makes.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Schedule a consultation to see our advanced technologies in action.
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
