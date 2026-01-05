import Image from "next/image";

export const metadata = {
  title: "Meet the Team | Lux Dentistry",
  description: "Meet the experienced dental professionals at Lux Dentistry, committed to providing exceptional care with compassion and expertise.",
};

const team = [
  {
    name: "Dr. Nasim Doroudgar",
    role: "Lead Dentist",
    credentials: "DMD",
    experience: "10 years",
    specializations: ["General Dentistry", "Cosmetic Dentistry", "Endodontics", "Botox & Fillers"],
    education: "Dental College of Georgia, Augusta, Georgia",
    bio: "Dr. Nasim Doroudgar is a general dentist who takes pride in providing compassionate, patient-focused care. She treats her patients with the utmost respect, creating lasting relationships and providing smile-worthy experiences. Dr. Doroudgar ensures her patients are well informed and actively involved in their treatment. She offers multiple options so they can make informed decisions on the best way to restore oral health, functionality and a beautiful smile.",
    imageAlt: "Dr. Nasim Doroudgar",
    image: "/doctor-1.webp"
  },
  {
    name: "Dr. Michael Connors",
    role: "Associate Dentist",
    credentials: "DMD",
    experience: "38 years",
    specializations: ["Restorative Dentistry", "Dental Implants", "Emergency Care"],
    education: "Harvard School of Dental Medicine",
    bio: "Dr. Connors specializes in complex restorative cases and dental implants. His precision-focused approach ensures optimal treatment outcomes for every patient.",
    imageAlt: "Dr. Michael Connors",
    image: "/meet-the-team-2.jpg"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Pediatric Dentist",
    credentials: "DDS, MSD",
    experience: "12 years",
    specializations: ["Pediatric Dentistry", "Special Needs Patients", "Preventive Care"],
    education: "University of North Carolina School of Dentistry",
    bio: "Dr. Rodriguez has a special passion for working with children and patients with special needs. She creates positive dental experiences that last a lifetime.",
    imageAlt: "Dr. Emily Rodriguez",
    image: "/meet-the-team-5.jpg"
  }
];

const staff = [
  {
    name: "Lisa Thompson",
    role: "Office Manager",
    experience: "10 years",
    bio: "Lisa ensures smooth operations and creates a welcoming environment for all our patients.",
    imageAlt: "Lisa Thompson",
    image: "/meet-the-team-0.jpg"
  },
  {
    name: "Maria Garcia",
    role: "Lead Dental Hygienist",
    credentials: "RDH",
    experience: "14 years",
    bio: "Maria specializes in preventive care and patient education, helping you maintain optimal oral health.",
    imageAlt: "Maria Garcia",
    image: "/meet-the-team-3.jpg"
  },
  {
    name: "Jennifer Kim",
    role: "Dental Assistant",
    experience: "6 years",
    bio: "Jennifer provides exceptional chairside assistance and ensures patient comfort during treatments.",
    imageAlt: "Jennifer Kim",
    image: "/meet-the-team-4.jpg"
  },
  {
    name: "Robert Davis",
    role: "Treatment Coordinator",
    experience: "5 years",
    bio: "She helps patients understand their treatment options and coordinates comprehensive care plans.",
    imageAlt: "Robert Davis",
    image: "/meet-the-team-1.jpg"
  }
];

export default function MeetTheTeamPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/meet-the-team.jpg"
            alt="Lux Dentistry team"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-nearBlack/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Meet the team dedicated to your dental health.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Our experienced professionals work together to provide comprehensive, compassionate dental care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Our Team</p>
          <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
            Experienced professionals, united in patient care.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base leading-7 text-charcoal">
            At Lux Dentistry, our team shares a common commitment to excellence, continuing education,
            and patient-centered care. We work collaboratively to ensure you receive the best possible treatment.
          </p>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h3 className="mb-8 text-2xl font-semibold text-nearBlack text-center">Our Dental Professionals</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="overflow-hidden rounded-lg border border-silver/60 bg-silver/20">
                <div className="relative aspect-[3/4] w-full">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                      <div className="text-center">
                        <div className="text-4xl mb-2">👨‍⚕️</div>
                        <p className="text-xs">{member.imageAlt}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-nearBlack">{member.name}</h4>
                <p className="text-sm font-medium text-gold">{member.role}</p>
                <p className="text-sm text-charcoal">{member.credentials} • {member.experience} experience</p>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Specializations:</div>
                  <div className="flex flex-wrap gap-1">
                    {member.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="inline-block rounded-full bg-gold/10 px-2 py-1 text-xs text-gold"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Education:</div>
                  <p className="text-sm text-charcoal">{member.education}</p>
                </div>

                <p className="text-sm leading-6 text-charcoal">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STAFF */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="mb-8 text-2xl font-semibold text-nearBlack text-center">Our Support Team</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((member) => (
              <div
                key={member.name}
                className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <div className="overflow-hidden rounded-lg border border-silver/60 bg-silver/20">
                  <div className="relative aspect-square w-full">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                        <div className="text-center">
                          <div className="text-3xl mb-1">👥</div>
                          <p className="text-xs">{member.imageAlt}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-semibold text-nearBlack">{member.name}</h4>
                  <p className="text-xs font-medium text-gold">{member.role}</p>
                  {member.credentials && (
                    <p className="text-xs text-charcoal">{member.credentials}</p>
                  )}
                  <p className="text-xs text-charcoal">{member.experience} experience</p>
                </div>

                <p className="text-xs leading-5 text-charcoal">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
            Continuing education and professional development.
          </h2>
          <p className="mb-8 max-w-3xl mx-auto text-base leading-7 text-charcoal">
            Our team participates in ongoing professional development to stay current with the latest
            techniques, technologies, and best practices in dentistry. This commitment ensures you
            always receive the highest quality care.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 border border-silver/60 text-center">
              <div className="text-2xl mb-2">📚</div>
              <div className="font-medium text-nearBlack">Annual CE</div>
              <div className="text-sm text-charcoal">100+ hours yearly</div>
            </div>
            <div className="rounded-lg bg-white p-6 border border-silver/60 text-center">
              <div className="text-2xl mb-2">🏆</div>
              <div className="font-medium text-nearBlack">Certifications</div>
              <div className="text-sm text-charcoal">Advanced training</div>
            </div>
            <div className="rounded-lg bg-white p-6 border border-silver/60 text-center">
              <div className="text-2xl mb-2">🤝</div>
              <div className="font-medium text-nearBlack">Team Training</div>
              <div className="text-sm text-charcoal">Collaborative care</div>
            </div>
            <div className="rounded-lg bg-white p-6 border border-silver/60 text-center">
              <div className="text-2xl mb-2">🔬</div>
              <div className="font-medium text-nearBlack">Research</div>
              <div className="text-sm text-charcoal">Evidence-based</div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              A team united in your care.
            </h2>
            <p className="mb-8 max-w-3xl mx-auto text-lg leading-7 text-silver">
              Every member of our team shares the same values: providing clear, compassionate,
              and comprehensive dental care. We work together to ensure your experience is
              comfortable, informed, and successful.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
            >
              Meet Us In Person
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
