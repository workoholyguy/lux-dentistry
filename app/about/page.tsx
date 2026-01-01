import Image from "next/image";

export const metadata = {
  title: "About Us | Lux Dentistry",
  description:
    "Learn about Lux Dentistry: our philosophy, approach, and commitment to calm, transparent dental care.",
};

export default function AboutPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/DentistryChair.jpg"
            alt="Lux Dentistry office"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-nearBlack/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Dentistry built on clarity, trust, and restraint.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Lux Dentistry exists to provide dental care that is calm, deliberate, and grounded in
                clear communication, so patients can make informed decisions without pressure or
                confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PATTERN A — TEXT + IMAGE */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-nearBlack">
              Our Philosophy
            </h2>
            <p className="text-base leading-7">
              We approach dentistry with respect for the individual behind every appointment. That
              means listening first, explaining clearly, and allowing enough time for questions and
              understanding. We avoid rushed visits and unnecessary treatment, focusing instead on
              long-term oral health and decisions that hold up over time.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/FemaleMouthExamined.jpg"
                alt="Patient consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PATTERN B — TEXT-LED SECTION */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="mb-2 text-2xl font-semibold text-nearBlack">
            What Makes Lux Dentistry Different
          </h2>
          <p className="max-w-4xl text-base leading-7">
            Modern dental technology improves accuracy, comfort, and early diagnosis. Clear explanations
            and transparent pricing remove uncertainty. Preventative care is emphasized to reduce the
            need for complex procedures. The environment is designed to support comfort and reduce
            anxiety. Appointments are structured to respect patient time. Consistency of care ensures
            patients always know what to expect.
          </p>

          {/* Supporting image, not a separator */}
          <div className="mt-6 overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[21/5] w-full">
              <Image
                src="/teethRow.jpg"
                alt="Dental care"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PATTERN B */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="mb-2 text-2xl font-semibold text-nearBlack">
          The Clinical Approach
        </h2>
        <p className="max-w-3xl text-base leading-7">
          Our care is guided by evidence-based dentistry and a conservative approach to treatment
          planning. We focus on education before procedures, helping patients understand what is
          happening and why. By prioritizing prevention and early detection, we aim to address concerns
          before they become larger problems.
        </p>
      </section>

      {/* PATTERN A */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-nearBlack">
                Our Team
              </h2>
              <p className="text-base leading-7">
                Lux Dentistry operates as a coordinated team committed to precision, professionalism,
                and patient comfort. Continuous training and shared standards ensure care remains
                consistent and current. Patients are supported by people who take their responsibility
                seriously.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/FemaleMouthExaminedWithMirror.jpg"
                  alt="Dental examination"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMBINED CLOSING CONTEXT */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="mb-2 text-2xl font-semibold text-nearBlack">
          The Space, the Experience, and the Community
        </h2>
        <p className="max-w-3xl text-base leading-7">
          The office is designed to feel clean, modern, and quiet, supporting a predictable and calm
          experience. Lux Dentistry is rooted in the local community and built on long-term
          relationships, where patients are treated as people, not appointments.
        </p>
      </section>

      {/* FINAL STATEMENT */}
      <section className="bg-white/60 border-t border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="max-w-3xl text-lg leading-8">
            Lux Dentistry delivers care that is measured, transparent, and patient-focused. Every
            decision is guided by clarity, professionalism, and respect.
          </p>
        </div>
      </section>
    </div>
  );
}