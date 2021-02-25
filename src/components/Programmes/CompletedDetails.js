import React from "react";

export default function CompletedDetails(props) {
  const {
    title,
    period,
    budget,
    supportedBy,
    objectives,
    outcomes,
    image,
  } = props.location.state;
  return (
    <div className="w-4/5 mx-auto my-4">
      <div className="grid grid-cols-1">
        <div>
          <div className="title text-mainblue font-bold md:text-3xl text-lg my-2">
            {title}
          </div>
          <div className="period md:text-xl text-sm font-bold">
            Period: {period}
          </div>
          <div className="period md:text-xl text-sm font-bold">
            Budget: {budget}
          </div>
          <div className="period md:text-xl text-sm font-bold">
            Supported By: {supportedBy}
          </div>
        </div>
        <div>
          <img src={image} className="mx-auto" />
        </div>
      </div>
      <div className="period md:text-xl text-base font-bold my-4">
        Objectives<br></br>
        {objectives.map((obj) => (
          <li className="font-semibold md:text-lg text-sm">{obj.o}</li>
        ))}
      </div>
      <div className=" font-bold md:text-xl text-base my-4">
        OutComes<br></br>
        <div className="font-medium md:text-base text-sm">{outcomes}</div>
      </div>
    </div>
  );
}
