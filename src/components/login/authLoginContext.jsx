import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// 這個 Context 會提供一個 token 和一個 isLoggedIn 狀態

export const AuthLoginContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);
  
    return (
      <AuthLoginContext.Provider value={{ setToken, isLoggedIn }}>
        { children }
      </AuthLoginContext.Provider>
    );
  };
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };