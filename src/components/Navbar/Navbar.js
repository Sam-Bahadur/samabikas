import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export default function Navbar() {
  const [navbarClicked, setNavbarClicked] = useState(true);
  const [aboutUsClicked, setaboutUsClicked] = useState(false);
  const [programsClicked, setprogramsClicked] = useState(false);
  const [width, setWidth] = useState("");

  useEffect(() => {
    const w = window.innerWidth;
    setWidth(w);
    w > 768 ? setNavbarClicked(true) : setNavbarClicked(false);
  }, []);

  // function navbarMenuClicked() {
  //   window.innerWidth > 768 ? null : setNavbarClicked(false);
  // }

  const aboutUs = (
    <div
      className={style.aboutus}
      onMouseEnter={() => setaboutUsClicked(true)}
      onMouseLeave={() => setaboutUsClicked(false)}
    >
      <Link to="/about/vision">
        <li
          className="w-60 md:w-full bg-mainblue"
          onClick={() =>
            window.innerWidth > 768 ? null : setNavbarClicked(false)
          }
        >
          Vision, Mission, Goals and Objectives
        </li>
      </Link>
      <Link to="/about/ourteam">
        <li
          className="bg-mainblue"
          onClick={() =>
            window.innerWidth > 768 ? null : setNavbarClicked(false)
          }
        >
          Our Team
        </li>
      </Link>
    </div>
  );
  const programs = (
    <div
      className={style.aboutus}
      onMouseEnter={() => setprogramsClicked(true)}
      onMouseLeave={() => setprogramsClicked(false)}
    >
      <Link to="/programs/ongoing">
        <li
          className="bg-mainblue"
          onClick={() =>
            window.innerWidth > 768 ? null : setNavbarClicked(false)
          }
        >
          Ongoing Programs
        </li>
      </Link>
      <Link to="/programs/completed">
        <li
          className="bg-mainblue"
          onClick={() =>
            window.innerWidth > 768 ? null : setNavbarClicked(false)
          }
        >
          Completed Programs
        </li>
      </Link>
    </div>
  );

  return navbarClicked ? (
    <div className="navbar relative">
      {width < 768 ? (
        <div
          className="absolute top-6 left-4"
          onClick={() => setNavbarClicked(false)}
        >
          <div className="h-1 w-10 bg-white transform rotate-45 translate-y-px"></div>
          <div className="h-1 w-10 bg-white transform -rotate-45"></div>
        </div>
      ) : null}
      <div className="shadow-lg w-full bg-maingreen z-50 h-18 text-sm pb-2 md:pb-0 ">
        <div className="h-full list-none  lg:flex items-center mx-auto w-min text-lg font-semibold text-white capitalize">
          <Link to="/">
            <li
              className="  hover:bg-mainblue w-max p-3 py-5 border-radi self-center cursor-pointer md:border-gray-400 md:border-r border-opacity-40  transition-colors duration-500 ease-in-out"
              onClick={() =>
                window.innerWidth > 768 ? null : setNavbarClicked(false)
              }
            >
              home
            </li>
          </Link>
          <div className="relative">
            <li
              className={
                aboutUsClicked
                  ? " w-max p-3 py-5 bg-mainblue border-radi  self-center cursor-pointer md:border-gray-400 md:border-r border-opacity-40  transition-colors duration-500 ease-in-out"
                  : " w-max p-3 py-5 border-radi relative  self-center cursor-pointer md:border-gray-400 md:border-r border-opacity-40  transition-colors duration-500 ease-in-out"
              }
              onMouseEnter={() => setaboutUsClicked(true)}
              onMouseLeave={() => setaboutUsClicked(false)}
            >
              About us
              {aboutUsClicked ? (
                <BiChevronUp className="inline" />
              ) : (
                <BiChevronDown className="inline" />
              )}
            </li>
            {aboutUsClicked ? aboutUs : null}
          </div>
          <div className="relative">
            <li
              className={
                programsClicked
                  ? " w-max p-3 py-5 bg-mainblue border-radi  self-center cursor-pointer md:border-gray-400 md:border-r border-opacity-40  transition-colors duration-500 ease-in-out"
                  : " w-max p-3 py-5 border-radi relative  self-center cursor-pointer md:border-gray-400 md:border-r border-opacity-40  transition-colors duration-500 ease-in-out"
              }
              onMouseEnter={() => setprogramsClicked(true)}
              onMouseLeave={() => setprogramsClicked(false)}
            >
              Programmes
              {programsClicked ? (
                <BiChevronUp className="inline" />
              ) : (
                <BiChevronDown className="inline" />
              )}
            </li>
            {programsClicked ? programs : null}
          </div>
          <Link to="/notice">
            <li
              className="  w-max hover:bg-mainblue p-3 py-5 border-radi self-center cursor-pointer md:border-gray-400 md:border-r border-opacity-40    transition-colors duration-500 ease-in-out"
              onClick={() =>
                window.innerWidth > 768 ? null : setNavbarClicked(false)
              }
            >
              Latest Activities
            </li>
          </Link>
          <Link to="/gallery">
            <li
              className="  w-max hover:bg-mainblue p-3 py-5 border-radi self-center cursor-pointer md:border-gray-400 md:border-r border-opacity-40    transition-colors duration-500 ease-in-out"
              onClick={() =>
                window.innerWidth > 768 ? null : setNavbarClicked(false)
              }
            >
              Gallery
            </li>
          </Link>
          <Link to="/contact">
            <li
              className="  w-max hover:bg-mainblue p-3 py-5 border-radi self-center cursor-pointer md:border-gray-400 md:border-r border-opacity-40  transition-colors duration-500 ease-in-out"
              onClick={() =>
                window.innerWidth > 768 ? null : setNavbarClicked(false)
              }
            >
              Contact
            </li>
          </Link>
          <Link to="/donate">
            <li
              className=" md:absolute md:top-2 md:right-2 w-max bg-mainblue rounded-lg hover:bg-mainblue p-3 ml-2 border-radi self-center cursor-pointer md:border-gray-400 md:    transition-colors duration-500 ease-in-out"
              onClick={() =>
                window.innerWidth > 768 ? null : setNavbarClicked(false)
              }
            >
              Donate
            </li>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-maingreen p-4" onClick={() => setNavbarClicked(true)}>
      <div className="w-10 h-1 bg-white"></div>
      <div className="w-10 h-1 bg-white mt-1"></div>
      <div className="w-10 h-1 bg-white mt-1"></div>
    </div>
  );
}
