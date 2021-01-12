import React from "react";
import Iframe from "react-iframe";

export default function ContactPage() {
  return (
    <>
      <div className="h-px w-full bg-gray-400 mt-4"></div>
      <div className="text-mainblue mt-4 font-bold text-4xl">
        Contact Us
        <div className="grid lg:grid-cols-2 gap-10  my-4 p-4 bg-gray-100">
          <form className="text-2xl">
            <div className="my-2 grid grid-cols-2">
              <label className="text-black">Name :</label>
              <input
                className="text-base ml-2 px-2 text-black  rounded-sm bg-blue-100"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="my-2 grid grid-cols-2">
              <label className="text-black">Email :</label>
              <input
                className="text-base ml-2 px-2 text-black  rounded-sm bg-blue-100"
                type="email"
                placeholder="email"
              />
            </div>
            <div className="my-2 grid grid-cols-2">
              <label className="text-black">Phone :</label>
              <input
                className="text-base ml-2 px-2 text-black  rounded-sm bg-blue-100"
                type="text"
                placeholder="Phone"
              />
              <label className="text-black">Message:</label>
              <textarea
                className="text-base my-2 ml-2  px-2 text-black  rounded-sm bg-blue-100 h-40"
                placeholder="your message here"
              ></textarea>
            </div>
            <div className="my-2 grid grid-cols-2">
              <div></div>
              <p className="cursor-pointer px-2 py-0 w-max font-normal mx-auto rounded-sm bg-blue-300 hover:bg-blue-700 hover:text-white duration-500">
                Send
              </p>
            </div>
          </form>
          <div className="grid grid-rows-1 grid-cols-1">
            <div className="p-4 px-8  bg-gray-200">
              <p className="text-mainblue text-2xl">Contact Address</p>
              <p className="text-black text-sm font-bold">SAMABIKAS Nepal</p>
              <p className="text-black text-sm font-normal">
                Sanfebagar Municipality Ward no 4, Achham
              </p>

              <p className="text-black text-sm mt-4 font-normal">
                Tel: 097-625045 Mobile: 9858421973
              </p>

              <p className="text-black text-sm font-normal">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25754.137207958494!2d81.33428799017263!3d29.049319952030476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a252071c536921%3A0x85f6b66a020a78bd!2sKamal%20Bazar%20Airport!5e0!3m2!1sen!2snp!4v1610428182108!5m2!1sen!2snp"
          width="100%"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></Iframe>
      </div>
    </>
  );
}
