import React from "react";

function Tab(props) {
  return (
    <>
      <tr className="flex flex-col md:w-max md:mx-auto md:table-row border-t border-mainblue">
        <td className="border-r px-2 border-mainblue">{props.id}</td>
        <td className="border-r px-2 border-mainblue">{props.name}</td>
        <td className="border-r px-2 border-mainblue">{props.deg}</td>
        <td className="border-r px-2 border-mainblue">{props.gender}</td>
        <td className="border-r px-2 border-mainblue">{props.qualification}</td>
        <td className="border-r px-2 border-mainblue">{props.address}</td>
      </tr>
    </>
  );
}
export default function Governance() {
  return (
    <div className="my-4">
      <div className="text-mainblue font-semibold text-3xl">Governance</div>
      <h2>
        SAMABIKAS Nepal completed its 13th General Assembly on 29th July 2019
        and elected new Executive Board Members.
      </h2>
      <table className="md:table border-2 border-mainblue my-4 ">
        <tr className="hidden md:table-row border-2 border-mainblue">
          <th className="border-r border-mainblue">S.No.</th>
          <th className="border-r border-mainblue">Name</th>
          <th className="border-r border-mainblue">Designation</th>
          <th className="border-r border-mainblue">Gender</th>
          <th className="border-r border-mainblue">Qualification</th>
          <th className="border-r border-mainblue">Address</th>
        </tr>
        <Tab
          id={1}
          name={"Pashupati Kunwar"}
          deg={"Chairperson"}
          gender={"Female"}
          qualification={"Bachelors In Art (BA)"}
          address={"Chaurpati Rural Municipality-4, Achham"}
        />
        <Tab
          id={2}
          name={"Pawan Giri"}
          deg={"Vice-chairperson"}
          gender={"Female"}
          qualification={"Proficiency Certificate Level (PCL) "}
          address={"Sanfebagar Municipality- 4, Achham"}
        />
        <Tab
          id={3}
          name={"Dudhakala Bista"}
          deg={"Secretary"}
          gender={"Female"}
          qualification={"Proficiency Certificate Level (PCL)"}
          address={"Sanfebagar Municipality- 5, Achham"}
        />
        <Tab
          id={4}
          name={"Rupa Nepali"}
          deg={"Treasurer"}
          gender={"Female"}
          qualification={"Proficiency Certificate Level (PCL)"}
          address={"Sanfebagar Municipality- 1, Achham"}
        />
        <Tab
          id={5}
          name={"Satya Sawar"}
          deg={"member"}
          gender={"Female"}
          qualification={"Proficiency Certificate Level (PCL)"}
          address={"Sanfebagar Municipality-2, Achham"}
        />
        <Tab
          id={6}
          name={"Samundra Luhar"}
          deg={"member"}
          gender={"Female"}
          qualification={"Literate"}
          address={"Sanfebagar Municipality-4, Achham"}
        />
        <Tab
          id={7}
          name={"Maheswari BK"}
          deg={"member"}
          gender={"Female"}
          qualification={"School Leaving Certificate (SLC)"}
          address={"Sanfebagar Municipality-4, Achham"}
        />
        <Tab
          id={8}
          name={"Krishna Khadka"}
          deg={"member"}
          gender={"Female"}
          qualification={"School Leaving Certificate (SLC)"}
          address={"Mellekh Rural Municipality-6, Achham"}
        />
        <Tab
          id={9}
          name={"Yashuda Kumal"}
          deg={"member"}
          gender={"Female"}
          qualification={"School Leaving Certificate (SLC)"}
          address={"Sanfebagar Municipality-7, Achham"}
        />
      </table>
    </div>
  );
}
