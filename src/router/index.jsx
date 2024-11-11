import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Error403 from '@/views/403'
import Error404 from '@/views/404'
import Layout from '@/layout'
import AuthLoader from './AuthLoader'
import { lazyLoad } from './LazyLoad'

export const router = [
  {
    path: '/',
    element: <Navigate to='/homepage' />
  },
  // {
  //   path: '/login',
  //   element: <Login />
  // },
  {
    id: 'layout',
    element: <Layout />,
    // loader: AuthLoader,
    children: [
      {
        path: '/welcome',
        element: lazyLoad(React.lazy(() => import('@/views/welcome')))
      },
      {
        path: '/homepage',
        element: lazyLoad(React.lazy(() => import('@/views/homepage')))
      },
      {
        path: '/todo',
        element: lazyLoad(React.lazy(() => import('@/views/todo')))
      },
      {
        path: '/config',
        element: lazyLoad(React.lazy(() => import('@/views/config')))
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '/403',
    element: <Error403 />
  }
]

export default createBrowserRouter(router)
