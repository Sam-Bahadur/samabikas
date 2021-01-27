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
          <img src={logo} className="w-20" />
        </div>
        <div>
          <span className="text-mainblue sm:text-base md:text-5xl font-bold">
            Samabikas
          </span>
          <span className="font-bold sm:text-base md:text-5xl ml-2 text-maingreen">
            Nepal
          </span>
          <h3 className="text-gray-600">For Equity, Equality and Justice</h3>
        </div>
      </div>
      <div className="self-center">
        <span className="text-gray-600">
          <AiFillPhone className="inline" />
          +097-625045 <FiMail className="inline ml-2" /> samabikas@gmail.com{" "}
          <AiFillFacebook className="inline ml-2 hover:text-mainblue duration-300 cursor-pointer text-2xl" />
          <AiFillYoutube className="inline ml-2 hover:text-mainblue duration-300 cursor-pointer text-2xl" />{" "}
        </span>
      </div>
    </div>
  );
}
