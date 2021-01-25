import React from "react";
import img from "../../../assets/images/person.png";

export default function OurTeam() {
  return (
    <div className="our-team">
      <div className="text-mainblue my-4 text-center text-4xl font-bold">
        Board Members
      </div>
      <div className="board flex justify-center">
        <div className="card ">
          <img src={img} />
          <div className="text-center">
            <h4>Pradeep K timsina</h4>
            <h4>Manager</h4>
          </div>
        </div>
        <div className="card ">
          <img src={img} />
          <div className="text-center">
            <h4>Pradeep K timsina</h4>
            <h4>Manager</h4>
          </div>
        </div>
        <div className="card ">
          <img src={img} />
          <div className="text-center">
            <h4>Pradeep K timsina</h4>
            <h4>Manager</h4>
          </div>
        </div>
      </div>
      <div className="text-mainblue my-4 text-center text-4xl font-bold">
        Other Staffs
      </div>
      <div className="board flex justify-center">
        <div className="card ">
          <img src={img} />
          <div className="text-center">
            <h4>Pradeep K timsina</h4>
            <h4>Not a Manager</h4>
          </div>
        </div>
        <div className="card ">
          <img src={img} />
          <div className="text-center">
            <h4>Pradeep K timsina</h4>
            <h4>Not a Manager</h4>
          </div>
        </div>
        <div className="card ">
          <img src={img} />
          <div className="text-center">
            <h4>Pradeep K timsina</h4>
            <h4>Not a Manager</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
