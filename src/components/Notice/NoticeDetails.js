import React, { useEffect } from "react";

export default function NoticeDetails(props) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="my-8 w-4/5 mx-auto">
      <div className="font-semibold text-base md:text-2xl text-mainblue">
        {props.location.state.title}
      </div>
      <div className="text-sm md:text-base">
        {props.location.state.date.slice(0, 14)}
      </div>
      <hr className=""></hr>
      <hr className=""></hr>
      <img
        alt={props.location.state.title}
        className="h-80 object-cover object-top mx-auto"
        src={props.location.state.image}
      />
      <div
        className=" text-xs md:text-lg my-2 text-justify"
        style={{ "white-space": "pre-line" }}
      >
        {props.location.state.data}
      </div>
    </div>
  );
}
