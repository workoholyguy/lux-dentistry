import Image from "next/image";

export default function MeetTheDoctor() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-inner md:mx-0 md:max-w-none md:w-full md:aspect-[4/5]">
          <Image
            src="/doctor-1.webp"
            alt="Dr. Nasim Doroudgar - Lux Dentistry"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 rounded-2xl border border-silver/60" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Meet the Doctor</p>
          <h2 className="text-3xl font-semibold text-nearBlack md:text-4xl">
            Dr. Nasim Doroudgar
          </h2>
          <p className="text-base leading-7 text-charcoal">
            Dr. Nasim Doroudgar is a general dentist who takes pride in providing compassionate, patient-focused care. She treats her patients with the utmost respect, creating lasting relationships and providing smile-worthy experiences. Dr. Doroudgar ensures her patients are well informed and actively involved in their treatment.
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

