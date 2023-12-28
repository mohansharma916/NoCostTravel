import Header from "@/components/Header";
import Image from "next/image";
import CommunityBlogs from "./home/CommunityBlogs";
import RecentVolunteers from "./home/RecentVolunteers";

export default function Home() {
  return (
    <div>
      <Header />
      <CommunityBlogs />
      <RecentVolunteers />
    </div>
  );
}
