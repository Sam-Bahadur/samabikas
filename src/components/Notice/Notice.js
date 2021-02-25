import React, { useState, useEffect } from "react";
import notice1 from "../../assets/images/notice/notice1.jpg";
import notice2 from "../../assets/images/notice/notice2.jpg";
import Button from "../common/Button/Button";
import axios from "axios";
import { Link } from "react-router-dom";

const noticeList = [
  {
    title:
      'SAMABIKAS Nepal Awarded by "With and For Girls" 2019 Award in London, UK',
    date: "Mar 10, 2020",
    description:
      "SAMABIKAS Nepal awarded from the With and for Girls Awards 2019. Ms Pashupatik Kunwar, Chairperson of SAMABIKAS Nepal and Ms Shital BK, Chairperson of Baijanath Girsl Group participated in the Awards Ceremony in London, UK in the first week fo March 2020. The SAMABIKAS, the recipient of 2019 With and For Girls Award, selected from amongst 170 organizations across Europe & Central Asia, Asia Pacific, Sub-Saharan Africa, Americas & the Caribbean and North African and the Middle-East. The Award was the recognition of the work carried out by SAMABIKAS in Nepal.     ",
    image: notice1,
  },
  {
    title:
      "Webinar Organized by SAMABIKAS Nepal on the topic Rishi Panchami and Dignified Menstruation",
    date: "May 19, 2020",
    description: `Let’s end all the discrimination against Menstruation,  and build equal society”SAMABIKAS Nepal \n\n is an NGO working in Chhaupadi sector since the last 10 years and has been successful in dismantling the Chhaupadi huts under the support of many local, national, and international organizations.\n\n The objective of the webinar served both to dismantle the ideologies regarding women as untouchables during the process of menstruation and to receive and gather feedback on the activities and improvements on future works.\n\n The webinar- “Debate on Rishi Panchami and Dignified Menstruation” was held on 19th May 2020, 12:00pm to 2:00 pm, Kathmandu (GMT +5:45). The content of the webinar was based on the following objective: \n     1.      Discussion related to the discrimination of fasting during Teej and Panchami and the role of concerned authorities for Dignified menstruation\n     2.      Follow up on the ongoing activities to end Chhaupadi hut tradition.\n     3.      COVID-19 and its impact and challenges on Dignified Menstruation.\n     4.      Discussion on national and international commitment to make change after declaration of Dignified Menstruation day on December 8.\n     The webinar was attended by 55 participants. Among them, there were 2 hosts and 10 presenters. The program was hosted by Pashupati Kunwar, Chairperson of SAMABIKAS Nepal and welcomed by Dudhkala Bista, Secretary of SAMABIKAS Nepal. The webinar allowed open space for other participants to talk about Dignified Menstruation, ask questions and a chat-based feedback collection from all participants. \n\n      Evaluation on webinar\n\n     Generally, participants received the webinar positively and appreciated the practical examples provided by the presentations. In this context, another important issue brought up by several participants is the need for indicators and tools to measure the impacts of interventions against the Chhaupadi tradition. The religious views addressed the misconception of people and facilitated efforts towards the realization of the rights of women and how the religious texts have favored women for her purity and strength. Furthermore, access to safe and dignified menstruation is a fundamental need for women and girls. Meeting the hygiene needs of all adolescent girls and women in all settings is enables human rights, dignity, and public health. We should work to improve girls’ and women’s menstrual health and hygiene in four areas: social support, knowledge and skills, facilities and services, and access to absorbent materials and supportive supplies\n\n     `,
    image: notice2,
  },
];

export default function Notice() {
  const [notice, setnotice] = useState([]);
  // const [searchresult, setsearchresult] = useState([]);
  const [search, setsearch] = useState("");
  const [isloading, setisloading] = useState(false);
  console.log(noticeList[0].description);
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
      // setnotice(result);
      // setnotice(data);
      console.log(result);
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
      <div className="my-4 w-4/5 mx-auto">
        <div className="flex align-middle flex-wrap">
          <h2 className="text-mainblue font-semibold text-lg md:text-4xl inline w-max mx-auto">
            Latest Activities
          </h2>

          {/* <div className="md:ml-auto text-xl">
            <input
              type="text"
              className="font-normal placeholder-maingreen border border-mainblue rounded-lg px-2 placeholder-opacity-70"
              value={search}
              placeholder="&#128269; search"
              onChange={(e) => setsearch(e.target.value)}
            />
          </div> */}
        </div>
        {noticeList.map((note) => {
          return (
            <card className="bg-gray-100 grid my-2 p-4 gap-10 md:grid md:grid-cols-2 md:grid-rows-1 rounded-lg">
              <div className="">
                <img
                  src={note.image}
                  className="mx-auto"
                  style={{
                    width: "",
                    height: "14rem",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="">
                <h1 className="text-mainblue font-medium text-base md:text-2xl">
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
                        image: `${note.image}`,
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
