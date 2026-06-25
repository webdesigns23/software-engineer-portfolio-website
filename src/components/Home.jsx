import React from 'react'
import headshot from "../assets/images/2.png"
import "../styles/Home.css"


export default function Home() {
  return (
    <section id='home' className='home-section'>
      <div className='home-text'>
        <h1>Sharmaine Perea</h1>
        <p className='home-subtitle'>Software Engineer</p>
        <p className='home-location'>Denver, CO</p>
      </div>
      <div className='home-photo'>
        <img src={headshot} alt='Sharmaine Perea'/>
      </div>
    </section>
  )
}
