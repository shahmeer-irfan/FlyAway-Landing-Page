import React from "react";

import Card from "./Card";
import card01 from "../assets/card01.jpg";
import card02 from "../assets/card02.jpg";
import card03 from "../assets/card03.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Tour() {
  const cardItems = [
    {
      title: "Forest Wild Life",
      desc: "NRT, Indonesia",
      imgSrc: card01, 
    },
    {
      title: "Mountain Hiking",
      desc: "Himalaya, Nepal",
      imgSrc: card02,
    },
    {
      title: "Beach Camping",
      desc: "Goa, India",
      imgSrc: card03, 
    },
  ];

  return (
    <section id="tour" className="min-h-screen p-6 text-center mt-20">
      <h1 className="sm:text-6xl text-4xl font-semibold">
        Popular Destination
      </h1>
      <p className="sm:text-lg text-sm py-2">
        Unleash Your Wanderlust With SkyWings
      </p>
      <div>
        <Card cardItems={cardItems} />
      </div>
    </section>
  );
}
