"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type DropdownItem = {
  name: string;
  href: string;
};

type DropdownSection = {
  title: string;
  description?: string;
  items: DropdownItem[];
};

type DropdownProps = {
  label: string;
  items?: DropdownItem[];
  sections?: DropdownSection[];
  href?: string;
  onLinkClick?: () => void;
};

const serviceSections: DropdownSection[] = [
  {
    title: "Preventive & Diagnostic Care",
    description: "Stops problems before they start. Finds issues early.",
    items: [
      { name: "Preventative dental care", href: "/services/preventative-dental-care" },
      { name: "Dental X-rays", href: "/services/dental-x-rays" },
      { name: "Oral cancer screening", href: "/services/oral-cancer-screening" },
      { name: "Dental cleaning", href: "/services/dental-cleaning" },
      { name: "Fluoride treatment", href: "/services/fluoride-treatment" },
      { name: "Dental sealant", href: "/services/dental-sealant" },
    ],
  },
  {
    title: "Restorative & Surgical Care",
    description: "Repairs damage. Removes disease.",
    items: [
      { name: "Fillings", href: "/services/fillings" },
      { name: "Crowns and bridges", href: "/services/crowns-and-bridges" },
      { name: "Full mouth crowns", href: "/services/full-mouth-crowns" },
      { name: "Root canal treatment", href: "/services/root-canal-treatment" },
      { name: "Tooth extraction", href: "/services/tooth-extraction" },
    ],
  },
  {
    title: "Cosmetic & Orthodontic Care",
    description: "Improves appearance and alignment.",
    items: [
      { name: "Cosmetic veneers", href: "/services/cosmetic-veneers" },
      { name: "Invisalign treatment", href: "/services/invisalign-treatment" },
    ],
  },
  {
    title: "Gum, Breath & Emergency Care",
    description: "Treats soft-tissue issues and urgent cases.",
    items: [
      { name: "Gum disease treatment", href: "/services/gum-disease-treatment" },
      { name: "Bad breath treatment", href: "/services/bad-breath-treatment" },
      { name: "Emergency dental treatment", href: "/services/emergency-dental-treatment" },
    ],
  },
];

const patientLinks: DropdownItem[] = [
  { name: "FAQ", href: "/patients/faq" },
  { name: "Insurance information", href: "/patients/insurance" },
  { name: "Results gallery", href: "/patients/results-gallery" },
];

const aboutLinks: DropdownItem[] = [
  { name: "Why Choose Us", href: "/about/why-choose-us" },
  { name: "Technologies", href: "/about/technologies" },
  { name: "Meet the Team", href: "/about/meet-the-team" },
  { name: "Our Office", href: "/about/our-office" },
];

const primaryLinks = [
  { name: "Home", href: "/" },
  { name: "New Patient", href: "/new-patient" },
];

const phoneNumber = "(678) 773-7354";

