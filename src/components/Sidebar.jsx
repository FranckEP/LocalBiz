// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import './Sidebar.css'


function Sidebar(){
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='bg-dark col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column'>
                    <div>
                        <a className='text-decoration-none text-white d-non d-sm-inline d-flex align-itemcenter ms-3 mt-2' href="#">
                            <span className='ms-1 fs-4 d-none d-sm-inline'>LocalBiz</span>
                        </a>
                        <hr className='text-secondary' />
                        <ul className='nav nav-pills flex-column'>
                            <li className='nav-item text-white fs-4'>
                                <a className='nav-link text-white fs-5' aria-current='page' href="#">
                                    <i className='bi bi-speedometer2'></i>
                                    <span className='ms-3 d-non d-none d-sm-inline'>Dashboard</span>
                                </a>
                            </li>
                            <li className='nav-item text-white fs-4'>
                                <a className='nav-link text-white fs-5' aria-current='page' href="#">
                                    <i className='bi bi-table'></i>
                                    <span className='ms-3 d-none d-sm-inline'>Orders</span>
                                </a>
                            </li>
                            <li className='nav-item text-white fs-4'>
                                <a className='nav-link text-white fs-5' aria-current='page' href="#">
                                    <i className='bi bi-grid'></i>
                                    <span className='ms-3 d-none d-sm-inline'>Products</span>
                                </a>
                            </li>
                            <li className='nav-item text-white fs-4'>
                                <a className='nav-link text-white fs-5' aria-current='page' href="#">
                                    <i className='bi bi-person-circle'></i>
                                    <span className='ms-3 d-none d-sm-inline'>Customers</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className='dropdown open'>
                        <a className='text-decoration-none text-white dropdown-toggle p-3' type='button' id='triggerId' data-bs-toggle="dropdown" aria-expanded='false'>
                            <i className='bi bi-person-circle'></i> <span className='ms-2 d-none d-sm-inline'>LocalBiz</span>
                        </a>
                    </div>
                    <div className='dropdown-menu' aria-labelledby='triggerId'>
                        <a className='dropdown-item' href="">action</a>
                        <a className='dropdown-item' href="">action</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar