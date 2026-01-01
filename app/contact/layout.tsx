import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book Appointment | Lux Dentistry",
  description: "Schedule your dental appointment at Lux Dentistry. Contact us by phone, email, or online form. Emergency dental care available 24/7.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
