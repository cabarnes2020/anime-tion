import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { setUser } from "../../store/session"

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [profilePic, setProfilePic] = useState("")
  const [favAnimeId, setFavAnimeId] = useState(1)

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = dispatch(signUp(username, email, password, profilePic, favAnimeId));
      if (!user.errors) {
        setAuthenticated(true);
        dispatch(setUser(user))
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateProfilePic = (e) => {
    setProfilePic(e.target.value);
  };

  const updateFavAnimeId = (e) => {
    setFavAnimeId(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div>
        <label>Profile Picture</label>
        <input
          type="file"
          name="profilePic"
          onChange={updateProfilePic}
          value={profilePic}
        ></input>
      </div>
      <div>
        <label>Favorite Anime ID</label>
        <input
          type="text"
          name="favorite-anime"
          onChange={updateFavAnimeId}
          value={favAnimeId}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
