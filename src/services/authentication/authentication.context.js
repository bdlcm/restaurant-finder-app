import React, { useState, createContext, useEffect } from "react";
import "firebase/auth";
import { loginRequest, registrationRequest } from "./authentication.service";
import firebase from "firebase";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  firebase.auth().onAuthStateChanged((u) => {
    if (u) {
      setUser(u);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogOut = () => {
    setUser(null);
    firebase.auth().signOut();
  };

  const onRegistration = (email, password, repeatPassword) => {
    setIsLoading(true);
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    registrationRequest(email, password, repeatPassword)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  // useEffect(() => {
  //   checkAuth();
  // }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,

        user,
        isLoading,
        error,
        onLogin,
        onRegistration,
        onLogOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
