import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function NavBar() {
    const location = useLocation();
    return (
        <BottomNavigation class = "navbar" value={location.pathname}>
        <BottomNavigationAction
          label="Home"
          value="/home"
          icon={<HomeOutlinedIcon />}
          component={Link}
          to="/home"
        />
        <BottomNavigationAction
          label="Recepten"
          value="/recepten"
          icon={<MenuBookOutlinedIcon />}
          component={Link}
          to="/recepten"
        />
        <BottomNavigationAction
          label="Dagboek"
          value="/dagboek"
          icon={<MenuOutlinedIcon />}
          component={Link}
          to="/dagboek"
        />
      </BottomNavigation>
    )
  }
  
  export default NavBar