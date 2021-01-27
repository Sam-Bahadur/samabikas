import React from "react";
import "./Ongoing.scss";

export default function Completed() {
  return (
    <div className="programs my-4">
      <div className="text-center text-4xl text-mainblue font-bold">
        Completed Projects
      </div>
      <div className="ongoing">
        <li>Completed Project 1</li>
        <li>Completed Project 2</li>
        <li>Completed Project 3</li>
      </div>
    </div>
  );
}
