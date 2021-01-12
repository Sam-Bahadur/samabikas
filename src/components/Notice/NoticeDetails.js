import React from "react";

export default function NoticeDetails(props) {
  return (
    <div className="my-8">
      <div className="font-semibold text-2xl text-mainblue">
        {props.location.state.title}
      </div>
      <div className="text-base">{props.location.state.date}</div>
      <div className="text-lg my-2">{props.location.state.data}</div>
    </div>
  );
}
