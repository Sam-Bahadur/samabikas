import React from 'react'
import {AiFillPhone} from "react-icons/ai"
import {FiMail} from "react-icons/fi"
import {AiFillFacebook,AiFillTwitterSquare,AiFillLinkedin,AiFillYoutube} from "react-icons/ai"

export default function NavbarTwo() {
    return (
<div className="flex flex-wrap justify-between">
            <div>
                <span className="text-mainblue sm:text-base md:text-5xl font-bold">Samabikas</span><span className="font-bold sm:text-base md:text-5xl ml-2 text-green-700">Nepal</span>
                <h3 className="text-gray-600">For Equity, Equality and Justice</h3>
            </div>
            <div className="self-center">
                 <span className="text-gray-600"><AiFillPhone className="inline" />9843534725 <FiMail className="inline ml-2" /> samabikas@gmail.com <AiFillFacebook className="inline ml-2" /><AiFillTwitterSquare className="inline ml-2" /><AiFillLinkedin className="inline ml-2" /><AiFillYoutube className="inline ml-2" /> </span>
            </div>
        </div>
    )
}
