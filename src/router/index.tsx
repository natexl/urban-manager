// src/routeConfig.js
import Login from '../views/login';
import About from '../views/about';
import Home from '../views/home'
import NotFound from '../views/NotFound';
import Manager from '@/views/manager';
import { Navigate } from 'react-router-dom';
import NoticeInterface from '@/views/manager/notice';
import ShapeEditorInterface from '@/views/manager/shapeEditor';
import UsersInterface from '@/views/manager/users';
import PermissionInterface from '@/views/manager/permission';
import SystemOutlineInterface from '@/views/manager/systemOutline';
import TransactionInterface from '@/views/manager/transaction';


const routeConfig = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/manager',
    element: <Manager />,
    children: [
      { path: 'notice', element: <NoticeInterface />},
      { path: 'edit', element: <ShapeEditorInterface /> },
      { path: 'users', element: <UsersInterface /> },
      { path: 'permission', element: <PermissionInterface /> },
      { path: 'system', element: <SystemOutlineInterface /> },
      { path: 'transaction', element: <TransactionInterface /> },
      { path: '*', element: <NotFound /> },
    ]
  },
  {
    path: '/',
    element: <Navigate to='/login' />
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routeConfig;