import Image from "next/image";

export const metadata = {
  title: "Results Gallery | Lux Dentistry",
  description: "View before and after photos of successful dental treatments at Lux Dentistry, including cosmetic dentistry, orthodontics, and restorative procedures.",
};

const galleryCategories = [
  {
    id: "cosmetic",
    name: "Cosmetic Dentistry",
    description: "Smile makeovers, veneers, and aesthetic improvements",
    icon: "✨",
    results: [
      {
        title: "Porcelain Veneers",
        description: "Complete smile transformation with 8 porcelain veneers",
        beforeImage: "/placeholder-before.jpg",
        afterImage: "/placeholder-after.jpg",
        treatment: "8 porcelain veneers, teeth whitening",
        duration: "3 weeks"
      },
      {
        title: "Dental Bonding",
        description: "Chipped tooth repair with composite bonding",
        beforeImage: "/placeholder-before.jpg",
        afterImage: "/placeholder-after.jpg",
        treatment: "Composite bonding",
        duration: "1 visit"
      },
      {
        title: "Teeth Whitening",
        description: "Professional whitening for dramatically brighter smile",
        beforeImage: "/placeholder-before.jpg",
        afterImage: "/placeholder-after.jpg",
        treatment: "In-office whitening",
        duration: "1.5 hours"
      }
    ]
  },
  {
    id: "orthodontics",
    name: "Orthodontics",
    description: "Straight teeth and improved bite alignment",
    icon: "🦷",
    results: [
      {
        title: "Invisalign Treatment",
        description: "Moderate crowding corrected with clear aligners",
        beforeImage: "/placeholder-before.jpg",
        afterImage: "/placeholder-after.jpg",
        treatment: "Invisalign Full treatment",
        duration: "14 months"
      },
      {
        title: "Traditional Braces",
        description: "Complex orthodontic case with traditional braces",
        beforeImage: "/placeholder-before.jpg",
        afterImage: "/placeholder-after.jpg",
        treatment: "Full orthodontic treatment",
        duration: "24 months"
      },
      {
        title: "Retainer Therapy",
        description: "Maintaining results after orthodontic treatment",
        beforeImage: "/placeholder-before.jpg",
        afterImage: "/placeholder-after.jpg",
        treatment: "Clear retainers",
        duration: "Ongoing"
      }
    ]
  },
  {
    id: "restorative",
    name: "Restorative Dentistry",
    description: "Crowns, bridges, and dental implants",
    icon: "🔧",
    results: [
      {
        title: "Dental Crowns",
        description: "Full mouth reconstruction with porcelain crowns",
        beforeImage: "/placeholder-before.jpg",
        afterImage: "/placeholder-after.jpg",
        treatment: "14 porcelain crowns",
        duration: "8 weeks"
      },
      {
        title: "Dental Bridge",
        description: "Fixed bridge replacing missing tooth",
        beforeImage: "/placeholder-before.jpg",
        afterImage: "/placeholder-after.jpg",
        treatment: "3-unit porcelain bridge",
        duration: "3 weeks"
      },
      {
        title: "Dental Implants",
        description: "Implant-supported crown replacing missing tooth",
        beforeImage: "/placeholder-before.jpg",
        afterImage: "/placeholder-after.jpg",
        treatment: "Dental implant + crown",
        duration: "4 months"
      }
    ]
  },
  {
    id: "preventive",
    name: "Preventive Care",
    description: "Gum disease treatment and preventive procedures",
    icon: "🛡️",
    results: [
      {
        title: "Periodontal Therapy",
        description: "Advanced gum disease treated successfully",
        beforeImage: "/placeholder-before.jpg",
        afterImage: "/placeholder-after.jpg",
        treatment: "Scaling & root planing, maintenance",
        duration: "3 months"
      },
      {
        title: "Dental Sealants",
        description: "Protective sealants preventing cavities",
        beforeImage: "/placeholder-before.jpg",
        afterImage: "/placeholder-after.jpg",
        treatment: "Sealants on molars",
        duration: "1 visit"
      },
      {
        title: "Oral Health Maintenance",
        description: "Consistent preventive care results",
        beforeImage: "/placeholder-before.jpg",
        afterImage: "/placeholder-after.jpg",
        treatment: "Regular cleanings & check-ups",
        duration: "2 years"
      }
    ]
  }
];

const patientStories = [
  {
    name: "Sarah M.",
    age: 34,
    treatment: "Full Smile Makeover",
    quote: "I was so self-conscious about my smile. After my porcelain veneers, I finally feel confident smiling in photos and meeting new people. The results exceeded my expectations!",
    rating: 5,
    image: "/placeholder-patient.jpg"
  },
  {
    name: "Michael R.",
    age: 28,
    treatment: "Invisalign",
    quote: "Invisalign was perfect for my busy lifestyle. No one knew I was straightening my teeth, and the results are amazing. I highly recommend it!",
    rating: 5,
    image: "/placeholder-patient.jpg"
  },
  {
    name: "Jennifer L.",
    age: 52,
    treatment: "Dental Implants",
    quote: "After losing a tooth, I thought I'd never chew comfortably again. The implant feels just like a real tooth. I'm so grateful for the amazing care I received.",
    rating: 5,
    image: "/placeholder-patient.jpg"
  }
];

