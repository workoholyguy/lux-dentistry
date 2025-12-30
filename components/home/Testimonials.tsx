const testimonials = [
  { quote: "Clear explanations and a calm experience throughout my visit.", name: "Sara M." },
  { quote: "Modern technology and a team that genuinely listens.", name: "David R." },
  { quote: "Comfortable care with every step outlined before treatment.", name: "Nina L." },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Testimonials</p>
          <h2 className="text-3xl font-semibold text-nearBlack md:text-4xl">What patients say</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex h-full flex-col justify-between gap-4 rounded-xl border border-silver/60 bg-softBg p-5 text-sm leading-6 text-charcoal shadow-sm"
            >
              <p>&ldquo;{item.quote}&rdquo;</p>
              <div className="text-nearBlack font-semibold">— {item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

