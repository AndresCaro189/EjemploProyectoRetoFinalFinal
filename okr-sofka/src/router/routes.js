import React from 'react'
import { Navigate } from 'react-router-dom';

import LayoutComplete from '../components/structure/LayoutComplete'
import LayoutSimple from '../components/structure/LayoutSimple'
import AllDashboard from '../pages/dashboard/AllDashboard'
import MyDashboard from '../pages/dashboard/MyDashboard'
import Calendar from '../pages/calendar/Calendar'
import Support from '../pages/administration/Support'
import NotificationSettings from '../pages/administration/NotificationSettings'
import Login from '../pages/login/Login'
import NotFound from '../pages/NotFound'

const routes = [
    {
      path: 'okr',
      element: <LayoutComplete />,
      children: [
        { path: 'allDashboard', element: <AllDashboard /> },
        { path: 'myDashboard', element: <MyDashboard /> },
        { path: 'calendar', element: <Calendar /> },
        { path: 'support', element: <Support /> },
        { path: 'settings', element: <NotificationSettings /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: '/',
      element: <LayoutSimple />,
      children: [
        { path: 'login', element: <Login /> },        
        { path: '404', element: <NotFound /> },        
        { path: '*', element: <Navigate to="/404" /> }
      ]
    }
  ];
  
  export default routes;

