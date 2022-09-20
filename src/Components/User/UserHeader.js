import React, { useEffect, useState } from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    setTitle(location.pathname);
    switch (location.pathname) {
      case '/account/statistics':
        setTitle('Statistics');
        break;
      case '/account/post':
        setTitle('Post your photo');
        break;
      default:
        setTitle('My account');
        break;
    }
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader;