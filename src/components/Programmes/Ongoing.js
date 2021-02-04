import React from "react";
import { Link } from "react-router-dom";
import "./Ongoing.scss";

export default function Ongoing() {
  return (
    <div className="programs my-4 w-4/5 mx-auto">
      <div className="text-center text-4xl text-mainblue font-bold">
        Ongoing Projects
      </div>
      <div className="ongoing">
        <Link to="ongoing/details">
          <li>Ongoing Project 1</li>
        </Link>
        <Link to="ongoing/details">
          <li>Ongoing Project 2</li>
        </Link>
        <Link to="ongoing/details">
          <li>Ongoing Project 3</li>
        </Link>
      </div>
    </div>
  );
}
