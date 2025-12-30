const points = [
  "Patient-first guidance with clear explanations",
  "Modern diagnostics for precise, efficient visits",
  "Comfort-focused care and serene environment",
  "Transparent recommendations tailored to your goals",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Why Choose Us</p>
          <h2 className="text-3xl font-semibold text-nearBlack md:text-4xl">
            Thoughtful care, modern tools, calm surroundings.
          </h2>
          <p className="max-w-3xl text-base leading-7 text-charcoal">
            We pair advanced technology with attentive communication, so you always know your options and
            feel comfortable choosing the right path.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div
              key={point}
              className="rounded-xl border border-silver/60 bg-softBg p-5 text-sm font-semibold text-nearBlack shadow-sm"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

