import React from 'react'
import Sidebar from './pages/Sidebar'
import './App.css'
import Customer from './pages/CustomersV/Customer'
import Dashboard from './pages/DashBoardV/Dashboard'
import Sales from './pages/SalesV/Sales'
import Products from './pages/ProductsV/Products'
import ProvidersV from './pages/ProvidersV/ProvidersV'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <Sidebar />,
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