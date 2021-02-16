import React from "react";
import img from "../../../assets/images/person.png";
import dudhkala from "../../../assets/images/members/bod/dudhkala.jpg";
import krishna from "../../../assets/images/members/bod/krishna.jpg";
import pashupati from "../../../assets/images/members/bod/pashupati.jpg";
import rupa from "../../../assets/images/members/bod/rupa.jpg";
import satya from "../../../assets/images/members/bod/satya.jpg";

import Bishna from "../../../assets/images/members/staffs/Bishna.jpg";
import Margie from "../../../assets/images/members/staffs/Margie.jpg";
import Monika from "../../../assets/images/members/staffs/Monika.jpg";
import Pawan from "../../../assets/images/members/staffs/Pawan.jpg";
import Pipala from "../../../assets/images/members/staffs/Pipala.jpg";
import Srijana from "../../../assets/images/members/staffs/Srijana.jpg";

const bod = [];

export default function OurTeam() {
  return (
    <>
      <div className="our-team w-4/5 mx-auto">
        <div className="text-mainblue my-4 text-center text-4xl font-bold">
          Board Members
        </div>
        <div className="board flex flex-col justify-center">
          {bod.map((person) => {
            return (
              <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
                <div className="col-start-1 col-span-1 w-60 mx-auto">
                  <img src={pashupati} className="rounded-full w-40" />
                  <h4 className="font-bold px-4">
                    {/* Pashupati Kunwar */}
                    {person.name}
                  </h4>
                  <h4 className="font-bold px-4">
                    {/* Chairperson */}
                    {person.post}
                  </h4>
                </div>
                <div className="col-start-2 col-span-full">
                  {person.desc}
                  {/* Pashupati Kunwar is an activist, humanist and a feminist who has
              an extensive background in gender studies, human rights and
              menstrual awareness. She started her activism from early teen
              years where she herself protested against the abolition of
              Chhaupadi Tradition in rural parts of Achham. She has done
              tremendous work in sexual and reproductive health of women,
              child-marriage and gender violence. She is also an executive
              member (Deputy in charge of Far Western Province) of NGO
              Federation of Nepal. She holds a Masters Degree in Sociology from
              Tribhuvan University. She can be reached through
              pashupatikunwar@gmail.com */}
                </div>
              </div>
            );
          })}
          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img
                src={pashupati}
                className="rounded-full w-40 object-cover object-top h-40 "
              />
              <h4 className="font-bold px-4">Pashupati Kunwar</h4>
              <h4 className="font-bold px-4">Chairperson</h4>
            </div>
            <div className="col-start-2 col-span-full">
              Pashupati Kunwar is an activist, humanist and a feminist who has
              an extensive background in gender studies, human rights and
              menstrual awareness. She started her activism from early teen
              years where she herself protested against the abolition of
              Chhaupadi Tradition in rural parts of Achham. She has done
              tremendous work in sexual and reproductive health of women,
              child-marriage and gender violence. She is also an executive
              member (Deputy in charge of Far Western Province) of NGO
              Federation of Nepal. She holds a Masters Degree in Sociology from
              Tribhuvan University. She can be reached through
              pashupatikunwar@gmail.com
            </div>
          </div>
          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img
                src={satya}
                className="rounded-full w-40 object-cover object-top h-40"
              />
              <h4 className="font-bold px-4">Satya Swar</h4>
              <h4 className="font-bold px-4">Vice President</h4>
            </div>
            <div className="col-start-2 col-span-full">
              Satya Swar has more than a decade of experience in Social Work.
              She is also working in WAC Nepal and is a Chairperson of Sri
              Tripura Sundari Mahila Multipurpose Cooperative, Achham. She is
              also a member of Women's Right Forum, Sanfebagar, Achham. She
              holds a Bachelor's Degree in Education from Far Western
              University.
            </div>
          </div>
          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img
                src={dudhkala}
                className="rounded-full w-40 object-cover object-top h-40"
              />
              <h4 className="font-bold px-4">Dudhkala Bista</h4>
              <h4 className="font-bold px-4">General Secretary</h4>
            </div>
            <div className="col-start-2 col-span-full">
              Dudhkala Bista is project assistant at LAAC Nepal, Achham. She has
              experience of more than a decade in advocating for equal human
              rights. She is also an active member of Human Rights Protection
              Network, Achham.
            </div>
          </div>
          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img
                src={rupa}
                className="rounded-full w-40 object-cover object-top h-40"
              />
              <h4 className="font-bold px-4">Rupa Nepali</h4>
              <h4 className="font-bold px-4">Treasurer</h4>
            </div>
            <div className="col-start-2 col-span-full">
              Rupa Nepali is has more than a decade of experience in community
              and welfare works. She is also a teacher at Himalayan Secondary
              School, Achham. She holds a Bachelor's Degree in Education from
              Far Western University.
            </div>
          </div>
          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img
                src={img}
                className="rounded-full w-40 object-cover object-top h-40"
              />
              <h4 className="font-bold px-4">Basanti Bohora</h4>
              <h4 className="font-bold px-4">Member</h4>
            </div>
            <div className="col-start-2 col-span-full">
              Basanti Bohora has more than 8 years of experience. She is also a
              kindergarten teacher who has been teaching since a decade in Bal
              Bikash Kendra. She has trained many young adolescent girls on
              using the Menstrual Cup and provided period education in the
              schools of Turmakhad Rural Municipality. She is also a treasurer
              of Nawajiwan Bachat Tatha Rin Sahakari Sastha.
            </div>
          </div>
          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img
                src={img}
                className="rounded-full w-40 object-cover object-top h-40"
              />
              <h4 className="font-bold px-4">Maheshwori B.K.</h4>
              <h4 className="font-bold px-4">Member</h4>
            </div>
            <div className="col-start-2 col-span-full">
              Maheshwori B.K. has 7 years of experience. She believes that if
              women and girls get the opportunity to participate in society, we
              will progress in an advanced society.
            </div>
          </div>
          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img
                src={krishna}
                className="rounded-full w-40 object-cover object-top h-40"
              />
              <h4 className="font-bold px-4">Krishna Khadka</h4>
              <h4 className="font-bold px-4">Member</h4>
            </div>
            <div className="col-start-2 col-span-full">
              Krishna Khadka has 6 years of experience. During her period of
              activism she has been involved in rallies and campaigns against
              chhaupadi tradition. She has provided training regarding Menstrual
              Hygiene Management to adolescent girls in Achham. She likes to sew
              and knit during her free time.
            </div>
          </div>
          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img
                src={img}
                className="rounded-full w-40 object-cover object-top h-40"
              />
              <h4 className="font-bold px-4">Samundra Lohar</h4>
              <h4 className="font-bold px-4">Member</h4>
            </div>
            <div className="col-start-2 col-span-full">
              Samundra Lohar has 5 years of experience. She is a member of Dalit
              Sanjal, Achham.She has provided trainings to related to women
              empowerment. She has participated in rallies and campaigns against
              Chhaupadi and Child-Marriage.
            </div>
          </div>
          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img
                src={img}
                className="rounded-full w-40 object-cover object-top h-40"
              />
              <h4 className="font-bold px-4">Yashudha Kumal</h4>
              <h4 className="font-bold px-4">Member</h4>
            </div>
            <div className="col-start-2 col-span-full">
              Maheshwori B.K. has 7 years of experience. She believes that if
              women and girls get the opportunity to participate in society, we
              will progress in an advanced society.
            </div>
          </div>
        </div>
        <div className="text-mainblue my-4 text-center text-4xl font-bold">
          Staff Members
        </div>
        <div className="board flex flex-col justify-center">
          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img
                src={Margie}
                className="rounded-full w-40 object-cover object-top h-40"
              />
              <h4 className="font-bold px-4">Margie Mainali</h4>
              <h4 className="font-bold px-4">Project Advisor</h4>
            </div>
            <div className="col-start-2 col-span-full">
              Margie Mainali started her career as a Mental Health Counselor and
              later started teaching to University Students. She currently leads
              and guides the team to optimize the outcomes of the projects. She
              holds a Masters degree in Psychology degree from University of
              India. She can be reached through margiemainali@gmail.com
            </div>
          </div>
          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img src={Pawan} className="rounded-full w-40 object-top h-40" />
              <h4 className="font-bold px-4">Pawan Giri</h4>
              <h4 className="font-bold px-4">Programme Coordinator </h4>
            </div>
            <div className="col-start-2 col-span-full">
              Pawan Giri is working as a Programme Coordinator at SAMABIKAS
              Nepal. Prior to working here, she has worked with many NGOs in
              Achham. She can be reached through pawangiri0123@gmail.com
            </div>
          </div>

          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img
                src={Pipala}
                className="rounded-full w-40 object-cover object-top h-40"
              />
              <h4 className="font-bold px-4">Pipala Khadka</h4>
              <h4 className="font-bold px-4">Admin and Finance Assistant</h4>
            </div>
            <div className="col-start-2 col-span-full">
              Pipala Khadka has knowledge and experience of working in NGO
              sectors for the last 2 years. She has a Bachelor's Degree in
              Business Studies from Tribhuvan University. She can be reached
              through pipalakhadka@gmail.com
            </div>
          </div>
          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img
                src={Bishna}
                className="rounded-full w-40   object-top h-40"
              />
              <h4 className="font-bold px-4">Bishna Saud</h4>
              <h4 className="font-bold px-4">Field Supervisor</h4>
            </div>
            <div className="col-start-2 col-span-full">
              Bishna Saud as a field supervisor works in 3 Municipality of
              Achham. She aims to work as a change-marker in her community. She
              has seen how women and children lack opportunities and wants to
              make positive changes in her community.
            </div>
          </div>
          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img
                src={Monika}
                className="rounded-full w-40  object-top h-40"
              />
              <h4 className="font-bold px-4">Monika Bohora</h4>
              <h4 className="font-bold px-4">Social Mobilizer</h4>
            </div>
            <div className="col-start-2 col-span-full">
              Monika Bohora is a young and energetic member who is currently
              studying Bachelors in Health from Far-Western University.
            </div>
          </div>
          <div className="card p-4 mt-4 bg-gray-200 md:grid md:grid-cols-4">
            <div className="col-start-1 col-span-1 w-60 mx-auto">
              <img
                src={Srijana}
                className="rounded-full w-40 object-cover object-top h-40"
              />
              <h4 className="font-bold px-4">Srijana Kunwar</h4>
              <h4 className="font-bold px-4">Office Assistant </h4>
            </div>
            <div className="col-start-2 col-span-full">
              Srijana Kunwar joined SAMABIKAS Nepal in January 2021. She wants
              to be independent and enjoys her work. She makes sure that the
              whole office works in clean and hygienic space. She has great
              cooking skills.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
