import React, {useState} from 'react'
import style from "./Navbar.module.scss"

export default function Navbar() {
    const [aboutUsClicked, setaboutUsClicked]= useState(false)
    const aboutUs=
        <div className={style.aboutus} onMouseEnter={()=> setaboutUsClicked(true)} onMouseLeave={()=> setaboutUsClicked(false)}>
        <li>number 1</li>
        <li>number 1</li>
        <li>number 1</li>
        <li>number 1</li>
        <li>number 1</li>
        
        </div>

    return (
        <div className="container shadow-lg bg-maingreen">
            <div className="h-20 list-none flex items-center mx-auto w-min sticky text-2xl capitalize">
                <li className="mx-1 w-max p-2 border-radi  self-center cursor-pointer border-black   hover:bg-blue-800 transition-colors duration-500 ease-in-out">home</li>
                <li className="mx-1 w-max p-2 border-radi relative  self-center cursor-pointer border-black   hover:bg-blue-800 transition-colors duration-500 ease-in-out" onMouseEnter={()=>setaboutUsClicked(true)} onMouseLeave={()=>setaboutUsClicked(false)}>About us</li>
                {aboutUsClicked ? aboutUs : null}
                <li className="mx-1 w-max p-2 border-radi  self-center cursor-pointer border-black   hover:bg-blue-800 transition-colors duration-500 ease-in-out">Programmes</li>
                <li className="mx-1 w-max p-2 border-radi  self-center cursor-pointer border-black   hover:bg-blue-800 transition-colors duration-500 ease-in-out">Partnership</li>
                <li className="mx-1 w-max p-2 border-radi  self-center cursor-pointer border-black   hover:bg-blue-800 transition-colors duration-500 ease-in-out">Notice Board</li>
                <li className="mx-1 w-max p-2 border-radi  self-center cursor-pointer border-black   hover:bg-blue-800 transition-colors duration-500 ease-in-out">Photo Gallery</li>
                <li className="mx-1 w-max p-2 border-radi  self-center cursor-pointer border-black   hover:bg-blue-800 transition-colors duration-500 ease-in-out">Contact</li>
            </div>
        </div>
    )
}
