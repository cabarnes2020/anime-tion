import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import {getAll} from '../../store/anime'
import "./LandingPage.css"
import SearchBar from "../SearchBar/Searchbar"

const LandingPage = () => {
    const sessionUser = useSelector(state => state.session.user)
    const animeList = useSelector(state => state.anime.animeList)

    const dispatch = useDispatch()

    console.log("ANIMEEE: ", animeList)

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])


    return (
        <> 
            {animeList &&
                <div className='landing-container'> 
                    <div className='anime-titles'>
                        <h1>Anime titles</h1>
                    </div>

                    <div className='searchbar'>
                        <SearchBar />
                    </div>
                </div>
            }
        </>
    )
}

export default LandingPage