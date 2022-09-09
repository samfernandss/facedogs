import React, { createContext, useEffect, useState } from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserStorage = (props) => {
  const [data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(async function () {
    setData(null);
    setError(null);
    setLoading(false);
    setIsLoggedIn(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate])

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setIsLoggedIn(true);
  };

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenResponse = await fetch(url, options);
      if (!tokenResponse.ok) throw new Error('Error: User or password is wrong. Please try again.');
      const { token } = await tokenResponse.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/account');
    } catch (err) {
      setError(err.message);
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Invalid Token');
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, isLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  )
};