// import axios from "axios";
import React, { useState, useEffect } from "react";

const people = [
  {
    name: "James\nsam",
    age: 31,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "Paul",
    age: 65,
  },
  {
    name: "Ringo",
    age: 49,
  },
  {
    name: "George",
    age: 34,
  },
  {
    name: "George",
    age: 24,
  },
  {
    name: "George",
    age: 14,
  },
  {
    name: "George",
    age: 4,
  },
  {
    name: "George",
    age: 74,
  },
  {
    name: "George",
    age: 84,
  },
];

export default function Test() {
  // const [rangeone, setrangeone] = useState(0);
  // const [rangetwo, setrangetwo] = useState(100);
  // const [result, setresult] = useState([]);
  // useEffect(() => {
  //   const res = people.filter((person) => {
  //     return person.age >= rangeone && person.age <= rangetwo;
  //   });
  //   setresult(res);
  //   console.log(res);
  // }, [rangeone, rangetwo]);
  return (
    <div>
      enter the search range <br></br>
      {/* <input
        type="number"
        className="font-normal placeholder-maingreen border border-mainblue rounded-lg px-2 m-4 w-20"
        value={rangeone}
        placeholder="range 1"
        onChange={(e) => setrangeone(e.target.value)}
      />
      -
      <input
        type="number"
        className="font-normal placeholder-maingreen border border-mainblue rounded-lg px-2 m-4 w-20"
        value={rangetwo}
        placeholder="range 2"
        onChange={(e) => setrangetwo(e.target.value)}
      /> */}
      {people.map((person) => {
        return (
          <div className="bg-mainblue m-4 px-4 py-2 max-w-full rounded-3xl">
            <div>{person.name}</div>
            <div>{person.age}</div>
          </div>
        );
      })}
    </div>
  );
}
