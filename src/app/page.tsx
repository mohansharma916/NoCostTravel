import Header from "@/components/Header";
import Image from "next/image";
import HeroSection from "./Home/heroSection";
import VolunteerOpportunities from "./Home/volunteerOpportunities";
import CommunityBlogs from "./Home/CommunityBlogs";
import RecentVolunteers from "./Home/RecentVolunteers";
import { TravelAffordable } from "./Home/TravelAffordably";
import BecomeMember from "./home/become-a-member";
import { FAQ } from "./Home/FAQ";
import FooterComponent from "@/components/Footer";

import { Slide } from "./Home/Slide";

// import { FooterComponent } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <VolunteerOpportunities />
      <CommunityBlogs />
      <RecentVolunteers />
      {/* <Header /> */}
      <TravelAffordable />
      <BecomeMember />
      <FAQ />

      <FooterComponent />
      {/* <FooterComponent /> */}
    </div>
  );
}
