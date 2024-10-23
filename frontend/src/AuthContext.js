import React, { createContext, useContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const tokenFromStorage = localStorage.getItem('token');
  const [user, setUser] = useState(
    tokenFromStorage ? jwtDecode(tokenFromStorage) : null
  );

  const login = (token) => {
    // Implement login logic here (e.g., API call)

    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzE4ZTU3YjA4OTdjYTBjMDJhMTMzNzUiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3Mjk2OTUxNTh9.hAFgn6nfSNbpPrwhBuHZWgxXcYwNijsdJh-BzubwMhw'
    );
    const user = jwtDecode(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzE4ZTU3YjA4OTdjYTBjMDJhMTMzNzUiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3Mjk2OTUxNTh9.hAFgn6nfSNbpPrwhBuHZWgxXcYwNijsdJh-BzubwMhw'
    ); // decode your token here

    setUser(user);
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
