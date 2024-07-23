import React, { useRef } from "react";
import hero from "../assets/hero.jpg";
import HeroCard from "./HeroCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const headingRef = useRef();
  const paragraphRef = useRef();
  const buttonRef = useRef();
  const sectionRef = useRef();

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(headingRef.current, {
      y: 200,
      delay: 2,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(paragraphRef.current, {
      opacity: 0,
      delay: 1,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(buttonRef.current, {
      scale: 0,
      delay: 2.5,
      duration: 1,
      ease: "back.out(1.7)",
    });
  });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-cover bg-center flex items-center justify-left px-6 m-6 rounded-2xl relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div>
        <p
          ref={paragraphRef}
          className="sm:text-lg text-sm font-medium py-4 capitalize"
        >
          Elevate your travel journey
        </p>
        <h1
          ref={headingRef}
          className="sm:text-7xl text-6xl text-white font-semibold"
        >
          Experience <br />
          The Magic Of <br />
          Flight!
        </h1>
        <button
          ref={buttonRef}
          className="bg-blue-400 text-white px-4 py-3 text-xs rounded-xl my-6 hover:bg-blue-600"
        >
          <p>Book A Trip Now</p>
        </button>
      </div>
      <div className="absolute sm:right-0 sm:bottom-0 bottom-0">
        <HeroCard
          title={"Know More"}
          heading={"Awesome Places"}
          desc={"Discover The World One Adventure At a Time!"}
        />
      </div>
    </section>
  );
}
