import React from "react";
import {Hero, NavBar, Contact, Tour} from "./components";


export default function App() {
  return (
    <>
      <NavBar />
      <main id="about" className="min-h-screen flex flex-col  ">
        <Hero />
        <Tour />
        <Contact/>
      </main>
    </>
  );
  
}
