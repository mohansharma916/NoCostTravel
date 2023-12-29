import Header from "@/components/Header";
import Image from "next/image";
import { TravelAffordable } from "./Home/TravelAffordably";
import { FAQ } from "./Home/FAQ";
// import { FooterComponent } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <TravelAffordable />
      <FAQ />
      {/* <FooterComponent /> */}
    </div>
  );
}
