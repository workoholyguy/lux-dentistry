import Image from "next/image";

export default function MeetTheDoctor() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="relative h-72 overflow-hidden rounded-2xl shadow-inner md:h-80">
          <Image
            src="/DentistDoctor.jpg"
            alt="Lux Dentistry doctor"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 rounded-2xl border border-silver/60" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Meet the Doctor</p>
          <h2 className="text-3xl font-semibold text-nearBlack md:text-4xl">
            Skilled, attentive, and committed to comfort.
          </h2>
          <p className="text-base leading-7 text-charcoal">
            Our clinical team combines advanced training with clear, calm communication. Every visit is
            structured to keep you informed, comfortable, and confident in your care plan.
          </p>
          <a
            href="/about/meet-the-team"
            className="w-max rounded-full border border-gold px-5 py-3 text-sm font-semibold text-gold transition hover:border-goldSoft hover:text-goldSoft"
          >
            Meet our team
          </a>
        </div>
      </div>
    </section>
  );
}

