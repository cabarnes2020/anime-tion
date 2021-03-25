import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from 'react-router-dom'
import './ProfileButton.css'


const ProfileButton = ({ setAuthenticated }) => {
    const sessionUser = useSelector((state) => state.session.user)
    const history = useHistory()
    const onClick = () => {
        const userId = sessionUser.id
        console.log("CLICKED", userId)
        history.push(`/users/${userId}`)
        return
    };

    return <button className='profile-button' onClick={onClick}>Profile</button>;
};

export default ProfileButton;
