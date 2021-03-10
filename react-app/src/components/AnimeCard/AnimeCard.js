import { useEffect } from 'react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAll, getTrending } from "../../store/anime"
import './AnimeCard.css'

const AnimeCard = ({anime}) => {
    const dispatch = useDispatch()
    const animeList = useSelector(state => state.anime.animeList)

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    return(
        <div className='card-container hover'>
            <div className='img-container'>
                <img src={anime.image} />
            </div>
            <div className='info-container'>
                <h2>{anime.title}</h2>
                <h2>{anime.release_date}</h2>
            </div>
        </div>
    )
}
export default AnimeCard