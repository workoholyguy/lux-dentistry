import Image from "next/image";

export const metadata = {
  title: "Frequently Asked Questions | Lux Dentistry",
  description: "Find answers to common dental questions about appointments, treatments, insurance, and oral health care at Lux Dentistry.",
};

const faqCategories = [
  {
    category: "Appointments & Scheduling",
    icon: "📅",
    questions: [
      {
        question: "How do I schedule an appointment?",
        answer: "You can schedule an appointment by calling our office at (678) 773-7354, using our online booking system, or visiting our office in person. We offer flexible scheduling including evenings and Saturdays."
      },
      {
        question: "What should I expect during my first visit?",
        answer: "Your first visit includes a comprehensive examination, review of your medical history, oral cancer screening, and discussion of your treatment goals. We'll take X-rays if needed and provide a personalized treatment plan."
      },
      {
        question: "How often should I visit the dentist?",
        answer: "We recommend visiting every 6 months for routine cleanings and check-ups. However, some patients may need more frequent visits based on their oral health needs and risk factors."
      },
      {
        question: "What if I have dental anxiety?",
        answer: "We understand dental anxiety is common. We offer sedation options including oral sedation, nitrous oxide (laughing gas), and IV sedation for anxious patients. Our compassionate team works to create a comfortable environment."
      }
    ]
  },
  {
    category: "Insurance & Payments",
    icon: "💳",
    questions: [
      {
        question: "What insurance plans do you accept?",
        answer: "We accept most major dental insurance plans including Delta Dental, MetLife, Aetna, Cigna, and UnitedHealthcare. We also offer in-house financing options and payment plans for uninsured patients."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans through CareCredit and our in-house financing. We also accept major credit cards, cash, and checks. Our treatment coordinators can help you find the best option for your budget."
      },
      {
        question: "What is the cost of a dental cleaning?",
        answer: "The cost of a dental cleaning varies based on the type needed and insurance coverage. Routine cleanings typically range from $75-$150. We provide detailed estimates before treatment and work with your insurance."
      },
      {
        question: "Do you offer emergency dental care?",
        answer: "Yes, we provide 24/7 emergency dental care. For severe pain, call (678) 773-7354 immediately. We typically see emergency patients within 24 hours and offer same-day appointments for urgent cases."
      }
    ]
  },
  {
    category: "Treatments & Procedures",
    icon: "🦷",
    questions: [
      {
        question: "What is the difference between a filling and a crown?",
        answer: "A filling restores a small cavity or damaged area of a tooth. A crown covers the entire tooth surface when there's extensive damage or after a root canal. Crowns provide more protection but require more tooth preparation."
      },
      {
        question: "How long do dental implants last?",
        answer: "With proper care, dental implants can last 20-30 years or longer. They integrate with your jawbone like natural teeth and don't decay. Regular dental visits and good oral hygiene are essential for long-term success."
      },
      {
        question: "Is Invisalign as effective as braces?",
        answer: "Invisalign is effective for most orthodontic cases including crowding, spacing, and mild bite issues. However, severe cases may still require traditional braces. We offer both options and can recommend the best treatment for your needs."
      },
      {
        question: "How do I know if I need a root canal?",
        answer: "Signs include severe tooth pain, sensitivity to hot/cold, swelling, or a bad taste. However, some cases show no symptoms initially. Regular dental visits help catch issues early before they require root canals."
      }
    ]
  },
  {
    category: "Oral Health & Prevention",
    icon: "🪥",
    questions: [
      {
        question: "How can I prevent cavities?",
        answer: "Brush twice daily with fluoride toothpaste, floss daily, limit sugary foods and drinks, visit your dentist regularly, and consider dental sealants for children. Fluoride treatments and professional cleanings also help prevent decay."
      },
      {
        question: "What causes bad breath and how can I fix it?",
        answer: "Bad breath is often caused by poor oral hygiene, gum disease, dry mouth, or certain foods. Regular brushing, flossing, tongue cleaning, and professional cleanings usually resolve it. Persistent bad breath may indicate a medical condition requiring attention."
      },
      {
        question: "How do I care for my teeth if I have braces?",
        answer: "Brush after every meal, floss daily (using floss threaders), avoid hard/sticky foods, and use prescribed mouthwash. Regular dental visits are crucial during orthodontic treatment to maintain oral health."
      },
      {
        question: "What should I do if I chip or break a tooth?",
        answer: "Rinse your mouth with warm water, apply cold compress to reduce swelling, and save any tooth fragments. Call our office immediately for emergency care. We can often repair chipped teeth the same day."
      }
    ]
  },
  {
    category: "Children & Family Dentistry",
    icon: "👨‍👩‍👧‍👦",
    questions: [
      {
        question: "When should my child first visit the dentist?",
        answer: "The American Academy of Pediatric Dentistry recommends the first visit by age 1 or when the first tooth erupts. Early visits help establish good habits and catch potential issues early."
      },
      {
        question: "Do baby teeth need fillings?",
        answer: "Yes, baby teeth can develop cavities and should be treated to prevent pain, infection, and spacing issues that could affect permanent teeth. We use techniques appropriate for children to ensure comfort."
      },
      {
        question: "What are dental sealants and does my child need them?",
        answer: "Dental sealants are protective coatings applied to the chewing surfaces of back teeth. They're recommended for children and teenagers to prevent cavities in hard-to-reach grooves. They're quick, painless, and highly effective."
      },
      {
        question: "How can I help my child overcome dental anxiety?",
        answer: "Start with positive dental experiences, explain procedures in age-appropriate terms, consider sedation options if needed, and maintain a calm demeanor. Our pediatric-friendly environment and gentle approach help children feel comfortable."
      }
    ]
  }
];

const quickContact = [
  { label: "Call for Appointment", value: "(678) 773-7354", icon: "📞" },
  { label: "Office Hours", value: "Mon-Fri: 9AM-5PM", icon: "🕒" },
  { label: "Emergency Care", value: "24/7 Available", icon: "🚨" },
  { label: "Location", value: "Alpharetta, GA", icon: "📍" }
];

export default function FAQPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-navy to-slateBlue">
          <div className="absolute inset-0 bg-nearBlack/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Find answers to common questions about dental care, appointments, treatments, and insurance at Lux Dentistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickContact.map((contact) => (
            <div
              key={contact.label}
              className="flex items-center gap-3 rounded-lg bg-white p-4 border border-silver/60 shadow-sm"
            >
              <div className="text-2xl">{contact.icon}</div>
              <div>
                <div className="text-sm font-medium text-nearBlack">{contact.label}</div>
                <div className="text-sm text-charcoal">{contact.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ CATEGORIES */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="space-y-12">
          {faqCategories.map((category) => (
            <div key={category.category}>
              <div className="mb-8 text-center">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h2 className="text-2xl font-semibold text-nearBlack">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-nearBlack mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-base leading-7 text-charcoal">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Still have questions?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            We're here to help! Contact our friendly team for personalized answers to your dental questions.
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
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
