import Header from "@/components/Header";
import Image from "next/image";
import HeroSection from "./Home/heroSection";
import VolunteerOpportunities from "./Home/volunteerOpportunities";
import CommunityBlogs from "./home/CommunityBlogs";
import RecentVolunteers from "./home/RecentVolunteers";
import { Slide } from "./home/Slide";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <VolunteerOpportunities />
      <CommunityBlogs />
      <Slide />
      <RecentVolunteers />
    </div>
  );
}
