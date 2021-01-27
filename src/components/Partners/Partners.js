import React from "react";
import img from "../../assets/logo/logo.png";

export default function Partners() {
  return (
    <div>
      <h1 className="text-mainblue text-center text-3xl font-bold uppercase ">
        Partners
      </h1>
      <div className="flex justify-center">
        <img className="w-12 md:w-24 mx-1 " src={img} />
        <img className="w-12 md:w-24 mx-1" src={img} />
        <img className="w-12 md:w-24 mx-1" src={img} />
        <img className="w-12 md:w-24 mx-1" src={img} />
      </div>
    </div>
  );
}
