import React from 'react'
import Aboutus from './Aboutus/Aboutus'
import Accham from './Accham/Accham'
import Contact from './Contact/Contact'
import Hero from './Hero/Hero'
import style from './Home.module.scss'
import Programmes from './Programmes/Programmes'

export default function Home() {
    return (
        <>
        <div className={style.home} style={{zIndex: '0'}}>
            <Hero />
        </div>
        <div className={style.home}>
            <Aboutus />
            </div>
            <Programmes />
            <Accham />
        <div className={style.home}>
            <Contact />
            </div>
            </>
    )
}
