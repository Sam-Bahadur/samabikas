import React from "react";
import { BsFillGearFill } from "react-icons/bs";

export default function UnderConstruction() {
  return (
    <>
      <div className="text-4xl font-bold text-center my-16">
        404! page not found
      </div>
      <div className="text-center">
        Please contact{" "}
        <span className="text-yellow-600 font-semibold">
          <a target="_blank" href="https://www.mayanmedia.com.np">
            Mayan media
          </a>
        </span>
      </div>
      <div className="w-max mx-auto my-8 text-8xl animate-spin duration-500">
        <BsFillGearFill />
      </div>
    </>
  );
}
