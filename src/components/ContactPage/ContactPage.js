import React, { useState } from "react";
import Iframe from "react-iframe";
import "./Contact.scss";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { email, name, message, phone } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    alert("press ok and wait a few seconds...");
    const response = await axios.post(
      `https://nodemailermayan.herokuapp.com/sendemailsamabikas`,
      // `http://localhost:3000/sendemailsamabikas`,
      {
        name,
        email,
        phone,
        message,
      }
    );
    console.log(response);
    alert("message sent successfully");
    window.location = "#";
  };

  return (
    <div className="w-4/5 mx-auto">
      <div className="h-px w-full mt-4"></div>
      <div className="text-mainblue mt-4 font-bold md:text-4xl">
        Contact Us
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  my-4 p-4">
          <form className="text-2xl">
            <div className="my-4 grid grid-cols-4">
              <label className="text-black text-xs md:text-base ">
                Name* :
              </label>
              <input
                className=" text-xs md:text-base  ml-2 px-2 text-black  rounded-sm  border border-gray-200 col-start-2 col-span-3"
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={onChange}
              />
            </div>
            <div className="my-4 grid grid-cols-4">
              <label className="text-black text-xs md:text-base ">
                Email* :
              </label>
              <input
                className=" text-xs md:text-base  ml-2 px-2 text-black  rounded-sm  border border-gray-200 col-start-2 col-span-3"
                type="email"
                placeholder="email"
                required
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="my-4 grid grid-cols-4">
              <label className="text-black text-xs md:text-base ">
                Phone :
              </label>
              <input
                className=" text-xs md:text-base  ml-2 px-2 text-black  rounded-sm  border border-gray-200 col-start-2 col-span-3"
                type="text"
                placeholder="Phone"
                value={phone}
                name="phone"
                onChange={onChange}
              />
            </div>
            <div className="my-4 grid grid-cols-4">
              <label className="text-black text-xs md:text-base ">
                Message* :
              </label>
              <div className="grid-rows-2 col-start-2 col-span-3">
                <textarea
                  className=" text-xs md:text-base  ml-2  px-2 text-black  rounded-sm  border border-gray-200 h-40 w-full "
                  placeholder="your message here"
                  required
                  value={message}
                  name="message"
                  onChange={onChange}
                ></textarea>
                <div className="my-2 grid grid-cols-3">
                  <p
                    className="my-2 md:my-0 cursor-pointer px-2 py-0 w-max font-normal mx-auto rounded-sm bg-blue-300 hover:bg-blue-700 hover:text-white duration-500 text-xs md:text-lg"
                    onClick={onSubmit}
                  >
                    Send
                  </p>
                  <p
                    className="my-2 md:my-0 cursor-pointer px-2 py-0 w-max font-normal mx-auto rounded-sm bg-blue-300 hover:bg-blue-700 hover:text-white duration-500 text-xs md:text-lg"
                    onClick={() => {
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        message: "",
                      });
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
        <Iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=16O1s8PPHySRM8gKPvT_Usqk4MkC4UiNS"
          width="100%"
          height="480"
        ></Iframe>
      </div>
    </div>
  );
}
