import Logo from '../assets/logof.png';
import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from "react-hot-toast";
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const { AppName, setTitle, URL } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        setIsLoading(true)

        data = JSON.stringify(data);
        console.log(data);
        fetch(`${URL}api/newsletter-subscribe`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    toast.success(json.message);
                }
                else {
                    toast.error(json.message);
                }
                setIsLoading(false);

            }).catch(err => {
                toast.error("Something Went Wrong!");
                setIsLoading(false);
            })
    };
    const userid = 1;
    return (
        <footer class="pt-5">
            <div class="container py-md-5">
                <div class="row">
                    <div class="col-md-5 my-md-0 my-3">
                        <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <img src={Logo} className={'w-75'} alt="" />
                        </a>
                        <p className="para-sm">MediaChapter is a team of dedicated designers, developers, content creators, SEO specialists, digital marketers, and other experts who share a common passion for great brands</p>
                    </div>

                    <div class="col-md-2 my-md-0 my-3">
                        <h5>SITE MAP</h5>
                        <ul class="nav flex-column mt-3">
                            <li class="nav-item mb-2"><Link to="about" class="nav-link p-0 para-sm">ABOUT</Link></li>
                            <li class="nav-item mb-2"><Link to="portfolio" class="nav-link p-0 para-sm">PORTFOLIO</Link></li>
                            <li class="nav-item mb-2"><Link to="blog" class="nav-link p-0 para-sm">BLOGS</Link></li>
                            <li class="nav-item mb-2"><Link to="contact" class="nav-link p-0 para-sm">CONTACT</Link></li>
                        </ul>
                    </div>

                    <div class="col-md-2 my-md-0 my-3">
                        <h5>OUR POLICIES</h5>
                        <ul class="nav flex-column mt-3">
                            <li class="nav-item mb-2"><Link to="/privacy-policy" class="nav-link p-0 para-sm">Privacy Policy</Link></li>
                            <li class="nav-item mb-2"><Link to="/terms-conditions" class="nav-link p-0 para-sm">Terms & Condition</Link></li>

                        </ul>
                    </div>

                    <div class="col-md-3 my-md-0 my-3">
                        <h5>Get Our Brochure
                        </h5>
                        <div class="d-flex w-100 gap-2 flex-column mt-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label for="newsletter1" class="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" class={`form-control shadow-none text-dark border-0 py-2 ${errors.email && "form-control is-invalid  text-dark"}`} {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email address" />
                                <input type="hidden" name="user_id" value={userid} />

                                <button class="btn btn-main w-100" type="submit">
                                    Subscribe
                                    {isLoading &&
                                        <div class="spinner-border me-5" style={{ "float": "right" }} role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    }
                                </button>
                                {errors.email && <span className='para-sm text-white'>Please Enter a Valid Email</span>}

                            </form>
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
