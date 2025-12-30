import EmergencyCTA from "@/components/home/EmergencyCTA";
import HeroVideoSlider from "@/components/home/HeroVideoSlider";
import InsuranceAndPayments from "@/components/home/InsuranceAndPayments";
import BeforeAfterCarousel from "@/components/home/BeforeAfterCarousel";
import LocationContact from "@/components/home/LocationContact";
import MeetTheDoctor from "@/components/home/MeetTheDoctor";
import ServicesOverview from "@/components/home/ServicesOverview";
import Testimonials from "@/components/home/Testimonials";
import TrustBar from "@/components/home/TrustBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <HeroVideoSlider />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <MeetTheDoctor />
      <BeforeAfterCarousel />
      <InsuranceAndPayments />
      <Testimonials />
      <EmergencyCTA />
      <LocationContact />
    </main>
  );
}
