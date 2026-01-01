import Image from "next/image";

export const metadata = {
  title: "New Patient | Lux Dentistry",
  description: "Welcome to Lux Dentistry! Learn about our new patient process, what to expect on your first visit, and how to prepare for exceptional dental care.",
};

const firstVisitSteps = [
  {
    step: 1,
    title: "Welcome & Paperwork",
    description: "You'll be greeted warmly and given forms to complete. We can send these ahead to save time.",
    duration: "10-15 minutes",
    icon: "📋"
  },
  {
    step: 2,
    title: "Medical History Review",
    description: "We'll discuss your health history, medications, and any concerns you have about dental care.",
    duration: "10 minutes",
    icon: "💬"
  },
  {
    step: 3,
    title: "Oral Examination",
    description: "A thorough examination of your teeth, gums, and oral tissues to assess your current dental health.",
    duration: "15-20 minutes",
    icon: "🔍"
  },
  {
    step: 4,
    title: "X-rays (if needed)",
    description: "Digital X-rays to get a complete picture of your dental health below the surface.",
    duration: "5-10 minutes",
    icon: "📡"
  },
  {
    step: 5,
    title: "Treatment Discussion",
    description: "We'll explain our findings and discuss treatment options, timeline, and costs.",
    duration: "15-20 minutes",
    icon: "📝"
  },
  {
    step: 6,
    title: "Care Coordination",
    description: "Scheduling any recommended treatments and answering your questions.",
    duration: "10 minutes",
    icon: "📅"
  }
];

const whatToBring = [
  {
    item: "Photo ID",
    description: "Driver's license or other government-issued ID",
    icon: "🪪"
  },
  {
    item: "Insurance Card",
    description: "Current dental and medical insurance cards",
    icon: "💳"
  },
  {
    item: "Medical Records",
    description: "Recent medical records or list of current medications",
    icon: "📄"
  },
  {
    item: "Referral Information",
    description: "If referred by another dentist or physician",
    icon: "📧"
  },
  {
    item: "Questions List",
    description: "Write down any questions or concerns you have",
    icon: "❓"
  },
  {
    item: "Comfort Items",
    description: "Headphones, stress ball, or comfort items for relaxation",
    icon: "🎧"
  }
];

const officePolicies = [
  {
    policy: "Appointment Policy",
    description: "We require 24-hour notice for appointment cancellations. Late arrivals may result in rescheduled appointments.",
    icon: "⏰"
  },
  {
    policy: "Payment Policy",
    description: "Payment is due at the time of service unless other arrangements have been made. We accept cash, credit cards, and financing.",
    icon: "💰"
  },
  {
    policy: "Insurance Policy",
    description: "We will file insurance claims on your behalf. You are responsible for any deductibles, co-payments, or non-covered services.",
    icon: "📋"
  },
  {
    policy: "Emergency Policy",
    description: "We provide 24/7 emergency contact information to all patients. Call our main line for urgent dental situations.",
    icon: "🚨"
  }
];

const patientBenefits = [
  {
    benefit: "Personalized Care",
    description: "Treatment plans tailored to your unique needs and goals",
    icon: "👤"
  },
  {
    benefit: "Advanced Technology",
    description: "State-of-the-art equipment for accurate diagnosis and treatment",
    icon: "⚡"
  },
  {
    benefit: "Comfort Focus",
    description: "Sedation options and anxiety management for your comfort",
    icon: "😌"
  },
  {
    benefit: "Preventive Approach",
    description: "Emphasis on prevention to avoid costly procedures later",
    icon: "🛡️"
  },
  {
    benefit: "Ongoing Support",
    description: "Regular check-ups and maintenance to ensure long-term success",
    icon: "🤝"
  },
  {
    benefit: "Family Dentistry",
    description: "Comprehensive care for patients of all ages",
    icon: "👨‍👩‍👧‍👦"
  }
];

const emergencyContacts = [
  { label: "Main Office", value: "(678) 773-7354", hours: "Mon-Fri: 9AM-5PM" },
  { label: "Emergency Line", value: "(678) 773-7354", hours: "24/7 Available" },
  { label: "After Hours", value: "Call main line", hours: "Leave message for urgent care" }
];