function Dropdown({ label, items, sections, href, onLinkClick }: DropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = `${label.toLowerCase().replace(/\s+/g, "-")}-menu`;

  const openMenu = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    closeTimeout.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      ref={containerRef}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <div className="flex items-center gap-1">
        {href ? (
          <Link
            href={href}
            className="text-sm font-medium uppercase text-softBg transition hover:text-gold focus-visible:outline-none"
            onMouseEnter={openMenu}
          >
            {label}
          </Link>
        ) : (
          <button
            type="button"
            className="text-sm font-medium uppercase text-softBg transition hover:text-gold focus-visible:outline-none"
            onClick={() => setOpen((prev) => !prev)}
            onMouseEnter={openMenu}
            aria-haspopup="menu"
            aria-controls={menuId}
          >
            {label}
          </button>
        )}
        {open ? (
          <button
            type="button"
            className="text-sm text-gold transition hover:text-goldSoft focus-visible:outline-none"
            onClick={() => setOpen(false)}
            aria-haspopup="menu"
            aria-controls={menuId}
            aria-expanded="true"
          >
            ▾
          </button>
        ) : (
          <button
            type="button"
            className="text-sm text-gold transition hover:text-goldSoft focus-visible:outline-none"
            onClick={() => setOpen(true)}
            onMouseEnter={openMenu}
            aria-haspopup="menu"
            aria-controls={menuId}
            aria-expanded="false"
          >
            ▾
          </button>
        )}
      </div>
      {open ? (
        <div
          id={menuId}
          className="absolute left-1/2 mt-3 w-[600px] -translate-x-1/2 rounded-lg border border-silver/60 bg-softBg py-3 shadow-lg"
        >
          {sections && sections.length > 0 ? (
            <div className="grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
              {sections.map((section) => (
                <div key={section.title} className="flex flex-col gap-2">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.08em] text-nearBlack">
                      {section.title}
                    </div>
                    {section.description ? (
                      <p className="text-xs text-charcoal">{section.description}</p>
                    ) : null}
                  </div>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-md px-2 py-2 text-sm uppercase text-charcoal transition hover:bg-goldSoft/40 hover:text-nearBlack"
                          onClick={() => {
                            setOpen(false);
                            onLinkClick?.();
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : items ? (
            <ul className="flex flex-col divide-y divide-silver/40">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-sm uppercase text-charcoal transition hover:bg-goldSoft/40 hover:text-nearBlack"
                    onClick={() => {
                      setOpen(false);
                      onLinkClick?.();
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-silver/50 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <Image
            src="/Complete_Logo_No_Bg_2.png"
            alt="Lux Dentistry logo"
            width={200}
            height={60}
            priority
            className="h-12 w-auto sm:h-15"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md bg-slateBlue text-softBg transition hover:bg-slateBlue/80 hover:text-gold md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen ? "true" : "false"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {primaryLinks
            .filter((link) => link.name === "Home")
            .map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium uppercase transition hover:text-gold ${
                    isActive ? "text-gold" : "text-softBg"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              );
            })}
          <Dropdown label="About Us" items={aboutLinks} href="/about" onLinkClick={closeMobileMenu} />
          <Dropdown label="Services" sections={serviceSections} onLinkClick={closeMobileMenu} />
          <Dropdown label="For Patients" items={patientLinks} onLinkClick={closeMobileMenu} />
          {primaryLinks
            .filter((link) => link.name === "New Patient")
            .map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium uppercase transition hover:text-gold ${
                    isActive ? "text-gold" : "text-softBg"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              );
            })}
        </nav>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen z-40 bg-navy md:hidden">
            {/* Mobile menu header - fixed at top */}
            <div className="flex items-center justify-between border-b border-silver/20 px-6 py-4">
              <span className="text-lg font-semibold text-softBg">Menu</span>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-md bg-slateBlue text-softBg transition hover:bg-slateBlue/80 hover:text-gold"
                onClick={closeMobileMenu}
                aria-label="Close mobile menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile menu content - exactly 60% of screen height */}
            <div className="h-[60vh] overflow-y-auto px-6 py-6">
              <nav className="space-y-1">
                {/* All navigation links in a simple vertical list */}
                {[
                  // Primary links
                  ...primaryLinks.map(link => ({ ...link, group: 'primary' })),
                  // About links
                  ...aboutLinks.map(link => ({ ...link, name: `About ${link.name}`, group: 'about' })),
                  // Service links (flatten all service sections)
                  ...serviceSections.flatMap(section =>
                    section.items.map(item => ({ ...item, group: 'services' }))
                  ),
                  // Patient links
                  ...patientLinks.map(link => ({ ...link, name: `Patients: ${link.name}`, group: 'patients' }))
                ].map((link) => {
                  const isActive = pathname === link.href;
                  return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block py-3 px-4 text-base uppercase border-b border-silver/20 transition hover:text-gold hover:bg-slateBlue ${
                          isActive ? "text-gold bg-slateBlue" : "text-softBg bg-navy"
                        }`}
                        onClick={closeMobileMenu}
                      >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile menu footer - fixed at bottom */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-silver/20 px-6 py-4 bg-navy">
              <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${phoneNumber.replace(/\D/g, "")}`}
                    className="block rounded-full bg-slateBlue px-4 py-3 text-center text-sm font-semibold text-gold transition hover:bg-slateBlue/80"
                    onClick={closeMobileMenu}
                  >
                    {phoneNumber}
                  </a>
                  <Link
                    href="/contact"
                    className="block rounded-full bg-gold px-4 py-3 text-center text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
                    onClick={closeMobileMenu}
                  >
                    Book Now
                  </Link>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-4">
          <a
            href={`tel:${phoneNumber.replace(/\D/g, "")}`}
            className="hidden rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold transition hover:border-goldSoft hover:text-goldSoft sm:px-4 sm:py-2 sm:block"
          >
            {phoneNumber}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft md:px-4 md:py-2"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

