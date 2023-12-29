import Header from "@/components/Header";
import Image from "next/image";
import HeroSection from "./Home/heroSection";
import VolunteerOpportunities from "./Home/volunteerOpportunities";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <VolunteerOpportunities />
    </div>
  );
}
