import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";
import {useDispatch} from "react-redux"
import './LoginForm.css'


const LoginForm = ({ authenticated, setAuthenticated, setShowModal }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    if (!user.errors) {
      setAuthenticated(true);
      setShowModal(false);
      history.push('/search')
    } else {
      setErrors(user.errors);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault()
    const user = await dispatch(login("demo@aa.io", "password"))
    if (!user.errors) {
      setAuthenticated(true);
      setShowModal(false);
      history.push('/search')
    } else {
      setErrors(user.errors);
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div className='container'>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div>
          <button className='demo-login' type="button" onClick={demoLogin}>Demo User</button>
        </div>
        <div>
          <button className='login' type="submit">Login</button>
        </div>
      </div>
      
    </form>
  );
};

export default LoginForm;
