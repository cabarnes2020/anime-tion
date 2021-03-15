import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import VaultCard from '../VaultCard/VaultCard'
import "./UserProfile.css"


const UserProfile = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() =>{
        if(sessionUser){
            setIsLoaded(true)
        }
    }, [isLoaded])

    if(!isLoaded){
        return null
    }
    return(
        <div className='page-container'>
            <div className='profile-info-container'>
                <div className='profile-pic'>
                    <img alt='' src={sessionUser.profile_pic} />
                </div>
                <h2>{sessionUser.username}</h2>
            </div>
            <div className='vault-div'>
                <div className='vault-header'>
                    <h1>My Vaults</h1>
                </div>
                {
                    sessionUser.vaults.map((vault) => {
                        return(
                            <VaultCard key={vault.name} vault={vault} />
                        )
                    })
                }
            </div>
        </div>
    )

}

export default UserProfile