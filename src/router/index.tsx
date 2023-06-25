// src/routeConfig.js
import Login from '../views/login';
import About from '../views/about';
import NotFound from '../views/NotFound';
import { Navigate } from 'react-router-dom';


const routeConfig = [
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/',
    element: <Navigate to='/login'/>
  },
  {
    element: <NotFound/>,
  },
];

export default routeConfig;