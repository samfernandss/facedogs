import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';

const Login = () => {
  const {isLoggedIn} = useContext(UserContext);

  if (isLoggedIn) return <Navigate to="/account" />

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="passwordlost" element={<LoginPasswordLost />}/>
        <Route path="passwordreset" element={<LoginPasswordReset />}/>
      </Routes>
    </div>
  )
}

export default Login;