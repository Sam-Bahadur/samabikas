import React, { useEffect, useState } from "react";
import Partners from "../Partners/Partners";
import Aboutus from "./Aboutus/Aboutus";
import Accham from "./Accham/Accham";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="md:w-4/5 mx-auto">
        <Aboutus />
        <Accham />
        <Partners />
        <Contact />
      </div>
    </>
  );
}
