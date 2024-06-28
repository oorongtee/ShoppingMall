import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthLoginContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);

    console.log('token', token);
    console.log('isLoggedIn', isLoggedIn);
  
    return (
      <AuthLoginContext.Provider value={{ setToken, isLoggedIn }}>
        { children }
      </AuthLoginContext.Provider>
    );
  };
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };