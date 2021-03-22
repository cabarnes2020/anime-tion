import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom';
import {getAll} from '../../store/anime'
import "./LandingPage.css"
import SearchBar from "../SearchBar/Searchbar"
import AnimeCard from "../AnimeCard/AnimeCard"
import {useSearchContext} from "../../context/SearchContext"

const LandingPage = () => {
    const sessionUser = useSelector(state => state.session.user)
    // const animeList = useSelector(state => state.anime.animeList)
    const { filterAnime } = useSearchContext()
    const dispatch = useDispatch()
    
    console.log("SESSION", sessionUser)
    
    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    if(!sessionUser){
        return (
            <Redirect to='/' />
        )
    }
    return (
        <> 
            {filterAnime &&
                <div className='landing-container'> 
                    <div className='searchbar'>
                        <SearchBar />
                    </div>

                    <div className='anime-container'>
                        {
                            filterAnime.map((anime) => {
                                return <AnimeCard key={anime.name} anime={anime}/>
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default LandingPage