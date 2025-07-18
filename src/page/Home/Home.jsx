import React from 'react'
import "./Home.css"
import hero_banner from "../../assets/hero_banner.jpg"
import Navbar from '../../Component/Navbar/Navbar'
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCard from '../../Component/TitleCard/TitleCard'
import Footer from '../../Component/Footer/Footer'
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
            <div className="hero-btn">
                <button className='btn'> <img src={play_icon} alt='' />play</button>
                <button  className='btn dark-btn'> <img src={info_icon} alt=''/>more info</button>
            </div>
            <TitleCard/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCard title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCard title={"Only on Netflix"} category={"popular"} />
        <TitleCard title={"Upcoming"} category={"upcoming"}/>
        <TitleCard title={"Top Pics for you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
