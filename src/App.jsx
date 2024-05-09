import React from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import Customer from './components/CustomersV/Customer'
import Dashboard from './components/DashBoardV/Dashboard'
import Sales from './components/SalesV/Sales'
import Products from './components/ProductsV/Products'
import ProvidersV from './components/ProvidersV/ProvidersV'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'

const AppLayout = () =>(
  <div className="app-container">
  <div className="sidebar">
    <Sidebar />
  </div>
  <div className="outlet">
    <Outlet />
  </div>
</div>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
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

const App = () => {
  return (
      <RouterProvider router={router}/>
  )
}

export default App