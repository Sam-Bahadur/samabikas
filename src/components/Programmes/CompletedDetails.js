import React from "react";

export default function CompletedDetails(props) {
  const {
    title,
    period,
    budget,
    supportedBy,
    objectives,
    outcomes,
  } = props.location.state;
  return (
    <div className="w-4/5 mx-auto my-4">
      <div className="grid grid-cols-2">
        <div>
          <div className="title text-mainblue font-bold text-3xl my-2">
            {title}
          </div>
          <div className="period text-xl">Period: {period}</div>
          <div className="period text-xl">Budget: {budget}</div>
          <div className="period text-xl">Supported By: {supportedBy}</div>
        </div>
        {/* <div>
          <img src="https://picsum.photos/400" />
        </div> */}
      </div>
      <div className="period text-xl font-bold my-4">
        Objectives<br></br> {}
        {objectives.map((obj) => (
          <li className="font-semibold">{obj.o}</li>
        ))}
      </div>
      <div className=" font-bold text-xl my-4">
        OutComes<br></br>
        <div className="font-medium text-base">{outcomes}</div>
      </div>
    </div>
  );
}
