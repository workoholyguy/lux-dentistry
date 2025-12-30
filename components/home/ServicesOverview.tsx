const services = [
  {
    title: "Preventive & Diagnostic",
    description: "Cleanings, exams, X-rays, early detection, and protective sealants.",
  },
  {
    title: "Restorative & Surgical",
    description: "Fillings, crowns and bridges, root canals, extractions, and full-mouth rehab.",
  },
  {
    title: "Cosmetic & Orthodontic",
    description: "Veneers and Invisalign treatment for balanced, confident smiles.",
  },
  {
    title: "Gum & Emergency Care",
    description: "Gum therapy, breath care, and responsive emergency treatment.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Our Services</p>
          <h2 className="text-3xl font-semibold text-nearBlack md:text-4xl">
            Comprehensive care for every stage of your smile.
          </h2>
          <p className="max-w-3xl text-base leading-7 text-charcoal">
            From prevention to advanced treatment, we guide you with clear options and calm, attentive care.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex h-full flex-col gap-3 rounded-xl border border-silver/60 bg-softBg p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-nearBlack">{service.title}</h3>
              <p className="text-sm leading-6 text-charcoal">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

