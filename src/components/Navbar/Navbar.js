import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [aboutUsClicked, setaboutUsClicked] = useState(false);
  const [partnershipClicked, setpartnershipClicked] = useState(false);
  const aboutUs = (
    <div
      className={style.aboutus}
      // className="z-50 absolute top-12 left-20 bg-mainblue p-4 cursor-pointer"
      onMouseEnter={() => setaboutUsClicked(true)}
      onMouseLeave={() => setaboutUsClicked(false)}
    >
      <Link to="/about/vision">
        <li>Vision, Mission, Goals and Objectives</li>
      </Link>
      <Link to="/about/governance">
        <li>Governance</li>
      </Link>
      <Link to="/about/whoarewe">
        <li>who are we?</li>
      </Link>
    </div>
  );

  const partnership = (
    <div
      className={style.aboutus}
      // className="z-50 absolute top-12 left-20 bg-mainblue p-4 cursor-pointer"
      onMouseEnter={() => setpartnershipClicked(true)}
      onMouseLeave={() => setpartnershipClicked(false)}
    >
      <Link to="/Partnership/NGOsa">
        <li>Partnership with NGOs</li>
      </Link>
      <Link to="/Partnership/INGOsa">
        <li>Partnership with INGOs</li>
      </Link>
      <Link to="/Partnership/gova">
        <li>Partnership with Government</li>
      </Link>
    </div>
  );
  return (
    <div className=" shadow-lg w-full bg-maingreen z-50 text-sm">
      <div className="h-auto list-none  lg:flex items-center mx-auto w-min text-lg font-semibold text-white capitalize">
        <Link to="/">
          <li className="mx-1 hover:bg-blue-800 w-max p-2 border-radi  self-center cursor-pointer border-black transition-colors duration-500 ease-in-out">
            home
          </li>
        </Link>
        <div className="relative">
          <li
            className={
              aboutUsClicked
                ? "mx-1 w-max p-2 bg-blue-800 border-radi  self-center cursor-pointer border-black transition-colors duration-500 ease-in-out"
                : "mx-1 w-max p-2 border-radi relative  self-center cursor-pointer border-black transition-colors duration-500 ease-in-out"
            }
            onMouseEnter={() => setaboutUsClicked(true)}
            onMouseLeave={() => setaboutUsClicked(false)}
          >
            About us
          </li>
          {aboutUsClicked ? aboutUs : null}
        </div>

        <li className="mx-1 w-max hover:bg-blue-800 p-2 border-radi self-center cursor-pointer border-black    transition-colors duration-500 ease-in-out">
          Programmes
        </li>
        <div className="relative">
          <li
            className={
              partnershipClicked
                ? "mx-1 w-max p-2 bg-blue-800 border-radi  self-center cursor-pointer border-black transition-colors duration-500 ease-in-out"
                : "mx-1 w-max p-2 border-radi relative  self-center cursor-pointer border-black transition-colors duration-500 ease-in-out"
            }
            onMouseEnter={() => setpartnershipClicked(true)}
            onMouseLeave={() => setpartnershipClicked(false)}
          >
            Partnerships
          </li>
          {partnershipClicked ? partnership : null}
        </div>
        <Link to="/notice">
          <li className="mx-1 w-max hover:bg-blue-800 p-2 border-radi self-center cursor-pointer border-black    transition-colors duration-500 ease-in-out">
            Notice Board
          </li>
        </Link>
        <Link to="/gallery">
          <li className="mx-1 w-max hover:bg-blue-800 p-2 border-radi self-center cursor-pointer border-black    transition-colors duration-500 ease-in-out">
            Photo Gallery
          </li>
        </Link>
        <Link to="/contact">
          <li className="mx-1 w-max hover:bg-blue-800 p-2 border-radi self-center cursor-pointer border-black    transition-colors duration-500 ease-in-out">
            Contact
          </li>
        </Link>
      </div>
    </div>
  );
}
