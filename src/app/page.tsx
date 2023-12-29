import Header from "@/components/Header";
import Image from "next/image";
import HeroSection from "./Home/heroSection";
import VolunteerOpportunities from "./Home/volunteerOpportunities";
import CommunityBlogs from "./Home/CommunityBlogs";
import RecentVolunteers from "./Home/RecentVolunteers";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <VolunteerOpportunities />
      <CommunityBlogs />
      <RecentVolunteers />
    </div>
  );
}
