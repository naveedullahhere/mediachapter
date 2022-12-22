
import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';

export const Sidebar = ({ pageid }) => {
    const { isUserLogin, setIsUserLogin, URL, setCookieinLocal, userName } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);

    let navigate = useNavigate();
    useEffect(() => {
        return () => {
            isUserLogin === false && navigate('/login');
        }
    }, [isUserLogin]);


    const Logout = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsUserLogin(false);
            setCookieinLocal("USER", "");
        }, 2000);
    }

    return (
        <>
            {/* <Link to={'/my-account'}>My Account</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/invoices'}>Invoices</Link> */}

            <div class="sidebar active">
                <div class="logo_content">
                    <div class="logo">
                        <i class='bx bxl-c-plus-plus' style={{ "fontSize": "30px" }}></i>
                        <div class="heading fs-4" style={{ "marginLeft": "5px" }}>{userName}</div>
                    </div>
                    <i class='bx bx-menu-alt-right' id="btn" style={{ "fontSize": "25px" }}></i>
                </div>
                <ul class="nav_list ps-0 mt-0">
                    <li>
                        <Link className={`${pageid === "account" && "active"}`} to={'/my-account'}>
                            <i class='fa fa-user-circle'></i>
                            <span class="link_names">My Account</span>
                        </Link>
                        <span class="tooltip">My Account</span>
                    </li>
                    <li>
                        <Link to={'/projects'} className={`${pageid === "projects" && "active"}`}>
                            <i class='fa fa-database' ></i>
                            <span class="link_names">Projects</span>
                        </Link>
                        <span class="tooltip">Projects</span>
                    </li>
                    <li>
                        <Link to={'/invoices'} className={`${pageid === "invoice" && "active"}`}>
                            <i class='fa fa-file-invoice' ></i>
                            <span class="link_names">Invoices</span>
                        </Link>
                        <span class="tooltip">Invoices</span>
                    </li>
                    <li>
                        <a href='#' onClick={Logout}>
                            {isLoading ?
                                <div className="spinner d-flex justify-content-center align-items-center">
                                    <div class="spinner-border" style={{ "float": "right" }} role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                :
                                <i class='fa fa-power-off' ></i>
                            }
                            <span class="link_names">Logout</span>
                        </a>
                        <span class="tooltip">Logout</span>
                    </li>
                </ul>
            </div>

        </>
    )
}
