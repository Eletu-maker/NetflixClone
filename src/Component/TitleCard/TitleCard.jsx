import React, { useEffect, useRef, useState } from 'react'
import "./TitleCard.css"
import { Link } from 'react-router-dom'
import cards_data from '../../assets/cards/Cards_data' 
const TitleCard = ({title, category}) => {

    const [apiData, setApiData] = useState([]);

    const cardsRef = useRef();
    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDBkY2U4MmY3ZmY5ZTI3ZjFiOTA3ZjdmM2UzYjFiNCIsIm5iZiI6MTc1MjI0MDgzMS45NjgsInN1YiI6IjY4NzExMmJmNmZkNDg5MDkyMTU0MWQ3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-RMzBwZzF28JoBZkY1RYH0jU_rGqGinZFTRPwtFClaw'
  }
};



    const handleWheel = (event)=>{
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() =>{
      
fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

        cardsRef.current.addEventListener('wheel',handleWheel);
    },[])

  return (
    <div className='titlecard'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
            return <Link to={`/player/${card.id}`} className='card' key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=''/>
                <p>{card.original_title}</p>
            </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCard
