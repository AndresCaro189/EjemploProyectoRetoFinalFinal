import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Typography,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';
import foto from '../../assets/fotoTemporal.jpg'

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar sx={{ height: 82 }}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />      
          <IconButton color="secondary">
            <Badge
              badgeContent={notifications.length}              
            >
          <NotificationsIcon style={{ fontSize: 30 }}/>
            </Badge>
          </IconButton>
          <Hidden lgDown>
          <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',          
        }}
      >    
          <Avatar
          component={RouterLink}
          src={foto}
          sx={{
            cursor: 'pointer',
            width: 60,
            height: 60
          }}
          to="/"
        />
        <Typography
          color="textPrimary"
          variant="h9"
        >pepito perez                
        </Typography>  
        </Box>   
        </Hidden>

          <IconButton color='secondary'>
            <InputIcon style={{ fontSize: 30 }} />
          </IconButton>        
        <Hidden lgUp>
          <IconButton
            color="secondary"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;