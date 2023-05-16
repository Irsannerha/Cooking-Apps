import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  const updateToken = (newToken) => {
    setToken(newToken);
  };

  const updateUser = (user) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ token, updateToken, updateUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
