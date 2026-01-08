import Image from "next/image";

export const metadata = {
  title: "Tooth Extraction | Lux Dentistry",
  description: "Safe, comfortable tooth extraction services for damaged, infected, or problematic teeth with sedation options available.",
};

const reasonsForExtraction = [
  "Severe tooth decay or infection",
  "Advanced gum disease (periodontitis)",
  "Impacted wisdom teeth",
  "Orthodontic treatment planning",
  "Cracked or fractured teeth beyond repair",
  "Baby teeth that won't fall out naturally",
  "Supernumerary teeth (extra teeth)",
  "Teeth in the line of radiation therapy"
];

const extractionTypes = [
  {
    type: "Simple Extraction",
    description: "Removal of visible teeth that can be extracted with forceps",
    indications: "Front teeth, baby teeth, loose teeth",
    healing: "3-4 days",
    aftercare: "Minimal restrictions"
  },
  {
    type: "Surgical Extraction",
    description: "Removal of teeth that require cutting into gum tissue or bone",
    indications: "Impacted wisdom teeth, broken teeth, severely decayed teeth",
    healing: "7-10 days",
    aftercare: "More restrictive post-op care"
  },
  {
    type: "Wisdom Tooth Extraction",
    description: "Specialized removal of third molars, often impacted",
    indications: "Impacted wisdom teeth, infection, crowding prevention",
    healing: "1-2 weeks",
    aftercare: "Strict dietary and activity restrictions"
  }
];

const aftercareInstructions = [
  "Bite on gauze for 30-45 minutes to control bleeding",
  "Apply ice packs to reduce swelling (20 minutes on, 20 minutes off)",
  "Take prescribed pain medication and antibiotics as directed",
  "Rest and avoid strenuous activity for 24 hours",
  "Eat soft foods and avoid hot liquids for first 24 hours",
  "Don't smoke or use straws for 48 hours",
  "Keep mouth clean but avoid vigorous rinsing",
  "Return for follow-up appointment as scheduled"
];

export default function ToothExtractionPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/tooth-extraction-0.jpg"
            alt="Hero: Tooth extraction"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-nearBlack/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Safe, comfortable tooth extraction when needed.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                When a tooth cannot be saved, extraction followed by appropriate replacement is the best solution for your oral health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
<section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Oral Surgery</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              When extraction is the best option for your health.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Tooth extraction is recommended when a tooth is severely damaged, infected,
              or causing other dental problems that cannot be resolved through restoration.
              We always explore saving options first, but when extraction is necessary,
              we perform it with care and discuss replacement options like implants,
              bridges, or dentures.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
          <div className="relative aspect-[4/3] w-full">
              <Image
                src="/tooth-extraction-1.webp"
                alt="Tooth extraction frame 1"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REASONS FOR EXTRACTION */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">When Tooth Extraction Is Necessary</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Extractions are performed when the tooth cannot be saved or is causing harm to surrounding teeth and tissues.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasonsForExtraction.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 rounded-lg bg-white p-4 border border-silver/60"
              >
                <div className="h-2 w-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                <span className="text-sm text-charcoal">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRACTION TYPES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Types of Tooth Extractions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            The extraction method depends on the tooth&apos;s position, condition, and accessibility.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1">
          {extractionTypes.map((type) => (
            <div
              key={type.type}
              className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-nearBlack">{type.type}</h3>
              <p className="text-sm text-charcoal">{type.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Indications:</div>
                  <p className="text-charcoal">{type.indications}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Healing Time:</div>
                  <p className="text-charcoal">{type.healing}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Aftercare:</div>
                  <p className="text-charcoal">{type.aftercare}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEDATION OPTIONS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Comfort During Your Extraction</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              We offer various sedation options to ensure your comfort during the procedure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center rounded-lg bg-white p-6 border border-silver/60">
              <div className="text-3xl mb-2">💉</div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Local Anesthesia</h3>
              <p className="text-sm text-charcoal">Numbs the area for painless extraction</p>
            </div>

            <div className="text-center rounded-lg bg-white p-6 border border-silver/60">
              <div className="text-3xl mb-2">😌</div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Oral Sedation</h3>
              <p className="text-sm text-charcoal">Anti-anxiety medication for relaxation</p>
            </div>

            <div className="text-center rounded-lg bg-white p-6 border border-silver/60">
              <div className="text-3xl mb-2">💤</div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">IV Sedation</h3>
              <p className="text-sm text-charcoal">Sleep-like state for complex extractions</p>
            </div>
          </div>
        </div>
      </section>

      {/* AFTERCARE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              Post-Extraction Care Instructions.
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              Proper aftercare is crucial for healing and preventing complications.
              Following these instructions will ensure a smooth recovery.
            </p>
            <div className="space-y-3">
              {aftercareInstructions.map((instruction) => (
                <div
                  key={instruction}
                  className="flex items-start gap-3 rounded-lg bg-white p-3 border border-silver/60"
                >
                  <div className="h-2 w-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-charcoal">{instruction}</span>
                </div>
              ))}
            </div>
          </div>

        <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/tooth-extraction-2.jpg"
              alt="Post-extraction care frame"
              fill
              className="object-cover"
            />
          </div>
        </div>
        </div>
      </section>

      {/* REPLACEMENT OPTIONS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Tooth Replacement Options</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              After extraction, we discuss replacement options to maintain your oral function and appearance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center rounded-lg bg-white p-6 border border-silver/60">
              <div className="text-3xl mb-2">🦷</div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Dental Implants</h3>
              <p className="text-sm text-charcoal">Permanent replacement that looks and functions like natural teeth</p>
            </div>

            <div className="text-center rounded-lg bg-white p-6 border border-silver/60">
              <div className="text-3xl mb-2">🌉</div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Fixed Bridges</h3>
              <p className="text-sm text-charcoal">Adjacent teeth support a false tooth to fill the gap</p>
            </div>

            <div className="text-center rounded-lg bg-white p-6 border border-silver/60">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="text-lg font-semibold text-nearBlack mb-2">Removable Dentures</h3>
              <p className="text-sm text-charcoal">Affordable option for replacing multiple missing teeth</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS VISUALIZATION WITH PLACEHOLDER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">The Extraction Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Quick, comfortable procedure with proper anesthesia and aftercare.
          </p>
        </div>

        {/* Process steps with image/video placeholders */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Preparation</h3>
            <p className="text-sm text-charcoal mb-4">Anesthesia and patient comfort measures</p>
            {/* Image frame replaced by provided image in order */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 relative">
              <Image src="/tooth-extraction-3.jpg" alt="Preparation frame" fill className="object-cover" />
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">2</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Extraction</h3>
            <p className="text-sm text-charcoal mb-4">Careful removal of the tooth</p>
            {/* Image frame using provided image 4.jpg */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 relative">
              <Image src="/tooth-extraction-4.jpg" alt="Extraction frame" fill className="object-cover" />
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">3</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Aftercare</h3>
            <p className="text-sm text-charcoal mb-4">Instructions and follow-up care</p>
            {/* Image frame using provided image 5.webp */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 relative">
              <Image src="/tooth-extraction-5.webp" alt="Aftercare animation frame" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Compassionate care when extraction is necessary.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            We understand that tooth extraction can be stressful. Our team provides gentle, supportive care throughout the process.
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
