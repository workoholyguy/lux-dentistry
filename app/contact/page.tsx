"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const contactMethods = [
  {
    icon: "📞",
    title: "Phone",
    primary: "(678) 773-7354",
    description: "Call us directly for immediate assistance",
    action: "tel:6787737354",
    available: "Mon-Fri: 9AM-5PM"
  },
  {
    icon: "🚨",
    title: "Emergency",
    primary: "(678) 773-7354",
    description: "24/7 emergency dental care",
    action: "tel:6787737354",
    available: "Always available"
  },
  {
    icon: "📧",
    title: "Email",
    primary: "info@luxdentistry.com",
    description: "Send us a message anytime",
    action: "mailto:info@luxdentistry.com",
    available: "Response within 24 hours"
  },
  {
    icon: "📍",
    title: "Location",
    primary: "1155 Bluegrass Ct",
    description: "Alpharetta, GA 30004",
    action: "https://maps.google.com",
    available: "Click for directions"
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContact: "phone",
    appointmentType: "consultation",
    message: "",
    insurance: "none",
    emergency: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const BASIN_ENDPOINT = "https://usebasin.com/f/0861a7d58a08";

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showSuccessModal) {
        setShowSuccessModal(false);
      }
    };

    if (showSuccessModal) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showSuccessModal]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Prepare form data for Basin
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("firstName", formData.firstName);
    formDataToSubmit.append("lastName", formData.lastName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("phone", formData.phone);
    formDataToSubmit.append("preferredContact", formData.preferredContact);
    formDataToSubmit.append("appointmentType", formData.appointmentType);
    formDataToSubmit.append("insurance", formData.insurance);
    formDataToSubmit.append("emergency", formData.emergency ? "Yes" : "No");
    formDataToSubmit.append("message", formData.message || "");
    formDataToSubmit.append("fullName", `${formData.firstName} ${formData.lastName}`);

    try {
      const response = await fetch(BASIN_ENDPOINT, {
        method: "POST",
        body: formDataToSubmit,
      });

      if (response.ok) {
        // Send confirmation email to the submitter
        try {
          await fetch("/api/send-confirmation", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              firstName: formData.firstName,
              lastName: formData.lastName,
              appointmentType: formData.appointmentType,
            }),
          });
        } catch (emailError) {
          // Log error but don't fail the form submission
          console.error("Error sending confirmation email:", emailError);
        }

        setSubmitStatus("success");
        setSubmittedEmail(formData.email); // Store email before resetting
        setShowSuccessModal(true);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          preferredContact: "phone",
          appointmentType: "consultation",
          message: "",
          insurance: "none",
          emergency: false
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-navy to-slateBlue">
          <div className="absolute inset-0 bg-nearBlack/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6 text-center">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Schedule Your Dental Appointment
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg leading-7 text-white/90">
                Ready to take the next step toward better oral health? Contact us today to schedule your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack mb-4">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Choose the contact method that works best for you. We&apos;re here to help with all your dental needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.action}
              className="group block rounded-xl border border-silver/60 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-gold"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="text-lg font-semibold text-nearBlack mb-2 group-hover:text-gold transition">
                  {method.title}
                </h3>
                <p className="text-nearBlack font-medium mb-1">{method.primary}</p>
                <p className="text-sm text-charcoal mb-2">{method.description}</p>
                <p className="text-xs text-gold">{method.available}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* APPOINTMENT FORM & OFFICE INFO */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* CONTACT FORM */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-nearBlack mb-4">Request an Appointment</h2>
              <p className="text-base text-charcoal mb-6">
                Fill out the form below and we&apos;ll contact you within 24 hours to schedule your appointment.
                For emergencies, please call us directly at (678) 773-7354.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-nearBlack mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-silver/60 px-3 py-2 focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-nearBlack mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-silver/60 px-3 py-2 focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-nearBlack mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-silver/60 px-3 py-2 focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-nearBlack mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-silver/60 px-3 py-2 focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              {/* Preferred Contact */}
              <div>
                <label htmlFor="preferredContact" className="block text-sm font-medium text-nearBlack mb-2">
                  Preferred Contact Method
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-silver/60 px-3 py-2 focus:border-gold focus:outline-none"
                >
                  <option value="phone">Phone Call</option>
                  <option value="email">Email</option>
                  <option value="text">Text Message</option>
                </select>
              </div>

              {/* Appointment Type */}
              <div>
                <label htmlFor="appointmentType" className="block text-sm font-medium text-nearBlack mb-2">
                  Type of Appointment
                </label>
                <select
                  id="appointmentType"
                  name="appointmentType"
                  value={formData.appointmentType}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-silver/60 px-3 py-2 focus:border-gold focus:outline-none"
                >
                  <option value="consultation">New Patient Consultation</option>
                  <option value="cleaning">Regular Cleaning</option>
                  <option value="emergency">Emergency Care</option>
                  <option value="cosmetic">Cosmetic Consultation</option>
                  <option value="orthodontics">Orthodontic Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Insurance */}
              <div>
                <label htmlFor="insurance" className="block text-sm font-medium text-nearBlack mb-2">
                  Dental Insurance
                </label>
                <select
                  id="insurance"
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-silver/60 px-3 py-2 focus:border-gold focus:outline-none"
                >
                  <option value="none">No Insurance</option>
                  <option value="delta">Delta Dental</option>
                  <option value="metlife">MetLife</option>
                  <option value="aetna">Aetna</option>
                  <option value="cigna">Cigna</option>
                  <option value="other">Other Insurance</option>
                </select>
              </div>

              {/* Emergency Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emergency"
                  name="emergency"
                  checked={formData.emergency}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-gold focus:ring-gold border-silver/60 rounded"
                />
                <label htmlFor="emergency" className="ml-2 text-sm text-charcoal">
                  This is a dental emergency - please call immediately at (678) 773-7354
                </label>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-nearBlack mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Please describe your dental concerns, preferred appointment times, or any other information..."
                  className="w-full rounded-lg border border-silver/60 px-3 py-2 focus:border-gold focus:outline-none resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Request Appointment"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                  <div className="flex items-center">
                    <div className="text-green-600 mr-2">✓</div>
                    <p className="text-green-800 text-sm">
                      Thank you! We&apos;ve received your appointment request and will contact you within 24 hours to confirm your appointment.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                  <div className="flex items-center">
                    <div className="text-red-600 mr-2">✗</div>
                    <p className="text-red-800 text-sm">
                      Sorry, there was an error submitting your request. Please call us at (678) 773-7354 to schedule your appointment.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* OFFICE INFORMATION */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-nearBlack mb-4">Office Information</h2>
            </div>

            {/* Office Hours */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-nearBlack mb-4">Office Hours</h3>
              <div className="space-y-2">
                {officeHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-silver/40 last:border-b-0">
                    <span className="font-medium text-nearBlack">{schedule.day}</span>
                    <span className="text-charcoal">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Map */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-nearBlack mb-4">Location</h3>
              <div className="rounded-lg bg-white p-4 border border-silver/60 mb-4">
                <div className="font-medium text-nearBlack mb-1">Lux Dentistry</div>
                <div className="text-charcoal text-sm">
                  1155 Bluegrass Ct<br />
                  Alpharetta, GA 30004
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-silver/60">
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

            {/* Additional Information */}
            <div className="space-y-4">
              <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
                <h3 className="font-medium text-blue-900 mb-2">🚨 Dental Emergency?</h3>
                <p className="text-blue-800 text-sm">
                  If you have a dental emergency (severe pain, swelling, trauma), please call us immediately at (678) 773-7354. We provide 24/7 emergency care.
                </p>
              </div>

              <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4">
                <h3 className="font-medium text-yellow-900 mb-2">📋 New Patients Welcome</h3>
                <p className="text-yellow-800 text-sm">
                  New patients can download forms in advance from our New Patient page to save time during your first visit.
                </p>
              </div>

              <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                <h3 className="font-medium text-green-900 mb-2">💳 Payment Options</h3>
                <p className="text-green-800 text-sm">
                  We accept most insurance plans, offer flexible payment options, and provide CareCredit financing for your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Don&apos;t wait for dental issues to become emergencies. Contact us today for exceptional dental care.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:6787737354"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
            >
              Call Now: (678) 773-7354
            </a>
            <a
              href="mailto:info@luxdentistry.com"
              className="rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold transition hover:border-goldSoft hover:text-goldSoft"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-nearBlack/60 p-4"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute right-4 top-4 text-charcoal hover:text-nearBlack transition"
              aria-label="Close modal"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Success Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Success Message */}
            <div className="text-center">
              <h3 className="mb-3 text-2xl font-semibold text-nearBlack">
                Appointment Request Received!
              </h3>
              <p className="mb-2 text-base leading-7 text-charcoal">
                Thank you for contacting Lux Dentistry. We&apos;ve received your appointment request and will contact you within 24 hours to confirm your appointment.
              </p>
              <p className="mb-6 text-sm text-charcoal">
                A confirmation email has been sent to <span className="font-semibold text-nearBlack">{submittedEmail || "your email address"}</span>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
                >
                  Close
                </button>
                <Link
                  href="/"
                  className="rounded-lg border border-gold px-6 py-3 text-center text-sm font-semibold text-gold transition hover:border-goldSoft hover:text-goldSoft"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
