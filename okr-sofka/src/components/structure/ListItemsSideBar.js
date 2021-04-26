import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import List from '@material-ui/core/List';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Collapse from '@material-ui/core/Collapse';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {
  NavLink as RouterLink
} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(2),
    },
  }));

  export default function ListItems() {
    const classes = useStyles();
    const [openAdmin, setOpenAdmin] = React.useState(false);
    const [openDash, setOpenDash] = React.useState(false);
  
    const handleClickAdmin = () => {
      setOpenAdmin(!openAdmin);
    };
  
    const handleClickDash = () => {
      setOpenDash(!openDash);
    };
  
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"        
        className={classes.root}
      >
      
        <ListItem button onClick={handleClickDash}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {openDash ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openDash} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem component={RouterLink} 
            button className={classes.nested} to='/okr/allDashboard'>           
              <ListItemText primary="Todos" />
            </ListItem>
            <ListItem component={RouterLink} 
            button className={classes.nested} to='/okr/myDashboard'>         
              <ListItemText primary="Mi nombre" />
            </ListItem>
          </List>
        </Collapse>
  
        <ListItem component={RouterLink} button
        to='/okr/calendar'>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Calendario" />
        </ListItem>
  
        <ListItem button onClick={handleClickAdmin}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Administración" />
          {openAdmin ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openAdmin} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem component={RouterLink}
             button className={classes.nested} to='/okr/support'>
              <ListItemIcon>
                <ContactSupportIcon />
              </ListItemIcon>
              <ListItemText primary="Soporte" />
            </ListItem>
  
            <ListItem component={RouterLink}
             button className={classes.nested} to='/okr/settings'>
              <ListItemIcon>
                <NotificationsActiveIcon  />
              </ListItemIcon>
              <ListItemText primary="Configuración de notificaciones" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }