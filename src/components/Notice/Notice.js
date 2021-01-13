import React, { useState, useEffect } from "react";
import img from "../../assets/images/hero1.jpg";
import Button from "../common/Button/Button";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Notice() {
  const [notice, setnotice] = useState([]);
  // const [searchresult, setsearchresult] = useState([]);
  const [search, setsearch] = useState("");
  const [isloading, setisloading] = useState(true);

  const fetchnotice = async () => {
    const { data, status } = await axios
      .get
      // "https://jsonbox.io/box_95b8ffe4a992720adce0/notice"
      ();
    if (status == 200) {
      const result = data.filter((singlenotice) => {
        return singlenotice.title.toLowerCase().includes(search.toLowerCase());
      });
      setnotice(result);
      // setnotice(data);
      console.log(notice);
    }
    setisloading(false);
  };
  useEffect(() => {
    fetchnotice();
    // console.log(notice);
  }, [search]);

  if (isloading) {
    return <div className="text-center text-2xl mt-20">Loading... </div>;
  }

  return (
    <>
      <div className="my-4">
        <div className="flex align-middle">
          <div>
            <h2 className="text-mainblue font-semibold text-4xl inline">
              Notice Board
            </h2>
          </div>
          <div className="ml-auto text-xl">
            <input
              type="text"
              className="font-normal placeholder-maingreen border border-mainblue rounded-lg px-2 placeholder-opacity-70"
              value={search}
              placeholder="&#128269; search"
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>
        </div>
        {notice.map((note) => {
          return (
            <card className="bg-gray-100 grid grid-cols-4 my-2 p-4 gap-10">
              <div className="col-span-1">
                <img
                  src={img}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-start-2 col-span-3">
                <h1 className="text-mainblue font-medium text-2xl">
                  {note.title}
                </h1>
                <div className="my-2">{note.posted}</div>
                <div className="text-sm">
                  {note.details.substring(0, 80)}...
                </div>
                <div className="mt-2">
                  <Link
                    to={{
                      pathname: "/notice/details",
                      state: {
                        title: `${note.title}`,
                        date: `${note.posted}`,
                        data: `${note.details}`,
                      },
                    }}
                  >
                    <Button />
                  </Link>
                </div>
              </div>
            </card>
          );
        })}
      </div>
    </>
  );
}
