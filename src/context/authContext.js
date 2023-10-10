'use strict';

import { axiosInstance } from '../config/axiosInstance';
import { host, login_url, register_url } from '../config/endpoints';
import { createContext, useContext, useEffect, useState } from 'react';
import { useSessionStorage } from '../hooks/useStorage';

export const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [error, setError] = useState(null);
  const [user, setSession, removeSession] = useSessionStorage('user', null);

  useEffect(() => checkUserLoggedIn(), []);

  // Register user
  const register = (userData) => {
      axiosInstance.post(register_url, userData)
        .then(res => {
            setSession(res.data);
            setError(null);
        })
        .catch(err => {
            setError(err);
            removeSession();
        });
  };

 
  const login = (userData) => {
    setError(null);
    setLocal(userData);
  };

  // Logout user
  const logout = async () => {
    axiosInstance
      .post(`${host}api/auth/logout`)
      .then((res) => removeSession())
      .catch()
    removeSession();
  };

  // // Check if user is logged in
  const checkUserLoggedIn = async () => {
    axiosInstance.get(`${host}api/auth/validate`)
    .then( () => {
        console.log("success");
    })
    .catch((err) => {
        removeSession();
        logout();
    });
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
