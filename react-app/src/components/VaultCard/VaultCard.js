import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AnimeCard from '../AnimeCard/AnimeCard';
import { deleteVault } from "../../store/session";
import './VaultCard.css';


const VaultCard = ({vault}) => {
    const dispatch = useDispatch()

    const removeVault = async(e) => {
        e.preventDefault()
        dispatch(deleteVault(vault.id))
    }

    return (
        <>
            {     
            <div className='vault-container'>
                <div className='vault-name'>
                    <h2>{vault.name}</h2>
                </div>
                <div className='remove-vault'>
                    <button className='remove-button' type="button" onClick={removeVault}>Delete</button>
                </div>
                <div className='anime'>
                    {
                        vault.anime.map((anime) => {
                            return (
                                <AnimeCard anime={anime} />
                            )
                        })
                    }
                </div>
               
            </div>
            }
        </>
    )
}

export default VaultCard