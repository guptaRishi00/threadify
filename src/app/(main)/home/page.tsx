import CtaSection from "@/components/home/CtaSection";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import TravelSmarter from "@/components/home/TravelSmarter";
import WhyChoose from "@/components/home/WhyChoose";

type Props = {};

export default function Home({}: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <TravelSmarter />
      <HowItWorks />
      <Testimonials />
      <WhyChoose />
      <CtaSection />
    </main>
  );
}
