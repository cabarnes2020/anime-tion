import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
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
            <div className='vault-container'>
                {
                    sessionUser.vaults.map((vault) => {
                        return(
                            <>
                                {vault.name}
                            </>
                        )
                    })
                }
                <h1>Vaults will go here!</h1>
            </div>
        </div>
    )

}

export default UserProfile