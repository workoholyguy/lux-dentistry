import Image from "next/image";
import Link from "next/link";

const phoneNumber = "6787737354";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M13.2 21v-7h2.2l.4-2.7h-2.6v-1.7c0-.8.2-1.3 1.4-1.3h1.3V5c-.2 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.8v1.6H8v2.7h2.2V21h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 2A2.5 2.5 0 0 0 5 7.5v9A2.5 2.5 0 0 0 7.5 19h9A2.5 2.5 0 0 0 19 16.5v-9A2.5 2.5 0 0 0 16.5 5h-9Zm9.75.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z" />
      </svg>
    ),
  },
  {
    name: "Google Maps",
    href: "https://maps.google.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2a7 7 0 0 0-7 7c0 4.2 4.7 9.6 6.2 11.2a1.1 1.1 0 0 0 1.6 0C14.3 18.6 19 13.2 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
      </svg>
    ),
  },
];

const services = [
  { name: "Emergency Dental Treatment", href: "/services/emergency-dental-treatment" },
  { name: "Crowns and Bridges", href: "/services/crowns-and-bridges" },
  { name: "Invisalign Treatment", href: "/services/invisalign-treatment" },
  { name: "Cosmetic Veneers", href: "/services/cosmetic-veneers" },
];

const quickLinks = [
  { name: "New Patient", href: "/new-patient" },
  { name: "FAQ", href: "/patients/faq" },
  { name: "Insurance Info", href: "/patients/insurance" },
  { name: "Results Gallery", href: "/patients/results-gallery" },
];

export default function Footer() {
  return (
    <footer className="bg-navy/95 text-silver">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Complete_Logo_No_Bg_2.png"
                alt="Lux Dentistry logo"
                width={200}
                height={72}
                className="h-16 w-auto"
              />
            </Link>
            <div className="text-base text-softBg">Lux Dentistry</div>
            <div className="text-sm leading-6 text-silver">
              1155 Bluegrass Ct
              <br />
              Alpharetta, GA 30004
            </div>
            <a
              href={`tel:${phoneNumber}`}
              className="text-sm font-semibold text-gold transition hover:text-goldSoft"
            >
              Call: (678) 773-7354
            </a>
            <Link
              href="/contact"
              className="inline-flex w-max rounded-full bg-gold px-4 py-2 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
            >
              Book Now
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-base font-semibold text-softBg">Hours</div>
            <ul className="text-sm leading-6 text-silver">
              <li>Mon: 09:00am - 05:00pm</li>
              <li>Tue: 09:00am - 05:00pm</li>
              <li>Wed: 09:00am - 05:00pm</li>
              <li>Thu: 09:00am - 05:00pm</li>
              <li>Fri: 08:00am - 02:00pm</li>
              <li>Sat-Sun: Closed</li>
            </ul>
            <div className="text-base font-semibold text-softBg">Follow</div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-gold transition hover:border-gold hover:text-goldSoft"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-4">
            <div className="flex flex-col gap-3">
              <div className="text-base font-semibold text-softBg">Services</div>
              <ul className="space-y-2 text-sm text-silver">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="transition hover:text-goldSoft"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-base font-semibold text-softBg">Quick Links</div>
              <ul className="space-y-2 text-sm text-silver">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="transition hover:text-goldSoft"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/40">
            <iframe
              title="Lux Dentistry Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.992784369931!2d-84.2822414237591!3d34.10168027315505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f596a95e0620c5%3A0x6f0615f6cf646c26!2s1155%20Bluegrass%20Ct%2C%20Alpharetta%2C%20GA%2030004!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="260"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-silver/40 pt-6 text-sm text-silver md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Lux Dentistry. All rights reserved.</div>
          <div className="flex flex-wrap gap-3">
            <span>
              Powered by{" "}
              <a
                href="https://avidtechusa.com"
                className="font-semibold text-gold transition hover:text-goldSoft"
              >
                Avid Tech USA
              </a>
            </span>
            <span className="text-silver">|</span>
            <span className="flex flex-wrap gap-3">
              <a className="transition hover:text-goldSoft" href="/hipaa-notice">
                HIPAA Notice
              </a>
              <span className="text-silver">|</span>
              <a className="transition hover:text-goldSoft" href="/privacy-policy">
                Privacy Policy
              </a>
              <span className="text-silver">|</span>
              <a className="transition hover:text-goldSoft" href="/ada-compliance">
                ADA Compliance
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

