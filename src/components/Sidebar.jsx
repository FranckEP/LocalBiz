import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import '../styles/sidebar.css'
import { Link, Outlet} from 'react-router-dom'


function Sidebar(){
    return (
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='navbar col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column'>
                    <div>
                        <Link className='text-decoration-none text-white d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2' to='/dashboard'>
                            <i className='bi bi-kanban fs-3'></i>
                            <span className='ms-3 fs-4 d-none d-sm-inline'>LocalBiz</span>
                        </Link>
                        <hr className='text-secondary' />
                        <ul className='nav nav-pills flex-column'>
                            <li className='nav-item text-white fs-4'>
                                <Link className='nav-link text-white fs-5' aria-current='page' to='/dashboard'>
                                    <i className='bi bi-speedometer2'></i>
                                    <span className='ms-3 d-none d-sm-inline'>Dashboard</span>
                                </Link>
                            </li>
                            <li className='nav-item text-white fs-4'>
                                <Link className='nav-link text-white fs-5' aria-current='page' to='/sales'>
                                    <i className='bi bi-cart'></i>
                                    <span className='ms-3 d-none d-sm-inline'>Sales</span>
                                </Link>
                            </li>
                            <li className='nav-item text-white fs-4'>
                                <Link className='nav-link text-white fs-5' aria-current='page' to='/products'>
                                    <i className='bi bi-grid'></i>
                                    <span className='ms-3 d-none d-sm-inline'>Products</span>
                                </Link>
                            </li>
                            <li className='nav-item text-white fs-4'>
                                <Link className='nav-link text-white fs-5' aria-current='page' to='/customers'>
                                    <i className='bi bi-people'></i>
                                    <span className='ms-3 d-none d-sm-inline'>Customers</span>
                                </Link>
                            </li>
                            <li className='nav-item text-white fs-4'>
                                <Link className='nav-link text-white fs-5' aria-current='page' to='/providers'>
                                    <i className='bi bi-person-badge'></i>
                                    <span className='ms-3 d-none d-sm-inline'>Providers</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='dropup open'>
                        <a className='text-decoration-none text-white dropdown-toggle p-3' type='button' id='triggerId' data-bs-toggle="dropdown" aria-expanded='false'>
                            <i className='bi bi-person-circle'></i> <span className='ms-2 d-none d-sm-inline'>Profile</span>
                        </a>
                        <div className='dropdown-menu' aria-labelledby='triggerId'>
                            <a className='dropdown-item' href="#">Settings</a>
                            <a className='dropdown-item' href="#">Log Out</a>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <Outlet />
                </div>
            </div>
        </div>
        </>
    );
}

export default Sidebar;