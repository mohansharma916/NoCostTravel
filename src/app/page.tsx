import HeroSection from "./home/HeroSection";
import VolunteerOpportunities from "./home/VolunteerOpportunities/volunteerOpportunities";
import CommunityBlogs from "./home/CommunityBlogs";
import RecentVolunteers from "./home/RecentVolunteers";
import { TravelAffordable } from "./home/TravelAffordably";
import BecomeMember from "./home/BecomeMember";
import { FAQ } from "./home/FAQ";
import WhatWeOffer from "./home/WhatWeOffer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <VolunteerOpportunities />
      <WhatWeOffer />
      <CommunityBlogs />
      <RecentVolunteers />
      <TravelAffordable />
      <BecomeMember />
      <FAQ />
    </div>
  );
}
