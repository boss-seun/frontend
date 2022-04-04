/*
* component to prevent transitioning to authentication required screens
* if not authenticated
*/

import React, { createContext, useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const context = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const location = useLocation()
  const navigate = useNavigate()

  const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  // check local storage here
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("user")
    // also get user from localstorage - to get the user role
    if (token) {
      if (!user) {
        try {
          setUser(JSON.parse(userString));
        } catch (e) {
          // if error parsing user json - 
          // return user to login and clear all localstorage
          localStorage.clear();
          navigate("/");
        }
      }

      if (location.pathname === "/") {
        navigate("/statistics");
      }
    } else {
      // redirect user to login
      if (location.pathname !== "/" && location.pathname !== "/statistics") {
        navigate("/");
      }
    }
    return () => {
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, location.pathname])
  
  return (
    <context.Provider value={{ user, logout, login }}>
      { children }
    </context.Provider>
  );
};
