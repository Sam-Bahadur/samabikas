import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import logo from "../../../assets/logo/logo.png";

export default function NavbarTwo() {
  return (
    <div className="flex flex-wrap justify-between my-2">
      <div className="flex justify-start items-center">
        <div className="m-1">
          <img src={logo} className="w-11 md:w-20" />
        </div>
        <div>
          <span className="text-mainblue sm:text-base md:text-5xl font-bold">
            Samabikas
          </span>
          <span className="font-bold sm:text-base md:text-5xl ml-2 text-maingreen">
            Nepal
          </span>
          <h3 className="text-gray-600 text-sm md:text-lg">
            For Equity, Equality and Justice
          </h3>
        </div>
      </div>
      <div className="self-center text-sm md:text-lg">
        <span className="text-gray-600">
          <AiFillPhone className="inline" />
          +097-625045 <FiMail className="inline ml-2" /> samabikas@gmail.com{" "}
          <a href="https://www.facebook.com/samabikas/" target="_blank">
            <AiFillFacebook className="inline ml-2 hover:text-mainblue duration-300 cursor-pointer md:text-2xl" />
          </a>
          <a href="#" target="_blank">
            <AiFillYoutube className="inline ml-2 hover:text-mainblue duration-300 cursor-pointer md:text-2xl" />{" "}
          </a>
        </span>
      </div>
    </div>
  );
}
