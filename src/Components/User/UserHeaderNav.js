import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyGallery } from '../../Assets/feed.svg';
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end>
        <MyGallery /> {mobile && 'My Gallery'}
      </NavLink>
      <NavLink to="/account/statistics">
        <Statistics /> {mobile && 'Statistics'}
      </NavLink>
      <NavLink to="/account/post">
        <AddPhoto /> {mobile && 'Add Photo'}
      </NavLink>
      <button onClick={userLogout}>
        <Logout /> {mobile && 'Logout'}
      </button>
    </nav>
  )
}

export default UserHeaderNav;