export default function TrustBar() {
  const items = [
    "Experienced clinicians",
    "Modern diagnostics",
    "Same-day emergency slots",
    "Insurance-friendly options",
  ];

  return (
    <section className="bg-softBg py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 text-center text-sm font-semibold text-nearBlack md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-lg border border-silver/60 bg-white/70 px-3 py-3 shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

