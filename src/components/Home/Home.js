import React from 'react'
import Aboutus from './Aboutus/Aboutus'
import Accham from './Accham/Accham'
import Hero from './Hero/Hero'
import style from './Home.module.scss'
import Programmes from './Programmes/Programmes'

export default function Home() {
    return (
        <>
        <div className={style.home}>
            <Hero />
        </div>
        <div className={style.home}>
            <Aboutus />
            </div>
            <Programmes />
            <Accham />
            </>
    )
}
