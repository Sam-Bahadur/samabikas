import React from "react";
import "./Vision.scss";

export default function Vision() {
  return (
    <div className="diamond w-full md:w-4/5 mx-auto">
      <img className="watermark" alt="" />
      <div className="my-4">
        <div className="text-mainblue text-base md:text-2xl font-semibold">
          Vision, Mission, Goals and Objectives
        </div>
        <div className="">
          <h2 className=" text-sm md:text-xl text-maingreen mt-2 font-bold">
            Vision
          </h2>
          <h2 className="font-bold text-sm md:text-xl">
            "Create equal, social just and dignified society"
          </h2>
        </div>
        <h2 className=" text-sm md:text-xl text-maingreen mt-2">Missions</h2>
        <h2 className="text-sm md:text-xl">
          Empower, respect, create meaningful participation, capacity building,
          institutional development and policy advocacy of women, children,
          marginalized, differently able and neglected group and community.
        </h2>
        <h2 className=" text-sm md:text-xl text-maingreen mt-2">Goals</h2>
        <li className="text-sm md:text-xl">
          Preserving human rights of women, Dalit, children, differently able,
          marginalized and backward class.
        </li>
        <li className="text-sm md:text-xl">
          Contribute to localizing and execution of the motto of sustainable
          development goals that is "Leave no one behind"
        </li>
        <h2 className="text-sm md:text-xl text-maingreen mt-2">Objectives</h2>
        <ul className="text-sm md:text-xl">
          <li>
            Find out the major problems and issues associated with the women,
            Dalit, differently abled and children, who have been excluded in
            terms of socio- economic status, are victims of domestic violence
            and take initiative to solve the issues.{" "}
          </li>
          <li className="text-sm md:text-xl">
            {" "}
            Short- and long-term rehabilitation and facilitating access to
            justice for the survivors of gender-based violence and people
            affected by it.
          </li>
          <li>
            {" "}
            Provide social security to economic and social upliftment by
            developing entrepreneurship skills of women, minority, backward and
            at-risk groups.
          </li>
          <li>
            Exercise, structure and promote gender, children and adolescent
            friendly polices
          </li>
          <li>
            Involve, represent, and develop leadership roles of women in
            politics
          </li>
          <li>
            {" "}
            Work to assure women’s sexual and reproductive health and rights
          </li>
        </ul>
      </div>
    </div>
  );
}
