import React from 'react'
import "./Home.css"
import hero_banner from "../../assets/hero_banner.jpg"
import Navbar from '../../Component/Navbar/Navbar'
import hero_title from "../../assets/hero_title.png"
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
            <img src={hero_title} alt='' className='caption-img' />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum enim sint ipsum, dolor ducimus dolorum dicta, voluptatem, id temporibus at optio. Dolorem ipsum neque, qui possimus exercitationem optio tempore architecto?
            </p>
        </div>
      </div>
    </div>
  )
}

export default Home
