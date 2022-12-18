import React from 'react';
import Logo from '../assets/logo.png';
import { Link, useLocation } from "react-router-dom";


export const Header = () => {
    const { pathname } = useLocation();
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light" >
                <div class="container">
                    <Link class="navbar-brand me-5" to={'/'}><img src={Logo} alt="MediaChapter" width="136" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navToggler" aria-controls="navToggler" >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-between" id="navToggler">
                        <ul class="navbar-nav  mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class={`nav-link ${pathname === '/' && "active"}`} aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${pathname === '/about' && "active"}`} to={'/about'}>About</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to={'/graphic-design'}>Graphics Design</Link></li>
                                    <li><Link class="dropdown-item" to={'/web-development'}>Web Development</Link></li>
                                    <li><Link class="dropdown-item" to={'/'}>SEO</Link></li>
                                    <li><Link class="dropdown-item" to={'/'}>Digital Marketing</Link></li>
                                    <li><Link class="dropdown-item" to={'/'}>Content Writing</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${pathname === '/Portfolio' && "active"}`} to={'/Portfolio'}>Portfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${pathname === '/Blog' && "active"}`} to={'/Blog'}>Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${pathname === '/Contact' && "active"}`} to={'/Contact'}>Contact</Link>
                            </li>
                        </ul>
                        <div role="Quote text-white">
                            <button className="btn btn-main">get a quote</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
