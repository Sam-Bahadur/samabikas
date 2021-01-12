import React from "react";
import img from "../../../assets/images/hero1.jpg";

const stories = [
  {
    title: "Girls Empowerment Project/Girls First Fund",
    desc: "Project Name: Girls Empowerment Project ",
    para: {
      para1: "Project Period: May, 2019 to April-2020",
      para2: "Program coverage: Sanfebagar Municipality an...",
    },
  },
  {
    title:
      "Protection of women’s dignity through abolition of “Chhaupadi” tradition in Achham District",
    desc:
      "Protection of women’s dignity through abolition of “Chhaupadi” tradition in Achham District",
    para: { para1: "Project Period: January 1- Dec...", para2: "" },
  },
  {
    title:
      "Implementing Support to GoN's Five Year National Strategy & Action Plan for Combating Gender Based Violence (GBV)",
    desc:
      "Implementing Support to GoN's Five Year National Strategy & Action Plan for Combating Gender Based Violence (GBV) Project Period...",
    para: { para1: "", para2: "" },
  },
];

const program = stories.map((story) => (
  <>
    <div className="text-mainblue mx-4 font-bold">{story.title}</div>
    <div className="mx-4">
      <p>{story.desc} </p>
      <p>{story.para.para1}</p>
      <p>{story.para.para2}</p>
      <button className="px-2 py-1 rounded-sm bg-maingreen my-4 text-white transition duration-200 hover:bg-green-900">
        Read More
      </button>
    </div>
  </>
));

export default function Programmes() {
  return (
    <div className="bg-gray-100">
      <div className="container w-4/5 mx-auto">
        <div className="sm:block md:flex justify-center">
          <div className="sm:w-full md:w-1/2 flex-auto mx-2">
            <div className="bg-white w-full p-2 my-2 mx-2">
              <img src={img} className="w-96" />
              <div className="text-mainblue">Who are We?</div>
              <div className="text-black mb-4">
                SAMABIKAS Nepal (literally meaning equity and development) is a
                right based organization established by gen...
              </div>
              <div className="my-3">
                <span className="px-2 py-1 cursor-pointer text-white rounded-sm bg-maingreen hover:bg-green-900">
                  Read More
                </span>
              </div>
            </div>
            <div>
              <div className="bg-white w-full p-2 my-2 mx-2">
                <img src={img} className="w-96" />
                <div className="text-mainblue">Governance</div>
                <div className="text-black mb-4">
                  SAMABIKAS Nepal completed its 13th General Assembly on 29th
                  July 2019 and elected new Executive Board Membe...
                </div>
                <div className="my-3">
                  <span className="px-2 py-1 cursor-pointer text-white rounded-sm bg-maingreen hover:bg-green-900">
                    Read More
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-1/2 flex-auto bg-white my-2 mx-2">
            <div className="text-maingreen m-2 font-bold text-3xl">
              Our Programs
            </div>
            {program}
          </div>
        </div>
      </div>
    </div>
  );
}
