import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getOne } from '../../store/anime'
import ReactPlayer from 'react-player'
import "./AnimePage.css"

const AnimePage = () => {
    const dispatch = useDispatch()
    const { animeId } = useParams()
    const anime = useSelector(state => state.anime[animeId])
   
    useEffect(() => {
        dispatch(getOne(animeId))
    }, [animeId, dispatch])

    console.log("ANIME", anime)
    
    return (
        <>
        {
            anime &&
            <div className='page-container'>
                <div className='anime-header'>
                    <div className='image-container'>
                        <img alt='' src={anime.image}></img>
                    </div>
                        <h1>{anime.title}</h1>
                        <h1>{anime.release_date}</h1>
                </div>
                <div className='video-container'>
                    <ReactPlayer width='880px' height='690px' controls url={anime.trailer} />
                </div>
                <div className='anime-info'>
                    <div className='description'>
                        <p>{anime.description}</p>
                    </div>
                </div> 
                
            </div> 
        }
        </>
    )
}
export default AnimePage