import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './auth/LoginFormModal'
import SignupFormModal from './auth/SignupFormModal'
import VaultFormModal from './VaultModal/VaultModal'
import ProfileButton from './ProfileButton/ProfileButton'

import './NavBar.css'

const NavBar = ({ authenticated, setAuthenticated }) => {
  return (
    <>
      <div className='navbar-container'>
        <div className='navbar-left'>
          <NavLink className='navbar-link' to="/search" exact={true} activeClassName="active">
            Home
          </NavLink>
        </div>
        <div className='navbar-middle'>
          { authenticated &&
            <h2>ANIMEtion</h2>
          }
        </div>
        <div className='navbar-right'>
          {!authenticated &&
            <>
              <LoginFormModal setAuthenticated={setAuthenticated} authenticate={authenticated} />
              <SignupFormModal setAuthenticated={setAuthenticated} authenticate={authenticated} /> 
            </>
          }
          { authenticated &&
          <>
            <VaultFormModal />
            <LogoutButton setAuthenticated={setAuthenticated}/>
            <ProfileButton />
          </>
          }
        </div>
      </div>
    </>
  );
}

export default NavBar;