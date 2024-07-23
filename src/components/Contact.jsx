import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center px-4"
    >
      <div className="md:w-1/2 p-2">
        <h1 className="capitalize text-center md:text-left text-4xl md:text-7xl font-bold md:leading-snug ">
          Journey To the Skies made simple!
        </h1>
      </div>
      <div className="md:w-1/2 w-full ">
        <ContactForm />
      </div>
    </section>
  );
}
