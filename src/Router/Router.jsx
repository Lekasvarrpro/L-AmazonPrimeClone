import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Home from '../Home'
import Movies from '../Components/NavbarComponent/Pages/Movies/Movies'
import TvShows from '../Components/NavbarComponent/Pages/TV/TvShows'
import LiveTv from '../Components/NavbarComponent/Pages/Live/LiveTv'
import Join from '../Components/NavbarComponent/Pages/Join'
import Subscriptions from '../Components/NavbarComponent/Pages/Subscriptions/Subscriptions'

const allroutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/movies', element: <Movies /> },
      { path: '/tvshows', element: <TvShows /> },
      { path: '/livetv', element: <LiveTv /> },
      {path:'/subscriptions',element:<Subscriptions/>}
      
    ]
  },
  { path: '/join', element: <Join /> },
])

const Router = () => {
  return <RouterProvider router={allroutes} />
}

export default Router
