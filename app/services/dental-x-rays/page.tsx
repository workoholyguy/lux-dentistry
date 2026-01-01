export const metadata = {
  title: "Dental X-rays | Lux Dentistry",
  description: "Advanced digital X-ray technology for accurate diagnosis and comprehensive dental care planning.",
};

const xRayTypes = [
  {
    name: "Bitewing X-rays",
    description: "Show the upper and lower teeth in one area of the mouth",
    purpose: "Detect cavities between teeth and monitor bone levels",
    frequency: "Every 6-18 months"
  },
  {
    name: "Periapical X-rays",
    description: "Show the entire tooth from crown to root",
    purpose: "Examine root structure and surrounding bone",
    frequency: "As needed for diagnosis"
  },
  {
    name: "Panoramic X-rays",
    description: "Show the entire mouth in one image",
    purpose: "Evaluate wisdom teeth, jaw disorders, and overall dental health",
    frequency: "Every 3-5 years or as needed"
  },
  {
    name: "Cone Beam CT",
    description: "3D imaging for detailed views of teeth and jaw",
    purpose: "Advanced diagnosis for implants, orthodontics, and complex cases",
    frequency: "As needed for treatment planning"
  }
];

const benefits = [
  "Early detection of cavities and infections",
  "Monitoring of bone health and gum disease",
  "Precise treatment planning",
  "Reduced radiation exposure (up to 90% less)",
  "Instant digital results",
  "Better patient education and understanding"
];

export default function DentalXRaysPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slateBlue to-navy">
          <div className="absolute inset-0 bg-nearBlack/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Digital X-rays for precise diagnosis and care.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Advanced imaging technology that reveals what we can't see with the naked eye, enabling better treatment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Diagnostic Imaging</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              See what matters for your dental health.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Dental X-rays are essential diagnostic tools that help us detect problems early,
              plan treatments accurately, and monitor your oral health over time. Our digital
              X-ray system provides clear, detailed images with minimal radiation exposure.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for X-ray technology */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">📡</div>
                  <p className="text-sm">X-ray Technology Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* X-RAY TYPES */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Types of Dental X-rays</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Different X-ray views serve different diagnostic purposes, allowing us to see various aspects of your dental health.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {xRayTypes.map((xray) => (
              <div
                key={xray.name}
                className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-nearBlack">{xray.name}</h3>
                <p className="text-sm text-charcoal">{xray.description}</p>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gold uppercase tracking-wide">Purpose:</div>
                  <p className="text-sm text-charcoal">{xray.purpose}</p>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gold uppercase tracking-wide">Frequency:</div>
                  <p className="text-sm text-charcoal">{xray.frequency}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Why X-rays Matter</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 rounded-lg bg-white p-4 border border-silver/60"
            >
              <div className="h-2 w-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
              <span className="text-sm text-charcoal">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DIGITAL ADVANTAGES */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
                Digital X-rays: Better care, less radiation.
              </h2>
              <p className="mb-6 text-base leading-7 text-charcoal">
                Our digital X-ray system offers several advantages over traditional film X-rays,
                providing clearer images with significantly reduced radiation exposure.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">90% less radiation than conventional X-rays</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Instant digital images, no waiting for development</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Enhanced image quality for better diagnosis</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Easy sharing with specialists and insurance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Environmentally friendly, no chemical processing</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
              <div className="relative aspect-[4/3] w-full">
                {/* Image placeholder for digital X-ray comparison */}
                <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⚡</div>
                    <p className="text-sm">Digital X-ray Demo Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION WITH PLACEHOLDER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">The X-ray Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Quick, comfortable, and safe imaging that provides valuable diagnostic information.
          </p>
        </div>

        {/* Process steps with image/video placeholders */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Preparation</h3>
            <p className="text-sm text-charcoal mb-4">Lead apron and thyroid collar for protection</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
              <div className="text-center text-silver">
                <div className="text-2xl mb-1">🛡️</div>
                <p className="text-xs">Protection Setup Image</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">2</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Imaging</h3>
            <p className="text-sm text-charcoal mb-4">Quick exposure, typically 0.3 seconds</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
              <div className="text-center text-silver">
                <div className="text-2xl mb-1">📸</div>
                <p className="text-xs">X-ray Process Video</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">3</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Review</h3>
            <p className="text-sm text-charcoal mb-4">Instant digital results and explanation</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
              <div className="text-center text-silver">
                <div className="text-2xl mb-1">💻</div>
                <p className="text-xs">Results Review Animation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Advanced imaging for better dental care.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Schedule your next check-up and experience the benefits of digital X-ray technology.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Schedule X-rays
          </a>
        </div>
      </section>
    </div>
  );
}
