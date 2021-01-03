import React from 'react'
import Hero from './Hero/Hero'
import style from './Home.module.scss'

export default function Home() {
    return (
        <div className={style.home}>
            <Hero />
        </div>
    )
}
