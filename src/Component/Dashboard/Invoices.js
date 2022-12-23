
import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';
import { Sidebar } from './Sidebar'
import { Link, useNavigate } from 'react-router-dom';


export const Invoices = () => {
    const { isUserLogin, setIsUserLogin, URL, setCookieinLocal, setUserName } = useContext(AppContext);
    let navigate = useNavigate();
    isUserLogin === false && navigate('/login');

    useEffect(() => {
        return () => {
            !isUserLogin && navigate('/login');
        }
    }, [isUserLogin])

    return (
        <div>
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-12"><Sidebar pageid={'invoice'} /></div>
                    <motion.div className="col-xl-9 col-lg-9 col-md-8 col-12" initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
                        <div>invoices</div>
                    </motion.div> 

                </div>
            </div>
        </div>
    )
}
