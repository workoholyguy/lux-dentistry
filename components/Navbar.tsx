"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type DropdownItem = {
  name: string;
  href: string;
};

type DropdownProps = {
  label: string;
  items: DropdownItem[];
  href?: string;
};

const services: DropdownItem[] = [
  { name: "Preventative dental care", href: "/services/preventative-dental-care" },
  { name: "Dental X-rays", href: "/services/dental-x-rays" },
  { name: "Oral cancer screening", href: "/services/oral-cancer-screening" },
  { name: "Dental cleaning", href: "/services/dental-cleaning" },
  { name: "Fluoride treatment", href: "/services/fluoride-treatment" },
  { name: "Dental sealant", href: "/services/dental-sealant" },
  { name: "Crowns and bridges", href: "/services/crowns-and-bridges" },
  { name: "Fillings", href: "/services/fillings" },
  { name: "Cosmetic veneers", href: "/services/cosmetic-veneers" },
  { name: "Full mouth crowns", href: "/services/full-mouth-crowns" },
  { name: "Root canal treatment", href: "/services/root-canal-treatment" },
  { name: "Tooth extraction", href: "/services/tooth-extraction" },
  { name: "Invisalign treatment", href: "/services/invisalign-treatment" },
  { name: "Gum disease treatment", href: "/services/gum-disease-treatment" },
  { name: "Bad breath treatment", href: "/services/bad-breath-treatment" },
  { name: "Emergency dental treatment", href: "/services/emergency-dental-treatment" },
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

const phoneNumber = "(702) 555-0187";

function Dropdown({ label, items, href }: DropdownProps) {
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
            className="text-base font-medium uppercase text-softBg transition hover:text-gold focus-visible:outline-none"
            onMouseEnter={openMenu}
          >
            {label}
          </Link>
        ) : (
          <button
            type="button"
            className="text-base font-medium uppercase text-softBg transition hover:text-gold focus-visible:outline-none"
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
            className="text-base text-gold transition hover:text-goldSoft focus-visible:outline-none"
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
            className="text-base text-gold transition hover:text-goldSoft focus-visible:outline-none"
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
          className="absolute left-0 mt-3 min-w-[240px] rounded-lg border border-silver/60 bg-softBg py-3 shadow-lg"
        >
          <ul className="flex flex-col divide-y divide-silver/40">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-base uppercase text-charcoal transition hover:bg-goldSoft/40 hover:text-nearBlack"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-silver/50 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Complete_Logo_No_Bg_2.png"
            alt="Lux Dentistry logo"
            width={200}
            height={60}
            priority
            className="h-24 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {primaryLinks
            .filter((link) => link.name === "Home")
            .map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium uppercase transition hover:text-gold ${
                    isActive ? "text-gold" : "text-softBg"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          <Dropdown label="About Us" items={aboutLinks} href="/about" />
          <Dropdown label="Services" items={services} />
          <Dropdown label="For Patients" items={patientLinks} />
          {primaryLinks
            .filter((link) => link.name === "New Patient")
            .map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium uppercase transition hover:text-gold ${
                    isActive ? "text-gold" : "text-softBg"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${phoneNumber.replace(/\D/g, "")}`}
            className="hidden text-base font-semibold text-gold transition hover:text-goldSoft sm:block"
          >
            {phoneNumber}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-gold px-4 py-2 text-base font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

