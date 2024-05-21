import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import '../styles/sidebar.css'
import { Link, Outlet} from 'react-router-dom'


function Sidebar({setUser}){
    const handleLogout = ()=>{
        setUser([]);
    }
    return (
        <>
        <div className='container-fluid '>
            <div className='row'>
                <div className='navbar col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column '>
                    <div>
                        <Link className='text-decoration-none text-white d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2' aria-current='page' to='/dashboard'>
                            <i className='bi bi-kanban fs-5'></i>
                            <span className='ms-3 fs-4 d-none d-sm-inline'>LocalBiz</span>
                        </Link>
                        <hr className='text-white border-3 mt-2' />
                        <ul className='nav nav-pills flex-column mt-3'>
                            <li className='nav-item text-white fs-4'>
                                <Link activeClassName='active' className='nav-link text-white fs-5' aria-current='page' to='/dashboard'>
                                    <i className='bi bi-speedometer2'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                                </Link>
                            </li>
                            <li className='nav-item text-white fs-4'>
                                <Link activeClassName='active' className='nav-link text-white fs-5' aria-current='page' to='/sales'>
                                    <i className='bi bi-cart'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Ventas</span>
                                </Link>
                            </li>
                            <li className='nav-item text-white fs-4'>
                                <Link activeClassName='active' className='nav-link text-white fs-5' aria-current='page' to='/products'>
                                    <i className='bi bi-grid'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Productos</span>
                                </Link>
                            </li>
                            <li className='nav-item text-white fs-4'>
                                <Link activeClassName='active' className='nav-link text-white fs-5' aria-current='page' to='/customers'>
                                    <i className='bi bi-people'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Clientes</span>
                                </Link>
                            </li>
                            <li className='nav-item text-white fs-4'>
                                <Link activeClassName='active' className='nav-link text-white fs-5' aria-current='page' to='/providers'>
                                    <i className='bi bi-person-badge'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Proveedores</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='dropup open'>
                        <a className='text-decoration-none text-white dropdown-toggle p-3  fs-5' type='button' id='triggerId' data-bs-toggle="dropdown" aria-expanded='false'>
                            <i className='bi bi-person-circle'></i> <span className='ms-2 d-none d-sm-inline'>Profile</span>
                        </a>
                        <div className='dropdown-menu' aria-labelledby='triggerId'>
                            <Link className='dropdown-item' aria-current='page' to='/settings'>
                                <i className='bi bi-gear-wide-connected ms-2 fs-5'></i>
                                <span className='ms-2 d-none d-sm-inline fs-5'>Ajustes</span>
                            </Link>
                            <Link className='dropdown-item' aria-current='page' onClick={handleLogout}>
                                <i className='bi bi-box-arrow-in-left ms-2 fs-5'></i>
                                <span className='ms-2 d-none d-sm-inline fs-5'>Log Out</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col outlet">
                  <Outlet />
                </div>
            </div>
        </div>
        </>
    );
}

export default Sidebar;