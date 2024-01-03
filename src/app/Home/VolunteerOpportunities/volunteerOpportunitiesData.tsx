import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BedIcon from "@mui/icons-material/Bed";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import MoreTimeIcon from "@mui/icons-material/MoreTime";

const volunteerOpportunitiesData = [
  {
    id: "Volunteer-In-Himachal",
    category: ["Travel as a Volunteer", "Recent"],
    staytype: "Homestay",
    location: "Manali, Himachal Pradesh",
    need: "Needs Help Urgently",
    icon: "/images/hero-1.jpeg",
    images: [
      "/images/hero-1.jpeg",
      "/images/hero-3.jpeg",
      "/images/hero-2.jpeg",
    ],
    title: "Volunteer In Himachal",
    detail:
      "Welcome to the our Resort, where luxury meets nature in the heart of the mountains. Our carefully designed... ",
    tags: ["Videographer", "Photographer", "+ More"],
    StayAtLeast: "1 Week/s",
    StayUpTo: "2 Week/s",
    WhatyouGet: [
      { icon: <BedIcon />, title: "Team Dorm" },
      { icon: <RestaurantIcon />, title: "2 Meals/Day" },
      { icon: <LocalTaxiIcon />, title: "Pick Up" },
      { icon: <DryCleaningIcon />, title: "Free Laundry" },
      { icon: <HomeOutlinedIcon />, title: "1 Days Off/Week" },
    ],
    WhatyouOffer: [
      { icon: <SportsHandballIcon />, title: "Your Skills" },
      { icon: <MoreTimeIcon />, title: "5 Hours/Day" },
    ],
    AboutExperience:
      "Welcome to the our Resort, where luxury meets nature in the heart of the mountains. Our carefully designed rooms offer a breathtaking view of the majestic mountains, providing a serene and rejuvenating experience for our guests. Each room is thoughtfully crafted to ensure comfort and convenience, making your stay truly memorable.",
    KnowYourHost: [
      {
        hosticon: "jjj",
        hostname: "Jacky Mahajan",
        hostdescription:
          "Hello Guys, I am travel freak guy. I love to meet new people, discuss new ideas and collaborate in order to exchange skills.         ",
      },
    ],
  },
  {
    id: "Volunteer-In-Kullu",
    category: ["Travel as a Volunteer", "Recent"],
    staytype: "Homestay",
    location: "Manali, Himachal Pradesh",
    need: "Needs Help Urgently",
    icon: "/images/hero-3.jpeg",
    images: [
      "/images/hero-1.jpeg",
      "/images/hero-3.jpeg",
      "/images/hero-2.jpeg",
    ],
    title: "Volunteer In Kullu",
    detail:
      "Welcome to the our Resort, where luxury meets nature in the heart of the mountains. Our carefully designed... ",
    tags: ["Videographer", "Photographer", "+ More"],
    StayAtLeast: "1 Week/s",
    StayUpTo: "2 Week/s",
    WhatyouGet: [
      { icon: <BedIcon />, title: "Team Dorm" },
      { icon: <RestaurantIcon />, title: "2 Meals/Day" },
      { icon: <LocalTaxiIcon />, title: "Pick Up" },
      { icon: <DryCleaningIcon />, title: "Free Laundry" },
      { icon: <HomeOutlinedIcon />, title: "1 Days Off/Week" },
    ],
    WhatyouOffer: [
      { icon: <SportsHandballIcon />, title: "Your Skills" },
      { icon: <MoreTimeIcon />, title: "5 Hours/Day" },
    ],
    AboutExperience:
      "Welcome to the our Resort, where luxury meets nature in the heart of the mountains. Our carefully designed rooms offer a breathtaking view of the majestic mountains, providing a serene and rejuvenating experience for our guests. Each room is thoughtfully crafted to ensure comfort and convenience, making your stay truly memorable.",
    KnowYourHost: [
      {
        hosticon: "jjj",
        hostname: "Jacky Mahajan",
        hostdescription:
          "Hello Guys, I am travel freak guy. I love to meet new people, discuss new ideas and collaborate in order to exchange skills.         ",
      },
    ],
  },
  {
    id: "3",
    location: "Himachal Pradesh",
    need: "Needs Help Urgently",
    icon: "/images/hero-2.jpeg",
    title: "Volunteer In Manali",
    detail:
      "Our property is located within the hearts of mountain. Manali is a high-altitude Himalayan resort town in... ",
    tags: ["Musician", "Videographer", "Community Engagement", "+ More"],
  },
  {
    id: "4",
    location: "Delhi",
    icon: "/images/hero-3.jpeg",
    title: "Volunteer In Kinnaur",
    detail:
      "Our Riverside Camps and Resorts situated in the heart of the Himalayan mountains offers contemporary... ",
    tags: ["Content Creator", "Videographer", "Musician", "+ More"],
  },
  {
    location: "Uttar Pradesh",
    need: "Needs Help Urgently",
    icon: "/images/hero-1.jpeg",
    title: "Volunteer In Rangareddy",
    detail:
      "Chevella is a village located in the outskirts of Hyderabad city (about 44kms from Mehdipatnam). The farm... ",
    tags: ["Content Creator", "Architect", "+ More"],
  },
  {
    location: "Uttrakhand",
    icon: "/images/hero-3.jpeg",
    title: "Volunteer In Almora",
    detail:
      "A hilltop & countryside homestay. Amazing sun rises and local Kumaon cuisine ",
    tags: ["Tour Guide", "Social Media Manager"],
  },
  {
    location: "Himachal Pradesh",
    need: "Needs Help Urgently",
    icon: "/images/hero-2.jpeg",
    title: "Volunteer In Manali",
    detail:
      "Our property is located within the hearts of mountain. Manali is a high-altitude Himalayan resort town in... ",
    tags: ["Musician", "Videographer", "Community Engagement", "+ More"],
  },
  {
    location: "Himachal Pradesh",
    need: "Needs Help Urgently",
    icon: "/images/hero-2.jpeg",
    title: "Volunteer In Manali",
    detail:
      "Our property is located within the hearts of mountain. Manali is a high-altitude Himalayan resort town in... ",
    tags: ["Musician", "Videographer", "Community Engagement", "+ More"],
  },
];

export default volunteerOpportunitiesData;
