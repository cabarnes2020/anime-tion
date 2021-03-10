import { useEffect } from 'react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getAll, getTrending} from "../../store/anime"
import './SearchBar.css'

const SearchBar = () => {
    const dispatch = useDispatch()
    const animeList = useSelector(state => state.anime.animeList)
    const [keyword, setKeyword] = useState('')
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    useEffect(() => {
        setFiltered(
            animeList.filter((anime) => {
                return anime.title.toLowerCase().includes(keyword.toLowerCase())
            })
        )
        console.log(filtered)
    }, [keyword, animeList])


    return (
        <div className="search-container">
            {
                <div className="input-container">
                    <input
                        type="text"
                        className="input"
                        placeholder="Search anime..."
                        onChange={(e) => {setKeyword(e.target.value)}}
                    />
                </div>
            }
            <div className="search-icon">
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}

export default SearchBar
