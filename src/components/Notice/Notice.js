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
    const { data, status } = await axios.get(
      // "https://jsonbox.io/box_95b8ffe4a992720adce0/notice"
      // "http://localhost:3001/api/posts"
      "https://blooming-inlet-34308.herokuapp.com/api/posts"
    );
    if (status == 200) {
      const result = data.filter((singlenotice) => {
        return singlenotice.title.toLowerCase().includes(search.toLowerCase());
      });
      setnotice(result);
      // setnotice(data);
      console.log(result);
    }
    setisloading(false);
  };
  useEffect(() => {
    fetchnotice();
    console.log(notice);
  }, [search]);

  if (isloading) {
    return <div className="text-center text-2xl mt-20">Loading... </div>;
  }

  return (
    <>
      <div className="my-4 w-4/5 mx-auto">
        <div className="flex align-middle flex-wrap">
          <div>
            <h2 className="text-mainblue font-semibold text-4xl inline">
              Notice Board
            </h2>
          </div>
          <div className="md:ml-auto text-xl">
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
            <card className="bg-gray-100 grid my-2 p-4 gap-10 md:grid md:grid-cols-2 md:grid-rows-1 rounded-lg">
              <div className="">
                <img
                  src={img}
                  style={{
                    width: "",
                    height: "14rem",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="">
                <h1 className="text-mainblue font-medium text-2xl">
                  {note.title}
                </h1>
                <div className="my-2">{note.date.slice(0, 10)}</div>
                <div className="text-sm">
                  {note.description.substring(0, 280)}...
                </div>
                <div className="mt-2">
                  <Link
                    to={{
                      pathname: "/notice/details",
                      state: {
                        title: `${note.title}`,
                        date: `${note.date}`,
                        data: `${note.description}`,
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
