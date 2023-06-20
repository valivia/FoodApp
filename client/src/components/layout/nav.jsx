import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { FiHome, FiBookOpen, FiMenu, FiSettings } from 'react-icons/fi';
import styles from "./nav.module.scss";

function Navigation() {
  const location = useLocation();

  return (
    <>
      <BottomNavigation className={styles.navbar} value={location.pathname}>
        <BottomNavigationAction
          value="/"
          icon={<FiHome />}

          component={Link}
          to="/"
          className={styles.action}
        />
        <BottomNavigationAction
          value="/recipes"
          icon={<FiMenu />}
          component={Link}
          to="/recipes"
          className={styles.action}
        />
        <BottomNavigationAction
          value="/diary"
          icon={<FiBookOpen />}
          component={Link}
          to="/diary"
          className={styles.action}
        />
      </BottomNavigation>

      {location.pathname !== "/profile" &&
        <Link to="/profile" className={styles.settings}>
          <FiSettings />
        </Link>
      }
    </>
  )
}

export { Navigation }