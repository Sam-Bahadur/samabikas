import React from "react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-maingreen h-16 px-4 py-4">
      <div className="flex flex-wrap justify-between w-4/5 mx-auto">
        <div className="text-xs">Copyright © 2021 Samabikas Nepal</div>
        <div className="flex text-white">
          <span className="hover:text-mainblue duration-300 cursor-pointer text-2xl">
            <FaFacebookSquare />
          </span>
          <span className="hover:text-mainblue duration-300 cursor-pointer text-2xl">
            <AiFillYoutube />
          </span>
        </div>
        <div className="text-xs">
          Site Design by
          <span className="text-yellow-500 text-sm ml-1">
            <a href="https://www.mayanmedia.com.np" target="_blank">
              mayanmedia
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
