import React from 'react';
import Logo from '../assets/logo.png';

export const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light" >
                <div class="container">
                    <a class="navbar-brand me-5" href="#"><img src={Logo} alt="MediaChapter" width="136" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navToggler" aria-controls="navToggler" >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-between" id="navToggler">
                        <ul class="navbar-nav  mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Graphics Design</a></li>
                                    <li><a class="dropdown-item" href="#">Web Development</a></li>
                                    <li><a class="dropdown-item" href="#">SEO</a></li>
                                    <li><a class="dropdown-item" href="#">Digital Marketing</a></li>
                                    <li><a class="dropdown-item" href="#">Content Writing</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
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
