import { axiosInstance } from '../config/axiosInstance';
import { host, login_url, register_url } from '../config/endpoints';
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useStorage';

export const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [error, setError] = useState(null);
  const [user, setLocal, removeLocal] = useLocalStorage('user', null);

  useEffect(() => checkUserLoggedIn(), []);

  // Register user
  const register = (userData) => {
      axiosInstance.post(register_url, userData)
        .then(res => {
            setLocal(res.data);
            setError(null);
        })
        .catch(err => {
            setError(err);
            removeLocal();
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
      .then((res) => removeLocal())
      .catch()
    removeLocal();
  };

  // // Check if user is logged in
  const checkUserLoggedIn = async () => {
    axiosInstance.get(`${host}api/auth/validate`)
    .then( () => {
        console.log("success");
    })
    .catch((err) => {
        removeLocal();
        logout();
    });
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
