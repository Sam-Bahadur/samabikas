import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import style from "./Navbar.module.scss"
import {IoIosArrowDown} from "react-icons/io"

export default function Navbar() {
    const [aboutUsClicked, setaboutUsClicked]= useState(false)
    const aboutUs=
        <div 
        className={style.aboutus}
        style={{zIndex: '9999'}}
        // className="z-50 absolute top-12 left-20 bg-mainblue p-4 cursor-pointer"
        onMouseEnter={()=> setaboutUsClicked(true)}
        onMouseLeave={()=> setaboutUsClicked(false)}>
        <li >number 1</li>
        <li >number 2</li>
        <li >number 2</li>
        <li >number 3</li>
        </div>   
    return (
        <div className=" shadow-lg w-full bg-maingreen z-50 text-sm">
            <div className="h-auto list-none  lg:flex items-center relative mx-auto w-min text-lg font-semibold text-white capitalize">
                <Link to="/">
                <li className="mx-1 w-max p-2 border-radi  self-center cursor-pointer border-black transition-colors duration-500 ease-in-out">home</li>
                </Link>
                <li className="mx-1 w-max p-2 border-radi relative  self-center cursor-pointer border-black    transition-colors duration-500 ease-in-out" onMouseEnter={()=>setaboutUsClicked(true)} onMouseLeave={()=>setaboutUsClicked(false)}>About us</li>
                {aboutUsClicked ? aboutUs : null}
                <li className="mx-1 w-max p-2 border-radi  self-center cursor-pointer border-black    transition-colors duration-500 ease-in-out">Programmes</li>
                <li className="mx-1 w-max p-2 border-radi  self-center cursor-pointer border-black    transition-colors duration-500 ease-in-out">Partnership</li>
                <Link to="/notice">
                <li className="mx-1 w-max p-2 border-radi  self-center cursor-pointer border-black    transition-colors duration-500 ease-in-out">Notice Board</li>
                </Link>
                <Link to="/gallery">
                <li className="mx-1 w-max p-2 border-radi  self-center cursor-pointer border-black    transition-colors duration-500 ease-in-out">Photo Gallery</li>
                </Link>
                <Link to="/contact">
                <li className="mx-1 w-max p-2 border-radi  self-center cursor-pointer border-black    transition-colors duration-500 ease-in-out">Contact</li>
                </Link>
            </div>
        </div>
    )
}
