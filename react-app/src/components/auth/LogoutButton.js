import React from "react";
import { logout } from "../../store/session";
import {useDispatch} from "react-redux"
import {Redirect} from 'react-router-dom'
import './LogoutButton.css'


const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    dispatch(logout());
    setAuthenticated(false);
  };

  return <button className='logout-button' onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
