import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './components/Layout/Layout.jsx';
import Home from './Pages/Home/Home.jsx'
import Timeline from './Pages/Timeline/Timeline.jsx';
import Stats from './Pages/Stats/Stats.jsx';
import Error from './Err/Error.jsx';
import FriendDetails from './Pages/FriendDetails/FriendDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component : Layout,
    children : [{
      index : true,
      element : <Home></Home>
    },
    {
      path : "/timeline",
      element : <Timeline></Timeline>
    },
    {
      path : "/stats",
      element : <Stats></Stats>
    },
    {
      path : "friends/:id",
      element : <FriendDetails></FriendDetails>,
      loader : () => fetch("friends.json").then(res => res.json()),
    }
  ],
  errorElement : <Error></Error>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}></RouterProvider>
  </StrictMode>,
)
