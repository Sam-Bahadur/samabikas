import React, { useState } from "react";
import Iframe from "react-iframe";
import "./Contact.scss";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="w-4/5 mx-auto">
      <div className="h-px w-full mt-4"></div>
      <div className="text-mainblue mt-4 font-bold md:text-4xl">
        Contact Us
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  my-4 p-4">
          <form className="text-2xl">
            <div className="my-4 grid grid-cols-2">
              <label className="text-black text-xs md:text-base ">
                Name* :
              </label>
              <input
                className=" text-xs md:text-base  ml-2 px-2 text-black  rounded-sm  border border-gray-200"
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="my-4 grid grid-cols-2">
              <label className="text-black text-xs md:text-base ">
                Email* :
              </label>
              <input
                className=" text-xs md:text-base  ml-2 px-2 text-black  rounded-sm  border border-gray-200"
                type="email"
                placeholder="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-4 grid grid-cols-2">
              <label className="text-black text-xs md:text-base ">
                Phone :
              </label>
              <input
                className=" text-xs md:text-base  ml-2 px-2 text-black  rounded-sm  border border-gray-200"
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="my-4 grid grid-cols-2">
              <label className="text-black text-xs md:text-base ">
                Message* :
              </label>
              <div className="grid-rows-2">
                <textarea
                  className=" text-xs md:text-base  ml-2  px-2 text-black  rounded-sm  border border-gray-200 h-40 w-full  "
                  placeholder="your message here"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div className="my-2 grid-cols-1 md:grid md:grid-cols-3">
                  <p className="my-2 md:my-0 cursor-pointer px-2 py-0 w-max font-normal mx-auto rounded-sm bg-blue-300 hover:bg-blue-700 hover:text-white duration-500 text-xs md:text-lg">
                    Send
                  </p>
                  <p
                    className="my-2 md:my-0 cursor-pointer px-2 py-0 w-max font-normal mx-auto rounded-sm bg-blue-300 hover:bg-blue-700 hover:text-white duration-500 text-xs md:text-lg"
                    onClick={() => {
                      setName("");
                      setPhone("");
                      setEmail("");
                      setMessage("");
                    }}
                  >
                    Reset
                  </p>
                </div>
              </div>
            </div>
          </form>
          <div className="grid grid-rows-1 grid-cols-1">
            <div className="p-4 px-8  bg-gray-200">
              <p className="text-mainblue text-2xl">Contact Address</p>
              <p className="text-black text-base font-bold">SAMABIKAS Nepal</p>
              <p className="text-black text-base font-normal">
                Sanfebagar Municipality Ward no 4, Achham
              </p>
              <p className="text-black text-base mt-4 font-normal">
                Tel: 097-625045<br></br> Mobile: 9858421973
              </p>
              <br></br>

              <p className="text-black text-base font-normal">
                (Attn: Pashupati Kunwar, President)<br></br>
                Email: samabikas@gmail.com<br></br>
                pashupatikunwar@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full my-4">
        {/* <Iframe
          className="map-filter"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25754.137207958494!2d81.33428799017263!3d29.049319952030476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a252071c536921%3A0x85f6b66a020a78bd!2sKamal%20Bazar%20Airport!5e0!3m2!1sen!2snp!4v1610428182108!5m2!1sen!2snp"
          width="100%"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></Iframe> */}
        <Iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=16O1s8PPHySRM8gKPvT_Usqk4MkC4UiNS"
          width="100%"
          height="480"
        ></Iframe>
      </div>
    </div>
  );
}
