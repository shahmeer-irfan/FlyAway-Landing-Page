import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["About", "Tour", "Contact"];
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
      gsap.fromTo(
        navItemsRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: "power3.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  };

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        navItemsRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  return (
    <nav className="relative flex justify-between px-4 items-center pt-4 bg-white">
      <h1 className="text-3xl font-bold flex items-center">
        <svg
          className="h-8 w-8 text-blue-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2 13l4 2 6-6 4 4 8-8M6 19l6-6 4 4 8-8"
          />
        </svg>
        FlyAway
      </h1>
      <ul className="hidden sm:flex space-x-8">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button className="hidden sm:block text-white bg-black text-xs px-4 py-3 rounded-xl">
        Book Tour
      </button>
      <button
        onClick={toggleMenu}
        className="sm:hidden text-black focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-14 left-0 right-0 bg-white shadow-lg z-10"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item, index) => (
              <li key={index} ref={(el) => (navItemsRef.current[index] = el)}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-lg font-semibold text-black hover:text-blue-500"
                  onClick={() => setIsOpen(false)} // Close menu on item click
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center">
            <button className="text-white bg-black text-xs px-4 py-3 m-4 rounded-xl text-center">
              Book Tour
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
