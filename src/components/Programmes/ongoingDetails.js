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
      </div>
      <div className="md:grid md:grid-cols-3 md:grid-rows-1 my-4 gap-4">
        <div className="md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-full mx-auto my-4 ">
          {image.map((im) => (
            <img className="my-1" src={im} />
          ))}
        </div>
        <div
          className="md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-full text-sm md:text-base text-justify"
          style={{ "white-space": "pre-line" }}
        >
          {details}
        </div>
      </div>
    </div>
  );
}
