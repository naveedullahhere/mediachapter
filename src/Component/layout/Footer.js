import Logo from '../assets/logof.png';
import React from 'react';

export const Footer = () => {
    return (
        <footer class="pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-5">
                        <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <img src={Logo} className={'w-75'} alt="" />
                        </a>
                        <p className="para-sm">MediaChapter is a team of dedicated designers, developers, content creators, SEO specialists, digital marketers, and other experts who share a common passion for great brands</p>
                    </div>

                    <div class="col-2">
                        <h5>SITE MAP</h5>
                        <ul class="nav flex-column mt-3">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 para-sm">ABOUT</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 para-sm">PORTFOLIO</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 para-sm">BLOGS</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 para-sm">CONTACT</a></li>
                        </ul>
                    </div>





                    <div class="col-2">
                        <h5>OUR POLICIES</h5>
                        <ul class="nav flex-column mt-3">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 para-sm">Privacy Policy</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 para-sm">Terms & Condition</a></li>

                        </ul>
                    </div>

                    <div class="col-3">
                        <form>
                            <h5>Get Our Brochure
                            </h5>
                            <div class="d-flex w-100 gap-2 flex-column mt-3">
                                <label for="newsletter1" class="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" class="form-control shadow-none border-0 py-2" placeholder="Email address" />
                                <button class="btn btn-main w-100" type="button">Subscribe</button>
                            </div>
                            <h5 className='my-3'>Follow US
                            </h5>
                            <div className="footericons d-flex gap-2 align-items-center">
                                <a href='#' className="ico"><i class="fa-brands fa-facebook"></i></a>
                                <a href='#' className="ico"><i class="fa-brands fa-twitter"></i></a>
                                <a href='#' className="ico"><i class="fa-brands fa-instagram"></i></a>
                                <a href='#' className="ico"><i class="fa-brands fa-pinterest"></i></a>
                                <a href='#' className="ico"><i class="fa-brands fa-linkedin"></i></a>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div class="pt-3 mt-4 border-top para-xs text-center bg-white">
                <p className='mb-0 pb-3 text-black'>Media Chapter is a registered trademark. Media Chapter is registered in Wyoming, United States. Company no: 45999-0038.
                </p>
            </div>
        </footer>
    )
}
