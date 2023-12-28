import Header from "@/components/Header";
import Image from "next/image";
import CommunityBlogs from "./home/CommunityBlogs";

export default function Home() {
  return (
    <div>
      <Header />
      <CommunityBlogs />
    </div>
  );
}
