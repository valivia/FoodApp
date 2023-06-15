import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import styless from "./nav.module.css";

function Navigation() {
  const location = useLocation();
  return (
    <BottomNavigation class={styless.navbar} value={location.pathname}>
      <BottomNavigationAction
        label="Home"
        value="/"
        icon={<HomeOutlinedIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Recipes"
        value="/recipes"
        icon={<MenuBookOutlinedIcon />}
        component={Link}
        to="/recipes"
      />
      <BottomNavigationAction
        label="Diary"
        value="/diary"
        icon={<MenuOutlinedIcon />}
        component={Link}
        to="/diary"
      />
    </BottomNavigation>
  )
}

export { Navigation }