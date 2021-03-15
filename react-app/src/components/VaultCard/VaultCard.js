import { useEffect } from 'react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AnimeCard from '../AnimeCard/AnimeCard'
import './VaultCard.css'

const VaultCard = ({vault}) => {

    return (
        <>
            {     
            <div className='vault-container'>
                <div className='vault-name'>
                    <h2>{vault.name}</h2>
                </div>
                {
                    vault.anime.map((anime) => {
                        return(
                            <AnimeCard anime={anime} />
                        )
                    })
                }
            </div>
            }
        </>
    )
}

export default VaultCard