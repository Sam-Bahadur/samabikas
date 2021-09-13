import React from "react";
import { Link } from "react-router-dom";
import { successData } from "./successData";

export default function Success() {
  return (
    <div className="w-4/5 mx-auto ">
      {successData.map((oneStory) => {
        return (
          <div className="md:text-2xl font-semibold text-sm ">
            <Link to={`/successtory/${oneStory.id}`}>
              <li className="hover:text-maingreen text-sm md:text-lg text-justify">
                {oneStory.title}
              </li>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
