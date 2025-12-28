export const metadata = {
  title: "About Us | Lux Dentistry",
  description: "Learn about Lux Dentistry: philosophy, technology, team, and our serene office experience.",
};

export default function AboutPage() {
  return (
    <div className="bg-softBg text-charcoal">
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16 pt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">
          About Lux Dentistry
        </p>
        <h1 className="text-3xl font-semibold text-nearBlack md:text-4xl">
          Calm, meticulous dentistry grounded in trust and modern technology.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-charcoal">
          We created Lux Dentistry to deliver attentive care in a setting that feels calm and
          considered. Our team combines expertise with gentle communication so you always know what
          to expect—whether it’s preventive visits or comprehensive treatment plans.
        </p>
      </section>

      <section className="border-y border-silver/50 bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-nearBlack">Why Choose Us</h2>
            <p className="text-base leading-7 text-charcoal">
              A boutique approach with extended appointment time, clear explanations, and tailored
              care plans. We prioritize comfort, transparency, and long-term oral health.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-nearBlack">Technologies</h2>
            <p className="text-base leading-7 text-charcoal">
              Digital imaging, 3D scanning, and modern materials help us plan precisely and keep
              visits efficient. Every tool is chosen to improve clarity and comfort.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-nearBlack">Meet the Team</h2>
            <p className="text-base leading-7 text-charcoal">
              Experienced clinicians and attentive support staff who value calm, respectful care.
              We collaborate to guide you through each step with confidence.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-nearBlack">Our Office</h2>
            <p className="text-base leading-7 text-charcoal">
              A serene, light-filled space with private treatment rooms and thoughtful amenities to
              help you feel at ease from the moment you arrive.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 rounded-2xl border border-silver/60 bg-white/70 p-8 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-nearBlack">Visit Us</h2>
            <p className="text-base leading-7 text-charcoal">
              Ready for a calm, clear dental experience? Schedule a visit and we will tailor a plan
              around your goals and comfort.
            </p>
          </div>
          <div className="flex items-center gap-4 md:justify-end">
            <a
              href="tel:7025550187"
              className="rounded-full border border-gold px-5 py-2 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
            >
              (702) 555-0187
            </a>
            <a
              href="/contact"
              className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
            >
              Book a visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

