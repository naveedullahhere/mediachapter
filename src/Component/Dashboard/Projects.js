
import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { Sidebar } from './Sidebar'
import { Link, useNavigate } from 'react-router-dom';

export const Projects = () => {
    const { isUserLogin, setIsUserLogin, URL, setCookieinLocal, setUserName } = useContext(AppContext);
    let navigate = useNavigate();
    isUserLogin === false && navigate('/login');
    useEffect(() => {
        return () => {
            isUserLogin === false && navigate('/login');
        }
    }, [isUserLogin])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12"><Sidebar /></div>
                    <div className="col-md-8 col-12">dess</div>
                </div>
            </div>
        </div>
    )
}
