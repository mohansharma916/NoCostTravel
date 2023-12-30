import Header from "@/components/Header";
import Image from "next/image";
import HeroSection from "./Home/heroSection";
import VolunteerOpportunities from "./Home/volunteerOpportunities";
import CommunityBlogs from "./home/CommunityBlogs";
import RecentVolunteers from "./home/RecentVolunteers";
import { Slide } from "./home/Slide";
import { TravelAffordable } from "./Home/TravelAffordably";
import { FAQ } from "./Home/FAQ";
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
      <FAQ />
      {/* <FooterComponent /> */}
    </div>
  );
}
