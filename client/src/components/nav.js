import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { FiHome, FiBookOpen, FiMenu } from 'react-icons/fi';
import styles from "./nav.module.css";
import { IconContext } from 'react-icons';

function Navigation() {
  const location = useLocation();
  return (
    <IconContext.Provider value={{size: '2.3em'}}>
      <BottomNavigation class={styles.navbar} value={location.pathname}>
      <BottomNavigationAction
        value="/"
        icon={<FiHome/>}
        
        component={Link}
        to="/"
        className={styles.action}
      />
      <BottomNavigationAction
        value="/recipes"
        icon={<FiBookOpen />}
        component={Link}
        to="/recipes"
        className={styles.action}
      />
      <BottomNavigationAction
        value="/diary"
        icon={<FiMenu />}
        component={Link}
        to="/diary"
        className={styles.action}
      />
    </BottomNavigation>
    </IconContext.Provider>
    
  )
}

export { Navigation }