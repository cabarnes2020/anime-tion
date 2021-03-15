import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SplashPage.css'

const SplashPage = () => {
    const sessionUser = useSelector(state => state);

    if (sessionUser.session.user) {
        return <Redirect to='/search' />
    }

    return (
        <>
            <div className='splash-page'>
                <ul className='slide-show'>
                    <li>
                        <span>Image 01</span>
                    </li>
                    <li>
                        <span>Image 02</span>
                    </li>
                    <li>
                        <span>Image 03</span>
                    </li>
                    <li>
                        <span>Image 04</span>
                    </li>
                    <li>
                        <span>Image 04</span>
                    </li>
                    <li>
                        <span>Image 04</span>
                    </li>
                </ul>
            </div>

            <div className='splash-page-title'>
                <h1>ANIMEtion</h1>
            </div>
        </>
    )
}

export default SplashPage