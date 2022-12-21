
import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext'; 
import { Link, useNavigate } from 'react-router-dom';

export const Sidebar = () => {
    const { isUserLogin, setIsUserLogin, URL, setCookieinLocal, setUserName } = useContext(AppContext);
    let navigate = useNavigate();
    useEffect(() => {
        return () => {
            isUserLogin === false && navigate('/login'); 
        }
    }, [isUserLogin])
    return (
        <>
            <Link to={'/my-account'}>My Account</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/invoices'}>Invoices</Link>
        </>
    )
}
