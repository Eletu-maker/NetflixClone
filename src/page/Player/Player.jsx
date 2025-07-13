import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
 
  const {id} = useParams();
  const navigayte =  useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDBkY2U4MmY3ZmY5ZTI3ZjFiOTA3ZjdmM2UzYjFiNCIsIm5iZiI6MTc1MjI0MDgzMS45NjgsInN1YiI6IjY4NzExMmJmNmZkNDg5MDkyMTU0MWQ3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-RMzBwZzF28JoBZkY1RYH0jU_rGqGinZFTRPwtFClaw'
  }
};


useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt='' onClick={()=>{navigayte(-2)}}/>
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='YouTube video player' frameBorder='0'
      allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>Published Date: {apiData.published_at.slice(0,10)}</p>
        <p>Name: {apiData.name}</p>
        <p>Type: {apiData.type} </p>
      </div>
    </div>
  )
}

export default Player
