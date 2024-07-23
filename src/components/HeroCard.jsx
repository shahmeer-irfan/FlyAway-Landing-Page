import React from "react";
import arrowRightUpFill from "../assets/arrow-right-up-fill.png"; // Adjust the path as needed

export default function HeroCard({ title, heading, desc }) {
  return (
    <section className="bg-slate-200 rounded-xl py-8 px-4 mx-2 my-2 shadow-lg sm:block hidden ">
      <button className="font-semibold text-lg flex hover:border-blue-400 rounded-lg mx-auto px-4 py-2 duration-500 border solid">
        {title}{" "}
        <img
          src={arrowRightUpFill}
          alt="Arrow Right Up"
          className="w-5 h-5 "
        />
      </button>

      <h2 className="text-sm pt-2">{heading}</h2>
      <p className="text-xs">{desc}</p>
    </section>
  );
}
