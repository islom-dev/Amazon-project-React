import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './section/home.jsx'
import Layout from './Layout/Layout.jsx'
import Registry from './section/Registry.jsx'
import GiftCards from './section/giftCards.jsx'
import Cell from './section/sell.jsx'
import TodayDeals from './section/todayDeals.jsx'
import Cart from './section/Cart.jsx'
import Costum from './section/Costum.jsx'




const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      
      children:[
        {
          index:true,
          element:<Home />
        },
        {
          path:"/todaydeals",
          element:<TodayDeals />
        },
        {
          path:"/giftCards",
          element:<GiftCards />
        },
        {
          path:"/cell",
          element:<Cell />
        },
        {
          path:"/costumer",
          element:<Costum />
        },
        {
          path:"/cart",
          element:<Cart />
        },
        {
          path:"/registry",
          element:<Registry />
        },
      
      ]
    }
  ])
  return (<>
    <RouterProvider router={router} />
  </>)
}

export default App