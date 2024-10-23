import React, { createContext, useContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const tokenFromStorage = localStorage.getItem('token');
  const [user, setUser] = useState(
    tokenFromStorage ? jwtDecode(tokenFromStorage) : null
  );

  const login = (token) => {
    localStorage.setItem('token', token);
    const user = jwtDecode(token); // decode your token here
    setUser(user);
    return user;
  };

  const logout = () => {
    // Implement logout logic here
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
