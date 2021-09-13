import React from "react";
import { successData } from "./successData";
import { useParams } from "react-router-dom";

export default function SuccessDetails() {
  let { id } = useParams();
  return (
    <div className="w-4/5 mx-auto ">
      <div className="md:text-2xl font-semibold text-sm ">
        {successData[id].title}
      </div>
      <p className="md:text-lg text-sm text-justify">
        {successData[id].description}
        {successData[id].image ? (
          <img
            className="w-2/5 mx-auto"
            src={successData[id].image}
            alt={successData[id].title}
          ></img>
        ) : null}
      </p>
    </div>
  );
}
