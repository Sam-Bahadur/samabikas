import React from 'react'
import img from "../../assets/images/hero1.jpg"
import Button from '../common/Button/Button'

export default function Notice() {
    return (
        <div className="my-4">
            <h2 className="text-mainblue font-semibold text-4xl">Notice Board</h2>
            <card className="bg-gray-100 grid grid-cols-4 my-2 p-4 gap-10">
                <div className="col-span-1">
                    <img src={img} style={{width: '100%', height: '180px', objectFit: 'cover'}}/>
                </div>
                <div className="col-start-2 col-span-3">
                    <h1 className="text-mainblue font-medium text-2xl">
                    SAMABIKAS Nepal Awarded by "With and For Girls" 2019 Award in London, UK
                    </h1>
                    <div className="my-2">
                    Post Date: Mar 10, 2020
                    </div>
                    <div className="text-sm">
                    SAMABIKAS Nepal awarded from the With and for Girls Awards 2019. Ms Pashupatik Kunwar, Chairperson of SAMABIKAS Nepal and Ms Shital BK, Chairperson of Baijanath Girsl Group participated in the Awards Ceremony in London, UK in the first week fo March 2020. The SAMABIKAS, the recipient of 2019 With and For Girls Award, selected from a...
                    </div>
                    <div className="mt-2">
                    <Button />
                    </div>
                </div>

            </card>
        </div>
    )
}
