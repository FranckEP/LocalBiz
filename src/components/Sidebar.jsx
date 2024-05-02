import React from 'react'
import { 
    BiBookAlt, 
    BiHome, 
    BiSolidUniversalAccess, 
    BiSolidGroup, 
    BiCart, 
    BiBasket,  
} from 'react-icons/bi';
import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <div className="menu">
        <div className="logo">
            <BiBookAlt className='logo-icon'/>
            <h2>LocalBiz</h2>
        </div>

        <div className="menu--list">
            <a href="#" className="item">
                <BiHome className="icon"/>
                Dashboard
            </a>
        </div>
        <div className="menu--list">
            <a href="#" className="item">
                <BiBasket className="icon"/>
                Productos
            </a>
        </div><div className="menu--list">
            <a href="#" className="item">
                <BiCart className="icon"/>
                Ventas
            </a>
        </div><div className="menu--list">
            <a href="#" className="item">
                <BiSolidGroup className="icon"/>
                Clientes
            </a>
        </div><div className="menu--list">
            <a href="#" className="item">
                <BiSolidUniversalAccess className="icon"/>
                Proveedores
            </a>
        </div>
    </div>
  )
}

export default Sidebar