import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { isLoggedIn } = useContext(UserContext);

  if (isLoggedIn) return <Navigate to="/account" />

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="passwordlost" element={<LoginPasswordLost />} />
          <Route path="passwordreset" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login;