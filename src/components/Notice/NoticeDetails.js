import React, { useEffect } from "react";

export default function NoticeDetails(props) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="my-8">
      <div className="font-semibold text-2xl text-mainblue">
        {props.location.state.title}
      </div>
      <div className="text-base">{props.location.state.date.slice(0, 10)}</div>
      <hr className=""></hr>
      <div className="text-lg my-2">{props.location.state.data}</div>
    </div>
  );
}
