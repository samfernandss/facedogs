import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import { ReactComponent as MyGallery } from '../../Assets/feed.svg';
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';
import useMedia from '../../Hooks/useMedia';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const {pathname} = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          aria-label="Menu" onClick={() =>
            setMobileMenu(!mobileMenu)}>
        </button>
      )}

      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
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
    </>
  )
}

export default UserHeaderNav;