import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const ProtectedRoute = ({children}) => {
  const { isLoggedIn } = useContext(UserContext);

  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;