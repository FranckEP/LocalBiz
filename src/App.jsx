import React from 'react'
import Sidebar from './pages/Sidebar'
import './App.css'
import Customer from './pages/CustomersV/Customer'
import Dashboard from './pages/DashBoardV/Dashboard'
import Sales from './pages/SalesV/Sales'
import Products from './pages/ProductsV/Products'
import ProvidersV from './pages/ProvidersV/ProvidersV'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './/components/Login'
import { useState } from 'react'




const App = () => {
  
  const [ user, setUser] = useState([]);
  const router = createBrowserRouter([
    {
      element: <Sidebar setUser={setUser} />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/sales', element: <Sales /> },
        { path: '/products', element: <Products /> },
        { path: '/customers', element: <Customer /> },
        { path: '/providers', element: <ProvidersV /> },
        { path: '*', element: <div>Not Found</div>}
      ]
    }
  ]
  );
  return (
    <> 
    {
      !user.length > 0
      ? <Login setUser={setUser}/>
      : <RouterProvider router={router} />
    }
    
    </>
      
  )
}

export default App