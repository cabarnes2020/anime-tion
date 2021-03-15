import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import LandingPage from "./components/LandingPage/LandingPage.js";
import AnimePage from "./components/AnimePage/AnimePage"
import SplashPage from "./components/SplashPage/SplashPage"
import UserProfile from "./components/UserProfile/UserProfile"
import { authenticate } from "./store/session";


function App() {
  const dispatch = useDispatch()
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await dispatch(authenticate());
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/" exact={true}>
          <SplashPage/>
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" authenticated={authenticated}>
          <UserProfile />
        </ProtectedRoute>
        <ProtectedRoute path="/search" exact={true} authenticated={authenticated}>
          <LandingPage />
        </ProtectedRoute>
        <ProtectedRoute path="/anime/:animeId" exact={true} authenticated={authenticated}>
          <AnimePage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
