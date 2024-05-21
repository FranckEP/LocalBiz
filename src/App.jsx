import Sidebar from './pages/Sidebar'
import './App.css'
import Customer from './pages/CustomersV/Customer'
import Dashboard from './pages/DashBoardV/Dashboard'
import Sales from './pages/SalesV/Sales'
import Products from './pages/ProductsV/Products'
import ProvidersV from './pages/ProvidersV/ProvidersV'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Login from './/components/Login'
import { useState, useEffect } from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';




const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ user, setUser] = useState([]);
  const router = createBrowserRouter([
    {
      element: <Sidebar setUser={setUser} />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/sales', element: <Sales /> },
      {path: '/cart', element: <Cart />},
        { path: '/products', element: <Products /> },
        { path: '/customers', element: <Customer /> },
        { path: '/providers', element: <ProvidersV /> },
        { path: '*', element: <div>Not Found</div>}
      ]
    }
  ]
  );

  useEffect(()=>{
    const DataFetch = () =>{
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    };
    DataFetch();
  }, []);

  return (
    <> 
    <PrimeReactProvider>
    {
      !user.length > 0
      ? <Login setUser={setUser}/>
      : <RouterProvider router={router} />
    }
    </PrimeReactProvider>
    </>
      
  )
}


export default App