export default function NewPatientPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-navy to-slateBlue">
          <div className="absolute inset-0 bg-nearBlack/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Welcome to Lux Dentistry
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                We're excited to welcome you as a new patient. This guide will help you prepare for your first visit and understand what to expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME MESSAGE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack mb-4">Your Journey to Better Dental Health Starts Here</h2>
          <p className="max-w-3xl mx-auto text-lg leading-7 text-charcoal">
            At Lux Dentistry, we believe every patient deserves exceptional care in a comfortable, supportive environment.
            Whether you're visiting us for the first time or returning after years away, we're committed to helping you
            achieve and maintain optimal oral health.
          </p>
        </div>
      </section>

      {/* FIRST VISIT OVERVIEW */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">What to Expect on Your First Visit</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Your initial appointment typically lasts 60-90 minutes and includes a comprehensive evaluation of your dental health.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {firstVisitSteps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-nearBlack font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="text-lg">{step.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-nearBlack">{step.title}</h3>
                <p className="text-sm text-charcoal leading-6">{step.description}</p>
                <div className="text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded w-fit">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREPARATION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              How to Prepare for Your Visit
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              Proper preparation ensures your first visit is efficient and comfortable.
              Here's what you should bring and how to get ready.
            </p>

            <div className="space-y-4">
              {whatToBring.map((item) => (
                <div
                  key={item.item}
                  className="flex items-start gap-4 rounded-lg bg-white p-4 border border-silver/60"
                >
                  <div className="text-2xl mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-nearBlack mb-1">{item.item}</h3>
                    <p className="text-sm text-charcoal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-blue-50 border border-blue-200 p-6">
              <h3 className="font-semibold text-blue-900 mb-3">💡 Pro Tips</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Eat a normal meal before your appointment</li>
                <li>• Brush and floss your teeth beforehand</li>
                <li>• Wear comfortable, loose-fitting clothing</li>
                <li>• Arrive 15 minutes early to complete paperwork</li>
                <li>• Bring a list of questions you want to ask</li>
              </ul>
            </div>

            <div className="rounded-lg bg-green-50 border border-green-200 p-6">
              <h3 className="font-semibold text-green-900 mb-3">🚫 What Not to Do</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li>• Don't skip meals (low blood sugar affects comfort)</li>
                <li>• Don't wear strong perfumes (may affect others)</li>
                <li>• Don't bring young children unless necessary</li>
                <li>• Don't be afraid to ask questions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE POLICIES */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Office Policies & Information</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Understanding our policies helps ensure a smooth experience for all our patients.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {officePolicies.map((policy) => (
              <div
                key={policy.policy}
                className="rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">{policy.icon}</div>
                  <h3 className="text-lg font-semibold text-nearBlack">{policy.policy}</h3>
                </div>
                <p className="text-sm text-charcoal leading-6">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT BENEFITS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">Why Choose Lux Dentistry?</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {patientBenefits.map((benefit) => (
            <div
              key={benefit.benefit}
              className="flex flex-col items-center gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm text-center"
            >
              <div className="text-3xl">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-nearBlack">{benefit.benefit}</h3>
              <p className="text-sm text-charcoal leading-6">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFICE INFORMATION */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-nearBlack">Office Information</h2>

              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 border border-silver/60">
                  <h3 className="font-semibold text-nearBlack mb-2">📍 Location</h3>
                  <p className="text-sm text-charcoal">
                    1155 Bluegrass Ct<br />
                    Alpharetta, GA 30004
                  </p>
                </div>

                <div className="rounded-lg bg-white p-4 border border-silver/60">
                  <h3 className="font-semibold text-nearBlack mb-2">🕒 Office Hours</h3>
                  <div className="text-sm text-charcoal space-y-1">
                    <p>Monday - Thursday: 9:00 AM - 5:00 PM</p>
                    <p>Friday: 8:00 AM - 2:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-4 border border-silver/60">
                  <h3 className="font-semibold text-nearBlack mb-2">📞 Contact</h3>
                  <p className="text-sm text-charcoal">
                    Phone: (678) 773-7354<br />
                    Emergency: 24/7 Available
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-semibold text-nearBlack">Emergency Contacts</h2>

              <div className="space-y-3">
                {emergencyContacts.map((contact) => (
                  <div
                    key={contact.label}
                    className="flex items-center justify-between rounded-lg bg-white p-4 border border-silver/60"
                  >
                    <div>
                      <div className="font-semibold text-nearBlack">{contact.label}</div>
                      <div className="text-sm text-gold">{contact.hours}</div>
                    </div>
                    <div className="text-lg font-bold text-navy">{contact.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg bg-red-50 border border-red-200 p-4">
                <div className="flex items-start gap-3">
                  <div className="text-red-600 mt-0.5">🚨</div>
                  <div>
                    <h3 className="font-medium text-red-900 mb-1">Dental Emergency?</h3>
                    <p className="text-sm text-red-800">
                      Call our emergency line immediately. We provide 24/7 access to dental care when you need it most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW PATIENT FORMS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">New Patient Forms</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            To save time during your visit, you can download and complete our new patient forms in advance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-silver/60 bg-white p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Patient Registration</h3>
            <p className="text-sm text-charcoal mb-4">Basic information and contact details</p>
            <button className="w-full rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-nearBlack hover:bg-goldSoft transition">
              Download PDF
            </button>
          </div>

          <div className="rounded-xl border border-silver/60 bg-white p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">🏥</div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Medical History</h3>
            <p className="text-sm text-charcoal mb-4">Health conditions and medications</p>
            <button className="w-full rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-nearBlack hover:bg-goldSoft transition">
              Download PDF
            </button>
          </div>

          <div className="rounded-xl border border-silver/60 bg-white p-6 shadow-sm text-center">
            <div className="text-3xl mb-3">🦷</div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Dental History</h3>
            <p className="text-sm text-charcoal mb-4">Previous dental treatments and concerns</p>
            <button className="w-full rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-nearBlack hover:bg-goldSoft transition">
              Download PDF
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-charcoal mb-4">
            Bring completed forms to your appointment, or email them to us in advance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-lg border border-gold px-6 py-2 text-sm font-semibold text-gold hover:border-goldSoft hover:text-goldSoft transition">
              Download All Forms (ZIP)
            </button>
            <span className="text-charcoal">or</span>
            <button className="rounded-lg bg-navy px-6 py-2 text-sm font-semibold text-softBg hover:bg-navy/90 transition">
              Complete Online
            </button>
          </div>
        </div>
      </section>

      {/* PATIENT RESOURCES */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Patient Resources</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Explore our comprehensive patient resources to learn more about dental health and our services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="/patients/faq"
              className="group rounded-xl border border-silver/60 bg-white p-6 shadow-sm hover:shadow-md transition text-center"
            >
              <div className="text-3xl mb-3">❓</div>
              <h3 className="text-lg font-semibold text-nearBlack group-hover:text-gold transition">FAQ</h3>
              <p className="text-sm text-charcoal mt-2">Answers to common questions</p>
            </a>

            <a
              href="/patients/insurance"
              className="group rounded-xl border border-silver/60 bg-white p-6 shadow-sm hover:shadow-md transition text-center"
            >
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-semibold text-nearBlack group-hover:text-gold transition">Insurance Info</h3>
              <p className="text-sm text-charcoal mt-2">Coverage and payment options</p>
            </a>

            <a
              href="/patients/results-gallery"
              className="group rounded-xl border border-silver/60 bg-white p-6 shadow-sm hover:shadow-md transition text-center"
            >
              <div className="text-3xl mb-3">📸</div>
              <h3 className="text-lg font-semibold text-nearBlack group-hover:text-gold transition">Results Gallery</h3>
              <p className="text-sm text-charcoal mt-2">Before & after transformations</p>
            </a>

            <a
              href="/services"
              className="group rounded-xl border border-silver/60 bg-white p-6 shadow-sm hover:shadow-md transition text-center"
            >
              <div className="text-3xl mb-3">🦷</div>
              <h3 className="text-lg font-semibold text-nearBlack group-hover:text-gold transition">Our Services</h3>
              <p className="text-sm text-charcoal mt-2">Complete treatment options</p>
            </a>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Ready to Start Your Dental Journey?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            We're excited to welcome you to Lux Dentistry. Contact us today to schedule your first appointment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:6787737354"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
            >
              Call (678) 773-7354
            </a>
            <a
              href="/contact"
              className="rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold transition hover:border-goldSoft hover:text-goldSoft"
            >
              Schedule Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
