import { useEffect } from 'react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAll, getTrending } from "../../store/anime"
import './AnimeCard.css'

const AnimeCard = ({anime}) => {

    // useEffect(() => {
    //     dispatch(getAll())
    // }, [dispatch])

    return(
        <div className='card-container hover'>
            <div className='img-container'>
                <img src={anime.image} />
            </div>
            <div className='info-container'>
                <Link className='anime-card__title' to={`/anime/${anime.id}`}>
                    {anime.title}
                </Link>
                <h2>{anime.release_date}</h2>
            </div>
        </div>
    )
}
export default AnimeCard