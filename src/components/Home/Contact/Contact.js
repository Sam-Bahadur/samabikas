import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <div>
      <h1 className="text-mainblue text-center font-bold text-3xl my-8">
        Contact Information
      </h1>
      <div className="flex flex-wrap">
        <div className="flex-1 text-5xl text-mainblue text-center mx-4">
          <div className="w-full h-px  bg-maingreen"></div>
          <div className="w-max mx-auto">
            <HiLocationMarker />
          </div>
          <div className="text-black text-base">
            SAMABIKAS Nepal<br></br>
            Head Office: Sanfebagar Municipality Ward no 4, Achham <br></br>{" "}
            Contact Office: Dhobighat, Lalitpur-03,Lalitpur
          </div>
        </div>
        <div className="flex-1 text-5xl text-mainblue text-center mx-4">
          <div className="w-full h-px  bg-maingreen"></div>
          <div className="w-max mx-auto mt-2">
            <FaPhoneAlt />
          </div>
          <div className="text-black text-base">
            Phone: +977 097-625045<br></br>
            Cell: 977 - 9858421973
          </div>
        </div>
        <div className="flex-1 text-5xl text-mainblue text-center mx-4">
          <div className="w-full h-px  bg-maingreen"></div>
          <div className="w-max mx-auto">
            <FiMail />
          </div>
          <div className="text-black text-base">
            samabikas@gmail.com<br></br>
            pashupatikunwar@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
