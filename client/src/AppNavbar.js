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
          label="FoodDiary"
          value="/fooddiary"
          icon={<MenuOutlinedIcon />}
          component={Link}
          to="/fooddiary"
        />
      </BottomNavigation>
    )
  }
  
  export default NavBar