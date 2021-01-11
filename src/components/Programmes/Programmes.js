import React from "react";

const SingleProgram = (props) => {
  return (
    <div>
      <div className="text-mainblue font-bold text-3xl">{props.title}</div>
      <div>{props.desc}</div>
      <div>Project Period: {props.duration}</div>
      <div>Programme coverage: {props.coverage}</div>
      <div>Project budget: {props.budget}</div>
      <div>Supported by: {props.support}</div>
      <div className="font-extrabold my-4 text-xl">
        Objectives/ activities of the project:
      </div>
      <>
        <li>{props.objectives[0].a}</li>
        <li>{props.objectives[1].a}</li>
        <li>{props.objectives[2].a}</li>
        {/* <li>{obj.b}</li>
        <li>{obj.c}</li> */}
      </>
      {/* {props.objectives.map((obj) => (
      ))} */}
      {/* <li>Abolishing the inhuman practices of Chhaupadi</li>
      <li>
        Improvement in the health condition of females of reproductive-health
        age group
      </li>
      <li>
        Establishment of a permanent vigilance structure of the communities and
        local governments to safeguard the women and young girls from all sorts
        of discrimination specifically during menstruation */}
      {/* </li> */}
    </div>
  );
};

export default function Programmes() {
  return (
    <div className="my-4">
      <SingleProgram
        title={
          "Protection of women’s dignity through abolition of “Chhaupadi” tradition  in Achham District"
        }
        desc={
          "Protection of women’s dignity through abolition of “Chhaupadi” tradition in Achham District"
        }
        duration={"January 1- December 31, 2012"}
        coverage={
          "Bhageshwor, Budakot, Mastamandu, Nandegada and Payal VDCs of Achham District."
        }
        budget={"Rs. 3,360647.00"}
        support={
          "Enabling State Programme/ Rights, Democracy and Inclusion Fund (ESP/RDIF), Kathmandu"
        }
        objectives={[
          { a: "Abolishing the inhuman practices of Chhaupadi" },
          {
            a:
              "Improvement in the health condition of females of reproductive-health age group",
          },
          {
            a:
              "Establishment of a permanent vigilance structure of the communities and local governments to safeguard the women and young girls from all sorts of discrimination specifically during menstruation",
          },
        ]}
      />
    </div>
  );
}
