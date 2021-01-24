import React from "react";
import Partners from "../Partners/Partners";
import Aboutus from "./Aboutus/Aboutus";
import Accham from "./Accham/Accham";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import style from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={style.home} style={{ zIndex: "0" }}>
        <Hero />
      </div>
      <div className={style.home}>
        <Aboutus />
      </div>
      <Accham />
      <div className={style.home}>
        <Partners />
        <Contact />
      </div>
    </>
  );
}
