import React, { useEffect, useRef } from 'react';
import Logo from '../assets/logo.png';
import { Link, useLocation } from "react-router-dom";


export const Header = () => {
    const { pathname } = useLocation();
    const closeRef = useRef(null)
    useEffect(() => {
        return () => {
            closeRef.current.click();
        }
    }, [pathname])

    return (
        <>
            <div class="navigation-wrap bg-white start-header start-style">
                <div class="">
                    <div class="row">
                        <div class="col-12">
                            <nav class="navbar navbar-expand-md navbar-light px-xl-5 px-3">
                                <Link class="navbar-brand me-lg-5" to={'/'}><img src={Logo} alt="MediaChapter" width="136" /></Link>
                                <button class="navbar-toggler" ref={closeRef} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" >
                                    <span class="navbar-toggler-icon"></span>
                                </button>


                                <div class="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto py-4 py-md-0 gap-3">
                                        <li class={`nav-item pl-4 pl-md-0 ml-0 ml-md-4 ${pathname === '/' && "active"}`}>
                                            <Link class={`nav-link`} to='/'>Home</Link>
                                        </li>
                                        <li class={`nav-item pl-4 pl-md-0 ml-0 ml-md-4 ${pathname === '/About' && "active"}`}>
                                            <Link class={`nav-link`} to="/About">About</Link>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                                            <ul class="dropdown-menu">
                                                <li><Link class="dropdown-item" to={'/graphic-design'}>Graphics Design</Link></li>
                                                <li><Link class="dropdown-item" to={'/web-development'}>Web Development</Link></li>
                                                <li><Link class="dropdown-item" to={'/seo'}>SEO</Link></li>
                                                <li><Link class="dropdown-item" to={'/digital-marketing'}>Digital Marketing</Link></li>
                                                <li><Link class="dropdown-item" to={'/content-writing'}>Content Writing</Link></li>
                                            </ul>
                                        </li>

                                        <li class={`nav-item pl-4 pl-md-0 ml-0 ml-md-4 ${pathname === '/Portfolio' && "active"}`}>
                                            <Link class={`nav-link`} to={'/Portfolio'}>Portfolio</Link>
                                        </li>
                                        <li class={`nav-item pl-4 pl-md-0 ml-0 ml-md-4 ${pathname === '/Blog' && "active"}`}>
                                            <Link class={`nav-link`} to={'/Blog'}>Blog</Link>
                                        </li>
                                        <li class={`nav-item pl-4 pl-md-0 ml-0 ml-md-4 ${pathname === '/Contact' && "active"}`}>
                                            <Link class={`nav-link`} to={'/Contact'}>Contact</Link>
                                        </li>
                                        <li class={`nav-item pl-4 pl-md-0 mx-lg-4 mx-md-3`}>
                                            <i class="nectar-menu-icon fa fa-phone"></i>
                                            <a class={`nav-link`} href="tel:+12483464854">+1-248-346-4854</a>
                                        </li>
                                    </ul>
                                    <div>
                                        <button className="btn btn-main">get a quote</button>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
