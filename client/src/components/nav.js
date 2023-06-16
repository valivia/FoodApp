import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { FiHome, FiBookOpen, FiMenu } from 'react-icons/fi';
import styless from "./nav.module.css";

function Navigation() {
  const location = useLocation();
  return (
    <BottomNavigation class={styless.navbar} value={location.pathname}>
      <BottomNavigationAction
        label="Home"
        value="/"
        icon={<FiHome />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Recipes"
        value="/recipes"
        icon={<FiBookOpen />}
        component={Link}
        to="/recipes"
      />
      <BottomNavigationAction
        label="Diary"
        value="/diary"
        icon={<FiMenu />}
        component={Link}
        to="/diary"
      />
    </BottomNavigation>
  )
}

export { Navigation }