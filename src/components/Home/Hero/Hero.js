import React from 'react'
import {AiFillPhone} from "react-icons/ai"
import {FiMail} from "react-icons/fi"
import {AiFillFacebook,AiFillTwitterSquare,AiFillLinkedin,AiFillYoutube} from "react-icons/ai"
import Carousel from "./Carousel"

export default function Hero() {
    return (
        <>
        <div className="flex flex-wrap justify-between">
            <div className="">
                {/* <img src="https://picsum.photos/200" /> */}
                <span className="text-mainblue text-5xl font-bold">Samabikas</span><span className="font-bold text-green-700 text-5xl">Nepal</span>
                <h3 className="text-gray-600 opacity-80">For Equity, Equality and Justice</h3>
            </div>
            <div className="self-center">
                 <span className="text-gray-600"><AiFillPhone className="inline" />9843534725 <FiMail className="inline ml-2" /> samabikas@gmail.com <AiFillFacebook className="inline ml-2" /><AiFillTwitterSquare className="inline ml-2" /><AiFillLinkedin className="inline ml-2" /><AiFillYoutube className="inline ml-2" /> </span>
            </div>
        </div>
        <Carousel />
</>
    )
}
