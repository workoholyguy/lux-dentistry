import Image from "next/image";

export const metadata = {
  title: "Our Office | Lux Dentistry",
  description: "Visit our modern, comfortable dental office in Alpharetta, GA. Experience a serene environment designed for your dental care comfort.",
};

const amenities = [
  {
    name: "Modern Treatment Rooms",
    description: "Private, well-equipped rooms with the latest dental technology and comfortable seating.",
    icon: "🏥"
  },
  {
    name: "Comfort Amenities",
    description: "Blankets, neck pillows, and aromatherapy options to enhance your comfort during visits.",
    icon: "🛋️"
  },
  {
    name: "Sterile Environment",
    description: "Hospital-grade sterilization and infection control protocols for your safety.",
    icon: "🧼"
  },
  {
    name: "Digital Experience",
    description: "Paperless check-in, digital forms, and tablet-based entertainment during procedures.",
    icon: "📱"
  },
  {
    name: "Relaxation Features",
    description: "Calming lighting, soft music, and a peaceful atmosphere to reduce dental anxiety.",
    icon: "🕯️"
  },
  {
    name: "Convenient Parking",
    description: "Ample free parking with easy access to our office entrance.",
    icon: "🚗"
  }
];

const officeHours = [
  { day: "Monday", hours: "9:00 AM - 5:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
  { day: "Friday", hours: "8:00 AM - 2:00 PM" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" }
];

export default function OurOfficePage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/DentistryChair.jpg"
            alt="Lux Dentistry office interior"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-nearBlack/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                A modern dental office designed for your comfort.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Experience dental care in a serene, welcoming environment that prioritizes your comfort and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Our Office</p>
          <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
            Where comfort meets modern dentistry.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base leading-7 text-charcoal">
            Our office is designed to create a calm, welcoming atmosphere that helps reduce dental anxiety
            and makes your visits as comfortable as possible. Every detail has been thoughtfully considered
            to enhance your experience.
          </p>
        </div>
      </section>

      {/* AMENITIES GRID */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h3 className="mb-8 text-2xl font-semibold text-nearBlack text-center">Office Amenities</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity) => (
            <div
              key={amenity.name}
              className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-3xl">{amenity.icon}</div>
              <h4 className="text-lg font-semibold text-nearBlack">{amenity.name}</h4>
              <p className="text-sm leading-6 text-charcoal">{amenity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFICE TOUR */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
                Designed for comfort and efficiency.
              </h2>
              <p className="mb-6 text-base leading-7 text-charcoal">
                Our office layout maximizes privacy and comfort while ensuring efficient workflow.
                Each treatment room is equipped with the latest technology and designed to create
                a serene environment for your dental care.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Private consultation rooms</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">State-of-the-art sterilization center</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Comfortable waiting area with refreshments</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-gold"></div>
                  <span className="text-sm">Wheelchair accessible throughout</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
              <div className="relative aspect-[4/3] w-full">
                {/* Image placeholder for office interior */}
                <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏢</div>
                    <p className="text-sm">Office Interior Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & HOURS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Location */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-nearBlack">Location & Contact</h3>
            <div className="space-y-4">
              <div>
                <div className="font-medium text-nearBlack mb-1">Address</div>
                <p className="text-charcoal">1155 Bluegrass Ct<br />Alpharetta, GA 30004</p>
              </div>
              <div>
                <div className="font-medium text-nearBlack mb-1">Phone</div>
                <p className="text-charcoal">(678) 773-7354</p>
              </div>
              <div>
                <div className="font-medium text-nearBlack mb-1">Email</div>
                <p className="text-charcoal">info@luxdentistry.com</p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-silver/60">
              <iframe
                title="Lux Dentistry Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.992784369931!2d-84.2822414237591!3d34.10168027315505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f596a95e0620c5%3A0x6f0615f6cf646c26!2s1155%20Bluegrass%20Ct%2C%20Alpharetta%2C%20GA%2030004!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="250"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-nearBlack">Office Hours</h3>
            <div className="space-y-3">
              {officeHours.map((schedule) => (
                <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-silver/40 last:border-b-0">
                  <span className="font-medium text-nearBlack">{schedule.day}</span>
                  <span className="text-charcoal">{schedule.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/20">
              <div className="flex items-start gap-3">
                <div className="text-gold mt-0.5">⚠️</div>
                <div>
                  <div className="font-medium text-nearBlack mb-1">Emergency Care</div>
                  <p className="text-sm text-charcoal">
                    For dental emergencies outside regular hours, call (678) 773-7354.
                    We provide 24/7 emergency contact information to all patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARKING & ACCESS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-nearBlack">
              Easy access and convenient parking.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
              <div className="relative aspect-[16/9] w-full">
                {/* Image placeholder for parking */}
                <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚗</div>
                    <p className="text-sm">Parking Area Image</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-xl font-semibold text-nearBlack">Convenient Location</h3>
              <div className="space-y-3 text-sm text-charcoal">
                <p>• Ample free parking with designated patient spaces</p>
                <p>• Easy access from GA-400 and nearby highways</p>
                <p>• Close to shopping centers and restaurants</p>
                <p>• Wheelchair accessible entrance and pathways</p>
                <p>• Ground-level entry with no stairs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Visit our office and experience the difference.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Schedule your consultation today and discover why patients choose Lux Dentistry for their dental care.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
            >
              Schedule Visit
            </a>
            <a
              href={`tel:6787737354`}
              className="rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold transition hover:border-goldSoft hover:text-goldSoft"
            >
              Call (678) 773-7354
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
