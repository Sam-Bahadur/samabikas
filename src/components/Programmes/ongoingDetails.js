import React from "react";

export default function ongoingDetails(props) {
  const {
    title,
    period,
    budget,
    supportedBy,
    details,
    image,
  } = props.location.state;
  return (
    <div className="w-4/5 mx-auto my-4">
      <div
      // className="grid grid-cols-2"
      >
        <div>
          <div className="title text-mainblue font-bold text-base md:text-3xl my-2">
            {title}
          </div>
          <div className="period text-sm md:text-xl">Period: {period}</div>
          <div className="period text-sm md:text-xl">Budget: {budget}</div>
          <div className="period text-sm md:text-xl">
            Supported By: {supportedBy}
          </div>
        </div>
        <div>
          {/* <img className="max-h-52 object-scale-down" src={image} /> */}
        </div>
      </div>
      <img
        className="max-h-52 w-auto mx-auto my-4 border-4 border-black"
        src={image}
      />
      <div
        className="text-sm md:text-base text-justify"
        style={{ "white-space": "pre-line" }}
      >
        {details}
      </div>
    </div>
  );
}