export default function ResultsGalleryPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-navy to-slateBlue">
          <div className="absolute inset-0 bg-nearBlack/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Real Results from Real Patients
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                See the transformative power of modern dentistry. These before-and-after photos showcase successful treatments at Lux Dentistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4">
          <div className="flex items-start gap-3">
            <div className="text-yellow-600 mt-0.5">⚠️</div>
            <div>
              <h3 className="font-medium text-yellow-900 mb-1">Important Notice</h3>
              <p className="text-sm text-yellow-800">
                Individual results may vary. All photos show actual Lux Dentistry patients who have given consent for their images to be displayed.
                Treatment outcomes depend on individual circumstances and adherence to post-treatment care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY CATEGORIES */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="space-y-16">
          {galleryCategories.map((category) => (
            <div key={category.id}>
              <div className="text-center mb-8">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h2 className="text-2xl font-semibold text-nearBlack">{category.name}</h2>
                <p className="mt-2 text-base text-charcoal">{category.description}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.results.map((result, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-silver/60 bg-white overflow-hidden shadow-sm"
                  >
                    {/* Before/After Images */}
                    <div className="grid grid-cols-2 gap-1 p-4">
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-red-600 uppercase tracking-wide">Before</div>
                        <div className="aspect-square rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
                          <div className="text-center text-silver">
                            <div className="text-2xl mb-1">📸</div>
                            <p className="text-xs">Before Photo</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-green-600 uppercase tracking-wide">After</div>
                        <div className="aspect-square rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
                          <div className="text-center text-silver">
                            <div className="text-2xl mb-1">✨</div>
                            <p className="text-xs">After Photo</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Result Details */}
                    <div className="p-4">
                      <h3 className="font-semibold text-nearBlack mb-2">{result.title}</h3>
                      <p className="text-sm text-charcoal mb-3">{result.description}</p>
                      <div className="space-y-1 text-xs text-charcoal">
                        <p><span className="font-medium">Treatment:</span> {result.treatment}</p>
                        <p><span className="font-medium">Duration:</span> {result.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PATIENT STORIES */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Patient Success Stories</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Hear from our patients about their experiences and life-changing results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {patientStories.map((story, index) => (
              <div
                key={index}
                className="rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                {/* Patient Photo */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-silver/20 border border-silver/60 flex items-center justify-center">
                    <span className="text-lg">👤</span>
                  </div>
                  <div>
                    <div className="font-semibold text-nearBlack">{story.name}, {story.age}</div>
                    <div className="text-sm text-charcoal">{story.treatment}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <span key={i} className="text-gold">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base leading-7 text-charcoal italic">
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Why Patients Choose Lux Dentistry</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center rounded-lg bg-white p-6 border border-silver/60">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Expert Care</h3>
            <p className="text-sm text-charcoal">Highly trained professionals with years of experience</p>
          </div>

          <div className="text-center rounded-lg bg-white p-6 border border-silver/60">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Advanced Technology</h3>
            <p className="text-sm text-charcoal">Latest dental technology for superior results</p>
          </div>

          <div className="text-center rounded-lg bg-white p-6 border border-silver/60">
            <div className="text-3xl mb-2">😊</div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Patient Comfort</h3>
            <p className="text-sm text-charcoal">Gentle, compassionate care in a relaxing environment</p>
          </div>

          <div className="text-center rounded-lg bg-white p-6 border border-silver/60">
            <div className="text-3xl mb-2">💎</div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Quality Results</h3>
            <p className="text-sm text-charcoal">Beautiful, long-lasting outcomes that exceed expectations</p>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER SLIDER CONCEPT */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Transformation Gallery</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Interactive before-and-after comparisons showcasing our most dramatic results.
            </p>
          </div>

          <div className="space-y-8">
            {/* Featured Case Study */}
            <div className="rounded-xl border border-silver/60 bg-white overflow-hidden shadow-sm">
              <div className="p-6 border-b border-silver/40">
                <h3 className="text-xl font-semibold text-nearBlack mb-2">Full Smile Makeover</h3>
                <p className="text-base text-charcoal mb-4">
                  Complete transformation including veneers, crowns, and whitening for a Hollywood-worthy smile.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="px-2 py-1 bg-gold/10 text-gold rounded">Porcelain Veneers</span>
                  <span className="px-2 py-1 bg-gold/10 text-gold rounded">Teeth Whitening</span>
                  <span className="px-2 py-1 bg-gold/10 text-gold rounded">Gum Contouring</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 p-6">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-red-600">BEFORE</div>
                  <div className="aspect-[4/3] rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
                    <div className="text-center text-silver">
                      <div className="text-4xl mb-2">📸</div>
                      <p className="text-sm">Before Photo</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-green-600">AFTER</div>
                  <div className="aspect-[4/3] rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
                    <div className="text-center text-silver">
                      <div className="text-4xl mb-2">✨</div>
                      <p className="text-sm">After Photo</p>
                    </div>
                  </div>
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
            Ready for your smile transformation?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            See for yourself what modern dentistry can achieve. Schedule your consultation today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:6787737354"
              className="rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold transition hover:border-goldSoft hover:text-goldSoft"
            >
              Call (678) 773-7354
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
